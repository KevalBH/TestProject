import { Col, DatePicker, Image, Row, Typography, Select } from "antd";
import moment from "moment";
import styled from "styled-components";

import arrow from "../../../../assets/Book Table/arrow.svg";
import useFetch from "../../../../hooks/useFetch";
import { URL } from "../../../../config";

const { Title } = Typography;
const { Option } = Select;

const OrderTime = ({
  reservationType,
  reservationTime,
  setReservationTime,
  reservationDate,
  setReservationDate,
  selectedRestaurant,
}) => {
  const { data: timeslots } = useFetch(
    URL +
      "time_slot/search_by_restaurant/" +
      selectedRestaurant +
      "/" +
      reservationType
  );

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Col span={24}>
            <H1>When</H1>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <InputContainer span={24}>
            <Row justify="center" align="middle">
              <Col span={12}>
                <Row justify="start" align="middle">
                  <Col span={22} offset={2}>
                    <H1 size="10px">date</H1>
                  </Col>
                  <Col span={20}>
                    <SelectDate
                      suffixIcon={
                        <Icon src={arrow} preview={false} width={12} />
                      }
                      onChange={(e, dateString) =>
                        setReservationDate(dateString)
                      }
                      value={
                        reservationDate && moment(reservationDate, "YYYY-MM-DD")
                      }
                      format="YYYY-MM-DD"
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row justify="start" align="middle">
                  <Col span={22} offset={2}>
                    <H1 size="10px">hour</H1>
                  </Col>
                  <Col span={20}>
                    <SelectType
                      placeholder="select time"
                      onChange={(e) => setReservationTime(e)}
                      value={reservationTime}
                    >
                      {timeslots &&
                        timeslots.timeSlot[0].timeSlots.map((time, index) => (
                          <Option value={time} key={index}>
                            {time}
                          </Option>
                        ))}
                    </SelectType>
                  </Col>
                </Row>
              </Col>
            </Row>
          </InputContainer>
        </Row>
      </Container>
    </Row>
  );
};

export default OrderTime;

const Container = styled(Col)``;

const InputContainer = styled(Col)`
  padding-top: 15%;
  padding-bottom: 15%;
`;

const H1 = styled(Title)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: ${(props) => props.size || "30px"};
    color: #ffffff;
    text-transform: uppercase;
    text-align: left;
  }
`;

const SelectDate = styled(DatePicker)`
  &.ant-picker {
    background: #1b2749;
    border: none;
    border-bottom: 1px solid #ffffff;
    font-family: Montserrat-SemiBold;
    font-size: 20px;
    color: #ffffff;
  }
  &.ant-picker-focused {
    box-shadow: none;
  }
  .ant-picker-input > input {
    color: #ffffff;
  }
`;
const SelectType = styled(Select)`
  &.ant-select .ant-select-selector {
    background: transparent;
    border: none;
    border-bottom: 1px solid #ffffff;
    font-family: Arial-Regular;
    font-size: 18px;
    color: #ffffff;
    text-transform: capitalize;
  }
  &.ant-select .ant-select-arrow {
    color: #ffffff;
  }
  &.ant-select .ant-select-selector .ant-select-focused {
    border: none;
  }
`;

const Icon = styled(Image)`
  margin-top: 50%;
`;

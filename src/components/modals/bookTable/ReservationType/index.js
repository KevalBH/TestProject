import { Col, Row, Select, Typography } from "antd";
import styled from "styled-components";
import useFetch from "../../../../hooks/useFetch";
import { URL } from "../../../../config";

const { Text } = Typography;
const { Option } = Select;

const ReservationType = ({ setReservationType }) => {
  const { data: reservationTypes } = useFetch(URL + "reservation_type");

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Col span={24}>
            <H1>reservation type</H1>
          </Col>
          <Col span={24}>
            <SelectBox
              placeholder="select type of reservation"
              onChange={(e) => setReservationType(e)}
            >
              {reservationTypes &&
                reservationTypes.reservationTypes.result.map(
                  (reservationType) => (
                    <Option
                      value={reservationType.label}
                      key={reservationType._id}
                    >
                      {reservationType.label}
                    </Option>
                  )
                )}
            </SelectBox>
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default ReservationType;

const Container = styled(Col)``;

const H1 = styled(Text)`
  font-family: Montserrat-Medium;
  font-size: 18px;
  color: #ffffff;
  text-transform: capitalize;
`;

const SelectBox = styled(Select)`
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

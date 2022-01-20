import { Col, DatePicker, Row, Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

const DatePick = ({ setDeliveryDate }) => {
  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Col span={24}>
            <H1>date</H1>
          </Col>
          <Col span={24}>
            <DateInput
              onChange={(e) =>
                e &&
                setDeliveryDate(
                  e.toDate().getDate() +
                    "/" +
                    (e.toDate().getMonth() + 1) +
                    "/" +
                    e.toDate().getFullYear()
                )
              }
            />
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default DatePick;

const Container = styled(Col)``;

const H1 = styled(Text)`
  font-family: Montserrat-Medium;
  font-size: 18px;
  color: #ffffff;
  text-transform: capitalize;
`;

const DateInput = styled(DatePicker)`
  background: transparent;
  border: none;
  &.ant-picker .ant-picker-input > input {
    font-family: Arial-Regular;
    font-size: 20px;
    color: #ffffff;
  }
  &.ant-picker-focused {
    box-shadow: none;
  }
  &.ant-picker .ant-picker-suffix {
    color: #ffffff;
    font-size: 25px;
  }
`;

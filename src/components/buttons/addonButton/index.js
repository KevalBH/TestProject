import { Col, Row, Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

const AddOnButton = ({ text, onClick }) => {
  return (
    <Row justify="center" align="middle">
      <Container span={24} onClick={onClick}>
        <H1>{text}</H1>
      </Container>
    </Row>
  );
};

export default AddOnButton;

const Container = styled(Col)`
  background: #f86400;
  box-shadow: 0px 2px 4px #00000029;
  border-radius: 4px;
  padding-top: 3%;
  padding-bottom: 3%;
  text-align: center;
  cursor: pointer;
`;

const H1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: 15px;
    color: #ffffff;
    text-transform: capitalize;
  }
`;

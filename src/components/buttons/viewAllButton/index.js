import { Col, Row, Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

const ViewAllButton = ({ text, onClick }) => {
  return (
    <Row justify="center" align="middle">
      <Container span={24} onClick={onClick}>
        <H1>{text}</H1>
      </Container>
    </Row>
  );
};

export default ViewAllButton;

const Container = styled(Col)`
  cursor: pointer;
`;

const H1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 25px;
    color: #fa7268;
    text-transform: uppercase;
  }
`;

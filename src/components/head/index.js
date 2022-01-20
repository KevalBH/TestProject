import { Col, Row } from "antd";
import styled from "styled-components";
import MainHeader from "./mainHeader";
import TopHeader from "./topHeader";

const Head = () => {
  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Col span={24}>
            <TopHeader />
          </Col>
          <Col span={24}>
            <MainHeader />
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default Head;

const Container = styled(Col)`
  color: #ffffff;
`;

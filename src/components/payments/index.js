import { Col, Row } from "antd";
import styled from "styled-components";

const Payments = () => {
  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Navigation span={10}>choose payments method</Navigation>
          <Tabs span={14}></Tabs>
        </Row>
      </Container>
    </Row>
  );
};

export default Payments;

const Container = styled(Col)``;

const Navigation = styled(Col)`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 15px #00000029;
`;

const Tabs = styled(Col)``;

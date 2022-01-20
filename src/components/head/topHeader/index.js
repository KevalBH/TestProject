import { Col, Row } from "antd";
import styled from "styled-components";
import Contacts from "./contacts";
import SocialButtons from "./SocialButtons";

const TopHeader = () => {
  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Col span={22}>
            <Row justify="space-between" align="middle">
              <Col span={8}>
                <Contacts />
              </Col>
              <Col span={4}>
                <SocialButtons />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default TopHeader;

const Container = styled(Col)`
  background: #ffffff;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
`;

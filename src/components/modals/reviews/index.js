import { Col, Row, Typography } from "antd";
import Head from "../head";

const { Title, Text } = Typography;

const Reviews = () => {
  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Col span={24}>
            <Head text="add review" />
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={24}>
            <H1>restaurantName (ratings)</H1>
          </Col>
          <Col span={24}>
            <P2>toptags</P2>
          </Col>
          <Col span={24}>imagecontainer</Col>
          <Col span={24}>
            <Row justify="center" align="middle">
              <Col span={2}>avatar</Col>
              <Col span={20}>
                <Row justify="center" align="middle">
                  <Col span={24}>
                    <P1>usename</P1>
                  </Col>
                  <Col span={24}>
                    <P3>userReview</P3>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row justify="end" align="middle">
              <Col span={4}>add review button</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default Reviews;

const Container = styled(Col)``;

const H1 = styled(Title)`
  &.ant-typography {
    font-family: Montserrat-Bold;
    font-size: 40px;
    color: #111111;
    text-transform: uppercase;
  }
`;

const P1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 25px;
    color: #22242a;
    text-transform: capitalize;
  }
`;

const P2 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Regular;
    font-size: 25px;
    color: #111111;
    text-transform: capitalize;
  }
`;
const P3 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Regular;
    font-size: 25px;
    color: #9ca0ab;
    text-transform: capitalize;
  }
`;

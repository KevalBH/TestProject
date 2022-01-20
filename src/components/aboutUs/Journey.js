import { Col, Image, Row, Typography } from "antd";
import styled from "styled-components";

import people from "../../assets/AboutUs/group-people-working-out-business-plan-office (1).png";

const { Title, Text } = Typography;

const Journey = () => {
  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="start" align="middle">
          <Col span={12}>
            <Head>OUR JOURNEY</Head>
            <SubHead>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </SubHead>
            <br />
            <br />
            <SubHead>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five.
            </SubHead>
          </Col>
          <Col span={10} offset={1}>
            <Image src={people} preview={false} />
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default Journey;

const Container = styled(Col)`
  text-align: left;
`;

const Head = styled(Title)`
  &.ant-typography {
    font-family: Montserrat-Bold;
    font-size: 41px;
    color: #1b2749;
  }
`;

const SubHead = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Regular;
    font-size: 21px;
    color: #858484;
  }
`;

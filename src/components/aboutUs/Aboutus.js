import { Col, Image, Row, Typography } from "antd";
import styled from "styled-components";

import resta from "../../assets/AboutUs/albert-YYZU0Lo1uXE-unsplash (1).png";
import innerBorder from "../../assets/AboutUs/innerBorder.svg";

const { Title, Text } = Typography;

const Aboutus = () => {
  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Col span={24}>
            <Head>ABOUT US</Head>
          </Col>
          <Col span={24}>
            <SubHead>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </SubHead>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={24}>
            <Image src={resta} preview={false} />
          </Col>
          <BorderContainer span={23}>
            <Image src={innerBorder} preview={false} />
          </BorderContainer>
          <TextConatiner span={24}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining esse- ntially unchanged. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining esse- ntially unchanged.
          </TextConatiner>
        </Row>
      </Container>
    </Row>
  );
};

export default Aboutus;

const Container = styled(Col)`
  text-align: left;
`;

const BorderContainer = styled(Col)`
  margin-top: -47.5%;
`;

const TextConatiner = styled(Col)`
  font-family: Montserrat-Regular;
  font-size: 21px;
  color: #858484;
  margin-top: 5%;
  margin-bottom: 10%;
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

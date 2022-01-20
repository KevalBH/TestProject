import { Col, Row, Image, Typography } from "antd";
import styled from "styled-components";
import RightArrowIcon from "../../assets/rightArrowIcon.svg";

const { Title, Paragraph } = Typography;

const rightArrow = {
  marginTop: "-27px",
};

const Terms = () => {
  return (
    <Row justify="center" align="middle" style={{ backgroundColor: "#E4E4E4" }}>
      <Container span={22}>
        <Head>TERMS</Head>
        <Row justify="center" align="middle">
          <Col span={1}>
            <Image src={RightArrowIcon} style={{ ...rightArrow }} />
          </Col>
          <Col span={23}>
            <SubHead>Lorem Ipsum is simply</SubHead>
          </Col>
        </Row>
        <Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining esse- ntially unchanged.
        </Body>
        <br />
        <SubBody>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions
        </SubBody>
        <br />
        <Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining esse- ntially unchanged.
        </Body>
        <br />
        <ul>
          <li>
            <Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Body>
          </li>
          <li>
            <Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </Body>
          </li>
        </ul>
        <Row justify="center" align="middle">
          <Col span={1}>
            <Image src={RightArrowIcon} style={{ ...rightArrow }} />
          </Col>
          <Col span={23}>
            <SubHead>Lorem Ipsum is simply</SubHead>
          </Col>
        </Row>
        <Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining esse- ntially unchanged.
        </Body>
        <Row justify="center" align="middle">
          <Col span={1}>
            <Image src={RightArrowIcon} style={{ ...rightArrow }} />
          </Col>
          <Col span={23}>
            <SubHead>Lorem Ipsum is simply</SubHead>
          </Col>
        </Row>
        <Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining esse- ntially unchanged.
        </Body>
        <br />
        <Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining esse- ntially unchanged.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining esse- ntially unchanged.
        </Body>
        <br />
        <Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining esse- ntially unchanged.
        </Body>
        <br />
        <ul>
          <li>
            <Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Body>
          </li>
          <li>
            <Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </Body>
          </li>
        </ul>
        <Row justify="center" align="middle">
          <Col span={1}>
            <Image src={RightArrowIcon} style={{ ...rightArrow }} />
          </Col>
          <Col span={23}>
            <SubHead>Lorem Ipsum is simply</SubHead>
          </Col>
        </Row>
        <Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining esse- ntially unchanged.
        </Body>
      </Container>
    </Row>
  );
};

export default Terms;

const Container = styled(Col)`
  background: #ffffff;
  padding: 5% 2% 5% 2%;
  text-align: left;
`;

const Head = styled(Title)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: 51px;
    color: #1b2749;
  }
`;
const SubHead = styled(Title)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: 28px;
    color: #22242a;
  }
`;

const Body = styled(Paragraph)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 18px;
    color: #858484;
  }
`;
const SubBody = styled(Paragraph)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: 20px;
    color: #000000;
    margin: 2px 0 2px 0;
  }
`;

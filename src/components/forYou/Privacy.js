import { Col, Row, Image, Typography } from "antd";
import styled from "styled-components";
import RightArrowIcon from "../../assets/rightArrowIcon.svg";

const { Title, Paragraph } = Typography;

const Privacy = () => {
  return (
    <Row justify="center" align="middle" style={{ backgroundColor: "#E4E4E4" }}>
      <Container span={22}>
        <Head>PRIVACY POLICY</Head>
        <Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining esse- ntially unchanged.
        </Body>
        <br />
        <SecondHead>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions
        </SecondHead>
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
            <Image
              src={RightArrowIcon}
              style={{ transform: "rotate(90deg)", marginTop: "-30px" }}
            />
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
            <RightArrow src={RightArrowIcon} />
          </Col>
          <Col span={23}>
            <SubHead>Lorem Ipsum is simply</SubHead>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={1}>
            <RightArrow src={RightArrowIcon} />
          </Col>
          <Col span={23}>
            <SubHead>Lorem Ipsum is simply</SubHead>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={1}>
            <RightArrow src={RightArrowIcon} />
          </Col>
          <Col span={23}>
            <SubHead>Lorem Ipsum is simply</SubHead>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={1}>
            <RightArrow src={RightArrowIcon} />
          </Col>
          <Col span={23}>
            <SubHead>Lorem Ipsum is simply</SubHead>
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default Privacy;

const Container = styled(Col)`
  background-color: #ffffff;
  padding: 5% 2% 5% 2%;
  text-align: left;
`;

const Head = styled(Title)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: 61px;
    color: #1b2749;
  }
`;

const SubHead = styled(Title)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: 32px;
    color: #22242a;
  }
`;

const SecondHead = styled(Paragraph)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: 23px;
    color: #000000;
    margin: 2px 0 2px 0;
  }
`;

const Body = styled(Paragraph)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 17px;
    color: #858484;
  }
`;

const RightArrow = styled(Image)`
  margin-top: -27px;
`;

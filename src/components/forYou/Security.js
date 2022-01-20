import { Col, Image, Row, Typography } from "antd";
import styled from "styled-components";
import headImage from "../../assets/Group 5968.png";

const { Paragraph } = Typography;

const Security = () => {
  return (
    <Row justify="center" align="middle" style={{ backgroundColor: "#E4E4E4" }}>
      <Container span={22}>
        <Row justify="center" align="middle">
          <Col>
            <Image src={headImage} preview={false} />
          </Col>
        </Row>
        <Row justify="center" align="top">
          <Col
            style={{
              backgroundColor: "#FFFFFF",
              padding: "5% 2% 5% 2%",
              marginTop: "-10px",
            }}
          >
            <SubHead>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions
            </SubHead>
            <br />
            <Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining esse- ntially unchanged.
            </Body>
            <br />
            <Body>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions
            </Body>
            <br />
            <Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining esse- ntially unchanged.Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining esse- ntially unchanged.
            </Body>
            <br />
            <Body>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions
            </Body>
            <br />
            <Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining esse- ntially unchanged.
            </Body>
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default Security;

const Container = styled(Col)`
  text-align: left;
`;

const SubHead = styled(Paragraph)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: 20px;
    color: #000000;
    margin: 2px 0 2px 0;
  }
`;

const Body = styled(Paragraph)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 18px;
    color: #858484;
  }
`;

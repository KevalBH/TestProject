import { Col, Row, Image, Typography } from "antd";
import styled from "styled-components";
import RightArrow from "../../assets/rightArrowIcon.svg";

const { Title, Paragraph } = Typography;

const SiteMap = () => {
  const links1 = [
    { title: "Lorem Ipsum is simply dummy" },
    { title: "Lorem Ipsum is" },
    { title: "Lorem Ipsum is simply " },
    { title: "simply dummy" },
    { title: "Lorem Ipsum is simply dummy" },
    { title: "Lorem Ipsum is" },
    { title: "Lorem Ipsum is" },
    { title: "Lorem Ipsum is simply" },
    { title: "Lorem Ipsum" },
    { title: "Lorem Ipsum is simply" },
    { title: "Lorem Ipsum is simply" },
    { title: "Lorem Ipsum is" },
    { title: "simply dummy" },
    { title: "Lorem Ipsum is simply" },
    { title: "Lorem Ipsum is simply" },
    { title: "Lorem Ipsum" },
    { title: "Lorem Ipsum is simply" },
  ];
  const links2 = [
    { title: "Lorem Ipsum is" },
    { title: "simply dummy" },
    { title: "Lorem Ipsum is simply" },
    { title: "Lorem Ipsum is" },
    { title: "Lorem Ipsum is simply" },
    { title: "Lorem Ipsum is" },
    { title: "Lorem Ipsum" },
    { title: "Lorem Ipsum" },
    { title: "Lorem Ipsum" },
    { title: "Lorem Ipsum" },
  ];
  const links3 = [
    { title: "Lorem Ipsum" },
    { title: "Lorem Ipsum is simply" },
    { title: "Lorem Ipsum" },
    { title: "Lorem Ipsum is simply" },
    { title: "Lorem Ipsum" },
    { title: "Lorem Ipsum" },
  ];

  return (
    <Row justify="center" align="middle" style={{ backgroundColor: "#E4E4E4" }}>
      <Conatiner span={22}>
        <Row justify="center" align="middle">
          <Col span={1}>
            <RightArrowIcon src={RightArrow} />
          </Col>
          <Col span={23}>
            <Head>COUNTRY NAME</Head>
          </Col>
        </Row>
        <Row justify="start" align="top">
          <Col span={10}>
            {links1.map((link) => (
              <Body>{link.title}</Body>
            ))}
          </Col>
          <Col span={7}>
            {links2.map((link) => (
              <Body>{link.title}</Body>
            ))}
          </Col>
          <Col span={67}>
            {links3.map((link) => (
              <Body>{link.title}</Body>
            ))}
          </Col>
        </Row>
      </Conatiner>
    </Row>
  );
};

export default SiteMap;

const Conatiner = styled(Col)`
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
const Body = styled(Paragraph)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 18px;
    color: #858484;
  }
`;

const RightArrowIcon = styled(Image)`
  margin-top: -27px;
`;

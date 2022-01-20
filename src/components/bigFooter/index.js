import { Button, Col, Divider, Image, Row, Space, Typography } from "antd";
import styled from "styled-components";
import footerBg from "../../assets/footerBg.png";
import SocialButtons from "../head/topHeader/SocialButtons";
import logoWhite from "../../assets/AboutUs/logoWhite.svg";
import facebookIcon from "../../assets/AboutUs/facebook.svg";
import twitterIcon from "../../assets/AboutUs/twitter.svg";
import instagramIcon from "../../assets/AboutUs/instagram2.svg";
import locationIcon from "../../assets/AboutUs/locationWhite.svg";
import phoneIcon from "../../assets/AboutUs/phoneWhite.svg";
import emailIcon from "../../assets/AboutUs/emailWhite.svg";

import { Link } from "react-router-dom";

const { Text } = Typography;

const BigFooter = () => {
  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Col span={24}>
            <Image src={footerBg} preview={false} />
          </Col>
          <Col span={24}>
            <Row justify="center" align="middle">
              <Col span={20}>
                Copyright © Restaurant Food & Drinks 2021. All Rights Reserved.
              </Col>
              <Col span={4}>
                <SocialButtons />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <ItemContainer span={21}>
            <Row justify="start" align="top">
              <LogoContainer span={5}>
                <Image src={logoWhite} preview={false} />
                <LineDivider />
                <P1>Lorem ipsum is simply dummy text of the printing.</P1>
              </LogoContainer>
              <ExploreContainer span={4} offset={1}>
                <H1>Explore</H1>
                <LineDividerShort />
                <Link to="/">
                  <P1>Home</P1>
                </Link>
                <br />
                <Link to="/aboutus">
                  <P1>About Us</P1>
                </Link>
                <br />
                <Link to="/deals">
                  <P1>Deals</P1>
                </Link>
                <br />
                <Link to="/order">
                  <P1>My order</P1>
                </Link>
                <br />
                <Link to="/profile">
                  <P1>Profile</P1>
                </Link>
                <br />
                <Link to="/byt-points">
                  <P1>BYT Points</P1>
                </Link>
                <br />
              </ExploreContainer>
              <FollowContainer span={4} offset={1}>
                <H1>Follow</H1>
                <LineDividerShort />
                <Space size="small">
                  <ShareButtons shape="circle">
                    <Image src={facebookIcon} preview={false} />
                  </ShareButtons>
                  <ShareButtons shape="circle">
                    <Image src={instagramIcon} preview={false} />
                  </ShareButtons>
                  <ShareButtons shape="circle">
                    <Image src={twitterIcon} preview={false} />
                  </ShareButtons>
                </Space>
              </FollowContainer>
              <ForYouContainer span={2} offset={1}>
                <H1>For You</H1>
                <LineDividerShort />
                <Link to="/privacy">
                  <P1>Privacy</P1>
                </Link>
                <br />
                <Link to="/terms">
                  <P1>Terms</P1>
                </Link>
                <br />
                <Link to="/security">
                  <P1>Security</P1>
                </Link>
                <br />
                <Link to="/sitemap">
                  <P1>Sitemap</P1>
                </Link>
              </ForYouContainer>
              <ContactContainer span={5} offset={1}>
                <H1>Contact US</H1>
                <LineDividerShort />
                <Row justify="start" align="middle">
                  <Col span={2}>
                    <Image src={locationIcon} preview={false} />
                  </Col>
                  <Col span={21} offset={1}>
                    <P1>
                      123 St Lorem ipsum is simply dummy text of the printing
                    </P1>
                  </Col>
                </Row>
                <Row justify="start" align="middle">
                  <Col span={2}>
                    <Image src={phoneIcon} preview={false} />
                  </Col>
                  <Col span={21} offset={1}>
                    <P1>9678124568</P1>
                  </Col>
                </Row>
                <Row justify="start" align="middle">
                  <Col span={2}>
                    <Image src={emailIcon} preview={false} />
                  </Col>
                  <Col span={21} offset={1}>
                    <P1>byt@gmail.com</P1>
                  </Col>
                </Row>
              </ContactContainer>
            </Row>
          </ItemContainer>
        </Row>
      </Container>
    </Row>
  );
};

export default BigFooter;

const Container = styled(Col)``;

const ItemContainer = styled(Col)`
  margin-top: -30%;
  text-align: left;
`;

const LogoContainer = styled(Col)``;
const ExploreContainer = styled(Col)`
  padding-left: 1%;
`;

const FollowContainer = styled(Col)``;
const ForYouContainer = styled(Col)``;
const ContactContainer = styled(Col)``;

const LineDivider = styled(Divider)`
  background: #ffffff;
`;
const LineDividerShort = styled(Divider)`
  &.ant-divider-horizontal {
    background: #ffffff;
    min-width: 70%;
    width: 70%;
  }
`;

const H1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: 15px;
    color: #ffffff;
  }
`;

const P1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Regular;
    font-size: 12px;
    color: #ffffff;
  }
`;

const ShareButtons = styled(Button)`
  border: 2px solid #1b2749;
  box-shadow: 0 0 0 1px white;
  color: #1b2749;
`;

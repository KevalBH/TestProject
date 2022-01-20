import { Col, Image, Row, Space } from "antd";
import styled from "styled-components";

import mainBg from "../../assets/AboutUs/Group 5924.png";
import goodFood from "../../assets/AboutUs/goodFood.png";

import facebookBig from "../../assets/AboutUs/facebookBig.svg";
import instagramBig from "../../assets/AboutUs/instagramBig.svg";
import twitterBig from "../../assets/AboutUs/twitterBig.svg";

import bar1 from "../../assets/AboutUs/Rectangle 1644.svg";
import bar2 from "../../assets/AboutUs/Rectangle 1643.svg";
import bar3 from "../../assets/AboutUs/Rectangle 1645.svg";

const Hero = () => {
  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="start" align="middle">
          <BannerConatiner span={24}>
            <Image src={goodFood} preview={false} />
          </BannerConatiner>
          <SubBannerContainer span={9}>
            <Image src={mainBg} preview={false} />
          </SubBannerContainer>
          <SocialMediaConatainer span={8} offset={13}>
            <Row justify="center" align="middle">
              <TextConatiner span={24}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </TextConatiner>
              <ButtonsConatiner span={24}>
                <Space>
                  <Image src={facebookBig} preview={false} />
                  <Image src={instagramBig} preview={false} />
                  <Image src={twitterBig} preview={false} />
                </Space>
              </ButtonsConatiner>
            </Row>
          </SocialMediaConatainer>
        </Row>
        <Row justify="end" align="middle">
          <DotsConatiner span={6}>
            <Space>
              <Image src={bar1} preview={false} />
              <Image src={bar2} preview={false} />
              <Image src={bar3} preview={false} />
            </Space>
          </DotsConatiner>
        </Row>
      </Container>
    </Row>
  );
};

export default Hero;

const Container = styled(Col)``;

const BannerConatiner = styled(Col)``;

const SubBannerContainer = styled(Col)`
  margin-top: -40%;
`;

const SocialMediaConatainer = styled(Col)`
  margin-top: -25%;
  text-align: left;
  font-family: Montserrat-Medium;
  font-size: 13px;
  color: #1b2749;
`;

const TextConatiner = styled(Col)``;
const ButtonsConatiner = styled(Col)`
  margin-top: 15%;
`;

const DotsConatiner = styled(Col)`
  margin-top: -2%;
  margin-bottom: 5%;
`;

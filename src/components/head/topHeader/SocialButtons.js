import { Col, Image, Row } from "antd";

import facebook from "../../../assets/AboutUs/facebook.svg";
import google from "../../../assets/AboutUs/google.svg";
import twitter from "../../../assets/AboutUs/twitter.svg";
import instagram from "../../../assets/AboutUs/instagram2.svg";

const SocialButtons = () => {
  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <Row justify="center" align="middle">
          <Col span={6}>
            <Image src={facebook} preview={false} />
          </Col>
          <Col span={6}>
            <Image src={google} preview={false} />
          </Col>
          <Col span={6}>
            <Image src={twitter} preview={false} />
          </Col>
          <Col span={6}>
            <Image src={instagram} preview={false} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SocialButtons;

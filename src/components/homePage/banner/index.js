import { Col, Image, Row, Typography } from "antd";

import orangeBg from "../../../assets/HomePage/Group 5915@2x.png";

import bigPhoneIcon from "../../../assets/HomePage/phn.png";

import appleStoreWhiteBg from "../../../assets/HomePage/Group 5912.svg";
import playStore from "../../../assets/HomePage/Group 5910.svg";
import styled from "styled-components";

const { Text } = Typography;

const Banner = () => {
  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="start" align="middle">
          <Col span={24}>
            <Image src={orangeBg} preview={false} />
          </Col>
          <PhoneContainer span={8} offset={1}>
            <Image src={bigPhoneIcon} preview={false} />
          </PhoneContainer>
          <ItemsConatainer span={12} offset={1}>
            <Row justify="center" align="middle">
              <Col span={24}>
                <P1>
                  BOOK A TABLE On your favorite restaurants & track Orderwith
                  the BYT app.
                </P1>
              </Col>
              <ButtonConatainer span={24}>
                <Row justify="center" align="middle">
                  <Col span={8}>
                    <Image src={playStore} preview={false} />
                  </Col>
                  <Col span={8} offset={1}>
                    <Image src={appleStoreWhiteBg} preview={false} />
                  </Col>
                </Row>
              </ButtonConatainer>
            </Row>
          </ItemsConatainer>
        </Row>
      </Container>
    </Row>
  );
};

export default Banner;

const Container = styled(Col)`
  background: #ffffff;
  padding-top: 5%;
  padding-bottom: 5%;
`;

const PhoneContainer = styled(Col)`
  margin-top: -40%;
`;

const ItemsConatainer = styled(Col)`
  margin-top: -45%;
`;
const ButtonConatainer = styled(Col)`
  margin-top: 5%;
`;

const P1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 17px;
    color: #ffffff;
  }
`;

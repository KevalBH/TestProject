import { Col, Image, Row, Typography } from "antd";
import styled from "styled-components";
import clockIcon from "../../../assets/Restaurant Info/Icon-Glyph-Star Copy.svg";
import starIcon from "../../../assets/HomePage/Icon-Glyph-Star.svg";
import PhoneIcon from "../../../assets/Restaurant Info/Shape.svg";
import WebIcon from "../../../assets/Restaurant Info/Shape-1.svg";
import facebookIcon from "../../../assets/Restaurant Info/facebook.svg";
import instagramIcon from "../../../assets/Restaurant Info/Group 5380.svg";
import twitterIcon from "../../../assets/Restaurant Info/twitter.svg";
import map from "../../../assets/Restaurant Info/Rectangle 1931.png";

import CancelButton from "../../buttons/cancelButton";
import SubmitButton from "../../buttons/submitButton";

const { Title, Text } = Typography;

const RestaurantInfo = ({ restaurantDetails }) => {
  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        {restaurantDetails && (
          <Row justify="center" align="middle">
            <ItemContainer span={22}>
              <H1>{restaurantDetails.name}</H1>
            </ItemContainer>
            <ItemContainer span={22}>
              <Row justify="space-between" align="middle">
                <Col span={12}>
                  <Row justify="center" align="middle">
                    <Col span={2}>
                      <Image src={starIcon} preview={false} width={30} />
                    </Col>
                    <Col span={22}>
                      <P1>{restaurantDetails.ratings}</P1>
                      <P2>({restaurantDetails.reviewCount} reviews)</P2>
                    </Col>
                  </Row>
                </Col>
                <Col span={6}>
                  <Row justify="center" align="middle">
                    <Col span={3}>
                      <Image src={clockIcon} preview={false} />
                    </Col>
                    <Col span={20} offset={1}>
                      <Row justify="center" align="middle">
                        {restaurantDetails.openTiming.map((time, index) => (
                          <Col span={24} key={index}>
                            <P3>{time.replace("to", "-")}</P3>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </ItemContainer>
            <ItemContainer span={22}>
              <P4>{restaurantDetails.description}</P4>
            </ItemContainer>
            <ItemContainer span={23}>
              <Row justify="center" align="middle">
                <Col span={6}>
                  <CancelButton
                    icon={PhoneIcon}
                    text={restaurantDetails.contact[0]}
                  />
                </Col>
                {restaurantDetails.website && (
                  <Col span={6} offset={1}>
                    <SubmitButton
                      icon={WebIcon}
                      text={restaurantDetails.website}
                    />
                  </Col>
                )}
              </Row>
            </ItemContainer>
            {
              <ItemContainer span={24}>
                <Row justify="center" align="middle">
                  {restaurantDetails.facebook && (
                    <Col span={1}>
                      <Image src={facebookIcon} preview={false} />
                    </Col>
                  )}
                  {restaurantDetails.instagram && (
                    <Col span={1} offset={1}>
                      <Image src={instagramIcon} preview={false} />
                    </Col>
                  )}
                  {restaurantDetails.twitter && (
                    <Col span={1} offset={1}>
                      <Image src={twitterIcon} preview={false} />
                    </Col>
                  )}
                </Row>
              </ItemContainer>
            }
          </Row>
        )}
      </Container>

      <LocationContainer span={24}>
        <Image src={map} preview={false} />
      </LocationContainer>
    </Row>
  );
};

export default RestaurantInfo;

const Container = styled(Col)`
  text-align: left;
  margin-bottom: 2%;
  background: #ffffff;
  border-radius: 0 0 24px 24px;
`;

const LocationContainer = styled(Col)``;

const ItemContainer = styled(Col)`
  margin-top: 2%;
  margin-bottom: 2%;
`;

const H1 = styled(Title)`
  &.ant-typography {
    font-family: Montserrat-Bold;
    font-size: 30px;
    color: #22242a;
    text-transform: uppercase;
  }
`;

const P1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 25px;
    color: #1b2749;
  }
`;

const P2 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 23px;
    color: #8d92a3;
    text-transform: capitalize;
  }
`;

const P3 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-regular;
    font-size: 28px;
    color: #1b2749;
  }
`;

const P4 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Regular;
    font-size: 28px;
    color: #8d92a3;
  }
`;

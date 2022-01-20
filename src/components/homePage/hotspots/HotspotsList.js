import { Col, Divider, Image, Row, Typography } from "antd";
import styled from "styled-components";
import locationIcon from "../../../assets/HomePage/Marker.svg";
import starIcon from "../../../assets/HomePage/Icon-Glyph-Star.svg";
import clockIcon from "../../../assets/HomePage/Icon-Glyph-Star Copy.svg";
import menuIcon from "../../../assets/HomePage/Group 5060.svg";
import calendarIcon from "../../../assets/HomePage/Group 5120.svg";
import RestaurantInfo from "../restaurantInfo";
import { useHistory } from "react-router-dom";
import { URL } from "../../../config";

const { Text } = Typography;

const HotspotsLists = (restaurantLists) => {
  const history = useHistory();
  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        {restaurantLists && (
          <Row justify="space-between" align="top">
            {restaurantLists.restaurantLists.restaurants.result.map(
              (restaurant) => (
                <CardContainer
                  span={7}
                  key={restaurant._id}
                  onClick={() => history.push("/restaurant/" + restaurant._id)}
                >
                  <Row justify="center" align="middle">
                    <Col span={24}>
                      <RestaurantImage
                        src={URL + restaurant.image}
                        preview={false}
                      />
                    </Col>
                    <Col span={23}>
                      <Row justify="space-between" align="middle">
                        <Table span={6}>
                          {restaurant.tableCount > 0 ? "avaliable" : "full"}
                        </Table>
                      </Row>
                    </Col>
                    <Col span={22}>
                      <Row justify="space-between" align="middle">
                        <Col span={12}>
                          <RestaurantName>{restaurant.name}</RestaurantName>
                        </Col>
                        <Col span={12}>
                          <Row justify="space-between" align="top">
                            <Col span={2}>
                              <Image
                                src={locationIcon}
                                preview={false}
                                width={15}
                              />
                            </Col>
                            <Col span={22}>
                              <P1>{restaurant.location}</P1>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <LineDivider span={20}>
                      <Divider />
                    </LineDivider>
                    <Col span={21}>
                      <Row justify="space-between" align="middle">
                        <Col span={5}>
                          <RestaurantInfo
                            icon={starIcon}
                            textOne={restaurant.ratings}
                            textTwo={restaurant.reviewCount}
                          />
                        </Col>
                        <Col span={5}>
                          <Row justify="space-between" align="middle">
                            <Col span={5}>
                              <RestaurantInfo
                                icon={clockIcon}
                                // textOne={restaurant.openTiming[0] || "closed"}
                              />
                            </Col>
                            <Col span={18}>
                              <Row justify="center" align="middle">
                                {restaurant.openTiming.map((time) => (
                                  <Col span={24}>
                                    <RestaurantInfo
                                      //icon={clockIcon}
                                      textTwo={
                                        time.replace("to", "-") || "closed"
                                      }
                                    />
                                  </Col>
                                ))}
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={5}>
                          <RestaurantInfo icon={menuIcon} textOne="menu" />
                        </Col>
                        <Col span={5}>
                          <RestaurantInfo icon={calendarIcon} textOne="book" />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardContainer>
              )
            )}
          </Row>
        )}
      </Container>
    </Row>
  );
};

export default HotspotsLists;

const Container = styled(Col)``;

const CardContainer = styled(Col)`
  margin-bottom: 2%;
  background: #ffffff;
  box-shadow: 0px 3px 12px #00000029;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
`;

const Table = styled(Col)`
  background: #ffffff;
  opacity: 0.91;
  border-radius: 5px 5px 0px 0px;
  padding-top: 1%;
  padding-bottom: 2%;
  margin-top: -10%;
  font-family: Montserrat-Bold;
  font-size: 15px;
  color: #08a828;
  text-transform: capitalize;
`;

const RestaurantImage = styled(Image)``;

const LineDivider = styled(Col)`
  margin-top: -4%;
  margin-bottom: -7%;
`;

const RestaurantName = styled(Text)`
  &.ant-typography {
    font-family: montserrat-SemiBold;
    font-size: 15px;
    color: #1b2749;
    text-transform: uppercase;
  }
`;

const P1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Regular;
    font-size: 8px;
    color: #7f8592;
    text-transform: capitalize;
  }
`;

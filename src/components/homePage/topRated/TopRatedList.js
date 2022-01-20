import { Button, Col, Divider, Image, Row, Typography } from "antd";
import styled from "styled-components";
import locationIcon from "../../../assets/HomePage/Marker.svg";
import starIcon from "../../../assets/HomePage/Icon-Glyph-Star.svg";
import clockIcon from "../../../assets/HomePage/Icon-Glyph-Star Copy.svg";
import menuIcon from "../../../assets/HomePage/Group 5060.svg";
import calendarIcon from "../../../assets/HomePage/Group 5120.svg";
import RestaurantInfo from "../restaurantInfo";
import useFetch from "../../../hooks/useFetch";

import favouriteIcon from "../../../assets/favorite/favorite-1.svg";
import unFavouriteIcon from "../../../assets/favorite/favorite.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { URL } from "../../../config";

const { Text } = Typography;

const TopRatedLists = (restaurantLists) => {
  const history = useHistory();
  const userId = localStorage.user;
  const [favoriteList, setFavoriteList] = useState([]);
  const { data } = useFetch(URL + "favorite_restaurant/user/" + userId);

  useEffect(() => {
    data &&
      data.favoriteRestaurants.result.map((list) =>
        list.customer.map((customer) =>
          customer._id.includes(userId)
            ? list.restaurant.map((restaurant) =>
                setFavoriteList((previous) => [...previous, restaurant._id])
              )
            : setFavoriteList([])
        )
      );
  }, [data, userId]);

  const HandleAddToFavourite = (id) => {
    axios
      .post(URL, {
        customer: userId,
        restaurant: id,
      })
      .then((res) =>
        setFavoriteList((previousList) => [
          ...previousList,
          res.data.favoriteRestaurant.restaurant,
        ])
      )
      .catch((err) => console.log(err));
  };

  const HandleRemoveFromFavourite = (id) => {
    console.log(id);
    // axios
    //   .delete(URL + id)
    //   .then((res) => {
    //     console.log(res.data.favoriteRestaurant.restaurant);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        {restaurantLists && (
          <Row justify="space-between" align="middle">
            {restaurantLists.restaurantLists.restaurants.result.map(
              (restaurant) => (
                <CardContainer
                  span={7}
                  key={restaurant._id}
                  onClick={() => history.push("/restaurant/" + restaurant._id)}
                >
                  <Row justify="center" align="middle">
                    <TopContainer span={24}>
                      <Row justify="space-between" align="middle">
                        <OfferContainer span={8}>
                          upto kd {restaurant.discount} off
                        </OfferContainer>

                        <Col
                          span={4}
                          onClick={() => {
                            favoriteList.includes(restaurant._id)
                              ? HandleRemoveFromFavourite(data)
                              : //   ? favoriteList.splice(
                                //       favoriteList.indexOf(restaurant._id),
                                //       1
                                //     )
                                HandleAddToFavourite(restaurant._id);
                          }}
                        >
                          <Button size="small" shape="circle">
                            <Image
                              src={
                                favoriteList.includes(restaurant._id)
                                  ? favouriteIcon
                                  : unFavouriteIcon
                              }
                              preview={false}
                            />
                          </Button>
                        </Col>
                      </Row>
                    </TopContainer>
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
                          <Image
                            src={locationIcon}
                            preview={false}
                            width={15}
                          />{" "}
                          <P1>{restaurant.location}</P1>
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
                          <RestaurantInfo
                            icon={clockIcon}
                            textOne={restaurant.openTiming[0] || "closed"}
                          />
                        </Col>
                        <Col span={5}>
                          <RestaurantInfo icon={menuIcon} textOne="menu" />
                        </Col>
                        <Col span={5} onClick={() => alert(restaurant._id)}>
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

export default TopRatedLists;

const Container = styled(Col)``;
const CardContainer = styled(Col)`
  background: #ffffff;
  box-shadow: 0px 3px 12px #00000029;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
`;

const TopContainer = styled(Col)`
  margin-bottom: -20%;
  z-index: 1;
`;

const OfferContainer = styled(Col)`
  font-family: Montserrat-Regular;
  font-size: 12px;
  color: #ffffff;
  padding: 1%;
  background: #486dff;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0px 10px 10px 0px;
  text-transform: capitalize;
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
    font-size: 14px;
    color: #7f8592;
    text-transform: capitalize;
  }
`;

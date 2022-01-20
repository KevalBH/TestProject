import { Button, Col, Image, Modal, Row } from "antd";
import styled, { css } from "styled-components";
import banner from "../../assets/Restaurant Info/chuttersnap-FWKw6gzDbY4-unsplash.png";
import favouriteIcon from "../../assets/favorite/favorite-1.svg";
import unFavouriteIcon from "../../assets/favorite/favorite.svg";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import RestaurantInfo from "./restaurantInfo";
import RestaurantMenu from "./restaurantMenu";
import RestaurantReviews from "./restaurantReviews";
import PreOrder from "../modals/preorder";
import { OrderContext } from "../appLayout";
import BookConfim from "../modals/bookConfirm";
import { URL } from "../../config";

const Restaurant = () => {
  const { restaurantId } = useParams();
  const userId = localStorage.user;
  const [favoriteList, setFavoriteList] = useState([]);
  const [infoTab, setInfoTabs] = useState(false);
  const [menuTab, setMenuTabs] = useState(true);
  const [reviewsTab, setReviewsTabs] = useState(false);
  const [bookTypeModal, setBookTypeModal] = useState(false);
  const [bookConfirm, setBookConfirm] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { data } = useFetch(URL + "favorite_restaurant/" + "user/" + userId);
  const { data: restaurantDetails } = useFetch(
    URL + "restaurant/" + restaurantId
  );

  // const { orderState } = useContext(OrderContext);
  // console.log(orderState);

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
  }, [data]);

  const HandleInfoTab = () => {
    setInfoTabs(true);
    setMenuTabs(false);
    setReviewsTabs(false);
  };

  const HandleMenuTab = () => {
    setInfoTabs(false);
    setMenuTabs(true);
    setReviewsTabs(false);
  };

  const HandleReviewsTab = () => {
    setInfoTabs(false);
    setMenuTabs(false);
    setReviewsTabs(true);
  };

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <BannerConatiner span={24}>
            <Row justify="center" align="middle">
              <ButtonContainer span={24}>
                <Row justify="end" align="middle">
                  <Col span={4}>
                    <Button shape="circle" size="large">
                      <Image
                        src={
                          favoriteList.includes(restaurantId)
                            ? favouriteIcon
                            : unFavouriteIcon
                        }
                        preview={false}
                      />
                    </Button>
                  </Col>
                </Row>
              </ButtonContainer>
              <Col span={24}>
                <Image
                  src={
                    (restaurantDetails && URL + restaurantDetails.image) ||
                    banner
                  }
                  preview={false}
                />
              </Col>
              <Tabs span={20}>
                <Row justify="center" align="middle">
                  <Tab span={7} onClick={HandleInfoTab} $selected={infoTab}>
                    info
                  </Tab>
                  <Tab span={7} onClick={HandleMenuTab} $selected={menuTab}>
                    menu
                  </Tab>
                  <Tab
                    span={7}
                    onClick={HandleReviewsTab}
                    $selected={reviewsTab}
                  >
                    reviews
                  </Tab>
                </Row>
              </Tabs>
            </Row>
          </BannerConatiner>
        </Row>
        <Row justify="center" align="middle">
          <TabBody span={20}>
            <Row justify="center" align="middle">
              {infoTab && (
                <Col span={24}>
                  <RestaurantInfo restaurantDetails={restaurantDetails} />
                </Col>
              )}
              {menuTab && (
                <Col span={24}>
                  <RestaurantMenu setBookTypeModal={setBookTypeModal} />
                </Col>
              )}
              {reviewsTab && (
                <Col span={24}>
                  <RestaurantReviews />
                </Col>
              )}
            </Row>
          </TabBody>
        </Row>
        <Row justify="center" align="middle">
          <SpecialModal
            visible={bookTypeModal || bookConfirm}
            onCancel={() => {
              setBookTypeModal(false);
              setBookConfirm(false);
            }}
            closable={false}
            footer={false}
            width={1000}
          >
            {bookTypeModal && (
              <PreOrder
                onClick={() => setBookTypeModal(false)}
                setBookConfirm={setBookConfirm}
                orderId={orderId}
                setOrderId={setOrderId}
              />
            )}
            {bookConfirm && (
              <BookConfim
                onClick={() => setBookConfirm(false)}
                orderId={orderId}
              />
            )}
          </SpecialModal>
        </Row>
      </Container>
    </Row>
  );
};

export default Restaurant;

const Container = styled(Col)`
  background: #e5e5e5;
`;

const BannerConatiner = styled(Col)`
  overflow: hidden;
`;
const ButtonContainer = styled(Col)`
  background: transparent;
  margin-bottom: -10%;
  z-index: 1;
`;

const Tabs = styled(Col)`
  background: #ffffffd9;
  margin-top: -7.4%;
  border-radius: 24px 24px 0 0;
  padding-top: 1%;
  padding-bottom: 1%;
`;
const Tab = styled(Col)`
  font-family: Montserrat-Medium;
  font-size: 35px;
  color: #1b2749;
  text-transform: capitalize;
  cursor: pointer;
  ${(props) =>
    props.$selected &&
    css`
      font-family: Montserrat-Bold;
      border-bottom: 5px solid #707070;
    `}
`;

const TabBody = styled(Col)`
  margin-bottom: 5%;
`;

const SpecialModal = styled(Modal)`
  .ant-modal-content {
    background: none;
    box-shadow: none;
  }
`;

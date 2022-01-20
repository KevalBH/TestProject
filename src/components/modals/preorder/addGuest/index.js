import { Col, Image, Modal, Row, Switch, Typography, Select } from "antd";
import styled from "styled-components";
import Head from "../../head";
import staticImage from "../../../../assets/Reservation (pre_Order)/Group 5694.svg";
import addImageIcon from "../../../../assets/Reservation (pre_Order)/Group 6038.svg";
import { OrderContext } from "../../../appLayout";
import { useContext, useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import axios from "axios";
import Contact from "../../contact";
import { URL } from "../../../../config";

const { Text } = Typography;
const { Option } = Select;

const AddGuest = ({ onClick }) => {
  const [profileImages, setProfileImages] = useState([]);
  const { orderState } = useContext(OrderContext);
  const [contactsVisible, setContactsVisible] = useState(false);
  const { data: restaurant } = useFetch(
    URL + "restaurant/" + orderState.restaurant
  );

  useEffect(() => {
    orderState.guests.map((guest) =>
      profileImages.length > 0
        ? profileImages.map((profile) =>
            profile.id === guest
              ? console.log("included")
              : console.log("not-included")
          )
        : axios.get(URL + "user/" + guest).then((res) => {
            setProfileImages((previous) => [
              ...previous,
              {
                id: res.data._id,
                image: URL + res.data.profile.replace("./", ""),
              },
            ]);
          })
    );
  }, [orderState]);

  const HandleAddGuests = () => {
    setContactsVisible(true);
  };

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Col span={24}>
            <Head text="reservation" onClick={onClick} />
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={24}>
            <H1>your booking at</H1>
          </Col>
          {restaurant && (
            <Col span={24}>
              <RestaurantName>{restaurant.name}</RestaurantName>
            </Col>
          )}
          <Col span={24}>
            <Image src={staticImage} preview={false} />
          </Col>
          <Col span={24}>
            <H1>seating preference : any</H1>
          </Col>
        </Row>
        <Row justify="end" align="middle">
          <StatusContainer span={6}>
            status <StatusSignal />
          </StatusContainer>
        </Row>
        <Row justify="space-between" align="middle">
          <Col span={11}>
            <Row justify="start" align="middle">
              <Col span={24}>
                <H1>Payment Type</H1>
              </Col>
              <Col span={24}>
                <Select defaultValue="single">
                  <Option value="single">Single</Option>
                  <Option value="split">Split</Option>
                </Select>
              </Col>
            </Row>
          </Col>
          <Col span={11}>
            <Row justify="end" align="middle">
              <Col span={24}>
                <H1>Reservation type</H1>
              </Col>
              <Col span={24}>{orderState.reservationType}</Col>
            </Row>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={23}>
            <GuestContainer span={24}>guests</GuestContainer>
            <Row justify="start" align="middle">
              {profileImages &&
                profileImages.map((profile, index) => (
                  <Col span={4} key={index}>
                    <Image src={profile.image} preview={false} width={100} />
                  </Col>
                ))}
              <AddGuestButton span={4} onClick={HandleAddGuests}>
                <Image src={addImageIcon} preview={false} width={100} />
              </AddGuestButton>
            </Row>
          </Col>
        </Row>
      </Container>
      <Modal
        visible={contactsVisible}
        onCancel={() => setContactsVisible(false)}
        closable={false}
        footer={false}
        width={1000}
      >
        <Contact onClick={() => setContactsVisible(false)} />
      </Modal>
    </Row>
  );
};

export default AddGuest;

const Container = styled(Col)``;

const StatusContainer = styled(Col)`
  font-family: Montserrat-Bold;
  font-size: 30px;
  color: #1b2749;
  text-transform: capitalize;
  margin-bottom: 4%;
`;

const StatusSignal = styled(Switch)`
  &.ant-switch-checked {
    background-color: #2fc177;
  }
`;

const GuestContainer = styled(Col)`
  font-family: Montserrat-Bold;
  font-size: 35px;
  color: #1b2749;
  text-transform: capitalize;
  margin-bottom: 4%;
  text-align: left;
`;

const AddGuestButton = styled(Col)`
  cursor: pointer;
`;

const RestaurantName = styled(Col)`
  font-family: Montserrat-SemiBold;
  font-size: 40px;
  color: #1b2749;
  text-transform: uppercase;
  margin-top: 2%;
  margin-bottom: 2%;
`;

const H1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 20px;
    color: #1b2749;
    text-transform: uppercase;
  }
`;

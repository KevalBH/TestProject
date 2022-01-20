import { Col, Image, Row, Divider } from "antd";
import { useContext, useState } from "react";
import styled from "styled-components";
import closeIcon from "../../../assets/Book Table/close.svg";
import DatePick from "./datePick";
import Guests from "./guests";
import OrderType from "./orderType";
import CancelButton from "../../buttons/cancelButton";
import Event from "./event";
import ReservationType from "./ReservationType";
import Timeslot from "./timeslot";
import { OrderContext } from "../../appLayout";
import ACTIONS from "../../../utils/actions/order.action";

const BookTable = ({ onClose }) => {
  const { orderState, orderDispatch } = useContext(OrderContext);
  console.log(orderState);
  const userId = localStorage.user;
  const [dineIn, setDineIn] = useState(true);
  const [pickup, setPickup] = useState(false);
  const [delivery, setDelivery] = useState(false);

  const [adultCount, setAdultCount] = useState(0);
  const [kidCount, setKidCount] = useState(0);
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [event, setEvent] = useState("");
  const [reservationType, setReservationType] = useState("");

  const HandleClose = () => {
    setAdultCount(0);
    setKidCount(0);
    setDeliveryDate("");
    setDeliveryTime("");
    setEvent("");
    setReservationType("");
    onClose();
  };

  const HandleSubmit = () => {
    orderDispatch({ type: ACTIONS.CUSTOMER, payload: userId });
    orderDispatch({ type: ACTIONS.GUESTS, payload: userId });
    orderDispatch({
      type: ACTIONS.VISITORS,
      payload: { adults: adultCount, kids: kidCount },
    });
    orderDispatch({
      type: ACTIONS.DELIVERYTIME,
      payload: deliveryDate + "T" + deliveryTime,
    });
    orderDispatch({ type: ACTIONS.EVENT, payload: event });
    orderDispatch({ type: ACTIONS.RESERVATIONTYPE, payload: reservationType });
    orderDispatch({
      type: ACTIONS.ORDERTYPE,
      payload:
        (dineIn && "dine-in") ||
        (pickup && "pickup") ||
        (delivery && "delivery"),
    });
    onClose();
  };

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="end" align="middle">
          <Col span={2} onClick={HandleClose} style={{ cursor: "pointer" }}>
            <Image src={closeIcon} preview={false} width={40} />
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <OrderType
            dineIn={dineIn}
            setDineIn={setDineIn}
            pickup={pickup}
            setPickup={setPickup}
            delivery={delivery}
            setDelivery={setDelivery}
          />
        </Row>
        <Row justify="center" align="middle">
          <Col span={18}>
            <DividerLine />
          </Col>
        </Row>
        {dineIn && (
          <>
            <Row justify="center" align="middle">
              <ItemContainer span={18}>
                <Row justify="space-between" align="top">
                  <Col span={10}>
                    <Guests
                      adultCount={adultCount}
                      setAdultCount={setAdultCount}
                      kidCount={kidCount}
                      setKidCount={setKidCount}
                    />
                  </Col>
                  <Col span={10}>
                    <DatePick setDeliveryDate={setDeliveryDate} />
                  </Col>
                </Row>
              </ItemContainer>
            </Row>
            <Row justify="center" align="middle">
              <ItemContainer span={18}>
                <Row justify="space-between" align="middle">
                  <Col span={10}>
                    <Event setEvent={setEvent} />
                  </Col>
                  <Col span={10}>
                    <ReservationType setReservationType={setReservationType} />
                  </Col>
                </Row>
              </ItemContainer>
            </Row>
            {reservationType && (
              <Row justify="center" align="middle">
                <ItemContainer span={18}>
                  <Timeslot
                    deliveryTime={deliveryTime}
                    setDeliveryTime={setDeliveryTime}
                    reservationType={reservationType}
                  />
                </ItemContainer>
              </Row>
            )}
            <Row justify="center" align="middle">
              <ButtonContainer span={8}>
                <CancelButton text="proceed" onClick={HandleSubmit} />
              </ButtonContainer>
            </Row>
          </>
        )}
        {(pickup || delivery) && (
          <>
            <Row justify="center" align="middle">
              <Col span={18}>
                <Row justify="space-between" align="middle">
                  <Col span={10}>
                    <DatePick setDeliveryDate={setDeliveryDate} />
                  </Col>
                  <Col span={10}>
                    <ReservationType setReservationType={setReservationType} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row justify="center" align="middle">
              <ButtonContainer span={8}>
                {pickup && (
                  <CancelButton text="Book pickup" onClick={HandleSubmit} />
                )}
                {delivery && (
                  <CancelButton text="Book delivery" onClick={HandleSubmit} />
                )}
              </ButtonContainer>
            </Row>
          </>
        )}
      </Container>
    </Row>
  );
};

export default BookTable;

const Container = styled(Col)`
  background: rgba(27, 39, 73, 0.95);
  padding: 2%;
  border-radius: 30px;
`;
const DividerLine = styled(Divider)`
  border: 1px solid #ffffff;
  opacity: 0.3;
`;

const ItemContainer = styled(Col)`
  margin: 2% 0 2% 0;
`;

const ButtonContainer = styled(Col)`
  margin: 5% 0 3% 0;
`;

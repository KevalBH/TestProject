import { Col, Divider, Image, Row, Typography } from "antd";
import styled from "styled-components";

import closeIcon from "../../../assets/Book Table/close.svg";
import { useContext, useEffect, useState } from "react";
import OrderType from "./orderType";
import OrderTime from "./orderTime";
import SelectTable from './dine/table/SelectTable/SelectTable'

import Dine from "./dine";
import Pickup from "./pickup";
import Delivery from "./delivery";
import ACTIONS from "../../../utils/actions/order.action";
import { OrderContext } from "../../appLayout";
import { useHistory } from "react-router-dom";

const { Title } = Typography;

const BookType = ({ onClose, selectedRestaurant }) => {
  const { orderState, orderDispatch } = useContext(OrderContext);
  console.log(orderState);
  const userId = localStorage.user;
  const history = useHistory();

  const [dineIn, setDineIn] = useState(true);
  const [pickup, setPickup] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [proceed, setProceed] = useState(false);

  const [reservationType, setReservationType] = useState(null);
  const [reservationDate, setReservationDate] = useState(null);
  const [reservationTime, setReservationTime] = useState(null);
  const [adultCount, setAdultCount] = useState(0);
  const [kidCount, setKidCount] = useState(0);
  const [selectedTable, setSelectedTable] = useState("");

  const [isVisibleSelectTable, setIsVisibleSelectTable] = useState(false)

  useEffect(() => {
    !userId && history.push("/authenticate");
  }, [userId]);

  useEffect(() => {
    const abortControl = new AbortController();

    const delivery =
      orderState.deliveryTime && orderState.deliveryTime.split("T");

    orderState.reservationType &&
      setReservationType(orderState.reservationType);
    delivery && setReservationDate(delivery[0]);
    delivery && setReservationTime(delivery[1]);
    orderState.visitors.adult && setAdultCount(orderState.visitors.adult);
    orderState.visitors.children && setKidCount(orderState.visitors.children);

    return () => {
      abortControl.abort();
    };
  }, [orderState]);

  // useEffect(() => {
  //   orderDispatch({ type: ACTIONS.RESTAURANT, payload: selectedRestaurant });
  //   !orderState.customer &&
  //     orderDispatch({ type: ACTIONS.CUSTOMER, payload: userId });
  //   !orderState.guest &&
  //     orderDispatch({ type: ACTIONS.GUESTS, payload: userId });
  //   !orderState.orderType &&
  //     orderDispatch({
  //       type: ACTIONS.ORDERTYPE,
  //       payload:
  //         (dineIn && "dine-in") ||
  //         (pickup && "pickup") ||
  //         (delivery && "delivery"),
  //     });
  // }, [dineIn, pickup, delivery]);

  useEffect(() => {
    if (proceed) {
      orderDispatch({ type: ACTIONS.RESTAURANT, payload: selectedRestaurant });
      !orderState.customer &&
        orderDispatch({ type: ACTIONS.CUSTOMER, payload: userId });
      orderState.guests.length === 0 &&
        orderDispatch({ type: ACTIONS.GUESTS, payload: userId });
      orderState.reservationType !== reservationType &&
        orderDispatch({
          type: ACTIONS.RESERVATIONTYPE,
          payload: reservationType,
        });
      orderDispatch({
        type: ACTIONS.DELIVERYTIME,
        payload: reservationDate + "T" + reservationTime,
      });
      !orderState.orderType &&
        orderDispatch({
          type: ACTIONS.ORDERTYPE,
          payload:
            (dineIn && "dine-in") ||
            (pickup && "pickup") ||
            (delivery && "delivery"),
        });
      (adultCount > orderState.visitors.adult ||
        kidCount > orderState.visitors.children) &&
        orderDispatch({
          type: ACTIONS.VISITORS,
          payload: { adults: adultCount, kids: kidCount },
        });

      history.push("/restaurant/" + selectedRestaurant);
    }
  }, [proceed]);


  return <>

    {isVisibleSelectTable && <SelectTable selectedTable={selectedTable} onSetTableNo={(array) => setSelectedTable(array.join(', '))} onClose={() => setIsVisibleSelectTable(false)} />}

    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <InnerContainer span={24}>
            <Row justify="center" align="middle">
              <Head span={24}>
                <Row justify="center" align="middle">
                  <Col span={20}>
                    <H1>
                      {(dineIn && "book a table") ||
                        (pickup && "book a pickup") ||
                        (delivery && "book a delivery")}
                    </H1>
                  </Col>
                  <Col span={2} onClick={onClose} style={{ cursor: "pointer" }}>
                    <Image src={closeIcon} preview={false} width={40} />
                  </Col>
                </Row>
              </Head>
              <Col span={24}>
                <DividerLine />
              </Col>
              <Body span={24}>
                <Row justify="center" align="middle">
                  <Col span={8}>
                    <OrderTime
                      setReservationTime={setReservationTime}
                      reservationTime={reservationTime}
                      setReservationDate={setReservationDate}
                      reservationDate={reservationDate}
                      reservationType={reservationType}
                      selectedRestaurant={selectedRestaurant}
                    />
                  </Col>
                  <Col span={1}>
                    <DividerLineTwo type="vertical" style={{ height: 120 }} />
                  </Col>
                  <Col span={12}>
                    <OrderType
                      setReservationType={setReservationType}
                      reservationType={reservationType}
                      dineIn={dineIn}
                      setDineIn={setDineIn}
                      pickup={pickup}
                      setPickup={setPickup}
                      delivery={delivery}
                      setDelivery={setDelivery}
                    />
                  </Col>
                </Row>
                <Row justify="center" align="middle">
                  <Col span={24}>
                    <DividerLineTwo />
                  </Col>
                </Row>
                {dineIn && (
                  <Dine
                    onOpenSelectTableDialog={(flag) => setIsVisibleSelectTable(flag)}
                    selectedRestaurant={selectedRestaurant}
                    adultCount={adultCount}
                    setAdultCount={setAdultCount}
                    kidCount={kidCount}
                    setKidCount={setKidCount}
                    selectedTable={selectedTable}
                    setSelectedTable={setSelectedTable}
                    setProceed={setProceed}
                  />
                )}
                {pickup && <Pickup />}
                {delivery && <Delivery />}
              </Body>
            </Row>
          </InnerContainer>
        </Row>
      </Container>
    </Row>
  </>
};

export default BookType;

const Container = styled(Col)`
  background: #1b2749;
  padding: 1%;
  border-radius: 15px;
  text-align: left;
`;

const InnerContainer = styled(Col)`
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding-bottom: 3%;
`;

const Head = styled(Col)`
  margin-top: 4%;
  font-family: Montserrat-SemiBold;
  font-size: 30px;
  color: #ffffff;
  text-transform: uppercase;
`;

const DividerLine = styled(Divider)`
  border: 2px solid #2b3657;
`;
const DividerLineTwo = styled(Divider)`
  border: 1px solid #2b3657;
`;

const Body = styled(Col)``;

// const TypeContainer = styled(Col)`
//   margin: 2%;
//   padding: 2%;
//   font-family: Montserrat-SemiBold;
//   font-size: 20px;
//   color: ${(props) => props.color || "#ffffff"};
//   text-transform: capitalize;
//   text-align: center;
//   cursor: pointer;
//   ${({ active }) =>
//     active &&
//     `
//   background:#ffffff;
//   box-shadow: 0px 20px 25px #0000001A;
//   border-radius: 20px;
//   color: #1B2749;

//   `}
// `;

const H1 = styled(Title)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: 30px;
    color: #ffffff;
    text-transform: uppercase;
    text-align: center;
  }
`;
// const H2 = styled(Title)`
//   &.ant-typography {
//     font-family: Montserrat-SemiBold;
//     font-size: 30px;
//     color: #ffffff;
//     text-transform: uppercase;
//     text-align: left;
//   }
// `;

// const P = styled(Paragraph)`
//   &.ant-typography {
//     font-family: Montserrat-SemiBold;
//     font-size: 8px;
//     color: #fa7268;
//   }
// `;

// const P1 = styled(Text)`
//   &.ant-typography {
//     font-family: Montserrat-SemiBold;
//     font-size: 10px;
//     color: #ffffff;
//     text-transform: uppercase;
//   }
// `;

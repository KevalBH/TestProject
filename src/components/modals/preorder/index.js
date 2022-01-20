import { Col, Divider, Modal, Row } from "antd";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ACTIONS from "../../../utils/actions/order.action";
import { OrderContext } from "../../appLayout";
import SubmitButton from "../../buttons/submitButton";
import Payments from "../../payments";
import Instructions from "../instructions";
import AddGuest from "./addGuest";
import AddMenuItem from "./addMenuItem";
import BillDetails from "./billDetails";
import CookingInstructions from "./cookingInstructions";
import Tip from "./tip";
import { URL } from "../../../config";

const PreOrder = ({ onClick, setBookConfirm, orderId, setOrderId }) => {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const [instructionsModal, setInstructionsModal] = useState(false);
  const [instructions, setInstructions] = useState("");

  const { orderState, orderDispatch } = useContext(OrderContext);

  const HandlePlaceOrder = () => {
    // setBookConfirm(true);
    onClick();

    axios
      .post(URL + "order", {
        customer: orderState.customer,
        deliveryTime: "2021-12-21T08:30",
        guests: [],
        instructions: orderState.instructions,
        items: orderState.items,
        orderType: orderState.orderType,
        price: orderState.price,
        reservationType: orderState.reservationType,
        restaurant: orderState.restaurant,
        visitors: orderState.visitors,
        orderStatus: orderState.orderStatus,
        paymentType: orderState.paymentType,
        paymentMethod: orderState.paymentMethod,
        table: [],
      })
      .then(
        (res) => setOrderId(res.data.order._id)
        // orderDispatch({ type: ACTIONS.ORDERNO, payload: res.data.order._id })
      )
      .catch((err) => console.log(err));
    orderId && history.push("/booking/" + orderId);
  };

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <AddGuest onClick={onClick} />
        <DividerLine />
        {!showMenu && (
          <Row justify="center" align="middle">
            <ButtonContainer span={8}>
              <SubmitButton text="proceed" onClick={() => setShowMenu(true)} />
            </ButtonContainer>
          </Row>
        )}
        {showMenu && (
          <>
            <AddMenuItem />
            <DividerLine />
            <CookingInstructions setInstructionsModal={setInstructionsModal} />
            <DividerLine />
            <Tip />
            <DividerLine />
            <BillDetails />
            <Row justify="center" align="middle">
              <ButtonContainer span={8}>
                <SubmitButton
                  text="Place order"
                  // onClick={() => history.push("/view-order")} //need to add order id after view order
                  onClick={HandlePlaceOrder}
                />
              </ButtonContainer>
            </Row>
          </>
        )}
        <Row justify="center" align="middle">
          <NoticeContainer span={23}>
            note: each guest can order from their account
          </NoticeContainer>
        </Row>
      </Container>
      <Col span={24}>
        <SpecialModal
          visible={instructionsModal}
          onCancel={() => setInstructionsModal(false)}
          closable={false}
          footer={false}
        >
          {instructionsModal && (
            <Instructions
              setInstructionsModal={setInstructionsModal}
              setInstructions={setInstructions}
            />
          )}
        </SpecialModal>
      </Col>
    </Row>
  );
};

export default PreOrder;

const Container = styled(Col)`
  background: #ffffff;
  padding: 1%;
  border-radius: 15px;
  text-align: center;
`;

const NoticeContainer = styled(Col)`
  font-family: Montserrat-Medium;
  font-size: 15px;
  color: #5d5e60;
  text-transform: capitalize;
  margin-bottom: 4%;
  text-align: left;
`;

const ButtonContainer = styled(Col)`
  margin-top: 5%;
  margin-bottom: 5%;
`;

const DividerLine = styled(Divider)`
  border: 1px solid #dfe0e5;
`;

const SpecialModal = styled(Modal)`
  .ant-modal-content {
    background: none;
    box-shadow: none;
  }
`;

import { Button, Col, Image, Input, Row } from "antd";
import { useContext } from "react";
import styled from "styled-components";

import minus from "../../../assets/Restaurant Menu/minus (1).svg";
import plus from "../../../assets/Restaurant Menu/plus (5).svg";
import ACTIONS from "../../../utils/actions/order.action";
import { OrderContext, UserContext } from "../../appLayout";
import Head from "../head";

const { TextArea } = Input;

const EditMenu = ({ setEditMenu, editMenuId }) => {
  const { orderState, orderDispatch } = useContext(OrderContext);
  const { _id: user } = useContext(UserContext);

  const HandleAddItem = (id) => {
    let itemIndex = orderState.items.findIndex((item) => item.item === id);
    itemIndex > -1 &&
      orderDispatch({
        type: ACTIONS.ADDITEM,
        payload: {
          id: id,
          user,
        },
      });
  };

  const HandleRemoveItem = (id) => {
    let itemIndex = orderState.items.findIndex((item) => item.item === id);
    itemIndex > -1
      ? orderDispatch({
          type: ACTIONS.REMOVEITEMBYONE,
          payload: {
            id,
          },
        })
      : alert("Quantity is 0");
    // <Alert
    //   message="Warning"
    //   description="The quantity is 0"
    //   type="warning"
    //   showIcon
    //   closable
    // />
  };

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Col span={24}>
            <Head text="edit" onClick={() => setEditMenu(false)} />
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <CounterContainer span={24}>
            <Row justify="center" align="middle">
              <Col span={5}>
                <ActionButtons
                  src={minus}
                  preview={false}
                  onClick={() => HandleRemoveItem(editMenuId)}
                />
              </Col>
              <Col span={6}>
                <CounterButton shape="circle" size="large">
                  {orderState.items?.find((item) => item.item === editMenuId)
                    ? orderState.items?.map(
                        (item) => item.item === editMenuId && item.quantity
                      )
                    : 0}
                </CounterButton>
              </Col>
              <Col span={5}>
                <ActionButtons
                  src={plus}
                  preview={false}
                  onClick={() => HandleAddItem(editMenuId)}
                />
              </Col>
            </Row>
          </CounterContainer>
          <NoteContainer span={18}>
            <Row justify="center" align="middle">
              <Col span={24}>Note:</Col>
              <Col span={24}>
                <TextArea maxLength={100} showCount />
              </Col>
            </Row>
          </NoteContainer>
        </Row>
      </Container>
    </Row>
  );
};

export default EditMenu;

const Container = styled(Col)`
  background: #ffffff;
  text-align: center;
  border-radius: 30px;
`;

const ActionButtons = styled(Image)`
  cursor: pointer;
`;

const CounterContainer = styled(Col)`
  margin-top: 10%;
  margin-bottom: 10%;
`;
const NoteContainer = styled(Col)`
  margin-top: 10%;
  margin-bottom: 10%;
  text-align: left;
`;

const CounterButton = styled(Button)`
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  font-family: Montserrat-SemiBold;
  font-size: 20px;
  color: #1b2749;
  :hover {
    color: #1b2749;
    border: none;
  }
  :focus {
    color: #1b2749;
    border: none;
  }
`;

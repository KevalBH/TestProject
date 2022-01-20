import { Alert, Button, Col, Image, Modal, Row, Typography } from "antd";

import AddOnButton from "../../../buttons/addonButton";
import ActionButton from "../../../buttons/actionButton";
import minus from "../../../../assets/Restaurant Menu/minus (1).svg";
import plus from "../../../../assets/Restaurant Menu/plus (5).svg";
import clockIcon from "../../../../assets/Restaurant Info/Icon-Glyph-Star Copy.svg";
import styled from "styled-components";
import { useContext, useState } from "react";
import Addons from "../../../modals/addons";
import ACTIONS from "../../../../utils/actions/order.action";
import { OrderContext, UserContext } from "../../../appLayout";
import { URL } from "../../../../config";

const { Text } = Typography;

const ItemList = ({
  menu,
  HandleAddCounter,
  HandleMinusCounter,
  itemCounter,
}) => {
  const { _id: user } = useContext(UserContext);
  const { orderState, orderDispatch } = useContext(OrderContext);
  const [menuItemId, setMenuItemId] = useState(null);
  const [openAddon, setOpenAddon] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const GetEstimatedTime = (number) => {
    let d = Number(number);

    let h = Math.floor(d / 3600);
    let m = Math.floor((d % 3600) / 60);
    let s = Math.floor((d % 3600) % 60);

    let hours = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
    let minutes = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
    let seconds = s > 0 ? s + (s == 1 ? " second " : " seconds ") : "";
    return hours + minutes + seconds;
  };

  const HandleAddToCart = (menu) => {
    let userIndex = orderState.guests.indexOf(user);
    userIndex === -1
      ? orderDispatch({ type: ACTIONS.GUESTS, payload: user })
      : console.log("guest is in list");
    orderDispatch({
      type: ACTIONS.ADDTOCART,
      payload: {
        id: menu._id,
        itemName: menu.name,
        itemImage: menu.image[0],
        quantity: 1,
        user,
        estimatedTime: GetEstimatedTime(menu.estimatedTime),
        note: "",
        itemPrice: menu.price,
        addonPrice: 0,
        total: "",
        addon: selectedAddons,
      },
    });
  };

  const HandleAddItem = (menu) => {
    let itemIndex = orderState.items.findIndex(
      (item) => item.item === menu._id
    );
    itemIndex > -1 &&
      orderDispatch({
        type: ACTIONS.ADDITEM,
        payload: {
          id: menu._id,
          user,
          addon: selectedAddons,
        },
      });
  };
  const HandleAddAddon = (menu) => {
    let itemIndex = orderState.items.findIndex(
      (item) => item.item === menu._id
    );
    itemIndex > -1
      ? orderDispatch({
          type: ACTIONS.ADDON,
          payload: {
            id: menu._id,
            addon: selectedAddons,
          },
        })
      : orderDispatch({
          type: ACTIONS.ITEMS,
          payload: {
            id: menu._id,
            user,
            quantity: 1,
            price: menu.price,
            addon: selectedAddons,
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
      <Container span={22}>
        <Row justify="center" align="middle">
          <Col span={5}>
            <Row justify="center" align="middle">
              <Col span={24}>
                <Image src={URL + menu.image[0]} preview={false} />
              </Col>
              <PriceContainer span={24}>{menu.price} KD</PriceContainer>
            </Row>
          </Col>
          <Col span={14} offset={1}>
            <Row justify="start" align="middle">
              <TextContainer span={24}>
                <H1>{menu.name}</H1>
              </TextContainer>
              <TextContainer span={24}>
                <P1>
                  {menu.ingredient.map((ingredient) => ingredient.item + ", ")}
                </P1>
              </TextContainer>
              <TextContainer span={24}>
                <Row justify="center" align="middle">
                  <Col span={1}>
                    <Image src={clockIcon} preview={false} width={20} />
                  </Col>
                  <Col span={23}>
                    <P1>
                      {" "}
                      Estimated {GetEstimatedTime(menu.estimatedTime)}
                      for preparation
                    </P1>
                  </Col>
                </Row>
              </TextContainer>
              <Col span={4}>
                <AddOnButton
                  text="addons"
                  onClick={() => {
                    setOpenAddon(true);
                    setMenuItemId(menu._id);
                  }}
                />
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            {orderState.items.find((item) => item.item === menu._id) ? (
              <Row justify="center" align="middle">
                <Col span={5}>
                  <ActionButtons
                    src={minus}
                    preview={false}
                    onClick={() => HandleRemoveItem(menu._id)}
                  />
                </Col>
                <Col span={6}>
                  <CounterButton shape="circle" size="large">
                    {orderState.items.find((item) => item.item === menu._id)
                      ? orderState.items.map(
                          (item) => item.item === menu._id && item.quantity
                        )
                      : 0}
                  </CounterButton>
                </Col>
                <Col span={5}>
                  <ActionButtons
                    src={plus}
                    preview={false}
                    onClick={() => HandleAddItem(menu)}
                  />
                </Col>
              </Row>
            ) : (
              <Row justify="center" align="middle">
                <Col span={16}>
                  <AddOnButton
                    text="add to cart"
                    onClick={() => HandleAddToCart(menu)}
                  />
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
      <SpecialModal
        visible={openAddon}
        onCancel={() => setOpenAddon(false)}
        closable={false}
        footer={false}
      >
        <Addons
          setOpenAddon={setOpenAddon}
          menu={menu}
          setSelectedAddons={setSelectedAddons}
          HandleAddAddon={HandleAddAddon}
        />
      </SpecialModal>
    </Row>
  );
};

export default ItemList;
const Container = styled(Col)`
  text-align: left;
  margin-bottom: 3%;
  border-radius: 20px;
  &:hover {
    box-shadow: 10px 30px 20px #00000029;
  }
`;

const TextContainer = styled(Col)`
  margin-bottom: 2%;
`;

const PriceContainer = styled(Col)`
  text-align: center;
  background: #ffffffd9;
  margin-top: -22%;
  padding-top: 1%;
  padding-bottom: 1%;
  font-family: Montserrat-SemiBold;
  font-size: 25px;
  color: #1b2749;
  text-transform: capitalize;
`;

const ActionButtons = styled(Image)`
  cursor: pointer;
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

const H1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: 35px;
    color: #1b2749;
    text-transform: capitalize;
  }
`;
const P1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Regular;
    font-size: 18px;
    color: #9c9eaf;
  }
`;

const SpecialModal = styled(Modal)`
  .ant-modal-content {
    background: none;
    box-shadow: none;
  }
`;

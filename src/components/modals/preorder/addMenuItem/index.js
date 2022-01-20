import { Avatar, Button, Col, Image, Modal, Row, Typography } from "antd";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ACTIONS from "../../../../utils/actions/order.action";
import { OrderContext } from "../../../appLayout";
import ActionButton from "../../../buttons/actionButton";
import EditMenu from "../../editMenu";
import { URL } from "../../../../config";

const { Text } = Typography;

const AddMenuItem = () => {
  const { orderState, orderDispatch } = useContext(OrderContext);
  console.log(orderState);
  const [editMenu, setEditMenu] = useState(false);
  const [editMenuId, setEditMenuId] = useState("");
  const [guestsList, setGuestsList] = useState([]);

  const userExists = (id) => {
    return guestsList.some((el) => {
      return el._id === id;
    });
  };

  useEffect(() => {
    const abortControl = new AbortController();

    orderState.guests.map((guest) =>
      axios
        .get(URL + "user/" + guest)
        .then((res) =>
          userExists(res.data._id)
            ? console.log("user Exists")
            : setGuestsList((previous) => [...previous, res.data])
        )
        .catch((err) => console.log(err))
    );

    return () => {
      abortControl.abort();
    };
  }, []);

  // useEffect(() => {
  //   const abortController = new AbortController();
  //   orderState.items.map((order) =>
  //     menus.length > 0
  //       ? menus.map((menu) =>
  //           menu.id === order.item.id
  //             ? console.log("already added")
  //             : axios
  //                 .get(URL + "menu_item/" + order.item.id)
  //                 .then((res) =>
  //                   setMenus((previous) => [
  //                     ...previous,
  //                     {
  //                       id: res.data._id,
  //                       name: res.data.name,
  //                       image: res.data.image,
  //                       quantity: order.quantity,
  //                     },
  //                   ])
  //                 )
  //                 .catch((err) => console.log(err))
  //         )
  //       : axios
  //           .get(URL + "menu_item/" + order.item.id)
  //           .then((res) =>
  //             setMenus((previous) => [
  //               ...previous,
  //               {
  //                 id: res.data._id,
  //                 name: res.data.name,
  //                 image: res.data.image,
  //                 quantity: order.quantity,
  //               },
  //             ])
  //           )
  //           .catch((err) => console.log(err))
  //   );
  //   return function cleanup() {
  //     console.log("I am in cleanup function");
  //     abortController.abort();
  //   };
  // }, [orderState]);

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          {orderState.table.map((table, index) => (
            <TableContainer span={2} key={index}>
              {" "}
              T{table},
            </TableContainer>
          ))}
        </Row>
        {orderState.orderNo && (
          <Row justify="center" align="middle">
            <OrderNumberContainer span={24}>
              {orderState.orderNo}
            </OrderNumberContainer>
          </Row>
        )}
        <Row justify="center" align="middle">
          <MenuContainer span={22}>
            <Row justify="space-between" align="top">
              {orderState &&
                orderState.items.map((menu) => (
                  <Col span={12} key={menu.item}>
                    <Row justify="start" align="top">
                      <Col span={10}>
                        <Row justify="center" align="middle">
                          <Col span={24}>
                            <Image src={URL + menu.itemImage} preview={false} />
                          </Col>
                          <PriceContainer span={24}>
                            {menu.totalPrice.total} KD
                          </PriceContainer>
                        </Row>
                      </Col>
                      <Col span={12} offset={1}>
                        <Row justify="start" align="middle">
                          <Col span={24}>
                            <H1>
                              {menu.quantity} x {menu.itemName}
                            </H1>
                          </Col>
                          <Col span={24}>
                            {menu.customer.map((customer, index) =>
                              guestsList.map(
                                (guest) =>
                                  guest._id === customer && (
                                    <Col span={3} key={index}>
                                      <Avatar
                                        src={
                                          URL + guest.profile.replace("./", "")
                                        }
                                      />
                                    </Col>
                                  )
                              )
                            )}
                          </Col>
                          <Col span={24}>
                            {menu.estimatedTime?.split(" ")[0] * menu.quantity}{" "}
                            {menu.estimatedTime?.split(" ")[1]} for preparation
                          </Col>
                          <ActionButtonContainer span={24}>
                            <Row justify="start" align="middle">
                              <Col span={10}>
                                <ActionButton
                                  text="edit"
                                  background="#F86400"
                                  onClick={() => {
                                    setEditMenu(true);
                                    setEditMenuId(menu.item);
                                  }}
                                />
                              </Col>
                            </Row>
                          </ActionButtonContainer>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                ))}
            </Row>
          </MenuContainer>
        </Row>
      </Container>
      <Col span={24}>
        <SpecialModal
          visible={editMenu}
          onCancel={() => {
            setEditMenu(false);
          }}
          closable={false}
          footer={false}
        >
          {editMenu && (
            <EditMenu setEditMenu={setEditMenu} editMenuId={editMenuId} />
          )}
        </SpecialModal>
      </Col>
    </Row>
  );
};

export default AddMenuItem;

const Container = styled(Col)``;

const TableContainer = styled(Col)`
  font-family: Montserrat-Bold;
  font-size: 30px;
  color: #1b2749;
  text-transform: capitalize;
`;
const OrderNumberContainer = styled(Col)`
  font-family: Montserrat-Medium;
  font-size: 30px;
  color: #1b2749;
  text-transform: capitalize;
`;

const MenuContainer = styled(Col)`
  text-align: left;
`;

const H1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 18px;
    color: #1b2749;
    text-transform: capitalize;
  }
`;

const PriceContainer = styled(Col)`
  text-align: center;
  background: #ffffffd9;
  margin-top: -30%;
  padding-top: 1%;
  padding-bottom: 1%;
  font-family: Montserrat-SemiBold;
  font-size: 15px;
  color: #1b2749;
  text-transform: capitalize;
`;

const ActionButtonContainer = styled(Col)`
  margin-top: 5%;
  margin-bottom: 5%;
`;

const SpecialModal = styled(Modal)`
  .ant-modal-content {
    background: none;
    box-shadow: none;
  }
`;

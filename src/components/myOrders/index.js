import { Col, Row } from "antd";
import { useContext } from "react";
import styled from "styled-components";
import useFetch from "../../hooks/useFetch";
import { UserContext } from "../appLayout";
import { URL } from "../../config";

const MyOrders = () => {
  const userId = localStorage.user;

  const {
    data: orders,
    noData,
    isLoading,
    error,
  } = useFetch(URL + "order/user/" + userId);
  console.log(orders);
  return (
    <Row justify="center" align="middle">
      <Container span={22}>
        {orders?.orders.result.map((order) => (
          <Row justify="center" align="middle" key={order._id}>
            <Col span={12}> {order.orderNo}</Col>
            <Col span={12}> {order.orderStatus}</Col>
          </Row>
        ))}
      </Container>
    </Row>
  );
};

export default MyOrders;

const Container = styled(Col)`
  text-align: left;
`;

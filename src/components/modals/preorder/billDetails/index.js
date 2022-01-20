import { Col, Row, Typography } from "antd";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ACTIONS from "../../../../utils/actions/order.action";
import { OrderContext } from "../../../appLayout";

const { Title, Text } = Typography;

const BillDetails = () => {
  const [priceList, setPriceList] = useState([]);
  const { orderState, orderDispatch } = useContext(OrderContext);
  useEffect(() => {
    const abortControl = new AbortController();

    orderState.items.map((item) =>
      setPriceList((previous) => [...previous, item.totalPrice.total])
    );

    return () => {
      abortControl.abort();
    };
  }, [orderState.items]);

  const GetTotalBill = (num, percent) => {
    return num + ((num + orderState.price.tip) / 100) * percent;
  };

  useEffect(() => {
    const abortControl = new AbortController();

    orderDispatch({
      type: ACTIONS.PRICE,
      payload: {
        tax: 10,
        points: 500,
        subTotal: priceList.reduce((a, b) => a + b, 0),
        total: GetTotalBill(
          priceList.reduce((a, b) => a + b, 0),
          10
        ),
      },
    });

    return () => {
      abortControl.abort();
    };
  }, [priceList]);

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Col span={22}>
            <H1>bill details</H1>
          </Col>
        </Row>
        <Row justify="space-between" align="middle">
          <Col span={22}>
            <Row justify="space-between" align="middle">
              <Col span={11} offset={1}>
                <P1>Total item price</P1>
              </Col>
              <PriceContainer span={6}>
                {priceList.reduce((a, b) => a + b, 0)}
              </PriceContainer>
            </Row>
          </Col>
          <Col span={22}>
            <Row justify="space-between" align="middle">
              <Col span={11} offset={1}>
                <P1>Tax</P1>
              </Col>
              <PriceContainer span={6}>10%</PriceContainer>
            </Row>
          </Col>
          {/* <Col span={24}>
            <P1>Addon price</P1>
          </Col> */}
          <Col span={22}>
            <Row justify="space-between" align="middle">
              <Col span={11} offset={1}>
                <P1>BYT</P1>
              </Col>
              <PriceContainer span={6}>500</PriceContainer>
            </Row>
          </Col>
          <Col span={22}>
            <Row justify="space-between" align="middle">
              <Col span={11} offset={1}>
                <P1>TIP</P1>
              </Col>
              <PriceContainer span={6}>{orderState.price.tip}</PriceContainer>
            </Row>
          </Col>
          <FinalBillContainer span={24}>
            <Row justify="space-between" align="middle">
              <Col span={11} offset={1}>
                <P1 style={{ color: "#F86401" }}>Amount to be paid</P1>
              </Col>
              <FinalBill span={3}>
                {GetTotalBill(
                  priceList.reduce((a, b) => a + b, 0),
                  10
                )}
              </FinalBill>
            </Row>
          </FinalBillContainer>
        </Row>
      </Container>
    </Row>
  );
};

export default BillDetails;

const Container = styled(Col)`
  text-align: left;
`;

const H1 = styled(Title)`
  font-family: Montserrat-SemiBold;
  font-size: 25px;
  color: #1b2749;
  text-transform: capitalize;
`;

const P1 = styled(Text)`
  font-family: Montserrat-Medium;
  font-size: 20px;
  color: #8d92a3;
  text-transform: capitalize;
`;

const PriceContainer = styled(Col)`
  font-family: Montserrat-Medium;
  font-size: 20px;
  color: #8d92a3;
  text-transform: capitalize;
  text-align: right;
`;

const FinalBillContainer = styled(Col)`
  background: #feece0;
  padding-top: 2%;
  padding-bottom: 2%;
`;

const FinalBill = styled(Col)`
  font-family: Montserrat-Medium;
  font-size: 20px;
  color: #f86401;
  text-transform: capitalize;
  text-align: left;
`;

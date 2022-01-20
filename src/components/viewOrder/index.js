import { Avatar, Checkbox, Col, Divider, Image, Row, Typography } from "antd";
import styled, { css } from "styled-components";

import wallet from "../../assets/View Order/wallet (1).svg";
import points from "../../assets/View Order/Group 4920.svg";
import reminder from "../../assets/View Order/Icon awesome-share-square.svg";
import fullPay from "../../assets/View Order/Group 4851.svg";
import { OrderContext } from "../appLayout";
import { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import { useParams, useHistory } from "react-router-dom";
import SubmitButton from "../buttons/submitButton";
import { URL } from "../../config";

const { Text } = Typography;

const ViewOrder = () => {
  const { orderId } = useParams();
  const history = useHistory();

  const {
    data: order,
    noData,
    isLoading,
    error,
  } = useFetch(URL + "order/" + orderId);
  console.log(order);
  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Col span={18}>
            <Row justify="center" align="middle">
              <Col span={8}>
                <H1>order number :</H1>
              </Col>
              <Col span={8}>
                <P1>{order?.orderNo}</P1>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <PriceContainer span={22}>
            <Row justify="space-between" align="middle">
              <Col span={6}>
                <H2>sub Total</H2>
              </Col>
              <Col span={6}>
                <Price>{order?.price.total} KD</Price>
              </Col>
            </Row>
          </PriceContainer>
        </Row>
        <Row justify="space-between" align="middle">
          <CardContainer span={11}>
            <Row justify="center" align="top">
              <Col span={4}>
                <Avatar
                  size="large"
                  src={
                    URL +
                    order?.items[0].customer[0].customerId.profile.replace(
                      "./",
                      ""
                    )
                  }
                />
              </Col>
              <Col span={14}>
                <Row justify="start" align="middle">
                  {order?.items.map((item) => (
                    <Col span={22}>
                      {item.customer[0].quantity} x {item.item.name}
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col span={6}>
                <Price>{order?.price.total} KD</Price>
              </Col>
            </Row>
            <Row justify="center" align="middle">
              <Col span={22}>
                <Divider />
              </Col>
            </Row>
            <Row justify="space-between" align="middle">
              <ActionButton span={5}>
                <Row justify="center" align="middle">
                  <Col span={4}>
                    <Image src={wallet} preview={false} />
                  </Col>
                  <Col span={18}>pay now</Col>
                </Row>
              </ActionButton>
              <ActionButton span={6}>
                <Row justify="center" align="middle">
                  <Col span={4}>
                    <Image src={points} preview={false} />
                  </Col>
                  <Col span={18}>use byt points</Col>
                </Row>
              </ActionButton>
              <ActionButton span={6} $disabled>
                <Row justify="center" align="middle">
                  <Col span={4}>
                    <Image src={reminder} preview={false} />
                  </Col>
                  <Col span={18}>send reminder</Col>
                </Row>
              </ActionButton>
              <ActionButton span={5}>
                <Row justify="center" align="middle">
                  <Col span={4}>
                    <Image src={fullPay} preview={false} />
                  </Col>
                  <Col span={18}>pay table</Col>
                </Row>
              </ActionButton>
            </Row>
          </CardContainer>
        </Row>
        <Row justify="center" align="middle">
          <Col span={8}>
            <SubmitButton
              text="track order"
              onClick={() => history.push("/track-reservation/" + orderId)}
            />
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default ViewOrder;

const Container = styled(Col)``;

const CardContainer = styled(Col)`
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 9px;
  text-align: left;
  padding: 2%;
  margin-top: 2%;
  margin-bottom: 2%;
  font-family: Montserrat-Regular;
  font-size: 18px;
  color: #7f8592;
`;

const ActionButton = styled(Col)`
  background: #1b2749;
  border-radius: 5px;
  font-family: Montserrat-SemiBold;
  font-size: 8px;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  padding: 2%;
  cursor: pointer;
  ${(props) =>
    props.$disabled &&
    css`
      background: #ffffff;
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 5px;
      color: #1b2749;
    `}
`;

const Select = styled(Checkbox)`
  .ant-checkbox {
    background: transparent;
    border: 1px solid #1b2749;
  }
`;

const Price = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: 18px;
    color: #f86502;
  }
`;

const PriceContainer = styled(Col)`
  margin-top: 5%;
  margin-bottom: 5%;
`;

const H1 = styled(Text)`
  font-family: Montserrat-SemiBold;
  font-size: 40px;
  color: #1b2749;
  text-transform: capitalize;
`;
const H2 = styled(Text)`
  font-family: Montserrat-SemiBold;
  font-size: 30px;
  color: #000000;
  text-transform: uppercase;
`;

const P1 = styled(Text)`
  font-family: Montserrat-Regular;
  font-size: 30px;
  color: #1b2749;
  text-transform: capitalize;
`;

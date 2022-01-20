import { Col, Image, Row, Typography } from "antd";

import dineIcon from "../../../../assets/Book Table/dineIn.svg";
import dineIconSelected from "../../../../assets/Book Table/Stockholm-icons---Food---Dinner.svg";
import pickupIcon from "../../../../assets/Book Table/Stockholm-icons---Cooking---Dishes.svg";
import pickupIconSelected from "../../../../assets/Book Table/Stockholm-icons---Cooking---Dishes-1.svg";
import deliveryIconSelected from "../../../../assets/Book Table/Stockholm-icons---Food---Ice-cream.svg";
import deliveryIcon from "../../../../assets/Book Table/Delivery.svg";
import styled, { css } from "styled-components";

const { Paragraph } = Typography;

const OrderType = ({
  dineIn,
  setDineIn,
  pickup,
  setPickup,
  delivery,
  setDelivery,
}) => {
  const HandleDine = () => {
    setDineIn(true);
    setPickup(false);
    setDelivery(false);
  };
  const HandlePickup = () => {
    setDineIn(false);
    setPickup(true);
    setDelivery(false);
  };
  const HandleDelivery = () => {
    setDineIn(false);
    setPickup(false);
    setDelivery(true);
  };

  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <Row justify="center" align="top">
          <TypeContainer span={7} $active={dineIn} onClick={HandleDine}>
            <Row justify="center" align="middle">
              <Col span={24}>
                <Image
                  src={dineIn ? dineIconSelected : dineIcon}
                  preview={false}
                  width={50}
                />
              </Col>
              <Col span={24}>dine-In</Col>
            </Row>
          </TypeContainer>
          <TypeContainer span={7} onClick={HandlePickup} $active={pickup}>
            <Row justify="center" align="middle">
              <Col span={24}>
                <Image
                  src={pickup ? pickupIconSelected : pickupIcon}
                  preview={false}
                  width={50}
                />
              </Col>
              <Col span={24}>pickup</Col>
            </Row>
          </TypeContainer>
          <TypeContainer
            span={7}
            $color="#FA7268"
            onClick={HandleDelivery}
            $active={delivery}
          >
            <Row justify="center" align="middle">
              <Col span={24}>
                <Image
                  src={delivery ? deliveryIconSelected : deliveryIcon}
                  preview={false}
                  width={50}
                />
              </Col>
              <Col span={24}>
                <Row justify="center" align="middle">
                  <Col span={24}>delivery</Col>
                  <Col span={24}>
                    <P>(coming soon)</P>
                  </Col>
                </Row>
              </Col>
            </Row>
          </TypeContainer>
        </Row>
      </Col>
    </Row>
  );
};

export default OrderType;

const TypeContainer = styled(Col)`
  margin: 2%;
  padding: 2%;
  font-family: Montserrat-SemiBold;
  font-size: 20px;
  color: ${(props) => props.$color || "#ffffff"};
  text-transform: capitalize;
  text-align: center;
  cursor: pointer;
  ${(props) =>
    props.$active &&
    css`
      background: #ffffff;
      box-shadow: 0px 20px 25px #0000001a;
      border-radius: 20px;
      color: #1b2749;
    `}
`;

// const H1 = styled(Title)`
//   &.ant-typography {
//     font-family: Montserrat-SemiBold;
//     font-size: 30px;
//     color: #ffffff;
//     text-transform: uppercase;
//     text-align: left;
//   }
// `;

const P = styled(Paragraph)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: 8px;
    color: #fa7268;
  }
`;

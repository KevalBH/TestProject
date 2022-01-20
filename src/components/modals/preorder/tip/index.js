import { Col, Divider, Image, Row, Typography } from "antd";
import { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";

import tipIcon from "../../../../assets/View Cart/Group 5624.svg";
import couponIcon from "../../../../assets/View Cart/Group 5944.svg";
import rightArrow from "../../../../assets/View Cart/Path 3476.svg";
import ACTIONS from "../../../../utils/actions/order.action";
import { OrderContext } from "../../../appLayout";

const { Text } = Typography;

const Tip = () => {
  const [selectedTip, setSelectedTip] = useState(0);
  const { orderDispatch } = useContext(OrderContext);

  useEffect(() => {
    const abortControl = new AbortController();

    orderDispatch({ type: ACTIONS.TIP, payload: selectedTip });

    return () => {
      abortControl.abort();
    };
  }, [selectedTip]);

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Col span={11}>
            <Row justify="center" align="middle">
              <Col span={2}>
                <Image src={tipIcon} preview={false} />
              </Col>
              <Col span={21} offset={1}>
                <H1>tip your hunger saviour</H1>
              </Col>
              <Col span={18}>
                <Row justify="space-between" align="middle">
                  <TipContainer
                    span={5}
                    $selected={selectedTip === 20 ? true : false}
                    onClick={() => setSelectedTip(20)}
                    onDoubleClick={() => setSelectedTip(0)}
                  >
                    kd 20
                  </TipContainer>
                  <TipContainer
                    span={5}
                    $selected={selectedTip === 30 ? true : false}
                    onClick={() => setSelectedTip(30)}
                    onDoubleClick={() => setSelectedTip(0)}
                  >
                    kd 30
                  </TipContainer>
                  <TipContainer
                    span={5}
                    $selected={selectedTip === 40 ? true : false}
                    onClick={() => setSelectedTip(40)}
                    onDoubleClick={() => setSelectedTip(0)}
                  >
                    kd 40
                  </TipContainer>
                  <TipContainer
                    span={5}
                    $selected={selectedTip === 50 ? true : false}
                    onClick={() => setSelectedTip(50)}
                    onDoubleClick={() => setSelectedTip(0)}
                  >
                    kd 50
                  </TipContainer>
                </Row>
              </Col>
            </Row>
          </Col>
          <Divider type="vertical" />
          <CouponContainer span={11} onClick={() => alert("coupon")}>
            <Row justify="center" align="middle">
              <Col span={2}>
                <Image src={couponIcon} preview={false} />
              </Col>
              <Col span={18} offset={1}>
                <H2>apply coupon</H2>
              </Col>
              <Col span={2} offset={1}>
                <Image src={rightArrow} preview={false} />
              </Col>
            </Row>
          </CouponContainer>
        </Row>
      </Container>
    </Row>
  );
};

export default Tip;
const Container = styled(Col)`
  text-align: left;
  margin-top: 2%;
  margin-bottom: 2%;
`;

const TipContainer = styled(Col)`
  font-family: Montserrat-Medium;
  font-size: 12px;
  color: #000000;
  border: 2px solid #dfe0e5;
  text-align: center;
  text-transform: uppercase;
  padding: 2%;
  cursor: pointer;
  border-radius: 8px;
  ${(props) =>
    props.$selected &&
    css`
      background: #f86400;
      color: #ffffff;
    `}
`;

const CouponContainer = styled(Col)`
  cursor: pointer;
`;

const H1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: 25px;
    color: #111111;
    text-transform: capitalize;
  }
`;
const H2 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: 30px;
    color: #8d92a3;
    text-transform: uppercase;
  }
`;

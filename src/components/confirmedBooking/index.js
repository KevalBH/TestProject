import { Avatar, Col, Image, Row, Typography } from "antd";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

import BG from "../../assets/Confirmed Booking/Group 6037.svg";
import facebook from "../../assets/Confirmed Booking/facebook.svg";
import instagram from "../../assets/Confirmed Booking/Group 4990.svg";
import twitter from "../../assets/Confirmed Booking/twitter.svg";
import barcode from "../../assets/Confirmed Booking/bar_code.png";
import useFetch from "../../hooks/useFetch";
import SubmitButton from "../buttons/submitButton";
import CancelButton from "../buttons/cancelButton";
import { URL } from "../../config";

const { Text } = Typography;

const ConfirmedBooking = () => {
  const { orderId } = useParams();
  const history = useHistory();

  const { data: order } = useFetch(URL + "order/" + orderId);

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <BackgroundImage span={24}>
            <Image src={BG} preview={false} />
          </BackgroundImage>
        </Row>
        {order && (
          <Content justify="center" align="middle">
            <ContentContainer span={22}>
              <Row justify="start" align="top">
                <Col span={22}>
                  <Row justify="center" align="middle">
                    <Col span={3} offset={1}>
                      <Image
                        src={
                          URL + order.items[0].customer[0].customerId.profile
                        }
                        preview={false}
                      />
                    </Col>
                    <Col span={18} offset={1} style={{ textAlign: "left" }}>
                      <Row justify="center" align="middle">
                        <Col span={24}>
                          <H1>booking confirmation</H1>
                        </Col>
                        <Col span={24}>
                          <P2>
                            {order.deliveryTime.split("T")[0].split("-")[2]}-
                            {order.deliveryTime.split("T")[0].split("-")[1]}-
                            {order.deliveryTime.split("T")[0].split("-")[0]}{" "}
                            {order.deliveryTime.split("T")[1].split(".")[0]}
                          </P2>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <OrderNo span={2}>#{order.orderNo}</OrderNo>
                <Bar span={1}></Bar>
              </Row>
              <Row justify="center" align="middle">
                <Col span={11}>
                  <Row justify="center" align="middle">
                    <Col span={24}>
                      <Row justify="space-between" align="middle">
                        <Col span={11}>
                          <H2>customer name</H2>
                        </Col>
                        <Col span={11}>
                          <P1>{order.items[0].customer[0].customerId.name}</P1>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <Row justify="space-between" align="middle">
                        <Col span={11}>
                          <H2>table No</H2>
                        </Col>
                        <Col span={11}>
                          <P1>T1</P1>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <Row justify="space-between" align="middle">
                        <Col span={11}>
                          <H2>party members</H2>
                        </Col>
                        <Col span={11}>
                          <P1>{order.items[0].customer[0].customerId.name}</P1>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col span={11}>
                  <Row justify="center" align="middle">
                    <Col span={24}>
                      <Row justify="space-between" align="middle">
                        <Col span={11}>
                          <H2>type</H2>
                        </Col>
                        <Col span={11}>
                          <P1>{order.orderType}</P1>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <Row justify="space-between" align="middle">
                        <Col span={11}>
                          <H2>Seating preference</H2>
                        </Col>
                        <Col span={11}>
                          <P1>None</P1>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <Row justify="space-between" align="middle">
                        <Col span={11}>
                          <H2>byt member</H2>
                        </Col>
                        <Col span={11}>
                          <P1>Gold</P1>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row justify="center" align="middle">
                <PaymentContainer span={22}>
                  <Row justify="space-between" align="middle">
                    <Col span={18}>
                      <H2>payment method</H2>
                    </Col>
                    <Col span={4}>
                      <P1>{order.paymentMethod}</P1>
                    </Col>
                  </Row>
                </PaymentContainer>
              </Row>
              <Row justify="center" align="middle">
                <Col span={22}>
                  <Row justify="space-between" align="middle">
                    <Col span={11}>
                      <H2>share link to join table</H2>
                    </Col>
                    <Col span={11}>
                      <Row justify="center" align="middle">
                        <Col span={4}>
                          <Avatar src={facebook} size="large" />
                        </Col>
                        <Col span={4}>
                          <Avatar src={instagram} size="large" />
                        </Col>
                        <Col span={4}>
                          <Avatar src={twitter} size="large" />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row justify="center" align="middle">
                <BarcodeContainer span={12}>
                  <Image src={barcode} preview={false} width={500} />
                </BarcodeContainer>
              </Row>
            </ContentContainer>
          </Content>
        )}
        <Row justify="center" align="middle">
          <ButtonContainer span={12}>
            <Row justify="space-between" align="middle">
              <Col span={11}>
                <SubmitButton
                  text="track order"
                  onClick={() => history.push("/track-reservation/" + orderId)}
                />
              </Col>
              <Col span={11}>
                <CancelButton
                  text="view order"
                  onClick={() => history.push("/view-order/" + orderId)}
                />
              </Col>
            </Row>
          </ButtonContainer>
        </Row>
      </Container>
    </Row>
  );
};

export default ConfirmedBooking;

const Container = styled(Col)`
  background: #eeeeee;
  padding: 2%;
  text-align: left;
`;

const BackgroundImage = styled(Col)``;

const Content = styled(Row)`
  margin-top: -63%;
`;

const ContentContainer = styled(Col)`
  background: #ffffff;
  padding-top: 5%;
  padding-bottom: 5%;
`;

const Bar = styled(Col)`
  background: #1b2749;
  height: 100px;
  max-width: 1%;
`;

const OrderNo = styled(Col)`
  transform: rotate(-90deg);
  text-transform: uppercase;
  margin-top: 3%;
  font-family: SFPro-Regular;
  font-size: 19px;
  color: #dfe0e5;
`;

const PaymentContainer = styled(Col)`
  padding-top: 2%;
  padding-bottom: 2%;
  margin-top: 2%;
  margin-bottom: 2%;
  border-top: 1px dashed #fcdfdd;
  border-bottom: 1px dashed #fcdfdd;
`;

const ButtonContainer = styled(Col)`
  margin-top: 5%;
  margin-bottom: 5%;
`;

const BarcodeContainer = styled(Col)`
  margin-top: 10%;
`;

const H1 = styled(Text)`
  font-family: Montserrat-SemiBold;
  font-size: 30px;
  color: #1b2749;
  text-transform: capitalize;
`;
const H2 = styled(Text)`
  font-family: Montserrat-SemiBold;
  font-size: 25px;
  color: #7f8592;
  text-transform: capitalize;
`;
const P1 = styled(Text)`
  font-family: Montserrat-SemiBold;
  font-size: 20px;
  color: #1b2749;
  text-transform: capitalize;
`;
const P2 = styled(Text)`
  font-family: Montserrat-SemiBold;
  font-size: 20px;
  color: #7f8592;
  text-transform: uppercase;
`;

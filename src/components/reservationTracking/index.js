import { Col, Image, Row, Typography } from "antd";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../../hooks/useFetch";
import SubmitButton from "../buttons/submitButton";
import check from "../../assets/Reservation status/Icon awesome-check-circle.svg";
import uncheck from "../../assets/Reservation status/Icon awesome-check-circle-1.svg";
import { URL } from "../../config";

const { Text } = Typography;

const ReservationTracking = () => {
  const { orderId } = useParams();
  const history = useHistory();

  const { data: order } = useFetch(URL + "order/" + orderId);
  console.log(order);
  return (
    <Row justify="center" align="middle">
      {order && (
        <Container span={24}>
          <Row justify="center" align="middle">
            <StatusContainer span={16}>
              <Row justify="center" align="middle">
                <Col span={4}>
                  <Row justify="center" align="middle">
                    <Col span={24}>
                      <Image
                        src={order.orderStatus === "pending" ? check : uncheck}
                        preview={false}
                      />
                    </Col>
                    <Col span={24}>
                      <H1
                        $color={
                          order.orderStatus === "pending"
                            ? "#FE6100"
                            : "#E9E9E9"
                        }
                      >
                        ordered
                      </H1>
                    </Col>
                  </Row>
                </Col>
                <Col span={4}>
                  <Row justify="center" align="middle">
                    <Col span={24}>
                      <Image
                        src={
                          order.orderStatus === "preparing" ? check : uncheck
                        }
                        preview={false}
                      />
                    </Col>
                    <Col span={24}>
                      <H1
                        $color={
                          order.orderStatus === "preparing"
                            ? "#FE6100"
                            : "#E9E9E9"
                        }
                      >
                        preparing
                      </H1>
                    </Col>
                  </Row>
                </Col>
                <Col span={4}>
                  <Row justify="center" align="middle">
                    <Col span={24}>
                      <Image
                        src={order.orderStatus === "ready" ? check : uncheck}
                        preview={false}
                      />
                    </Col>
                    <Col span={24}>
                      <H1
                        $color={
                          order.orderStatus === "ready" ? "#FE6100" : "#E9E9E9"
                        }
                      >
                        ready
                      </H1>
                    </Col>
                  </Row>
                </Col>
                <Col span={4}>
                  <Row justify="center" align="middle">
                    <Col span={24}>
                      <Image
                        src={order.orderStatus === "complete" ? check : uncheck}
                        preview={false}
                      />
                    </Col>
                    <Col span={24}>
                      <H1
                        $color={
                          order.orderStatus === "complete"
                            ? "#FE6100"
                            : "#E9E9E9"
                        }
                      >
                        completed
                      </H1>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </StatusContainer>
          </Row>
          <Row justify="center" align="middle">
            <PreparationTime span={16}>
              estimated {order.estimatedTime} seconds to prepare your order
            </PreparationTime>
          </Row>
          <Row justify="center" align="middle">
            <ButtonContainer span={8}>
              <SubmitButton
                text="view order"
                onClick={() => history.push("/view-order/" + orderId)}
              />
            </ButtonContainer>
          </Row>
        </Container>
      )}
    </Row>
  );
};

export default ReservationTracking;

const Container = styled(Col)``;

const StatusContainer = styled(Col)`
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 13px;
  padding-top: 2%;
  padding-bottom: 2%;
  margin-top: 4%;
  margin-bottom: 2%;
`;
const H1 = styled(Text)`
  font-family: Montserrat-Medium;
  font-size: 20px;
  color: ${(props) => props.$color};
  text-transform: capitalize;
`;
const ButtonContainer = styled(Col)`
  margin-top: 5%;
  margin-bottom: 5%;
`;

const PreparationTime = styled(Col)`
  font-family: Montserrat-Regular;
  font-size: 15px;
  color: #a19a9a;
  text-transform: capitalize;
  text-align: right;
`;

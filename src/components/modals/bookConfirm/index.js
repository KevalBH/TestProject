import { Col, Image, Row } from "antd";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import checkIcon from "../../../assets/Reservation (pre_Order)/Group 5654.svg";
import CancelButton from "../../buttons/cancelButton";
import SubmitButton from "../../buttons/submitButton";

const BookConfim = ({ orderId }) => {
  const history = useHistory();
  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Col span={24}>
            <Image src={checkIcon} preview={false} />
          </Col>
          <TextContainer span={24}>order successfully Done</TextContainer>
          <ButtonContainer span={16}>
            <Row justify="space-between" align="middle">
              <Col span={8}>
                <SubmitButton
                  text="track order"
                  onClick={() => history.push("/track-order")}
                />
              </Col>
              <Col span={8}>
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

export default BookConfim;

const Container = styled(Col)`
  background: #1b2749;
  text-align: center;
  padding-top: 10%;
  padding-bottom: 10%;
  border-radius: 30px;
`;

const TextContainer = styled(Col)`
  font-family: SFPro-Regular;
  font-size: 50px;
  color: #ffffff;
  text-transform: capitalize;
`;

const ButtonContainer = styled(Col)``;

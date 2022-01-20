import { Button, Col, Image, Row, Typography } from "antd";
import styled from "styled-components";

import addIcon from "../../../../../assets/Book Table/close.svg";
const { Text } = Typography;

const Guests = ({ adultCount, setAdultCount, kidCount, setKidCount }) => {
  const AddAdult = () => {
    setAdultCount((previous) => previous + 1);
  };
  const RemoveAdult = () => {
    setAdultCount((previous) => previous - 1);
  };
  const AddKid = () => {
    setKidCount((previous) => previous + 1);
  };
  const RemoveKid = () => {
    setKidCount((previous) => previous - 1);
  };
  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <H1>guests</H1>
      </Col>
      <Col span={24} style={{ textAlign: "center" }}>
        <Row justify="center" align="middle">
          <Counter span={4} onClick={RemoveAdult}>
            {adultCount === 0 ? "" : adultCount - 1}
          </Counter>
          <Counter span={5} offset={4} onClick={RemoveKid}>
            {kidCount === 0 ? "" : kidCount - 1}
          </Counter>
        </Row>
        <Row justify="center" align="middle">
          <Container span={12}>
            <Row justify="center" align="middle">
              <Col span={11}>
                <H2>{adultCount}</H2>{" "}
                <P1>{adultCount === 1 ? "adult" : "adults"}</P1>
              </Col>
              <Col span={11} offset={2}>
                <P1>{kidCount === 1 ? "kid" : "kids"}</P1> <H2>{kidCount}</H2>
              </Col>
            </Row>
          </Container>
        </Row>
        
        <Row justify="center" align="middle">
          <ButtonContainer span={12}>
            <Row justify="center" align="middle">
              <Col span={4}></Col>
              <Col span={4}>
                <Button
                  shape="circle"
                  size="large"
                  type="ghost"
                  style={{
                    border: "none ",
                  }}
                  icon={
                    <Image
                      src={addIcon}
                      preview={false}
                      width={60}
                      style={{
                        border: "10px solid #48526d",
                        borderRadius: "50%",
                      }}
                    />
                  }
                ></Button>
              </Col>
              <Col span={4}></Col>
            </Row>
          </ButtonContainer>
        </Row>
        <Row justify="center" align="middle">
          <Counter span={4} onClick={AddAdult}>
            {adultCount + 1}
          </Counter>
          <Counter span={5} offset={4} onClick={AddKid}>
            {kidCount + 1}
          </Counter>
        </Row>
      </Col>
    </Row>
  );
};

export default Guests;

const Container = styled(Col)`
  background: #48526d;
  border-radius: 10px;
  padding-top: 0.2%;
  padding-bottom: 0.2%;
  text-align: center;
`;

const ButtonContainer = styled(Col)`
  margin-top: -6.7%;
`;

const H1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 30px;
    color: #ffffff;
    text-transform: uppercase;
  }
`;

const Counter = styled(Col)`
  font-family: Montserrat-Regular;
  font-size: 25px;
  color: #ffffff;
  cursor: pointer;
  user-select: none;
`;

const H2 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Bold;
    font-size: 25px;
    color: #ffffff;
  }
`;

const P1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: 25px;
    color: #ffffff;
  }
`;

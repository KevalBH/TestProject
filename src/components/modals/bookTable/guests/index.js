import { Col, Image, Row, Typography } from "antd";
import styled from "styled-components";

import addIcon from "../../../../assets/Book Table/plus (5).svg";
import minusIcon from "../../../../assets/Book Table/minus (1).svg";

const { Text } = Typography;

const Guests = ({ adultCount, setAdultCount, kidCount, setKidCount }) => {
  const AddAdult = () => {
    setAdultCount((previousCount) => previousCount + 1);
  };

  const RemoveAdult = () => {
    setAdultCount((previousCount) =>
      previousCount > 0 ? previousCount - 1 : previousCount
    );
  };

  const AddKid = () => {
    setKidCount((previousCount) => previousCount + 1);
  };

  const RemoveKid = () => {
    setKidCount((previousCount) =>
      previousCount > 0 ? previousCount - 1 : previousCount
    );
  };

  return (
    <Row justify="center" align="middle">
      <Container span={22}>
        <Row justify="center" align="middle">
          <Col span={24}>
            <H1>how many guests?</H1>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={20}>
            <P1>
              {adultCount} {adultCount > 0 ? "adults" : "adult"}
            </P1>
          </Col>
          <Col span={4}>
            <Row justify="center" align="middle">
              <CounterButtons span={11} onClick={RemoveAdult}>
                <Image src={minusIcon} preview={false} width={20} />
              </CounterButtons>
              <CounterButtons span={11} offset={2} onClick={AddAdult}>
                <Image src={addIcon} preview={false} width={20} />
              </CounterButtons>
            </Row>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={20}>
            <P1>
              {kidCount} {kidCount > 0 ? "kids" : "kid"}
            </P1>
          </Col>
          <Col span={4}>
            <Row justify="center" align="middle">
              <CounterButtons span={11} onClick={RemoveKid}>
                <Image src={minusIcon} preview={false} width={20} />
              </CounterButtons>
              <CounterButtons span={11} offset={2} onClick={AddKid}>
                <Image src={addIcon} preview={false} width={20} />
              </CounterButtons>
            </Row>
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default Guests;

const Container = styled(Col)``;

const CounterButtons = styled(Col)`
  cursor: pointer;
`;

const H1 = styled(Text)`
  font-family: Montserrat-Medium;
  font-size: 18px;
  color: #ffffff;
  text-transform: capitalize;
`;
const P1 = styled(Text)`
  font-family: Arial-Regular;
  font-size: 25px;
  color: #ffffff;
  text-transform: capitalize;
`;

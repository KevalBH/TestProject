import { Col, Row, Typography } from "antd";
import styled from "styled-components";
import ViewAllButton from "../../buttons/viewAllButton";
import LunchList from "./LunchList";

const { Title, Text } = Typography;

const Lunch = () => {
  return (
    <Row justify="center" align="middle">
      <Container span={22}>
        <Row justify="start" align="middle">
          <HeadingContainer span={24}>
            <Row justify="start" align="middle">
              <Col span={20}>
                <H1>lunch</H1>
                <P1>lorem ipsum is simply dummy text of the printing</P1>
              </Col>
              <Col span={4}>
                <ViewAllButton text="view all" />
              </Col>
            </Row>
          </HeadingContainer>
          <ItemContainer span={24}>
            <LunchList />
          </ItemContainer>
        </Row>
      </Container>
    </Row>
  );
};

export default Lunch;

const Container = styled(Col)`
  text-align: left;
`;

const HeadingContainer = styled(Col)``;
const ItemContainer = styled(Col)`
  margin-top: 5%;
  margin-bottom: 3%;
`;

const H1 = styled(Title)`
  &.ant-typography {
    font-family: Montserrat-Bold;
    font-size: 35px;
    color: #1b2749;
    text-transform: uppercase;
  }
`;
const P1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 20px;
    color: #858484;
  }
`;

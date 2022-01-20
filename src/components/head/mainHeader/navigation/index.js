import { Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const { Text } = Typography;

const Navigation = () => {
  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <Row justify="center" align="middle">
          <Col span={6}>
            <Link to="/">
              <H1 $selected>Home</H1>
            </Link>
          </Col>
          <Col span={6}>
            <Link to="/aboutus">
              <H1> Aboutus</H1>
            </Link>
          </Col>
          <Col span={6}>
            <Link to="/reservation">
              <H1>Reservation</H1>
            </Link>
          </Col>
          <Col span={6}>
            <Link to="/contactus">
              <H1> Contactus</H1>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Navigation;

const H1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Regular;
    font-size: 15px;
    color: #ffffff;
    opacity: 0.65;
    ${(props) =>
      props.$selected &&
      css`
        opacity: 1;
      `}
  }
`;

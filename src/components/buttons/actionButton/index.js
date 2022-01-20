import { Col, Row } from "antd";
import styled from "styled-components";

const ActionButton = ({
  text,
  background,
  onClick,
  color = "#ffffff",
  fontsize = "15px",
}) => {
  return (
    <Row justify="center" align="middle">
      <Container
        span={24}
        background={background}
        onClick={onClick}
        color={color}
        fontsize={fontsize}
      >
        {text}
      </Container>
    </Row>
  );
};

export default ActionButton;

const Container = styled(Col)`
  box-shadow: 0px 2px 4px #00000029;
  border-radius: 4px;
  background: ${(props) => props.background};
  font-family: Montserrat-SemiBold;
  font-size: ${(props) => props.fontsize};
  color: ${(props) => props.color};
  text-transform: capitalize;
  text-align: center;
  cursor: pointer;
`;

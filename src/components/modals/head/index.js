import { Col, Image, Row, Typography } from "antd";
import styled from "styled-components";

import close from "../../../assets/HomePage/Icon material-close.svg";

const { Title } = Typography;

const Head = ({ text, onClick }) => {
  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Col span={22}>
            <H1>{text}</H1>
          </Col>
          <CloseButton span={2} onClick={onClick}>
            <Image src={close} preview={false} width={20} />
          </CloseButton>
        </Row>
      </Container>
    </Row>
  );
};

export default Head;

const Container = styled(Col)`
  background: #fff6f0;
  border-radius: 24px 24px 0 0;
  padding: 2%;
  text-align: left;
`;

const CloseButton = styled(Col)`
  cursor: pointer;
`;

const H1 = styled(Title)`
  &.ant-typography {
    font-family: Montserrat-Bold;
    font-size: 35px;
    color: #f86401;
    text-transform: capitalize;
  }
`;

import { Col, Image, Row, Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

const SubmitButton = ({ icon, text, onClick }) => {
  return (
    <Row justify="center" align="middle">
      <Container span={24} onClick={onClick}>
        <Row justify="center" align="middle">
          <Shade span={24}></Shade>
          <Text span={24}>
            <Row justify="center" align="middle">
              {icon && (
                <Col span={2}>
                  <Image src={icon} preview={false} />
                </Col>
              )}
              <Col span={icon ? 18 : 24}>
                <BtnText>{text}</BtnText>
              </Col>
            </Row>
          </Text>
        </Row>
      </Container>
    </Row>
  );
};

export default SubmitButton;

const Container = styled(Col)`
  text-align: center;
  height: 42px;
  background: transparent
    linear-gradient(
      90deg,
      #1d427d 0%,
      #193667 11%,
      #13284c 28%,
      #0f203d 44%,
      #0d1d39 56%,
      #1c3f78 97%,
      #1d427d 100%
    )
    0% 0% no-repeat padding-box;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;
const Shade = styled(Col)`
  height: 55px;
  margin-top: -30px;
  overflow: hidden;
  background: #8ec1e8 0% 0% no-repeat padding-box;
  mix-blend-mode: normal;
  opacity: 0.15;
  border-radius: 100%;
`;

const Text = styled(Col)`
  margin-top: -10px;
  font-family: SegoeUI-Semibold;
  color: #ffffff;
`;

const BtnText = styled(Title)`
  &.ant-typography {
    font-family: SegoeUI-Semibold;
    font-size: 15px;
    color: #ffffff;
    text-transform: uppercase;
  }
`;

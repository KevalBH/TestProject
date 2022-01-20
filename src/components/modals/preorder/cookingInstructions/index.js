import { Col, Image, Row, Typography } from "antd";
import styled from "styled-components";

import rightArrow from "../../../../assets/View Cart/Icon ionic-md-arrow-dropright.svg";

const { Text } = Typography;

const CookingInstructions = ({ setInstructionsModal }) => {
  return (
    <Row justify="center" align="middle">
      <Container span={23} onClick={() => setInstructionsModal(true)}>
        <Row justify="start" align="middle">
          <Col span={16}>
            <Row justify="center" align="middle">
              <Col span={22}>
                <H1>added cooking instructions (optional){"  "}</H1>
              </Col>
              <Col span={2}>
                <Img src={rightArrow} preview={false} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default CookingInstructions;

const Container = styled(Col)`
  text-align: left;
  margin-top: 2%;
  margin-bottom: 2%;
  cursor: pointer;
`;

const H1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: 25px;
    color: #111111;
    text-transform: capitalize;
  }
`;

const Img = styled(Image)`
  margin-top: 2%;
`;

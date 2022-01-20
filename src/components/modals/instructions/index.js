import { Col, Input, Row } from "antd";
import styled from "styled-components";
import Head from "../head";

const { TextArea } = Input;

const Instructions = ({ setInstructionsModal, setInstructions }) => {
  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Col span={24}>
            <Head
              text="instructions"
              onClick={() => setInstructionsModal(false)}
            />
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={18}>
            <TextArea
              showCount
              maxLength={100}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default Instructions;

const Container = styled(Col)`
  background: #ffffff;
  border-radius: 15px;
`;

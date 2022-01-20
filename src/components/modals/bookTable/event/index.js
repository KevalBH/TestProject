import { Col, Row, Select, Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;
const { Option } = Select;

const Event = ({ setEvent }) => {
  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <Row justify="center" align="middle">
          <Col span={24}>
            <H1>event type</H1>
          </Col>
          <Col span={24}>
            <SelectBox
              style={{ width: 200 }}
              placeholder={"select type of event"}
              onChange={(e) => setEvent(e)}
            >
              <Option value="text">Text</Option>
            </SelectBox>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Event;

const H1 = styled(Text)`
  font-family: Montserrat-Medium;
  font-size: 18px;
  color: #ffffff;
  text-transform: capitalize;
`;

const SelectBox = styled(Select)`
  &.ant-select .ant-select-selector {
    background: transparent;
    border: none;
    border-bottom: 1px solid #ffffff;
    font-family: Arial-Regular;
    font-size: 18px;
    color: #ffffff;
    text-transform: capitalize;
  }
  &.ant-select .ant-select-arrow {
    color: #ffffff;
  }
  &.ant-select .ant-select-selector .ant-select-focused {
    border: none;
  }
`;

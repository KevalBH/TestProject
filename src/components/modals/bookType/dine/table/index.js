import { Col, Image, Row, Typography } from "antd";
import styled from "styled-components";

import table from "../../../../../assets/Book Table/Group 6034.svg";

const { Text } = Typography;

const Table = ({ onClick, selectedTable }) => {
  return (
    <Row justify="start" align="middle">
      <Container span={24} onClick={onClick}>
        <Row justify="start" align="middle">
          <Col span={8}>
            <H1>Select Table </H1>
          </Col>
          <Col span={16}>
            <Row gutter={12}>
              <Col span={3}><Image onClick={() => onClick(true)} src={table} preview={false} width={50} /></Col>
              <Col><H1>{selectedTable}</H1></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default Table;

const Container = styled(Col)`
  cursor: pointer;
`;

const H1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 30px;
    color: #ffffff;
    text-transform: uppercase;
  }
`;

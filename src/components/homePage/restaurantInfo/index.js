import { Col, Image, Row, Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

const RestaurantInfo = (props) => {
  const propsCount = Object.keys(props).length;
  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <Row justify="center" align="middle">
          {props.icon && (
            <Col span={24 / propsCount}>
              <Icon src={props.icon} preview={false} width={props.iconSize} />
            </Col>
          )}
          {props.textOne && (
            <Col span={24 / propsCount}>
              <P1>{props.textOne}</P1>
            </Col>
          )}
          {props.textTwo && (
            <Col span={24 / propsCount}>
              <P2>{props.textTwo}</P2>
            </Col>
          )}
        </Row>
      </Col>
    </Row>
  );
};

export default RestaurantInfo;

const Icon = styled(Image)`
  margin-top: 8px;
`;

const P1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Regular;
    font-size: 8px;
    color: #1b2749;
    text-transform: capitalize;
  }
`;
const P2 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Regular;
    font-size: 6px;
    color: #7f8592;
    text-transform: capitalize;
  }
`;

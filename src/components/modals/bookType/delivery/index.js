import { Col, Row } from "antd";

import CancelButton from "../../../buttons/cancelButton";

const Delivery = () => {
  return (
    <Row justify="center" align="middle">
      <Col span={12}>
        <CancelButton text="pick saved address" />
      </Col>
    </Row>
  );
};

export default Delivery;

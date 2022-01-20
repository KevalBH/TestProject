import { Col, Row } from "antd";

import CancelButton from "../../../buttons/cancelButton";

const Pickup = () => {
  return (
    <Row justify="center" align="middle">
      <Col span={12}>
        <CancelButton text="book pickup" />
      </Col>
    </Row>
  );
};

export default Pickup;

import { Col, Image, Row, Typography } from "antd";
import styled from "styled-components";

import phone from "../../../../assets/HomePage/Group 4849.svg";
import mail from "../../../../assets/HomePage/Icon zocial-email.svg";

const { Text } = Typography;

const connect = [
  {
    key: 1,
    icon: mail,
    text: "email: byt@gmail.com",
  },
  {
    key: 2,
    icon: phone,
    text: "phone: 9678124568",
  },
];

const Contacts = () => {
  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          {connect.map((item) => (
            <Col span={11} key={item.key}>
              <Row justify="center" align="middle">
                <Col span={1}>
                  <Image src={item.icon} preview={false} width={15} />
                </Col>
                <Col span={20} offset={2}>
                  <P1>{item.text}</P1>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </Row>
  );
};

export default Contacts;

const Container = styled(Col)`
  text-align: left;
`;

const P1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Regular;
    font-size: 10px;
    color: #000000;
    text-transform: capitalize;
  }
`;

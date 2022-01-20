import { Col, Row, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { URL } from "../../../../config";

const { Text } = Typography;

const Timeslot = ({ setDeliveryTime, deliveryTime, reservationType }) => {
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
    const abortControl = new AbortController();

    reservationType &&
      axios
        .post(URL + "reservation_type/search/", {
          field: "label",
          search: reservationType,
        })
        .then((res) =>
          setTimeSlots(res.data.reservationTypes.result[0].timeSlots)
        )
        .catch((err) => console.log(err));

    return () => {
      abortControl.abort();
    };
  }, [reservationType]);

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Col span={24}>
            <H1>timeslot</H1>
          </Col>
          <Col span={24}>
            <Row justify="space-between" align="middle">
              {timeSlots.map((time, index) => (
                <TimeContainer
                  span={2}
                  key={index}
                  selected={deliveryTime === time ? true : false}
                  onClick={() => setDeliveryTime(time)}
                >
                  {time}
                </TimeContainer>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default Timeslot;
const Container = styled(Col)``;

const H1 = styled(Text)`
  font-family: Montserrat-Medium;
  font-size: 18px;
  color: #ffffff;
  text-transform: capitalize;
`;

const TimeContainer = styled(Col)`
  background: #ffffff;
  border-radius: 4px;
  font-family: Arial-Regular;
  font-size: 15px;
  color: #111111;
  text-align: center;
  cursor: pointer;
  padding: 0.5%;
  margin-top: 2%;
  ${(props) =>
    props.selected &&
    css`
      background: #fa6300;
      color: #ffffff;
    `}
`;

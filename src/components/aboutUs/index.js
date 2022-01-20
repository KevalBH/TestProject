import { Col, Row } from "antd";
import styled from "styled-components";
import Aboutus from "./Aboutus";
import Blog from "./Blog";
import Hero from "./Hero";
import Journey from "./Journey";

const AboutUs = () => {
  return (
    <Row justify="center" align="middle">
      <Container span={22}>
        <Hero />
        <Aboutus />
        <Journey />
        <Blog />
      </Container>
    </Row>
  );
};

export default AboutUs;

const Container = styled(Col)``;

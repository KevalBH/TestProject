import { Col, Image, Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../../../assets/AboutUs/logo.svg";
import Navigation from "./navigation";
import UserMenu from "./userMenu";

const MainHeader = () => {
  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="space-between" align="middle">
          <LogoContainer span={4}>
            <Link to="/">
              <Image src={logo} preview={false} width={60} />
            </Link>
          </LogoContainer>
          <NavigationContainer span={10}>
            <Navigation />
          </NavigationContainer>
          <UserContainer span={6}>
            <UserMenu />
          </UserContainer>
        </Row>
      </Container>
    </Row>
  );
};

export default MainHeader;

const Container = styled(Col)`
  background: #1b2749;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
`;

const LogoContainer = styled(Col)`
  cursor: pointer;
`;

const NavigationContainer = styled(Col)``;

const UserContainer = styled(Col)``;

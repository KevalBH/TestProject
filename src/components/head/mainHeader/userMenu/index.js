import {
  Avatar,
  Col,
  Dropdown,
  Image,
  Row,
  Menu,
  Typography,
  Button,
} from "antd";
import { useContext } from "react";
import styled, { css } from "styled-components";
import { UserContext } from "../../../appLayout";

import dropDownIcon from "../../../../assets/AboutUs/Icon ionic-ios-arrow-dropdown.svg";
import menuIcon from "../../../../assets/AboutUs/Budicon-Solid-Interface-hamburger-ui-a.svg";

import homeIcon from "../../../../assets/Menu/home-1.svg";
import favouritesIcon from "../../../../assets/Menu/favorite.svg";
import orderIcon from "../../../../assets/Menu/clipboard.svg";
import notificationIcon from "../../../../assets/Menu/Icon ionic-ios-notifications-outline.svg";
import termsIcon from "../../../../assets/Menu/files.svg";
import helpIcon from "../../../../assets/Menu/support.svg";
import settingsIcon from "../../../../assets/Menu/Icon feather-settings.svg";
import logoutIcon from "../../../../assets/Menu/logout (1).svg";
import { Link } from "react-router-dom";
import { URL } from "../../../../config";

const { Text } = Typography;

const MenuText = styled(Col)`
  font-family: Montserrat-Regular;
  font-size: 15px;
  color: #7f8592;
  text-transform: capitalize;
  padding-right: 10px;

  ${(props) =>
    props.$active &&
    css`
      color: #1b2749;
    `}
`;

const menu = (
  <Menu>
    <Menu.Item key="1">
      <Link to="/profile">
        <Row justify="start" align="middle">
          <Col span={4}>
            <Image src={homeIcon} preview={false} />
          </Col>
          <MenuText span={10} offset={2} $active>
            Profile
          </MenuText>
        </Row>
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/favourites">
        <Row justify="start" align="middle">
          <Col span={5}>
            <Image src={favouritesIcon} preview={false} />
          </Col>
          <MenuText span={10} offset={2}>
            Favourites
          </MenuText>
        </Row>
      </Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link to="/order">
        <Row justify="start" align="middle">
          <Col span={5}>
            <Image src={orderIcon} preview={false} />
          </Col>
          <MenuText span={10} offset={2}>
            My Order
          </MenuText>
        </Row>
      </Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link to="/notification">
        <Row justify="start" align="middle">
          <Col span={5}>
            <Image src={notificationIcon} preview={false} />
          </Col>
          <MenuText span={10} offset={2}>
            Notification
          </MenuText>
          <Col span={1}></Col>
        </Row>
      </Link>
    </Menu.Item>
    <Menu.Item key="5">
      <Link to="/terms">
        <Row justify="start" align="middle">
          <Col span={5}>
            <Image src={termsIcon} preview={false} />
          </Col>
          <MenuText span={10} offset={2}>
            Terms
          </MenuText>
        </Row>
      </Link>
    </Menu.Item>
    <Menu.Item key="6">
      <Link to="help">
        <Row justify="start" align="middle">
          <Col span={5}>
            <Image src={helpIcon} preview={false} />
          </Col>
          <MenuText span={10} offset={2}>
            Help
          </MenuText>
        </Row>
      </Link>
    </Menu.Item>
    <Menu.Item key="7">
      <Link to="settings">
        <Row justify="start" align="middle">
          <Col span={5}>
            <Image src={settingsIcon} preview={false} />
          </Col>
          <MenuText span={10} offset={2}>
            Settings
          </MenuText>
        </Row>
      </Link>
    </Menu.Item>
    <Menu.Item key="8">
      <Link to="/logout">
        <Row justify="start" align="middle">
          <Col span={5}>
            <Image src={logoutIcon} preview={false} />
          </Col>
          <MenuText span={10} offset={2}>
            Log out
          </MenuText>
        </Row>
      </Link>
    </Menu.Item>
  </Menu>
);

const UserMenu = () => {
  const user = useContext(UserContext);
  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        {user ? (
          <Row justify="center" align="middle">
            <Col span={2}>
              <Avatar src={URL + user.profile} size="small" />
            </Col>
            <Col span={8} style={{ cursor: "pointer" }}>
              <Dropdown overlay={menu} placement="bottomRight">
                <Row justify="center" align="middle">
                  <Col span={20}>
                    <H1>{user.name}</H1>
                  </Col>
                  <Col span={2}>
                    <Image src={dropDownIcon} preview={false} />
                  </Col>
                </Row>
              </Dropdown>
            </Col>
          </Row>
        ) : (
          <Row justify="center" align="middle">
            <Col span={7}>
              <Link to="/authenticate">
                <AuthenticationButton type="ghost">login</AuthenticationButton>
              </Link>
            </Col>
            <Col span={7} offset={1}>
              <Link to="/authenticate">
                <AuthenticationButton type="ghost">
                  sign up
                </AuthenticationButton>
              </Link>
            </Col>
            <Col span={7} offset={1}>
              <Dropdown overlay={menu} placement="bottomRight">
                <Image src={menuIcon} preview={false} />
              </Dropdown>
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
};

export default UserMenu;

const H1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Regular;
    font-size: 15px;
    color: #ffffff;
    text-transform: capitalize;
  }
`;

const AuthenticationButton = styled(Button)`
  border-radius: 3px;
  font-family: Montserrat-Regular;
  font-size: 12px;
  color: #ffffff;
  text-transform: capitalize;
`;

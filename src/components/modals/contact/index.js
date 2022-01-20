import { Col, Image, Input, Row } from "antd";
import styled from "styled-components";
import Head from "../head";

import selectedIcon from "../../../assets/Contact/Icon ionic-ios-checkmark-circle-outline.svg";
import unselectedIcon from "../../../assets/Contact/Icon ionic-ios-checkmark-circle-outline-1.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../../config";

const Contact = ({ onClick }) => {
  const [searchValue, setSearchValue] = useState();
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  useEffect(() => {
    HandleSearch();
  }, [searchValue]);

  const HandleSearch = () => {
    axios
      .post(URL + "user/search", { field: "name", search: searchValue })
      .then((res) =>
        res.data.user.result.map((user) =>
          setUsers((previous) =>
            users.length > 0
              ? users.map((u) =>
                  u.id === user._id
                    ? (console.log("included"), [...previous])
                    : [
                        ...previous,
                        { id: user._id, name: user.name, image: user.profile },
                      ]
                )
              : [
                  ...previous,
                  { id: user._id, name: user.name, image: user.profile },
                ]
          )
        )
      )
      .catch((err) => (console.log(err), setUsers([])));
  };

  const HandleSelect = (user) => {
    setSelectedUsers((previous) =>
      selectedUsers.length > 0
        ? selectedUsers.map((selected) =>
            selected.id === user.id
              ? (console.log("included"), [...previous])
              : [
                  ...previous,
                  { id: user.id, name: user.name, image: user.image },
                ]
          )
        : (setUsers(users.filter((item) => item.id !== user.id)),
          [...previous, { id: user.id, name: user.name, image: user.image }])
    );
  };

  const HandleUnSelect = (id) => {
    const newList = selectedUsers.filter((item) => item.id !== id);
    setSelectedUsers(newList);
    HandleSearch();
  };

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Col span={24}>
            <Head text="contacts" onClick={onClick} />
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={18}>
            <UserSearch
              placeholder="search user by name"
              onChange={(e) => {
                setSearchValue(e.target.value);
                HandleSearch();
              }}
            />
          </Col>
        </Row>
        <Row justify="start" align="middle">
          {selectedUsers &&
            selectedUsers.map((user, index) =>
              console.log(user)(
                <UserContainer span={11} offset={1} key={index}>
                  <Row justify="center" align="middle">
                    <Col span={2}>
                      <Image
                        src={
                          "http://localhost:3001" + user.image.replace(".", "")
                        }
                        preview={false}
                      />
                    </Col>
                    <Col span={8} offset={1}>
                      {user.name}
                    </Col>
                    <Col span={2} onClick={() => HandleUnSelect(user.id)}>
                      <Image src={selectedIcon} preview={false} />
                    </Col>
                  </Row>
                </UserContainer>
              )
            )}
        </Row>
        <Row justify="start" align="middle">
          {users.length > 0 &&
            users.map(
              (user, index) => (
                console.log(users),
                console.log(user)(
                  <UserContainer span={11} offset={1} key={index}>
                    <Row justify="center" align="middle">
                      <Col span={2}>
                        <Image
                          src={
                            "http://localhost:3001" +
                            user.image.replace(".", "")
                          }
                          preview={false}
                        />
                      </Col>
                      <Col span={8} offset={1}>
                        {user.name}
                      </Col>
                      <Col span={2} onClick={() => HandleSelect(user)}>
                        <Image src={unselectedIcon} preview={false} />
                      </Col>
                    </Row>
                  </UserContainer>
                )
              )
            )}
        </Row>
      </Container>
    </Row>
  );
};

export default Contact;

const Container = styled(Col)`
  border-radius: 15px;
  text-align: left;
`;

const UserSearch = styled(Input)`
  &.ant-input {
    margin-top: 2%;
    margin-bottom: 2%;
    border: none;
    border-bottom: 1px solid #1b2749;
  }
  &.ant-input:focus,
  .ant-input-focused {
    box-shadow: none;
  }
`;

const UserContainer = styled(Col)`
  margin-top: 1%;
  margin-bottom: 1%;
`;

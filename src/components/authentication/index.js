import { Col, Image, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import authImg from "../../assets/Sign In – 1/Group 7881.png";
import setAccessToken from "../../utils/setAccessToken";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { URL } from "../../config";

const Authentication = () => {
  const [signIn, setSignIn] = useState(true);
  const [signUp, setSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const abortControl = new AbortController();

    const accessToken = localStorage.BYTAccessToken;
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    return () => {
      abortControl.abort();
    };
  }, []);

  if (isLoggedIn) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  const handleSignIn = () => {
    if (email === "") {
      setError("Email Address cannot be empty");
    } else if (password === "") {
      setError("Password cannot be empty");
    } else {
      axios
        .post(URL + "user/login", { email, password })
        .then((res) => {
          setAccessToken(res.data.token);
          localStorage.setItem("user", res.data.id);
          localStorage.setItem("BYTAccessToken", res.data.token);
          setIsLoggedIn(true);
          setError(null);
        })
        .catch((error) => {
          console.log(error);
          if (error.message === "Network Error") {
            setError(error.message);
          } else if (error.response.data.errors) {
            if (error.response.data.errors[0].email) {
              setError(error.response.data.errors[0].email);
            }
            if (error.response.data.errors[0].password) {
              setError(error.response.data.errors[0].password);
            }
          } else {
            setError(error.response.data.error);
          }
        });
    }
  };

  const handleSignUp = () => {
    if (email === "") {
      setError("Email Address cannot be empty");
    } else if (dob === "") {
      setError("Date Of Birth cannot be empty");
    } else if (password === "") {
      setError("Password cannot be empty");
    } else {
      axios
        .post(URL + "user/register", { email, password, dob })
        .then((res) => {
          // setAccessToken(res.data.token);
          localStorage.setItem("user", res.data.user._id);
          // localStorage.setItem("BYTAccessToken", res.data.token);
          // setIsLoggedIn(true);
          setError(null);
        })
        .catch((error) => {
          if (error.message === "Network Error") {
            setError(error.message);
          } else if (error.response.data.errors) {
            if (error.response.data.errors[0].email) {
              setError(error.response.data.errors[0].email);
            }
            if (error.response.data.errors[0].password) {
              setError(error.response.data.errors[0].password);
            }
          } else {
            setError(error.response.data.error);
          }
        });
    }
  };

  return (
    <Row justify="center" align="middle">
      <Container span={19}>
        <Row justify="center" align="top">
          <ImageContainer span={12}>
            <Image src={authImg} preview={false} />
          </ImageContainer>
          <TabsContainer span={12}>
            <Row justify="center" align="middle">
              <Tabs span={24}>
                <Row justify="center" align="middle">
                  <TabButtons
                    span={5}
                    isActive={signIn}
                    onClick={() => {
                      setSignIn(true);
                      setSignUp(false);
                    }}
                  >
                    SignIn
                  </TabButtons>
                  <TabButtons
                    span={5}
                    offset={2}
                    isActive={signUp}
                    onClick={() => {
                      setSignUp(true);
                      setSignIn(false);
                    }}
                  >
                    SignUp
                  </TabButtons>
                </Row>
              </Tabs>
              <Col span={24}>
                {signIn && (
                  <SignIn
                    setSignUp={setSignUp}
                    setSignIn={setSignIn}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    error={error}
                    handleFinish={handleSignIn}
                  />
                )}
                {signUp && (
                  <SignUp
                    setSignUp={setSignUp}
                    setSignIn={setSignIn}
                    setEmail={setEmail}
                    setDob={setDob}
                    setPassword={setPassword}
                    error={error}
                    handleFinish={handleSignUp}
                  />
                )}
              </Col>
            </Row>
          </TabsContainer>
        </Row>
      </Container>
    </Row>
  );
};

export default Authentication;

const Container = styled(Col)`
  background: #fafafa;
  padding: 5%;
`;

const ImageContainer = styled(Col)``;

const TabsContainer = styled(Col)`
  background: #ffffff;
  padding: 2%;
`;

const Tabs = styled(Col)`
  margin-bottom: 10%;
`;
const TabButtons = styled(Col)`
  background: #ffffff;
  border: none;
  font-family: Montserrat-Medium;
  font-size: 25px;
  color: #1b2749;
  cursor: pointer;
  transition: 0.5s;

  ${({ isActive }) =>
    isActive &&
    `
    font-family: Montserrat-Bold;
  border-bottom: 3px solid #707070;

  :focus{
  border-bottom: 5px solid #707070;

  }
  `}
`;

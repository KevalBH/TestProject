import {
  Alert,
  Col,
  DatePicker,
  Divider,
  Form,
  Image,
  Input,
  Row,
  Typography,
} from "antd";
import { useState } from "react";
import styled from "styled-components";

import mailIcon from "../../assets/Sign In – 1/Icon material-mail-outline.svg";
import lockIcon from "../../assets/Sign In – 1/padlock.svg";
import eyeIcon from "../../assets/Sign In – 1/Icon-Solid Line-Disable Eye.svg";
import SubmitButton from "../buttons/submitButton";
import CancelButton from "../buttons/cancelButton";

import facebookIcon from "../../assets/Sign In – 1/Group 5352.svg";
import googleIcon from "../../assets/Sign In – 1/Group 5350.svg";
import twitterIcon from "../../assets/Sign In – 1/Group 5349.svg";
import instagramIcon from "../../assets/Sign In – 1/Group 7882.svg";

const { Text } = Typography;

const GetDate = (e) => {
  var date = new Date(e),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
};

const SignUp = ({
  setSignUp,
  setSignIn,
  setDob,
  setEmail,
  setPassword,
  error,
  handleFinish,
}) => {
  const [isPassword, setIsPassword] = useState("password");

  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <Row justify="center" align="middle">
          {error && (
            <ErrorContainer span={16}>
              <Alert type="error" message={error} banner />
            </ErrorContainer>
          )}
          <Col span={16}>
            <Form
              name="signIn"
              initialValues={{ remember: true }}
              onFinish={handleFinish}
              autoComplete="off"
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please enter a valid Email" },
                ]}
              >
                <TextInput
                  placeholder="Email"
                  prefix={<Image src={mailIcon} preview={false} width={10} />}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                name="dob"
                rules={[
                  {
                    required: true,
                    message: "Please enter a valid Date Of Birth",
                  },
                ]}
              >
                <DateInput
                  placeholder="Date of birth"
                  onChange={(e) => setDob(GetDate(e))}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please enter your password!" },
                ]}
              >
                <TextInput
                  placeholder="Password"
                  type={isPassword}
                  prefix={<Image src={lockIcon} preview={false} width={10} />}
                  suffix={
                    <Image
                      src={eyeIcon}
                      preview={false}
                      width={15}
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        isPassword === "text"
                          ? setIsPassword("password")
                          : setIsPassword("text")
                      }
                    />
                  }
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <Row justify="center" align="middle">
                  <Col span={18}>
                    <SubmitButton
                      text="sign in"
                      onClick={() => {
                        setSignUp(false);
                        setSignIn(true);
                      }}
                    />
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item>
                <Row justify="center" align="middle">
                  <Col span={18}>
                    <CancelButton
                      text="sign up"
                      onClick={() => handleFinish()}
                    />
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </Col>
          <Col span={14}>
            <Divider plain>
              <SubText>or connect with</SubText>
            </Divider>
          </Col>
          <Col span={12}>
            <Row justify="center" align="middle">
              <SocialButtons span={5}>
                <Image src={facebookIcon} preview={false} />
              </SocialButtons>
              <SocialButtons span={5} offset={1}>
                <Image src={googleIcon} preview={false} />
              </SocialButtons>
              <SocialButtons span={5} offset={1}>
                <Image src={twitterIcon} preview={false} />
              </SocialButtons>
              <SocialButtons span={5} offset={1}>
                <Image src={instagramIcon} preview={false} />
              </SocialButtons>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SignUp;

const ErrorContainer = styled(Col)`
  margin-top: 3%;
  margin-bottom: 3%;
`;

const TextInput = styled(Input)`
  &.ant-input-affix-wrapper {
    border-radius: 25px;
  }
`;
const DateInput = styled(DatePicker)`
  &.ant-picker {
    border-radius: 25px;
    width: 100%;
  }
`;

const SubText = styled(Text)`
  &.ant-typography {
    font-family: SfPro-Medium;
    font-size: 15px;
    color: #7f859280;
  }
`;

const SocialButtons = styled(Col)`
  cursor: pointer;
`;

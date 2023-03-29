import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  message,
  Row,
  Typography,
} from "antd";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import "./Login.css";
import LoginCarousel from "./LoginCarousel";
import ReCAPTCHA from "react-google-recaptcha";
import userData from "../../Common/userData.json";

const Login = () => {
  let navigate = useNavigate();
  const [captcha, setCaptcha] = useState(false);
  const [enrollmentnum, setEnrollmentnum] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCapatch = () => {
    setCaptcha(true);
  };
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    return { name, value };
  };
  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   const user = userData.find(
  //     (user) => user.enrollmentno == enrollmentnum && user.password == password
  //   );
  //   if (user) {
  //     message.success("Login Successful");
  //     navigate("/home", { state: { user } });
  //   } else {
  //     setErrorMessage("Invalid credentials");
  //     message.error("Invalid credentials");
  //   }
  // };
  const handleLogin = (event) => {
    event.preventDefault();
    const user = userData.find(
      (user) =>
        user.enrollmentno === enrollmentnum && user.password === password
    );
    console.log(userData);
    if (user) {
      message.success("Login Successful");
      navigate("/home");
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      setErrorMessage("Invalid credentials");
      message.error("Invalid credentials");
    }
  };
  return (
    <>
      <Row className=" h-screen">
        <Col className="border px-5 pt-[10%] text-left " span={7}>
          <div>
            <img
              className="w-[60%] "
              src="./Images/header-logo.png"
              alt="header-logo"
            />
            <h1 className=" text-2xl font-semibold my-3">LOGIN</h1>
          </div>
          <Form
            name="basic"
            labelCol={{
              span: 0,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="on"
          >
            {(errorMessage && <p>{errorMessage}</p>) || (
              <p className="opacity-0">:</p>
            )}
            <Form.Item
              className="text-left"
              name="enrollmentnum"
              rules={[
                {
                  required: true,
                  message: "Please input your enrollment number!",
                },
              ]}
            >
              <div className="border-b-[1px] border-b-gray-400">
                <Input
                  placeholder="Username / Enrollment No."
                  suffix={<AiOutlineUser />}
                  bordered={false}
                  value={enrollmentnum}
                  onChange={(e) => setEnrollmentnum(e.target.value)}
                  name="enrollmentnum"
                  required
                />
              </div>
            </Form.Item>

            <Form.Item
              // label="Password"
              className="text-left"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <div className="border-b-[1px] border-b-gray-400">
                <Input.Password
                  placeholder="Password"
                  bordered={false}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  name="password"
                />
              </div>
            </Form.Item>

            <Form.Item className="remember-col">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="ml-3" href="">
                Forgot password ?
              </a>
            </Form.Item>
            {/* <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please Select Captcha!",
                },
              ]}
              required
            >
              <ReCAPTCHA
                data-theme="dark"
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleCapatch}
              />
            </Form.Item> */}
            <Form.Item
              wrapperCol={{
                offset: 0,
                span: 24,
              }}
            >
              <Button
                // disabled={!captcha == true}
                className="min-w-full"
                type="primary"
                htmlType="submit"
                onClick={handleLogin}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={17}>
          <LoginCarousel />
        </Col>
      </Row>
    </>
  );
};

export default Login;

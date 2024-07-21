import { Checkbox, Form, FormProps } from "antd";
import React from "react";
import { InputPassword, InputText, Button } from "Web/components";
import { TLoginForm } from "../types";
import "./index.scss";
import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";

type Props = {};

export const LoginPage = (props: Props) => {
  const onFinish: FormProps<TLoginForm>["onFinish"] = (values) => {
    console.log("Success: ", values);
  };

  const onFailed: FormProps<TLoginForm>["onFinishFailed"] = (err) => {
    console.log("Failed: ", err);
  };

  return (
    <div className="login__wrapper">
      <div className="login__container">
        <p className="login__title">Login</p>
        <Form
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFailed}
          autoComplete="off"
        >
          <Form.Item<TLoginForm>
            style={{ marginBottom: "24px" }}
            name="username"
          >
            <InputText
              placeholder="Username"
              rightIcon={<Icon icon="mdi:account" />}
            />
          </Form.Item>
          <Form.Item<TLoginForm> name="password">
            <InputPassword placeholder="Password" />
          </Form.Item>
          <div className="login__options">
            <Form.Item<TLoginForm>
              className="login__remember-checkbox"
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link to="/forgot-password" className="login__forgot-password">
              Forgot password?
            </Link>
          </div>
          <Form.Item<TLoginForm>>
            <Button
              shape="round"
              type="primary"
              className="login__submit-button"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <div className="login__register-wrapper">
          Don't have an account? <Link to="/register">Sign-up</Link>
        </div>
        <div className="login__login-options-wrapper">
          <div className="login__google-login">
            <Icon icon="ri:google-fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

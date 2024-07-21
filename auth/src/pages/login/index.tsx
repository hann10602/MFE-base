import { Checkbox, Form, FormProps } from "antd";
import React from "react";
import { InputPassword, InputText, Button } from "Web/components";
import { TLoginForm } from "../types";
import "./index.scss";
import { Icon } from "@iconify-icon/react";

type Props = {};

export const LoginPage = (props: Props) => {
  const onFinish: FormProps<TLoginForm>["onFinish"] = (values) => {
    console.log("Success: ", values);
  };

  const onFinishFailed: FormProps<TLoginForm>["onFinishFailed"] = (err) => {
    console.log("Failed: ", err);
  };

  return (
    <div className="login__wrapper">
      <div className="login__container">
        <p className="login__title">Login</p>
        <Form
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<TLoginForm> name="username">
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
            <a href="/forgot-password" className="login__forgot-password">
              Forgot password ?
            </a>
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
      </div>
    </div>
  );
};

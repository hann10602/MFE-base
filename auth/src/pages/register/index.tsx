import { Form, FormProps } from "antd";
import React from "react";
import { InputPassword, InputText, Button } from "Web/components";
import { TRegisterForm } from "../types";
import { Link } from "react-router-dom";
import "./index.scss";

type Props = {};

export const RegisterPage = (props: Props) => {
  const onFinish: FormProps<TRegisterForm>["onFinish"] = (values) => {
    console.log("Success: ", values);
  };

  const onFailed: FormProps<TRegisterForm>["onFinishFailed"] = (err) => {
    console.log("Error: ", err);
  };

  return (
    <div className="register__wrapper">
      <div className="register__container">
        <p className="register__title">Register</p>
        <Form onFinish={onFinish} onFinishFailed={onFailed} autoComplete="off">
          <Form.Item<TRegisterForm>
            name="username"
            style={{ marginBottom: "24px" }}
          >
            <InputText placeholder="Username" />
          </Form.Item>
          <Form.Item<TRegisterForm>
            name="password"
            style={{ marginBottom: "24px" }}
          >
            <InputPassword placeholder="Password" />
          </Form.Item>
          <Form.Item<TRegisterForm>
            name="password"
            style={{ marginBottom: "24px" }}
          >
            <InputPassword placeholder="Password" />
          </Form.Item>
          <Form.Item<TRegisterForm>>
            <Button
              shape="round"
              type="primary"
              className="register__submit-button"
            >
              Register
            </Button>
          </Form.Item>
        </Form>
        <div className="register__login-wrapper">
          Already have an account? <Link to="/login">Sign-in</Link>
        </div>
      </div>
    </div>
  );
};

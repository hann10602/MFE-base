import { Form, FormProps } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Button, InputText } from "Web/components";
import { TForgotPasswordForm } from "../types";
import "./index.scss";

type Props = {};

export const ForgotPasswordPage = (props: Props) => {
  const onFinish: FormProps<TForgotPasswordForm>["onFinish"] = (values) => {
    console.log("Success: ", values);
  };

  const onFailed: FormProps<TForgotPasswordForm>["onFinishFailed"] = (err) => {
    console.log("Error: ", err);
  };

  return (
    <div className="forget-password__wrapper">
      <div className="forget-password__container">
        <p className="forget-password__title">Forget password</p>
        <Form onFinish={onFinish} onFinishFailed={onFailed} autoComplete="off">
          <Form.Item<TForgotPasswordForm>
            name="email"
            style={{ marginBottom: "24px" }}
          >
            <InputText placeholder="Username" />
          </Form.Item>
          <Form.Item<TForgotPasswordForm>>
            <Button
              shape="round"
              type="primary"
              className="forgot-password__submit-button"
            >
              forgot-password
            </Button>
          </Form.Item>
        </Form>
        <div className="forgot-password__login-wrapper">
          Already have an account? <Link to="/login">Sign-in</Link>
        </div>
      </div>
    </div>
  );
};

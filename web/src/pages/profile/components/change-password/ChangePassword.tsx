import React from "react";
import "./index.scss";
import { TChangePassword } from "../../types";
import { Button, Form, FormProps } from "antd";
import { InputPassword } from "../../../../components";

type Props = {};

export const ChangePassword = (props: Props) => {
  const [form] = Form.useForm();

  const onFinish: FormProps<TChangePassword>["onFinish"] = (values) => {
    console.log("Success: ", values);
  };

  const onFailed: FormProps<TChangePassword>["onFinishFailed"] = (err) => {
    form
      .validateFields()
      .then((e) => console.log("Values: ", e))
      .catch((err) => console.log("error: ", err));
    console.log("Failed: ", err);
  };
  return (
    <div className="profile__change-password__wrapper">
      <p className="profile__change-password__title">Change password</p>
      <div className="profile__change-password__wrapper">
        <div className="profile__change-password__information-wrapper">
          <div className="profile__change-password__label-wrapper">
            <p>Old password:</p>
            <p>New password:</p>
            <p>Confirm new password:</p>
          </div>
          <Form
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFailed}
            autoComplete="off"
            className="profile__change-password__input-wrapper"
          >
            <Form.Item<TChangePassword>
              className="profile__change-password__input"
              name="oldPassword"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputPassword placeholder="Old password" />
            </Form.Item>
            <Form.Item<TChangePassword>
              className="profile__change-password__input"
              name="newPassword"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputPassword placeholder="New password" />
            </Form.Item>
            <Form.Item<TChangePassword>
              className="profile__change-password__input"
              name="confirmNewPassword"
              rules={[
                {
                  required: true,
                },
                (formInstance) => ({
                  message: "Lower must not be greater than upper",
                  validator(rule, value: string) {
                    if (value === null) {
                      return Promise.resolve();
                    }
                    const upperValue =
                      formInstance.getFieldValue("newPassword");
                    if (value.includes(upperValue)) {
                      return Promise.reject(new Error());
                    }
                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <InputPassword placeholder="Confirm new password" />
            </Form.Item>
          </Form>
        </div>
        <div className="profile__change-password__submit-wrapper">
          <Button
            className="profile__change-password__submit-button"
            onClick={() => form.submit()}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

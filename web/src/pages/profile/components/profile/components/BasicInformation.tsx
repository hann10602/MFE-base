import React from "react";
import "./index.scss";
import { Form, FormProps, Radio as AntdRadio } from "antd";
import { TBasicInformation } from "../../../types";
import { Button, InputText } from "../../../../../components";
import { Radio } from "../../../../../components/radio";

type Props = {};

export const BasicInformation = (props: Props) => {
  const [form] = Form.useForm();

  const onFinish: FormProps<TBasicInformation>["onFinish"] = (values) => {
    console.log("Success: ", values);
  };

  const onFailed: FormProps<TBasicInformation>["onFinishFailed"] = (err) => {
    form
      .validateFields()
      .then((e) => console.log("Values: ", e))
      .catch((err) => console.log("error: ", err));
    console.log("Failed: ", err);
  };

  return (
    <div className="body-profile__basic-information__wrapper">
      <div className="body-profile__basic-information__information-wrapper">
        <div className="body-profile__basic-information__label-wrapper">
          <p>Full name:</p>
          <p>Username:</p>
          <p>Gender:</p>
          <p>Date of birth:</p>
          <p>Email:</p>
          <p>Phone number:</p>
        </div>
        <Form
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFailed}
          autoComplete="off"
          className="body-profile__basic-information__input-wrapper"
        >
          <Form.Item<TBasicInformation>
            rules={[
              {
                required: true,
                message: "Full name is required",
              },
            ]}
            className="body-profile__basic-information__input"
            name="fullName"
          >
            <InputText placeholder="Full name" />
          </Form.Item>
          <Form.Item<TBasicInformation>
            rules={[
              {
                required: true,
                message: "Username is required",
              },
            ]}
            className="body-profile__basic-information__input"
            name="username"
          >
            <InputText placeholder="Username" />
          </Form.Item>
          <Form.Item<TBasicInformation>
            rules={[
              {
                required: true,
                message: "Gender is required",
              },
            ]}
            className="body-profile__basic-information__input"
            name="gender"
          >
            <AntdRadio.Group
              style={{ height: 48, display: "flex", alignItems: "center" }}
            >
              <div>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </div>
            </AntdRadio.Group>
          </Form.Item>
          <Form.Item<TBasicInformation>
            rules={[
              {
                required: true,
                message: "Date of birth is required",
              },
            ]}
            className="body-profile__basic-information__input"
            name="dateOfBirth"
          >
            <InputText placeholder="Date of birth" />
          </Form.Item>
          <Form.Item<TBasicInformation>
            rules={[
              {
                required: true,
                message: "Email is required",
              },
            ]}
            className="body-profile__basic-information__input"
            name="email"
          >
            <InputText placeholder="Email" />
          </Form.Item>
          <Form.Item<TBasicInformation>
            rules={[
              {
                required: true,
                message: "Phone number is required",
              },
            ]}
            className="body-profile__basic-information__input"
            name="phoneNum"
          >
            <InputText placeholder="Phone number" />
          </Form.Item>
        </Form>
      </div>
      <div className="body-profile__basic-information__submit-wrapper">
        <Button
          className="body-profile__basic-information__submit-button"
          onClick={() => form.submit()}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

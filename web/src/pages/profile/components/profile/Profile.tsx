import React from "react";
import "./index.scss";
import { Image } from "antd";
import { Button } from "../../../../components";
import { BasicInformation } from "./components/BasicInformation";

type Props = {};

export const Profile = (props: Props) => {
  return (
    <div className="profile__body-profile__wrapper">
      <p className="profile__body-profile__title">Profile</p>
      <div className="profile__body-profile__information-wrapper">
        <div className="profile__body-profile__change-avatar">
          <div className="body-profile__change-avatar__avatar-wrapper">
            <Image
              src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
              className="body-profile__change-avatar__avatar"
              preview={false}
              alt="avatar"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button className="body-profile__change-avatar__select-button">
                Select
              </Button>
            </div>
          </div>
        </div>
        <BasicInformation />
      </div>
    </div>
  );
};

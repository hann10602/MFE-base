import Title from "antd/es/typography/Title";
import React from "react";

type Props = {};

export const SideBar = (props: Props) => {
  return (
    <div className="profile__side-bar">
      <div className="profile__side-bar__header">
        <img
          className="profile__side-bar__avatar"
          src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
          alt="avatar"
        />
        <Title level={5}>Nguyễn Ngọc Hà</Title>
      </div>
    </div>
  );
};

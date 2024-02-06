import { UserOutlined } from "@ant-design/icons";
import { format, parseISO } from "date-fns";
import React from "react";
import { Avatar } from "antd";

import stl from "./UserProfile.module.scss";

const UserProfile = ({ author, createdAt }) => {
  const {username, image}= author;
  return (
    <div className={stl.wrapper}>
      <div className={stl.about}>
        <div className={stl.name}>{username}</div>
        <div className={stl.date}>
          {createdAt ? format(parseISO(createdAt), "MMMM d, yyyy") : 'March 5, 2020'}
        </div>
      </div>
      <Avatar
        size={46}
        icon={image ? <img src={image} alt="avatar" /> : <UserOutlined />}
      />
    </div>
  );
};

export default UserProfile;

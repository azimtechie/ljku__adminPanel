import React from "react";
import {
  AiOutlineLogout,
  AiOutlineNotification,
  AiOutlineMail,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Input, Tooltip, message } from "antd";
import { useNavigate } from "react-router-dom";

const { Search } = Input;
const Header = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    message.success("Logout Successful");
    localStorage.clear();
    navigate("/");
  };
  const onSearch = (value) => console.log(value);

  return (
    <>
      <div className="grid grid-cols-12  sticky items-center top-0 p-2 z-10 bg-white w-full justify-between">
        <div className="col-span-7">
          <img
            className="w-1/4 "
            src="./Images/header-logo.png"
            alt="header-logo"
          />
        </div>
        <div className="col-span-3 mr-8">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
            allowClear
            className="header__search"
          />
        </div>
        <div className="col-span-2">
          <div className="flex ml-4">
            <Tooltip title="Message">
              <AiOutlineMail className="mx-3 text-2xl cursor-pointer leading-0" />
            </Tooltip>
            <Tooltip title="Notification">
              <AiOutlineNotification className="mx-3 cursor-pointer text-2xl leading-0" />
            </Tooltip>
            <Tooltip title="Profile">
              <CgProfile className="mx-3 cursor-pointer text-2xl leading-0" />
            </Tooltip>
            <Tooltip onClick={onLogout} title="Logout">
              <AiOutlineLogout className="mx-3 cursor-pointer text-2xl leading-0" />
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

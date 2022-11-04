import React from "react";
import {
  AiOutlineLogout,
  AiOutlineNotification,
  AiOutlineMail,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Input, Tooltip } from "antd";

const { Search } = Input;
const Header = () => {
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
          {/* <h1>Metaweb Univercity</h1> */}
        </div>
        <div className="col-span-3 mr-8">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
            allowClear
            className="header__search"
          />
          {/* <div className="search-container">
            <form action="/search" method="get">
              <input
                className="search expandright"
                id="searchright"
                type="search"
                name="q"
                placeholder="Search"
              />
              <label className="button searchbutton" htmlFor="searchright">
                <AiOutlineSearch />
              </label>
            </form>
          </div> */}
        </div>
        <div className="col-span-2">
          <div className="flex ml-4">
            <Tooltip title="Message">
              <AiOutlineMail className="mx-3 text-2xl leading-0" />
            </Tooltip>
            <Tooltip title="Notification">
              <AiOutlineNotification className="mx-3 text-2xl leading-0" />
            </Tooltip>
            <Tooltip title="Profile">
              <CgProfile className="mx-3 text-2xl leading-0" />
            </Tooltip>
            <Tooltip title="Logout">
              <AiOutlineLogout className="mx-3 text-2xl leading-0" />
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

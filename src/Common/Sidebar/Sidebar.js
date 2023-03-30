import React, { useState } from "react";
import { DesktopOutlined, UserOutlined } from "@ant-design/icons";
import {
  AiOutlineHome,
  AiOutlineLogout,
  AiTwotoneCalendar,
} from "react-icons/ai";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard", "/dashboard", <AiOutlineHome />),
  getItem("My Results", "results", <DesktopOutlined />),
  getItem("Profile", "sub1", <UserOutlined />, [
    getItem("Update Profile", "3"),
    getItem("Security", "4"),
    getItem("Settings", "5"),
  ]),
  getItem("Calander", "sub2", <AiTwotoneCalendar />, [
    getItem("Exam", "6"),
    getItem("Events", "8"),
  ]),
  getItem("Logout", "/", <AiOutlineLogout />),
];
const Sidebar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["/dashboard"]}
        items={items}
        onClick={({ key }) => navigate(key)}
      />
    </Sider>
  );
};

export default Sidebar;

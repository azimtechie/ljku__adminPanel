import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import { Breadcrumb, Layout, Menu } from "antd";
import Sidebar from "../Common/Sidebar/Sidebar";
import Login from "../pages/Login/Login";

const CommonLayout = () => {
  const { Content } = Layout;

  return (
    <>
      <Header />
      <div className="sidebar-inner-section">
        <Layout
          hasSider
          className="Sidebar__customize"
          style={{ minHeight: "100vh" }}
        >
          <Sidebar />
          <Layout className="site-layout overflow-y-scroll min-h-screen bg-slate-300 my-4 h-screen">
            <Content>
              <Outlet />
              <Footer />
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default CommonLayout;

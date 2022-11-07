import React from "react";
import {
  Button,
  Descriptions,
  PageHeader,
  Statistic,
  Tabs,
  Card,
  Avatar,
} from "antd";
import { FaRupeeSign } from "react-icons/fa";
import { UserOutlined } from "@ant-design/icons";
import { MdArrowForward } from "react-icons/md";
import { HiCurrencyRupee } from "react-icons/hi";
import { BiRupee } from "react-icons/bi";

const { TabPane } = Tabs;
const renderContent = (column = 2) => (
  <Descriptions size="small" column={column}>
    <Descriptions.Item label="Branch">IT</Descriptions.Item>
    <Descriptions.Item label="Semester">4 </Descriptions.Item>
    <Descriptions.Item label="Division">F2-D2D</Descriptions.Item>
    <Descriptions.Item label="Due Date">
      <span className="font-bold text-red-700">20-03-2023</span>
    </Descriptions.Item>
    <Descriptions.Item label="Note">
      <span className="font-bold text-blue-700">
        If you pay online, remember to download the receipt
      </span>
    </Descriptions.Item>
  </Descriptions>
);
const extraContent = (
  <>
    <hr className="mb-[11px]" />
    <div className="grid grid-cols-12 ">
      <div className="col-span-6">
        <h1 className="text-lg font-bold ">Particular</h1>
        <p>Tutuion Fee</p>
        <p>Other Fee</p>
      </div>
      <div className="col-span-6">
        <h1 className="text-lg font-bold">Rs.</h1>
        <p className="flex items-center ">
          <span>
            <BiRupee />
          </span>
          16,500
        </p>
        <p className="flex items-center ">
          <span>
            <BiRupee />
          </span>
          15,150
        </p>
      </div>
    </div>
    <hr />
    <div>
      <div className="mt-4 font-bold text-lg grid grid-cols-12">
        <div className="col-span-6 ">Total Fees</div>
        <div className="col-span-6">31,560</div>
      </div>
      <Button className="mt-4" type="primary">
        Pay Now
      </Button>
    </div>
  </>
);
const Content = ({ children, extra }) => (
  <div className="content">
    <div className="main">{children}</div>
    <div className="extra">{extra}</div>
  </div>
);
const FeesInfoSection = () => {
  return (
    <>
      <Card
        size="small"
        className="custom__card border-2 "
        title={
          <>
            <div className="flex text-lg font-semibold items-center">
              <HiCurrencyRupee className="mr-3" />
              <span> Fee Dues</span>
            </div>
          </>
        }
        // extra={
        //   <>
        //     <Button className="flex items-center" type="primary">
        //       Pay Now
        //       <span className="ml-2 ">
        //         <FaRupeeSign />
        //       </span>
        //     </Button>
        //   </>
        // }
      >
        <PageHeader
          className="custom__fees__header site-page-header-responsive"
          onBack={() => window.history.back()}
          subTitle="Semester-4 university fees"
          //   extra={[
          //     <Button key="3">Operation</Button>,
          //     <Button key="2">Operation</Button>,
          //     <Button key="1" type="primary">
          //       Primary
          //     </Button>,
          //   ]}
          footer={
            <div defaultActiveKey="1">
              {/* <TabPane tab="Details" key="1" />
                <TabPane tab="Rule" key="2" /> */}
              <hr />
              <div className="flex items-center mt-2 justify-end">
                <span className=" mr-2 font-bold hover:underline">
                  View More
                </span>
                <MdArrowForward className="text-xl font-bold" />
              </div>
            </div>
          }
        >
          <Content extra={extraContent}>{renderContent()}</Content>
        </PageHeader>
      </Card>
    </>
  );
};

export default FeesInfoSection;

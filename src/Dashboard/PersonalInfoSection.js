import React from "react";
import { Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FaUniversity, FaBook } from "react-icons/fa";

const PersonalInfoSection = () => {
  return (
    <>
      <Card
        title="Hi PATHAN, Good Afternoon ! 🌤️"
        extra={
          <>
            {/* <img src="" alt="logo" /> */}
            <Avatar
              className="flex items-center justify-center"
              icon={<UserOutlined />}
            />
          </>
        }
        style={{ width: 500 }}
        size="small"
      >
        <p className="flex items-center m-0 p-0 ">
          <FaUniversity className="mb-4 mr-3 text-xl" />
          <p className="text-lg">
            L.J. Institute of Engineering and Technology (LJIET)
          </p>
        </p>
        <p className="flex items-center m-0 p-0 ">
          <FaBook className="mb-4 mr-3 text-xl" />
          <p className="text-lg">
            L.J. Institute of Engineering and Technology (LJIET)
          </p>
        </p>
        <p className="flex items-center m-0 p-0">
          <FaUniversity className="mb-4 mr-3 text-xl" />
          <p className="text-lg">
            L.J. Institute of Engineering and Technology (LJIET)
          </p>
        </p>
      </Card>
    </>
  );
};

export default PersonalInfoSection;

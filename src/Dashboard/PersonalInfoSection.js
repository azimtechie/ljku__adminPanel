import React from "react";
import { Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {
  FaUniversity,
  FaBook,
  FaUserGraduate,
  FaCalendarAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail, MdArrowForward } from "react-icons/md";

const PersonalInfoSection = () => {
  return (
    <>
      <Card
        title="Hi PATHAN, Good Afternoon ! 🌤️"
        extra={
          <>
            {/* <img src="" alt="logo" /> */}
            <Avatar
              className="flex items-center  justify-center"
              icon={<UserOutlined />}
            />
          </>
        }
        bordered
        size="small"
        className="rounded-xl border-2 w-[500px]"
      >
        <p className="flex items-center m-0 p-0 ">
          <FaUniversity className="mb-4 mr-3 text-xl" />
          <p className="text-md">
            L.J. Institute of Engineering and Technology (LJIET)
          </p>
        </p>
        <p className="flex items-center m-0 p-0 ">
          <FaBook className="mb-4 mr-3 text-xl" />
          <p className="text-md">
            Bachelor of Technology in Information & Technology
          </p>
        </p>
        <p className="flex items-center m-0 p-0">
          <FaUserGraduate className="mb-4 mr-3 text-xl" />
          <p className="text-md">Male</p>
        </p>
        <p className="flex items-center m-0 p-0">
          <FaCalendarAlt className="mb-4 mr-3 text-xl" />
          <p className="text-md">
            15<sup>th</sup> Dec 2002
          </p>
        </p>
        <p className="flex items-center m-0 p-0">
          <MdEmail className="mb-4 mr-3 text-xl" />
          <p className="text-md">abdulazim1512@outlook.com</p>
        </p>
        <p className="flex items-center m-0 p-0">
          <FaPhoneAlt className="mb-4 mr-3 text-xl" />
          <p className="text-md">7802910671</p>
        </p>
        <hr />
        <div className="flex items-center mt-2 justify-end">
          <span className=" mr-2 font-bold hover:underline">View More</span>
          <MdArrowForward className="text-xl font-bold" />
        </div>
      </Card>
    </>
  );
};

export default PersonalInfoSection;

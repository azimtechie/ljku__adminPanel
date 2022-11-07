import React from "react";
import { Card, PageHeader } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { AiFillCalendar } from "react-icons/ai";
import {
  FaUniversity,
  FaBook,
  FaUserGraduate,
  FaCalendarAlt,
  FaPhoneAlt,
  FaUser,
  FaIdCard,
} from "react-icons/fa";
import { MdEmail, MdArrowForward } from "react-icons/md";

const PersonalInfoSection = () => {
  return (
    <>
      <Card
        title={
          <span className="text-lg font-semibold">
            Hi PATHAN, Good Afternoon ! 🌤️
          </span>
        }
        size="small"
        className="custom__card personalInfoCard border-2 "
      >
        <PageHeader
          className="custom__fees__header  site-page-header-responsive"
          subTitle="Personal Details"
        ></PageHeader>
        <p className="flex items-center mt-3 m-0 p-0 ">
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
          <FaIdCard className="mb-4 mr-3 text-xl" />
          <p className="text-md">220320123456</p>
        </p>
        <p className="flex items-center m-0 p-0">
          <AiFillCalendar className="mb-4 mr-3 text-xl" />
          <p className="text-md">Semester - 4</p>
        </p>
        <p className="flex items-center m-0 p-0">
          <FaUser className="mb-4 mr-3 text-xl" />
          <p className="text-md">PATHAN AZIMKHAN FAIZULLAHKHAN</p>
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

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

const PersonalInfoSection = (user) => {
  console.log(user);
  return (
    <>
      <Card
        title={
          <span className="text-lg font-semibold">
            Hi {user?.user?.lastname}, Good Afternoon ! 🌤️
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
          <p className="text-md">{user?.user?.institute}</p>
        </p>
        <p className="flex items-center m-0 p-0 ">
          <FaBook className="mb-4 mr-3 text-xl" />
          <p className="text-md">
            Bachelor of Technology in {user?.user?.branch}
          </p>
        </p>
        <p className="flex items-center m-0 p-0">
          <FaIdCard className="mb-4 mr-3 text-xl" />
          <p className="text-md">{user?.user?.enrollmentno}</p>
        </p>
        <p className="flex items-center m-0 p-0">
          <AiFillCalendar className="mb-4 mr-3 text-xl" />
          <p className="text-md">Semester - {user?.user?.semester}</p>
        </p>
        <p className="flex items-center m-0 p-0">
          <FaUser className="mb-4 mr-3 text-xl" />
          <p className="text-md uppercase">
            {user?.user?.lastname +
              " " +
              user?.user?.firstname +
              " " +
              user?.user?.middlename}
          </p>
        </p>
        <p className="flex items-center m-0 p-0">
          <FaUserGraduate className="mb-4 mr-3 text-xl" />
          <p className="text-md">{user?.user?.gender}</p>
        </p>
        <p className="flex items-center m-0 p-0">
          <FaCalendarAlt className="mb-4 mr-3 text-xl" />
          <p className="text-md">{user?.user?.DOB}</p>
        </p>
        <p className="flex items-center m-0 p-0">
          <MdEmail className="mb-4 mr-3 text-xl" />
          <p className="text-md">{user?.user?.email}</p>
        </p>
        <p className="flex items-center m-0 p-0">
          <FaPhoneAlt className="mb-4 mr-3 text-xl" />
          <p className="text-md">{user?.user?.phone}</p>
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

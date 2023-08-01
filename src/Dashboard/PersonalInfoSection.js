import React, { useEffect, useState } from "react";
import { Card, PageHeader } from "antd";
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
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime >= 5 && currentTime < 12) {
      setGreeting(`Good Morning! 🌅`);
    } else if (currentTime >= 12 && currentTime < 17) {
      setGreeting(`Good Afternoon! 🌤️`);
    } else if (currentTime >= 17 && currentTime < 20) {
      setGreeting(`Good Evening! 🌇`);
    } else {
      setGreeting(`Good Night! 🌙`);
    }
  }, [user?.user?.lastname]);
  return (
    <>
      <Card
        title={
          <span className="text-lg font-semibold">
            Hi {user?.user?.lastname}, {greeting}
          </span>
        }
        size="small"
        className="custom__card personalInfoCard border-2"
      >
        <PageHeader
          className="custom__fees__header  site-page-header-responsive"
          subTitle="Personal Details"
        ></PageHeader>
        <div className="flex items-center mt-3 m-0 p-0 ">
          <FaUniversity className="mb-4 mr-3 text-xl" />
          <p className="text-md">{user?.user?.institute}</p>
        </div>
        <div className="flex items-center m-0 p-0 ">
          <FaBook className="mb-4 mr-3 text-xl" />
          <p className="text-md">
            Bachelor of Technology in {user?.user?.branch}
          </p>
        </div>
        <div className="flex items-center m-0 p-0">
          <FaIdCard className="mb-4 mr-3 text-xl" />
          <p className="text-md">{user?.user?.enrollmentno}</p>
        </div>
        <div className="flex items-center m-0 p-0">
          <AiFillCalendar className="mb-4 mr-3 text-xl" />
          <p className="text-md">Semester - {user?.user?.semester}</p>
        </div>
        <div className="flex items-center m-0 p-0">
          <FaUser className="mb-4 mr-3 text-xl" />
          <p className="text-md uppercase">
            {user?.user?.lastname +
              " " +
              user?.user?.firstname +
              " " +
              user?.user?.middlename}
          </p>
        </div>
        <div className="flex items-center m-0 p-0">
          <FaUserGraduate className="mb-4 mr-3 text-xl" />
          <p className="text-md">{user?.user?.gender}</p>
        </div>
        <div className="flex items-center m-0 p-0">
          <FaCalendarAlt className="mb-4 mr-3 text-xl" />
          <p className="text-md">{user?.user?.DOB}</p>
        </div>
        <div className="flex items-center m-0 p-0">
          <MdEmail className="mb-4 mr-3 text-xl" />
          <p className="text-md">{user?.user?.email}</p>
        </div>
        <div className="flex items-center m-0 p-0">
          <FaPhoneAlt className="mb-4 mr-3 text-xl" />
          <p className="text-md">{user?.user?.phone}</p>
        </div>

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

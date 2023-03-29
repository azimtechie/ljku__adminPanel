import React from "react";
import AnnouncementsSection from "../../Dashboard/AnnouncementsSection";
import FeesInfoSection from "../../Dashboard/FeesInfoSection";
import PersonalInfoSection from "../../Dashboard/PersonalInfoSection";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="grid grid-cols-12 gap-8 gap-y-6 mx-4">
        <div className="col-span-6">
          <PersonalInfoSection user={user} />
        </div>
        <div className="col-span-6">
          <FeesInfoSection user={user} />
        </div>
        <div className="col-span-12">
          <AnnouncementsSection user={user} />
        </div>
      </div>
    </>
  );
};
export default Home;

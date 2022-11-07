import React from "react";
import AnnouncementsSection from "../../Dashboard/AnnouncementsSection";
import FeesInfoSection from "../../Dashboard/FeesInfoSection";
import PersonalInfoSection from "../../Dashboard/PersonalInfoSection";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-8 gap-y-6 mx-4">
        <div className="col-span-6">
          <PersonalInfoSection />
        </div>
        <div className="col-span-6">
          <FeesInfoSection />
        </div>
        <div className="col-span-12">
          <AnnouncementsSection />
        </div>
      </div>
    </>
  );
};

export default Home;

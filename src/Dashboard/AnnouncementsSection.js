import React from "react";
import { Card } from "antd";
import { HiSpeakerphone } from "react-icons/hi";

const AnnouncementsSection = (user) => {
  return (
    <>
      <Card
        title={
          <div className="text-lg flex items-center font-semibold">
            <span className="mr-4"> Announcements </span>
            <span>
              <HiSpeakerphone />
            </span>
          </div>
        }
        size="small"
        className="custom__card personalInfoCard border-2"
      >
        <div>
          <p>Hello {user?.user?.lastname} !</p>
          <p>There is new announcements for you!</p>
        </div>
      </Card>
    </>
  );
};

export default AnnouncementsSection;

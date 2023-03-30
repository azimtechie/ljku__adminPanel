import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  minWidth: "100%",
  height: "100vh",
};
const LoginCarousel = () => {
  return (
    <>
      <Carousel effect="fade" autoplay autoplaySpeed={1800}>
        <div>
          <img
            src="./Images/Independencedayimg-2.jpeg"
            style={contentStyle}
            alt="Independent Day"
          />
        </div>
        <div>
          <img src="./Images/LJIVimg -1.jpg" style={contentStyle} alt="LJIV " />
        </div>
        <div>
          <img
            src="./Images/pitchingseasonimg - 1.jpg"
            style={contentStyle}
            alt="pitchingSeasion "
          />
        </div>
        <div>
          <img
            src="./Images/team-lj.jpg"
            style={contentStyle}
            alt="Team Ljiv"
          />
        </div>
        <div>
          <img
            src="./Images/veledictory ceremony img -1.jpg"
            style={contentStyle}
            alt="Team Ljiv"
          />
        </div>
      </Carousel>
    </>
  );
};

export default LoginCarousel;

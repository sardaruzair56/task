import React from "react";
import img from "../assets/Vector1.png";
import frame from "../assets/Frame 62555.png";
import elipse from "../assets/Ellipse 27.png";
import img1 from "../assets/image 42.png";
import img2 from "../assets/image 41.png";
import img3 from "../assets/image 43 (1).png";
import img4 from "../assets/image 43.png";
import star from "../assets/Frame 62564.png";

const Page1 = () => {
  return (
    <div>
      {" "}
      <div className="flex">
        <img className="w-[100%] h-[100vh]" src={img} alt="Page1-BgImage" />
        <div className="absolute">
          <img className="absolute mt-[8rem] ml-[4.5rem]" src={elipse} alt="" />
          <p className="mt-[10rem] ml-[5rem] font-Rubik text-white text-6xl font-semibold w-[43rem]">
            Maximize <span className="text-blue-950">Engagement</span>
          </p>
          <p className="mt-[1.5rem] ml-[5rem] font-Rubik text-white text-6xl font-semibold w-[43rem]">
            Minimize Churn
          </p>
          <p className=" text-white w-[43rem] font-Rubik text-xl font-extralight mt-[1.5rem] ml-[5rem]">
            Push Notifications, Email, SMS & In-App Messaging to drive engaged
            and loyal customers.
          </p>
          <p className="text-xl font-Rubik text-white ml-[5rem] mt-[3rem] font-extralight">
            {" "}
            Already using <span className="font-normal">Alertify</span>
          </p>
          <div className="flex flex-row gap-0 ml-[4.5rem] mt-4">
            <img className="border-0 rounded-full" src={img1} alt="" />
            <img className="border-0 rounded-full" src={img2} alt="" />
            <img className="border-0 rounded-full" src={img3} alt="" />
            <img className="border-0 rounded-full" src={img4} alt="" />

            <div className="flex flex-col border-r-2 ml-8">
              <p className="text-white font-Rubik font-bold text-4xl">2,219</p>
              <p className="text-white font-Rubik font-extralight w-[10rem]">
                Happy Customers
              </p>
            </div>
            <div className="flex flex-col ml-8">
              <p className="text-white font-Rubik font-bold text-4xl">4.8/5</p>
              <img src={star} alt="" />
              <p className="text-white absolute ml-[7rem] mt-[2.5rem] font-Rubik font-extralight">Rating</p>
            </div>
          </div>
          <div>
            <button className="text-lg font-Rubik text-white hover:text-blue-500 bg-blue-500 hover:bg-white border border-white rounded-3xl ml-[4.5rem] px-4 py-2 w-[12rem] h-[3rem] mt-8">  Contact Sales    </button>
            <button className="text-lg text-blue-950 font-Rubik hover:text-white bg-white hover:bg-blue-950 border-blue-950 rounded-3xl ml-[2rem] border-0 px-4 py-2 w-[12rem] h-[3rem] mt-8">  Get Started Now    </button> 
          </div>
        </div>
        <img
          className="absolute ml-[55%] mt-[8rem]"
          src={frame}
          alt="Page1-Frame"
        />
      </div>
    </div>
  );
};

export default Page1;

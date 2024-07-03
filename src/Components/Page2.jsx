import React from "react";
import stars from "../assets/Frame 62564 (1).png";
import img1 from "../assets/Frame 62569.png";
import img2 from "../assets/Frame 62576.png";
import img3 from "../assets/Frame 62574.png";
import img4 from "../assets/Frame 62575.png";
import img5 from "../assets/Frame 62576.png";
import img6 from "../assets/Frame 62575.png";
import img7 from "../assets/Frame 62575a (2).png";
import img8 from "../assets/Frame 62577.png";
import img9 from "../assets/Frame 62573.png";
import img10 from "../assets/Frame 62574.png";
import img11 from "../assets/Frame 62576 (1).png";
import vectorcurve from "../assets/Vectorcurve.png";
import icon1 from "../assets/services icon.png";
import icon2 from "../assets/services icon (1).png";
import icon3 from "../assets/services icon (2).png";
import icon4 from "../assets/services icon (3).png";
import icon5 from "../assets/services icon (4).png";
import icon6 from "../assets/services icon (5).png";
import union from "../assets/Union.png";
import group from "../assets/Group.png";
import imgFrame from "../assets/Frame 62568.png";
import tick from "../assets/Frame 62595.png";

const Page2 = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-4 ml-[35rem]">
        <p className="font-Rubik font-medium">Trusted by 20,000+ Clients</p>
        <img src={stars} alt="" />
      </div>
      <p className="font-Rubik font-extrabold text-3xl ml-[37rem] mt-3">
        They Trust Us
      </p>

      <div className="flex flex-row mt-[4rem] ml-[16rem] gap-8">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </div>

      <div className="flex flex-row mt-[1rem] ml-[8rem] gap-8">
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        <img src={img9} alt="" />
        <img src={img10} alt="" />
        <img src={img11} alt="" />
      </div>
      <img className="mt-[4rem]" src={vectorcurve} alt="" />
      <div className="w-[100%] flex flex-col h-[10rem] bg-very-pale-blue">
        <p className="text-blue-950 font-Rubik font-medium ml-[42rem] text-lg">
          Top Features
        </p>
        <p className="text-blue-950 font-Rubik font-extrabold ml-[20rem] mt-2 text-3xl">
          Secure, Intuitive Alert Management with Analytics
        </p>
        <p className="text-blue-950 font-Rubik w-[62rem] text-center font-normal mt-2 ml-[14rem] text-lg">
          Empower website owners with our platform's secure, intuitive alert
          management system, enriched with advanced analytics for insightful
          performance tracking.
        </p>
      </div>
      <div className="flex flex-row h-[28rem] bg-very-pale-blue">
        <div className="group flex flex-col bg-white w-[24rem] mt-[2rem] rounded-2xl ml-[8rem] h-[22rem]">
          <img
            className="w-[4rem] h-[4rem] ml-6 mt-8 transition-transform duration-300 ease-in-out group-hover:-translate-y-4"
            src={icon1}
            alt=""
          />
          <p className="font-Rubik font-medium mt-4 ml-6 text-2xl">
            Scheduled Publishing
          </p>
          <p className="font-Rubik font-lg text-lg ml-6 mt-4 w-[20rem]">
            Allow users to schedule the publication of alert messages at
            specific dates and times, enhancing timely communication
          </p>
          <div className="flex flex-row gap-4 transition-transform duration-300 hover:translate-x-4">
            <button className="font-Rubik mt-3 ml-6 font-medium hover:text-blue-500 text-xl">
              Read More
            </button>
            <img className="w-4 h-4 mt-[1.2rem]" src={union} alt="" />
          </div>
        </div>
        <div className="group flex flex-col bg-white w-[24rem] mt-[5rem] rounded-2xl ml-[5rem] h-[22rem]">
          <img
            className="w-[4rem] h-[4rem] ml-6 mt-8 transition-transform duration-300 ease-in-out group-hover:-translate-y-4"
            src={icon2}
            alt=""
          />
          <p className="font-Rubik font-medium mt-4 ml-6 text-2xl">
            Customizable Embed Codes
          </p>
          <p className="font-Rubik font-lg text-lg ml-6 mt-4 w-[20rem]">
            Empower users with the ability to customize embed codes, tailoring
            the appearance of alert messages on their websites.
          </p>
          <div className="flex flex-row gap-4 transition-transform duration-300 hover:translate-x-4">
            <button className="font-Rubik mt-3 ml-6 font-medium hover:text-blue-500 text-xl">
              Read More
            </button>
            <img className="w-4 h-4 mt-[1.2rem]" src={union} alt="" />
          </div>
        </div>
        <div className="group flex flex-col bg-white w-[24rem] mt-[2rem] rounded-2xl ml-[5rem] h-[22rem]">
          <img
            className="w-[4rem] h-[4rem] ml-6 mt-8 transition-transform duration-300 ease-in-out group-hover:-translate-y-4"
            src={icon3}
            alt=""
          />
          <p className="font-Rubik font-medium mt-4 ml-6 text-2xl">
            Analytics Dashboard
          </p>
          <p className="font-Rubik font-lg text-lg ml-6 mt-4 w-[20rem]">
            Provide a comprehensive analytics dashboard, offering insights into
            user engagement and performance metrics for alert messages.
          </p>
          <div className="flex flex-row gap-4 transition-transform duration-300 hover:translate-x-4">
            <button className="font-Rubik mt-3 ml-6 font-medium hover:text-blue-500 text-xl">
              Read More
            </button>
            <img className="w-4 h-4 mt-[1.2rem]" src={union} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-row h-[33rem] bg-very-pale-blue">
        <div className="group flex flex-col bg-white w-[24rem] rounded-2xl ml-[8rem] h-[24rem]">
          <img
            className="w-[4rem] h-[4rem] ml-6 mt-8 transition-transform duration-300 ease-in-out group-hover:-translate-y-4"
            src={icon4}
            alt=""
          />
          <p className="font-Rubik font-medium mt-4 ml-6 text-2xl">
            Multi-Website Support
          </p>
          <p className="font-Rubik font-lg text-lg ml-6 mt-4 w-[20rem]">
            Enable users to manage and create customized alert messages for
            multiple websites within a single account and publish on multiple
            websites
          </p>
          <div className="flex flex-row gap-4 transition-transform duration-300 hover:translate-x-4">
            <button className="font-Rubik mt-3 ml-6 font-medium hover:text-blue-500 text-xl">
              Read More
            </button>
            <img className="w-4 h-4 mt-[1.2rem]" src={union} alt="" />
          </div>
        </div>
        <div className="group flex flex-col bg-white w-[24rem] mt-[5rem] rounded-2xl ml-[5rem] h-[22rem]">
          <img
            className="w-[4rem] h-[4rem] ml-6 mt-8 transition-transform duration-300 ease-in-out group-hover:-translate-y-4"
            src={icon5}
            alt=""
          />
          <p className="font-Rubik font-medium mt-4 ml-6 text-2xl">
            Responsive Interface
          </p>
          <p className="font-Rubik font-lg text-lg ml-6 mt-4 w-[20rem]">
            Design a responsive and user-friendly interface, ensuring a seamless
            experience across various devices and screen sizes.
          </p>
          <div className="flex flex-row gap-4 transition-transform duration-300 hover:translate-x-4">
            <button className="font-Rubik mt-3 ml-6 font-medium hover:text-blue-500 text-xl">
              Read More
            </button>
            <img className="w-4 h-4 mt-[1.2rem]" src={union} alt="" />
          </div>
        </div>
        <div className="group flex flex-col bg-white w-[24rem] mt-[0rem] rounded-2xl ml-[5rem] h-[24rem]">
          <img
            className="w-[4rem] h-[4rem] ml-6 mt-8 transition-transform duration-300 ease-in-out group-hover:-translate-y-4"
            src={icon6}
            alt=""
          />
          <p className="font-Rubik font-medium mt-4 ml-6 text-2xl">
            Rolebased User Management
          </p>
          <p className="font-Rubik font-lg text-lg ml-6 mt-4 w-[20rem]">
            Implement role-based user management, allowing different
            authorization levels such as admin and user for enhanced security.
          </p>
          <div className="flex flex-row gap-4 transition-transform duration-300 hover:translate-x-4">
            <button className="font-Rubik mt-3 ml-6 font-medium hover:text-blue-500 text-xl">
              Read More
            </button>
            <img className="w-4 h-4 mt-[1.2rem]" src={union} alt="" />
          </div>
        </div>
      </div>
      <div className="">
        <img className="w-[100%] h-[58rem] -mt-16 p-0" src={group} alt="" />
        <div>
          <img className="flex ml-16 -mt-[45rem]" src={imgFrame} alt="" />
          <div className="flex flex-col -mt-[32rem] ml-[47rem]">
            <p className="text-white text-xl font-normal">Playbooks</p>
            <p className=" text-white text-4xl text-Rubik w-[40rem] font-bold mt-[1rem]">
              Send the right message, at the right time
            </p>
            <p className="text-gray-100 text-Rubik mt-[2rem] text-xl w-[35rem] font-normal">
              Empower website owners with our platform's secure, intuitive alert
              management system, enriched with advanced analytics for insightful
              performance tracking.
            </p>
            <div className="flex flex-row gap-4 mt-6">
              <img className="" src={tick} alt="" />
              <p className="text-white text-Rubik text-xl font-normal">
                Send notifications with just one click
              </p>
            </div>
            <div className="flex flex-row gap-4 mt-6">
              <img className="" src={tick} alt="" />
              <p className="text-white text-Rubik text-xl font-normal">
                Schedule and send recurring notifications
              </p>
            </div>
            <div className="flex flex-row gap-4 mt-6">
              <img className="" src={tick} alt="" />
              <p className="text-white text-Rubik text-xl font-normal">
                Share editorial access with your team
              </p>
            </div>
            <div className="flex flex-row gap-4 mt-6">
              <img className="" src={tick} alt="" />
              <p className="text-white text-Rubik text-xl font-normal">
                Track and analyze campaigns and see what works
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;

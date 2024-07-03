import React from "react";
import union from "../assets/Union.png";
import google from "../assets/Frame 62578.png";
import firefox from "../assets/Frame 62578 (1).png";
import safari from "../assets/Frame 62578 (2).png";
import dashboard from "../assets/Frame 62599.png";
import sync from "../assets/Frame 62599 (1).png";
import frame from "../assets/Frame 62568 (1).png";
import vectorcurve from "../assets/Vectorcurve.png";
import image from "../assets/image 30.png";
import image2 from "../assets/image 31.png";
import image3 from "../assets/Frame 62599 (2).png";
import image4 from "../assets/Frame 62599 (3).png";
import image5 from "../assets/Frame 62599 (4).png";
import image6 from "../assets/Frame 62599 (5).png";

const Page3 = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-[12rem]">
        <p className="text-xl font-medium">Compatibility</p>
        <p className="text-4xl font-extrabold mt-4">
          Support for Popular Web Browsers
        </p>
      </div>
      <div className="flex flex-row h-[80vh] gap-0">
        <div className="group flex flex-col border-gray-100 border-2 bg-white w-[27rem] mt-[3rem] rounded-2xl ml-[5rem] h-[28rem] transition-shadow duration-300 hover:shadow-lg">
          <img
            className="w-[8rem] h-[8rem] ml-[8rem] mt-8"
            src={google}
            alt=""
          />
          <p className="font-Rubik font-bold mt-[2rem] ml-[6rem] text-2xl">
            Google Chrome
          </p>
          <p className="font-Rubik text-lg ml-[3rem] text-justify mt-6 w-[20rem]">
            Bolster website retention rate with Windows & Android OS compatible
            push notifications. Easily send web push notifications on any
            device.
          </p>
          <div className="flex flex-row gap-4 ml-24 mt-4 transition-transform duration-300 hover:translate-x-4">
            <button className="font-Rubik mt-3 ml-6 font-medium hover:text-blue-500 text-xl">
              Read More
            </button>
            <img className="w-4 h-4 mt-[1.2rem]" src={union} alt="" />
          </div>
        </div>

        <div className="group flex flex-col border-gray-100 border-2 bg-white w-[27rem] mt-[3rem] rounded-2xl ml-[5rem] h-[28rem] transition-shadow duration-300 hover:shadow-lg">
          <img
            className="w-[8rem] h-[8rem] ml-[8rem] mt-8"
            src={firefox}
            alt=""
          />
          <p className="font-Rubik font-bold mt-[2rem] ml-[9.5rem] text-2xl">
            Firefox
          </p>
          <p className="font-Rubik text-lg ml-[3rem] text-justify mt-6 w-[20rem]">
            Maximize your ROI with Firefox browser compatible notifications.
            Send real-time push notifications on smart phones & desktops.
          </p>
          <div className="flex flex-row gap-4 ml-24 mt-4 transition-transform duration-300 hover:translate-x-4">
            <button className="font-Rubik mt-3 ml-6 font-medium hover:text-blue-500 text-xl">
              Read More
            </button>
            <img className="w-4 h-4 mt-[1.2rem]" src={union} alt="" />
          </div>
        </div>
        <div className="group flex flex-col border-gray-100 border-2 bg-white w-[27rem] mt-[3rem] rounded-2xl ml-[5rem] h-[28rem] transition-shadow duration-300 hover:shadow-lg">
          <img
            className="w-[8rem] h-[8rem] ml-[8rem] mt-8"
            src={safari}
            alt=""
          />
          <p className="font-Rubik font-bold mt-[2rem] ml-[9.5rem] text-2xl">
            Safari
          </p>
          <p className="font-Rubik text-lg ml-[3rem] text-justify mt-6 w-[20rem]">
            Skyrocket site conversion rate with Safari browser compatible. We
            use Apple Notification Services to effectively deliver your message.
          </p>
          <div className="flex flex-row gap-4 ml-24 mt-4 transition-transform duration-300 hover:translate-x-4">
            <button className="font-Rubik mt-3 ml-6 font-medium hover:text-blue-500 text-xl">
              Read More
            </button>
            <img className="w-4 h-4 mt-[1.2rem]" src={union} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col">
          <div className="border-b-2 border-gray-400 w-[37rem] h-[18rem] ml-[6rem]">
            <p className="font-Rubik font-normal text-xl">Powerful Analytics</p>
            <p className="font-Rubik font-bold text-3xl mt-3 w-[30rem]">
              Effortlessly to Track all as User Analytics
            </p>
            <p className="font-Rubik font-normal text-xl mt-4 w-[38rem]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </p>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col ml-[6rem] mt-10 w-[20rem]">
              <img className="w-[4rem] h-[4rem]" src={dashboard} alt="" />
              <p className="font-Rubik font-medium text-2xl mt-3">
                Powerful Dashboard
              </p>
              <p className="font-Rubik font-normal text-xl">
                {" "}
                It is a long established fact as by the readable content.
              </p>
            </div>
            <div className="flex flex-col ml-[1rem] mt-10 w-[20rem]">
              <img className="w-[4rem] h-[4rem]" src={sync} alt="" />
              <p className="font-Rubik font-medium text-2xl mt-3">
                Always in Sync
              </p>
              <p className="font-Rubik font-normal text-xl">
                {" "}
                It is a long established fact as by the readable content.
              </p>
            </div>
          </div>
          <img
            className="w-[35rem] h-[35rem] ml-[50rem] absolute"
            src={frame}
            alt=""
          />
        </div>
        <img className="w-[100%] mt-[10rem]" src={vectorcurve} alt="" />
        <div className="bg-very-pale-blue h-[10rem]">
          <p className=" text-center font-Rubik font-medium text-xl">
            How it Works
          </p>
          <p className=" text-center font-Rubik font-bold mt-3 text-3xl">
            Streamlined Workflow Overview
          </p>
          <p className="text-center ml-[18rem] font-Rubik font-medium text-gray-700 w-[65rem] mt-3 text-xl">
            Explore our intuitive platform's seamless workflow, simplifying
            alert creation, management, and analytics for enhanced website
            engagement.
          </p>
        </div>
        <div className="flex flex-row bg-very-pale-blue h-[30rem]">
          <img className="" src={image} alt="" />
          <img className="-ml-3" src={image2} alt="" />
          <div className="group flex  absolute flex-col border-gray-100 border-2 bg-white w-[20rem] mt-[3rem] rounded-2xl ml-[5rem] h-[20rem] transition-shadow duration-300 hover:shadow-lg">
            <img
              className="w-[6rem] h-[6rem] ml-[6.5rem] mt-8"
              src={image3}
              alt=""
            />
            <p className="font-Rubik font-bold mt-[2rem] ml-[7rem] text-2xl">
              SignUp
            </p>
            <p className="font-Rubik text-lg ml-[2.5rem] text-justify text-gray-700 mt-4 w-[14rem]">
              Register to Alertify and log in using your credentials.
            </p>
          </div>
          <div className="group flex  absolute flex-col border-gray-100 border-2 bg-white w-[20rem] mt-[3rem] rounded-2xl ml-[28rem] h-[20rem] transition-shadow duration-300 hover:shadow-lg">
            <img
              className="w-[6rem] h-[6rem] ml-[6.5rem] mt-8"
              src={image4}
              alt=""
            />
            <p className="font-Rubik font-bold mt-[2rem] ml-[4rem] text-2xl">
              Create Projects
            </p>
            <p className="font-Rubik text-lg ml-[2.5rem] text-justify mt-4 w-[15rem] text-gray-700">
              Fill in the details of your projects. Add as many projects as you
              want.{" "}
            </p>
          </div>
          <div className="group flex  absolute flex-col border-gray-100 border-2 bg-white w-[20rem] mt-[3rem] rounded-2xl ml-[51rem] h-[20rem] transition-shadow duration-300 hover:shadow-lg">
            <img
              className="w-[6rem] h-[6rem] ml-[6.5rem] mt-8"
              src={image5}
              alt=""
            />
            <p className="font-Rubik font-bold mt-[2rem] ml-[4rem] text-2xl">
              Integrate Code
            </p>
            <p className="font-Rubik text-lg ml-[2.5rem] text-gray-700 text-justify mt-4 w-[14rem]">
              Integrate code within just a few seconds
            </p>
          </div>
          <div className="group flex  absolute flex-col border-gray-100 border-2 bg-white w-[20rem] mt-[3rem] rounded-2xl ml-[74rem] h-[20rem] transition-shadow duration-300 hover:shadow-lg">
            <img
              className="w-[6rem] h-[6rem] ml-[6.5rem] mt-8"
              src={image6}
              alt=""
            />
            <p className="font-Rubik font-bold mt-[2rem] ml-[3rem] text-2xl">
              Send a Notification
            </p>
            <p className="font-Rubik text-lg ml-[2.5rem] text-justify text-gray-700 mt-4 w-[14rem]">
              You send your notifications, we will take care of ads revenue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;

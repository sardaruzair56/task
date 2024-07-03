import React from "react";
import img from "../assets/Frame 62599 (6).png";
import union from "../assets/Union.png";
import icon from "../assets/Profile icon.png";
import icon1 from "../assets/comment icon.png";

const Page6 = () => {
  return (
    <div>
      <div className="bg-very-pale-blue flex flex-col gap-2 w-[100%] h-[50rem] mt-10">
        <p className="font-Rubik font-medium text-lg mt-16 text-center">
          Our Blogs
        </p>
        <p className="font-Rubik font-bold text-3xl text-center">
          Our Latest Update News
        </p>
        <p className="font-Rubik font-normal text-xl text-gray-700 text-center ml-[20rem] w-[60rem]">
          Discover insightful articles in our blog, covering industry trends,
          best practices, and tips to maximize the impact of your alert messages
          and website engagement.
        </p>
        <div className="flex flex-row ml-12">
          <div className="flex flex-col bg-white w-[24rem] mt-[4rem] rounded-2xl ml-[8rem] h-[28rem]">
            <img className="w-[24rem] h-[14rem]" src={img} alt="" />
            <div className="flex flex-row">
              <img
                className="w-[1.6rem] h-[1.6rem] mt-6 ml-4"
                src={icon}
                alt=""
              />
              <p className="text-sm font-Rubik font-normal mt-7 ml-4 text-gray-700">
                By Admin
              </p>
              <img
                className="w-[1.6rem] h-[1.6rem] mt-7 ml-24"
                src={icon1}
                alt=""
              />
              <p className="text-sm font-Rubik font-normal mt-8 ml-4 text-gray-600">
                12 Comments
              </p>
            </div>
            <div className="border-b-2 border-gray-500 w-[21rem] h-[5rem] ml-4 mt-2">
              <p className="font-Rubik font-bold text-xl w-[24rem]">
                Happy business people as talking to each other while working
              </p>
            </div>
            <div className="flex flex-row gap-4 transition-transform duration-300 hover:translate-x-4">
              <button className="font-Rubik mt-6 ml-6 font-medium text-gray-700 hover:text-blue-500 text-xl">
                Read More
              </button>
              <img className="w-4 h-4 mt-[2rem]" src={union} alt="" />
            </div>
          </div>

          <div className="flex flex-col bg-white w-[24rem] mt-[4rem] rounded-2xl ml-[2rem] h-[28rem]">
            <img className="w-[24rem] h-[14rem]" src={img} alt="" />
            <div className="flex flex-row">
              <img
                className="w-[1.6rem] h-[1.6rem] mt-6 ml-4"
                src={icon}
                alt=""
              />
              <p className="text-sm font-Rubik font-normal mt-7 ml-4 text-gray-700">
                By Admin
              </p>
              <img
                className="w-[1.6rem] h-[1.6rem] mt-7 ml-24"
                src={icon1}
                alt=""
              />
              <p className="text-sm font-Rubik font-normal mt-8 ml-4 text-gray-600">
                12 Comments
              </p>
            </div>
            <div className="border-b-2 border-gray-500 w-[21rem] h-[5rem] ml-4 mt-2">
              <p className="font-Rubik font-bold text-xl w-[24rem]">
                Happy business people as talking to each other while working
              </p>
            </div>
            <div className="flex flex-row gap-4 transition-transform duration-300 hover:translate-x-4">
              <button className="font-Rubik mt-6 ml-6 font-medium text-gray-700 hover:text-blue-500 text-xl">
                Read More
              </button>
              <img className="w-4 h-4 mt-[2rem]" src={union} alt="" />
            </div>
          </div>

          <div className="flex flex-col bg-white w-[24rem] mt-[4rem] rounded-2xl ml-[2rem] h-[28rem]">
            <img className="w-[24rem] h-[14rem]" src={img} alt="" />
            <div className="flex flex-row">
              <img
                className="w-[1.6rem] h-[1.6rem] mt-6 ml-4"
                src={icon}
                alt=""
              />
              <p className="text-sm font-Rubik font-normal mt-7 ml-4 text-gray-700">
                By Admin
              </p>
              <img
                className="w-[1.6rem] h-[1.6rem] mt-7 ml-24"
                src={icon1}
                alt=""
              />
              <p className="text-sm font-Rubik font-normal mt-8 ml-4 text-gray-600">
                12 Comments
              </p>
            </div>
            <div className="border-b-2 border-gray-500 w-[21rem] h-[5rem] ml-4 mt-2">
              <p className="font-Rubik font-bold text-xl w-[24rem]">
                Happy business people as talking to each other while working
              </p>
            </div>
            <div className="flex flex-row gap-4 transition-transform duration-300 hover:translate-x-4">
              <button className="font-Rubik mt-6 ml-6 font-medium text-gray-700 hover:text-blue-500 text-xl">
                Read More
              </button>
              <img className="w-4 h-4 mt-[2rem]" src={union} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;

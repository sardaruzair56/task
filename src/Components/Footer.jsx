import React from "react";
import img1 from "../assets/image 36.png";
import img2 from "../assets/image 35.png";
import img3 from "../assets/Group (1).png";
import img4 from "../assets/soial media.png";
import img5 from "../assets/Component 14.png";
import img6 from "../assets/Component 13.png";
import img7 from "../assets/Component 15.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-footer-color w-[100%] h-[32rem]">
        <div className="flex flex-row absolute mt-[10rem] ml-[5rem]">
          <img className="" src={img3} alt="" />
          <p className="font-Rubik font-bold text-4xl text-white">Alertify</p>
        </div>
        <p className="font-Rubik font-normal text-xl text-gray-300 absolute mt-[13rem] ml-[5rem] w-[18rem]">
          Sorem ipsum dolor sit amet consectetur. Conse laoreesy condimentum sit
          vitae.
        </p>
        <div className="flex flex-row">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="absolute mt-[20rem] ml-[5rem] hover:mt-[19rem]"
              src={img4}
              alt="YouTube"
            />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="absolute mt-[20rem] ml-[9rem] hover:mt-[19rem]"
              src={img5}
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="absolute mt-[20rem] ml-[13rem] hover:mt-[19rem]"
              src={img7}
              alt="Twitter"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="absolute mt-[20rem] ml-[17rem] hover:mt-[19rem]"
              src={img6}
              alt="Instagram"
            />
          </a>
        </div>
        <div className="flex flex-col">
            <p className="font-Rubik font-bold text-4xl text-white absolute ml-[31rem] mt-[10rem]">Products</p>
            <p className="font-Rubik font-normal text-xl text-gray-400 absolute ml-[31rem] mt-[15rem]">Mobile Push Notifications</p>
            <p className="font-Rubik font-normal text-xl text-gray-400 absolute ml-[31rem] mt-[18rem]">Web Push Notifications</p>
            <p className="font-Rubik font-normal text-xl text-gray-400 absolute ml-[31rem] mt-[21rem]">Email Notifications</p>
            <p className="font-Rubik font-normal text-xl text-gray-400 absolute ml-[31rem] mt-[24rem]">Integration Directory</p>
            <p className="font-Rubik font-normal text-xl text-gray-400 absolute ml-[31rem] mt-[27rem]">SMS Notifications</p>

        </div>
        <div className="flex flex-col">
            <p className="font-Rubik font-bold text-4xl text-white absolute ml-[53rem] mt-[10rem]">Developers</p>
            <p className="font-Rubik font-normal text-xl text-gray-400 absolute ml-[53rem] mt-[15rem]">Documentation</p>
            <p className="font-Rubik font-normal text-xl text-gray-400 absolute ml-[53rem] mt-[18rem]">GitHub</p>
            <p className="font-Rubik font-normal text-xl text-gray-400 absolute ml-[53rem] mt-[21rem]">Code Sample</p>
            <p className="font-Rubik font-normal text-xl text-gray-400 absolute ml-[53rem] mt-[24rem]">Developers Community</p>
            <p className="font-Rubik font-normal text-xl text-gray-400 absolute ml-[53rem] mt-[27rem]">Status</p>
        </div>
        <div className="flex flex-col">
            <p className="font-Rubik font-bold text-4xl text-white absolute ml-[75rem] mt-[10rem]">Company</p>
            <p className="font-Rubik font-normal text-xl text-gray-400 absolute ml-[75rem] mt-[15rem]">About Us</p>
            <p className="font-Rubik font-normal text-xl text-gray-400 absolute ml-[75rem] mt-[18rem]">Why Alertify</p>
            <p className="font-Rubik font-normal text-xl text-gray-400 absolute ml-[75rem] mt-[21rem]">Contact Sales</p>
            <p className="font-Rubik font-normal text-xl text-gray-400 absolute ml-[75rem] mt-[24rem]">Customer Referral Program</p>
            <p className="font-Rubik font-normal text-xl text-gray-400 absolute ml-[75rem] mt-[27rem]">Newsroom </p>
        </div>
        <div className="flex flex-row">
          <img className="" src={img1} alt="" />
          <img className="ml-[51rem]" src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

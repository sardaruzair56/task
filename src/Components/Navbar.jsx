import React from "react";
import img1 from "../assets/navbarImg.png";
import vector from "../assets/Vector.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex fixed flex-row bg-blue-500 w-[100%] h-[13vh] border-gray-300 border-b-2">
        <img
          className="w-[13vh] h-[5vh] mt-8 ml-[10vh]"
          src={img1}
          alt="Navbar-Logo"
        />
        <div className="flex flex-row text-lg font-Rubik text-white text-500 mt-10 ml-[15rem]">
          {" "}
          <p className="hover-underline">Features</p>
          <p className="ml-[4rem] hover-underline">Pricing</p>
          <p className="ml-[4rem] hover-underline">Resources</p>{" "}
          <img className=" ml-2 w-3 h-2 mt-3 mr-6" src={vector} alt="Vector" />
        </div>
        <button className="text-lg text-white hover:text-blue-500 bg-blue-500 hover:bg-white border border-white rounded-3xl ml-[20rem] px-4 py-2 w-[12rem] h-[3rem] mt-8">
          Login or SignUp
        </button>
        <button className="text-lg text-black hover:text-white bg-white hover:bg-black border-spacing-0 border-white rounded-3xl ml-[2rem] px-4 py-2 w-[10rem] h-[3rem] mt-8">
          Get a Demo
        </button>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import Logo from "../images/Logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="w-full bg-white h-[10vh] flex box-content">
      <div className="w-full bg-blue-100 border-b drop-shadow-sm py-4 px-16 h-[10vh] top-0 flex justify-between items-center fixed z-10">
        <img
          onClick={() => navigate("/")}
          className="lg:h-[10vh] h-[8vh] cursor-pointer"
          src={Logo}
          alt=""
        ></img>
        {/* --------Navigation Bar starts from here----- */}
        <div className="lg:flex hidden gap-10 text-[20px] bg-neutral-600 border rounded-[14px] p-4 mr-44">
          <label
            className="cursor-pointer hover-3 font-bold"
            onClick={() => navigate("/")}
          >
            Home
          </label>
          <label className="cursor-pointer hover-3 font-bold">Contact Us</label>
          <label
            className="cursor-pointer hover-3 font-bold"
            onClick={() => navigate("/course")}
          >
            Courses
          </label>
          <label
            className="cursor-pointer hover-3 font-bold"
            onClick={() => {
              localStorage.getItem("username")
                ? navigate("/access-yourself")
                : navigate("/login");
            }}
          >
            Assess Yourself
          </label>
          <label className="cursor-pointer hover-3 font-bold">About Us</label>
        </div>
        <div onClick={() => setSidebar(true)} className="lg:hidden block">
          <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
        </div>
        {sidebar && (
          <div
            className={`lg:hidden flex flex-col h-[200vh] fixed top-0 left-0 p-4 pt-2 ${
              sidebar && "sidebar-animate"
            } duration-[1s] gap-5 text-[30px] bg-white shadow-lg drop-shadow-md z-[100] w-[80%]`}
          >
            <label className="text-right" onClick={() => setSidebar(false)}>
              x
            </label>
            <label onClick={() => navigate("/")}>Home</label>
            <label>Contact Us</label>
            <label onClick={() => navigate("/course")}>Courses</label>
            <label onClick={() => navigate("/login")}>Assess Yourself</label>
            <label>About Us</label>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

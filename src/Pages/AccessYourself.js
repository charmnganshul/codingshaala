// StudentDashboard.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/Logo.png";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex gap-2 h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-gray-700 border-r drop-shadow-md  flex flex-col text-white w-64 text-2xl${
          sidebarOpen ? "" : "hidden lg:flex"
        }`}
      >
        <div className="p-2 px-4 text-xl font-bold bg-white">
          <img className="w-[50%]" src={Logo}></img>
        </div>
        {/* Add sidebar links here */}
        <ul className="py-10 px-4 text-xl">
          <li className="mb-4 text-white hover:text-gray-300 flex items-center gap-4">
          <i class="fa fa-leanpub" aria-hidden="true"></i>
            <a href="#" className="block text-white hover:text-gray-300">
              Dashboard
            </a>
          </li>
          <li className="mb-4 text-white hover:text-gray-300 flex items-center gap-4">
          <i class="fa fa-leanpub" aria-hidden="true"></i>
            <a
              onClick={() => navigate("/subjects")}
              className="block cursor-pointer text-white hover:text-gray-300"
            >
              Subjects
            </a>
          </li>
          <li onClick={()=>navigate('/notes')} className="mb-4 text-white hover:text-gray-300 flex items-center gap-4">
          <i class="fa fa-leanpub" aria-hidden="true"></i>
            <a
              onClick={() => navigate("/subjects")}
              className="block cursor-pointer "
            >
              Learning
            </a>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <div className="bg-white border-b p-2 px-4 drop-shadow-sm flex items-center justify-between">
          <button
            className="text-white bg-[#188BCC] h-[30px] px-2 focus:outline-none text-xl"
            onClick={toggleSidebar}
          >
            ☰
          </button>
          <div className="flex gap-2">
            <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png" className="w-[45px] h-[45 px] object-cover rounded-[50%]"></img>
            <div className="flex flex-col">
              <label>Divyansh Jain</label>
              <label className="cursor-pointer text-[14px]" onClick={()=>{localStorage.removeItem("username"); navigate('/')}}>Logout</label>
            </div>
          </div>
          {/* <span className="text-2xl font-bold ml-4">Student Management</span> */}
        </div>

        {/* Main content goes here */}
        <div className="flex flex-col gap-4 overflow-x-hidden overflow-y-auto py-4">
          <div className="bg-white p-4 flex justify-between">
            <label className="text-2xl">Welcome Student</label>
            <nav className="rounded-md">
              <ol className="list-reset flex">
                <li>
                  <a
                    href="#"
                    className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <span className="mx-2 text-neutral-500 dark:text-neutral-400">
                    /
                  </span>
                </li>
                <li className="text-neutral-500 dark:text-neutral-400">
                  Student
                </li>
              </ol>
            </nav>
          </div>
          <div className="flex flex-wrap justify-between pr-2">
            <div className="w-[23%] h-[14vh] flex justify-between p-4 items-center bg-cyan-200 rounded-xl">
              <div className="flex flex-col text-center text-md">
                <label>All Courses</label>
                <label className="text-xl font-bold">04/06</label>
              </div>
              <img src="https://preschool.dreamstechnologies.com/template/assets/img/icons/teacher-icon-01.svg"></img>
            </div>
            <div className="w-[23%] h-[14vh] flex justify-between p-4 items-center bg-cyan-200 rounded-xl">
              <div className="flex flex-col text-center text-md">
                <label>All Projects</label>
                <label className="text-xl font-bold">40/60</label>
              </div>
              <img src="https://preschool.dreamstechnologies.com/template/assets/img/icons/teacher-icon-01.svg"></img>
            </div>
            <div className="w-[23%] h-[14vh] flex justify-between p-4 items-center bg-cyan-200 rounded-xl">
              <div className="flex flex-col text-center text-md">
                <label>Test Attended</label>
                <label className="text-xl font-bold">04/06</label>
              </div>
              <img src="https://preschool.dreamstechnologies.com/template/assets/img/icons/teacher-icon-01.svg"></img>
            </div>
            <div className="w-[23%] h-[14vh] flex justify-between p-4 items-center bg-cyan-200 rounded-xl">
              <div className="flex flex-col text-center text-md">
                <label>Test Passed</label>
                <label className="text-xl font-bold">04/06</label>
              </div>
              <img src="https://preschool.dreamstechnologies.com/template/assets/img/icons/teacher-icon-01.svg"></img>
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="flex flex-col w-[70%]">
              <div className="bg-white border drop-shadow-sm flex flex-col gap-5 rounded-2xl p-4">
                <h1 className="text-2xl font-bold text-center">
                  Course Progress
                </h1>
                <div className="flex gap-5 items-center">
                  <label className="text-lg font-semibold">HTML</label>
                  <div className="w-[85%] h-[2vh] rounded-2xl bg-gray-500">
                    <div className="bg-orange-400 h-[2vh] rounded-2xl w-[50%]"></div>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <label className="text-lg font-semibold">CSS</label>
                  <div className="w-[85%] h-[2vh] rounded-2xl bg-gray-500">
                    <div className="bg-orange-400 h-[2vh] rounded-2xl w-[70%]"></div>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <label className="text-lg font-semibold">Javascript</label>
                  <div className="w-[85%] h-[2vh] rounded-2xl bg-gray-500">
                    <div className="bg-orange-400 h-[2vh] rounded-2xl w-[40%]"></div>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <label className="text-lg font-semibold">React</label>
                  <div className="w-[85%] h-[2vh] rounded-2xl bg-gray-500">
                    <div className="bg-orange-400 h-[2vh] rounded-2xl w-[50%]"></div>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <label className="text-lg font-semibold">Tailwind</label>
                  <div className="w-[85%] h-[2vh] rounded-2xl bg-gray-500">
                    <div className="bg-orange-400 h-[2vh] rounded-2xl w-[50%]"></div>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <label className="text-lg font-semibold">Node Js</label>
                  <div className="w-[85%] h-[2vh] rounded-2xl bg-gray-500">
                    <div className="bg-orange-400 h-[2vh] rounded-2xl w-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[30%] mr-2 bg-white drop-shadow-sm border rounded-2xl p-4 gap-2">
              <h1 className="text-center text-2xl font-bold mb-4">
                Projects Completed
              </h1>
              <div className="flex gap-5 items-center">
                <input type="checkbox" className="w-4 h-4"></input>
                <label className="text-lg font-semibold">Login Template</label>
              </div>
              <div className="flex gap-5 items-center">
                <input type="checkbox" className="w-4 h-4"></input>
                <label className="text-lg font-semibold">
                  Registration Template
                </label>
              </div>
              <div className="flex gap-5 items-center">
                <input type="checkbox" className="w-4 h-4"></input>
                <label className="text-lg font-semibold">Landing Page</label>
              </div>
              <div className="flex gap-5 items-center">
                <input type="checkbox" className="w-4 h-4"></input>
                <label className="text-lg font-semibold">
                  Responsive Website
                </label>
              </div>
              <div className="flex gap-5 items-center">
                <input type="checkbox" className="w-4 h-4"></input>
                <label className="text-lg font-semibold">
                  Eccomerce Website
                </label>
              </div>
              <div className="flex gap-5 items-center">
                <input type="checkbox" className="w-4 h-4"></input>
                <label className="text-lg font-semibold">Live Project</label>
              </div>
              <div className="flex gap-5 items-center">
                <input type="checkbox" className="w-4 h-4"></input>
                <label className="text-lg font-semibold">Pallax Website</label>
              </div>
            </div>
          </div>
          {/* Your main content */}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

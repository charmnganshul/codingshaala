import React from "react";
import Header from "../Components/Header";
import CourseDetail from "../Components/CourseDetail";
import Benefits from '../Components/Benefits'
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()
  return (
    <div>
      <Header></Header>
    <div className="lg:px-28 px-4">
      
      <div className="flex lg:flex-row flex-col lg:gap-20 gap-10 lg:items-center my-10">
        <div className="lg:w-[52%] intro-animation-left flex flex-col gap-5">
          <label className="lg:text-[60px] lg:leading-[70px] text-[30px] heading-font">
          We Teach, You Code, Together We Soar.
          </label>
          <label className="text-[20px] text-gray-700">
            Learn from the experts through personalized sessions and become a
            Pro in Coding & Software Development
          </label>
        </div>
        <div className="border rounded-[20px] box border-blue-500 drop-shadow-lg flex flex-col px-10 py-10 gap-5 lg:w-[45%]">
          <label className="text-center text-[20px] font-bold ">
            Request a call back!
          </label>
          <input
            className="bg-transparent border-b pb-2"
            placeholder="Name*"
          ></input>
          <input
            className="bg-transparent border-b pb-2"
            placeholder="Email*"
          ></input>
          <input
            className="bg-transparent border-b pb-2"
            placeholder="Phone No*"
          ></input>
          <label>Select Courses</label>
          <div className="flex flex-wrap gap-4 text-[20px] mt-[-15px]">
            <div className="flex gap-1 items-center">
              <input
                style={{ width: 16, height: 16 }}
                className=""
                type="checkbox"
              ></input>
              <label>React Js</label>
            </div>
            <div className="flex gap-1 items-center">
              <input style={{ width: 16, height: 16 }} type="checkbox"></input>
              <label>Node Js</label>
            </div>
            <div className="flex gap-1 items-center">
              <input style={{ width: 16, height: 16 }} type="checkbox"></input>
              <label>Full Stack</label>
            </div>
            <div className="flex gap-1 items-center">
              <input style={{ width: 16, height: 16 }} type="checkbox"></input>
              <label>Python</label>
            </div>
          </div>
          <div className="flex items-center w-full justify-center">
            <button className="bg-[#00E1FF] text-white w-[50%] py-1 text-[20px]">
              Register
            </button>
          </div>
        </div>
      </div>
      <CourseDetail></CourseDetail>
      <div className="flex flex-col lg:gap-10 gap-5 items-center">
        <label className="text-[40px]">Who is this for?</label>
        <div className="w-full border rounded-[20px] flex lg:flex-row flex-col gap-10 lg:p-10 p-4">
          <div className="lg:w-[50%]">
            <label>
              Beginner to Intermediate developers and designers who want to
              become comfortable with React JS, Node JS, MERN, MEAN. You should
              already know some JavaScript to start – This isn’t a JavaScript
              101 course. We are here to polish your skills, teach you the
              ethical coding practices, and to make you an all round coder,
              making sure your confidence as a coder is reflected in your
              communication.
              <br></br>
              <br></br>
               We teach by application – encountering many new
              situations while talking about the hows, the whys and the whats
              that we use to solve them.
              <br></br>
              <br></br>
              We steer clear of opinionated design
              patterns, frameworks, libraries and any type of abstraction. These
              things are great and often needed, but can obstruct learning and
              constrain initial understanding. 
              <br></br>
              <br></br>
              At our software training
              institute in Indore, Our tutorials rely heavily upon live project
              implementation, problem solving skills, teaching quality ethical
              coding, soft skill training and much more. If you are stuck, you
              have an inhouse trainer to rush to! Oh, by the way, the stuff we
              build is really fun!
            </label>
          </div>
          <div>
            <img src="https://codersid.com/wp-content/uploads/2022/09/sectionimg.svg"></img>
          </div>
        </div>
      </div>
      <Benefits></Benefits>
      <div className="flex flex-col gap-10 items-center my-10">
        <label className="lg:text-[40px] text-[30px] mt-10">How Are We Different</label>
        <div className="w-full border rounded-[20px] lg:justify-between lg:items-center flex lg:flex-row flex-col gap-10 lg:p-10 p-4">
        <div>
            <img src="https://codersid.com/wp-content/uploads/2022/09/module.svg"></img>
          </div>
          <div className="lg:w-[50%] flex flex-col gap-4">
            <label className="text-[30px] font-semibold">
            We Tutor On
            </label>
            <div className="grid grid-cols-2 gap-4">
                <label className="text-[20px]"><i class="fa fa-share mr-2" aria-hidden="true"></i> OOPS concepts</label>
                <label className="text-[20px]"><i class="fa fa-share mr-2" aria-hidden="true"></i>Debugging</label>
                <label className="text-[20px]"><i class="fa fa-share mr-2" aria-hidden="true"></i>Error Handling</label>
                <label className="text-[20px]"><i class="fa fa-share mr-2" aria-hidden="true"></i>Unit Testing</label>
                <label className="text-[20px]"><i class="fa fa-share mr-2" aria-hidden="true"></i>Optimized code</label>
                <label className="text-[20px]"><i class="fa fa-share mr-2" aria-hidden="true"></i>Ethical coding practices</label>
                <label className="text-[20px]"><i class="fa fa-share mr-2" aria-hidden="true"></i>Reusable Components</label>
                <label className="text-[20px]"><i class="fa fa-share mr-2" aria-hidden="true"></i>Problem solving</label>
                <label className="text-[20px]"><i class="fa fa-share mr-2" aria-hidden="true"></i>Strategy Thinking</label>
                <label className="text-[20px]"><i class="fa fa-share mr-2" aria-hidden="true"></i>Soft skill training</label>
            </div>
          </div>
         
        </div>
      </div>
      
    </div>
    <Footer></Footer>
    </div>
  );
}

export default Home;

import React, {useRef, useState} from "react";
import Header from "../Components/Header";
import CourseDetail from "../Components/CourseDetail";
import Benefits from "../Components/Benefits";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import Roar from "../images/Sheryians_Logo_wFKd9VClG.png";
import emailjs from '@emailjs/browser';

function Home() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [number,setNumber] = useState("")
  const [course,setCourse] = useState("")
  const navigate = useNavigate();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8s4a9ch', 'template_u917kmn', form.current, {
        publicKey: '258gqxqON23pW4uJ3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
      <Header></Header>

      <div className=" px-20 py-6 w-full">
        <div className="flex lg:flex-row flex-col lg:gap-20 gap-10 lg:items-center my-10 w-[100%] py-10  ">
          <div className="lg:w-[57%] intro-animation-left flex flex-col gap-5">
            <div className="flex items-center">
              {" "}
              <h1 className="lg:text-[60px] lg:leading-[70px] text-[30px] heading-font">
                We Teach, You{" "}
                <span className="text-[#00E1FF] font-extrabold underline">
                  Code,
                </span>
                <div className="flex items-center gap-2">
                  {" "}
                  Together We Soar{" "}
                  <img className="h-12 w-12" src={Roar} alt=""></img>
                </div>
              </h1>
            </div>
            <label className="text-[20px] text-gray-500 tracking-wider">
              Learn from the experts through personalized sessions and become a
              Pro in Coding & Software Development
            </label>
          </div>
          {/* <form > */}
          <form ref={form} onSubmit={sendEmail} className="border rounded-[20px] box border-blue-500 drop-shadow-lg flex flex-col px-10 py-10 gap-5 lg:w-[55%]">
            <label className="text-center text-[20px] font-bold ">
              Request a call back!
            </label>
            <input
            onChange={(e)=>setName(e.target.value)}
              className="bg-transparent border-b pb-2 p-2"
              placeholder="Name*"
              name="name"
            ></input>
            <input
            onChange={(e)=>setEmail(e.target.value)}
              className="bg-transparent border-b pb-2 p-2"
              placeholder="Email*"
              name="email"
            ></input>
            <input
            onChange={(e)=>setNumber(e.target.value)}
              className="bg-transparent border-b pb-2 p-2"
              placeholder="Phone No*"
              name="number"
            ></input>
            <label className="font-bold">Select Courses</label>
            <div className="flex flex-wrap gap-4 text-[20px] mt-[-15px] font-semibold">
              <div className="flex gap-1 items-center">
                <input
                onClick={()=>setCourse("React Js")}
                  style={{ width: 16, height: 16 }}
                  className=""
                  type="checkbox"
                  name="course"
                  value="React Js"
                ></input>
                <label>React Js</label>
              </div>
              <div className="flex gap-1 items-center">
                <input
                onClick={()=>setCourse("Node Js")}
                  style={{ width: 16, height: 16 }}
                  type="checkbox"
                  name="course"
                  value="Node Js"
                ></input>
                <label>Node Js</label>
              </div>
              <div className="flex gap-1 items-center">
                <input
                onClick={()=>setCourse("Full Stack")}
                  style={{ width: 16, height: 16 }}
                  type="checkbox"
                  name="course"
                  value="Full Stack"
                ></input>
                <label>Full Stack</label>
              </div>
              <div className="flex gap-1 items-center">
                <input
                onClick={()=>setCourse("Python")}
                  style={{ width: 16, height: 16 }}
                  type="checkbox"
                  name="course"
                  value="Python"
                ></input>
                <label>Python</label>
              </div>
            </div>
            <div className="flex items-center w-full justify-center">
              <button onClick={(e)=>sendEmail(e)} className="bg-[#00E1FF] text-white w-[50%] py-1 text-[20px] rounded-xl font-bold">
                Register
              </button>
            </div>
          {/* </form> */}
          </form>
        </div>
      </div>
      <div className="lg:px-20 px-4">
        <CourseDetail></CourseDetail>
        <div className="flex flex-col lg:gap-10 gap-5 items-center">
          <label className="text-[40px]">Who is this for?</label>
          <div className="w-full border rounded-[20px] flex lg:flex-row flex-col gap-10 lg:p-10 p-4">
            <div className="lg:w-[50%]">
              <label>
                Beginner to Intermediate developers and designers who want to
                become comfortable with React JS, Node JS, MERN, MEAN. You
                should already know some JavaScript to start – This isn’t a
                JavaScript 101 course. We are here to polish your skills, teach
                you the ethical coding practices, and to make you an all round
                coder, making sure your confidence as a coder is reflected in
                your communication.
                <br></br>
                <br></br>
                We teach by application – encountering many new situations while
                talking about the hows, the whys and the whats that we use to
                solve them.
                <br></br>
                <br></br>
                We steer clear of opinionated design patterns, frameworks,
                libraries and any type of abstraction. These things are great
                and often needed, but can obstruct learning and constrain
                initial understanding.
                <br></br>
                <br></br>
                At our software training institute in Indore, Our tutorials rely
                heavily upon live project implementation, problem solving
                skills, teaching quality ethical coding, soft skill training and
                much more. If you are stuck, you have an inhouse trainer to rush
                to! Oh, by the way, the stuff we build is really fun!
              </label>
            </div>
            <div>
              <img src="https://codersid.com/wp-content/uploads/2022/09/sectionimg.svg"></img>
            </div>
          </div>
        </div>
        <Benefits></Benefits>
        <div className="flex flex-col gap-10 items-center my-10">
          <label className="lg:text-[40px] text-[30px] mt-10">
            How Are We Different
          </label>
          <div className="w-full border rounded-[20px] lg:justify-between lg:items-center flex lg:flex-row flex-col gap-10 lg:p-10 p-4">
            <div>
              <img src="https://codersid.com/wp-content/uploads/2022/09/module.svg"></img>
            </div>
            <div className="lg:w-[50%] flex flex-col gap-4">
              <label className="text-[30px] font-semibold">We Tutor On</label>
              <div className="grid grid-cols-2 gap-4">
                <label className="text-[20px]">
                  <i class="fa fa-share mr-2" aria-hidden="true"></i> OOPS
                  concepts
                </label>
                <label className="text-[20px]">
                  <i class="fa fa-share mr-2" aria-hidden="true"></i>Debugging
                </label>
                <label className="text-[20px]">
                  <i class="fa fa-share mr-2" aria-hidden="true"></i>Error
                  Handling
                </label>
                <label className="text-[20px]">
                  <i class="fa fa-share mr-2" aria-hidden="true"></i>Unit
                  Testing
                </label>
                <label className="text-[20px]">
                  <i class="fa fa-share mr-2" aria-hidden="true"></i>Optimized
                  code
                </label>
                <label className="text-[20px]">
                  <i class="fa fa-share mr-2" aria-hidden="true"></i>Ethical
                  coding practices
                </label>
                <label className="text-[20px]">
                  <i class="fa fa-share mr-2" aria-hidden="true"></i>Reusable
                  Components
                </label>
                <label className="text-[20px]">
                  <i class="fa fa-share mr-2" aria-hidden="true"></i>Problem
                  solving
                </label>
                <label className="text-[20px]">
                  <i class="fa fa-share mr-2" aria-hidden="true"></i>Strategy
                  Thinking
                </label>
                <label className="text-[20px]">
                  <i class="fa fa-share mr-2" aria-hidden="true"></i>Soft skill
                  training
                </label>
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

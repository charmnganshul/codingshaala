import React from "react";
import Imgleft from "../images/Gallery/Img Left.jpeg";
import Img1 from "../images/Gallery/Img1.jpeg";
import Img2 from "../images/Gallery/Img2.jpeg";
import Img3 from "../images/Gallery/Img3.jpeg";
import Img4 from "../images/Gallery/Img4.jpeg";
import Img5 from "../images/Gallery/Img5.jpeg";
import Logo from "../images/Logo.png";

function Gallery() {
  return (
    <div className="flex justify-center">
      <div className="h-screen w-[90%] flex justify-center items-center bg-white">
        <div className="w-[40rem] rounded-xl">
          <img className="rounded-xl" src={Imgleft} alt=""></img>
        </div>
        <div className="bg-blue-100 text-white rounded-lg w-full mx-5 md:w-[50rem]  space-y-6 p-10">
          {/* header */}
          <div className="flex flex-col items-center">
            <div className="w-50 h-28 ">
              <img alt="avatar" src={Logo} className=" w-full h-full" />
              <div></div>
            </div>
            <div className="space-y-2">
              <h2 className="text-[30px] font-bold">Explore, Dream, Capture</h2>
            </div>
          </div>

          {/* image grid*/}
          <div className="grid grid-cols-6 col-span-2   gap-2  ">
            <div className=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
              <img className="h-full w-full object-cover " src={Img1} alt="" />
            </div>
            <div className=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
              <img className="h-full w-full object-cover  " src={Img2} alt="" />
            </div>
            <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
              <img className="h-full w-full object-cover " src={Img3} alt="" />
            </div>
            <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
              <img className="h-full w-full object-cover " src={Img4} alt="" />
            </div>
            <div className="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
              <div className="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center">
                + 23
              </div>
              <img className="h-full w-full object-cover " src={Img5} alt="" />
            </div>
          </div>
          {/*        comments*/}
          <div className="flex justify-between pt-5">
            <svg
              className="h-4 w-4 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
              />
            </svg>
            <div className="text-slate-400 text-sm">
              <p>23 Comments</p>
            </div>
          </div>
        </div>
      </div>
      <p />
    </div>
  );
}

export default Gallery;

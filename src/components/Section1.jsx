import React, { useEffect, useState } from "react";
import { Section1_items } from "../config/rawItems";
import { RiStarSFill } from "react-icons/ri";
const Section1 = () => {
  const [imgs, setimgs] = useState([]);
  const [stars, setstars] = useState([0, 1, 2, 3]);

  useEffect(() => {
    setimgs(Section1_items[1]);
  }, []);

  return (
    <div
      className="bg-[#161618] justify-center 
  items-center flex flex-col gap-5 py-2"
    >
      <h1 className="cursor-cell text-2xl text-neutral-200 font-semibold dm-sans-font">
        Over 10000+ Users
      </h1>
      <div className="grid grid-cols-2 max-sm:gap-5">
        {imgs.map((items, index) => (
          <div key={index} className="flex justify-center items-center gap-2">
            <img
              src={items.img}
              alt=""
              width={30}
              height={30}
              className="border-[2px] border-neutral-300 rounded-full p-1"
            />
            <p className="cursor-cell uppercase text-sm text-neutral-400 font-semibold">
              {items.title}
            </p>
          </div>
        ))}
      </div>

      {/* rating */}
      <div
        className="max-md:w-[40%] bg-zinc-800 
  max-md:translate-x-[5%] rounded-[10vw] max-sm:w-[55%] max-sm:translate-x-[1%]"
      >
        <div
          className=" flex gap-3 
    flex-row justify-center items-center 
    max-md:py-3 max-md:px-2 px-8 py-3 max-sm:px-3"
        >
          {stars.map((items, index) => (
            <RiStarSFill key={index} size={30} className="text-yellow-300" />
          ))}
          <p
            className="cursor-cell font-medium ght dm-sans-font
      max-md:text-base text-neutral-300 text-sm max-sm:w-full"
          >
            4 out of 5
          </p>
        </div>
      </div>
      <p
        className="cursor-cell text-neutral-400 dm-sans-font 
      font-base max-md:text-base"
      >
        Based on 200+ reviews
      </p>
    </div>
  );
};

export default Section1;

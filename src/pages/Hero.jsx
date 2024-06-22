import React, { useEffect, useState } from "react";
import { BsFire } from "react-icons/bs";
import { HeroDetails, HeroGrid } from "../config/rawItems";
import { FaPaintBrush } from "react-icons/fa";
import { LuBrush } from "react-icons/lu";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Hero = () => {
  const [usp, setusp] = useState([]);
  const [grid1, setgrid1] = useState([]);
  const [grid2, setgrid2] = useState([]);
  const [buttonHover, setbuttonHover] = useState(null);

  useEffect(() => {
    setusp(HeroDetails[1]);
    setgrid1(HeroGrid[0]);
    setgrid2(HeroGrid[1]);

    const tl = gsap.timeline();

    tl.fromTo(
      "#hero-left h1",
      {
        opacity: 0,
        y: -900,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 2,
      }
    )

      .fromTo(
        "#hero-p",
        {
          xPercent: -100,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 1,
          duration: 2,
        }
      )
      .fromTo(
        "#usp",
        {
          opacity: 0,
          xPercent: -100,
        },
        {
          xPercent: 0,
          opacity: 1,
          stagger: 3,
          duration: 1,
        }
      )

      .fromTo(
        "#hero-right",
        {
          xPercent: 100,
          opacity: 0,
        },
        {
          xPercent: -0,
          opacity: 1,
          stagger: 2,
          duration: 2,
        }
      )
      .fromTo(
        "#hero-grid1",
        {
          yPercent: -100,
          scale: 0,
          opacity: 0,
        },
        {
          yPercent: 0,
          scale: 1,
          opacity: 1,
          stagger: 0.4,
          duration: 2,
        }
      )
      .fromTo(
        "#hero-grid2",
        {
          yPercent: 100,
          scale: 0,
          opacity: 0,
        },
        {
          yPercent: 0,
          scale: 1,
          opacity: 1,
          stagger: 0.4,
          duration: 2,
        }
      )
      .fromTo(
        "#hero-btn",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 2,
        }
      );
  }, []);

  return (
    <>
      <div
        className="bg-gradient-to-l to-[#220f2f] from-[#0a0a0c] 
    w-full h-screen flex flex-row justify-between 
    items-center overflow-hidden max-sm:flex-col z-0 max-sm:gap-9"
      >
        {/* left */}
        <div
          className="flex flex-col gap-3 pl-4 w-1/2 max-sm:w-full max-sm:px-3 max-sm:gap-6"
          id="hero-left"
        >
          <div className="flex flex-col gap-1 max-sm:pt-3 max-sm:gap-2">
            <h1
              className="cursor-cell text-5xl text-white uppercase font-semibold"
              id="hero-title"
            >
              Generate
            </h1>
            <h1
              className="cursor-cell font-semibold text-5xl text-white gap-2 uppercase"
              id="hero-title"
            >
              <span className="gradient-text mr-5">image</span>
              with
              <span className="gradient-text ml-5">AI</span>
            </h1>
            <br />
            <h1
              className="cursor-cell text-white flex font-semibold
            flex-row gap-4 uppercase text-5xl"
              id="hero-title"
            >
              instantly
              <span>
                <BsFire className="text-purple-500 drop-shadow-md" />
                {/* <img src="fire_3487886.png" alt="" /> */}
              </span>
            </h1>
          </div>

          {HeroDetails.map((items, index) => (
            <p
              key={index}
              className="cursor-cell text-neutral-300 font-extralight
            dm-sans-font w-[75%] text-justify text-base max-sm:w-[95%]"
              id="hero-p"
            >
              {items.p}
            </p>
          ))}

          <div
            className="ease-linear duration-500 transition-all flex flex-row max-md:flex-col gap-3"
            id="usp"
          >
            {usp.map((items, index) => (
              <div
                key={index}
                className="flex flex-row justify-center
              items-center gap-2 dm-sans-font
              border-[2px] border-purple-700 px-3 py-2
              rounded-full cursor-default"
                id="inner-usp"
              >
                <span className="text-green-500">{items.icons}</span>
                <p className="cursor-cell text-neutral-300">{items.metadata}</p>
              </div>
            ))}
          </div>
          <Link
            to="/generate"
            className={`bg-[#383aff] py-4 w-[35%]
          rounded-md text-white font-semibold 
          dm-sans-font translate-x-[20%] my-2 ease-linear duration-500 transition-all
          hover:bg-[#181cff] shadow-md shadow-[#383aff]
          max-md:w-[57%] flex flex-row justify-center items-center gap-3 max-sm:w-[70%]
          `}
            id="hero-btn"
            onMouseEnter={() => {
              setbuttonHover(true);
            }}
            onMouseLeave={() => {
              setbuttonHover(false);
            }}
          >
            Generate AI Images
            <span className=" transition-all duration-300 ease-linear">
              {buttonHover ? <FaPaintBrush /> : <LuBrush />}
            </span>
          </Link>
        </div>

        {/* right */}
        <div
          className="grid grid-cols-2 overflow-hidden
          px-3 gap-4 w-1/2 max-md:w-[47%] z-0 max-sm:w-[90%] max-sm:overflow-auto
         "
          id="hero-right"
        >
          <div className="flex flex-col gap-4 z-0" id="hero-grid1">
            {grid1.map((items, index) => (
              <img src={items} alt="" key={index} className="rounded  z-0" />
            ))}
          </div>
          <div className="flex flex-col gap-4 z-0" id="hero-grid2">
            {grid2.map((items, index) => (
              <img src={items} alt="" key={index} className="rounded z-0" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

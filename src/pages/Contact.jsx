import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";

const Contact = () => {
  useEffect(() => {
    gsap.from("img", {
      opacity: 0,
      duration: 1,
    });

    // h1
    gsap.from("#about h1", {
      opacity: 0,
      y: -900,
      duration: 1,
    });
    gsap.to("#about h1", {
      y: 0,
      duration: 3,
      stagger: 3,
      opacity: 1,
    });
    // img
    gsap.to("img", {
      opacity: 1,
      duration: 8,
    });
  }, []);
  const services = [
    {
      imgs: "https://bilalshahid-13.github.io/Portfolio/strategy.png",
      title: "Strategy & Direction",
      des: "Defining the problem, identifying the scope and finally, organising the design roadmap to bring out 100% of every project.",
    },
    {
      imgs: "https://bilalshahid-13.github.io/Portfolio/design.png",
      title: "Design UI/UX",
      des: "Defining the problem, identifying the scope and finally, organising the design roadmap to bring out 100% of every project.",
    },
  ];

  return (
    <>
      <div
        className="lg:mt-[02%] flex flex-col justify-center
       items-center gap-4 max-sm:pt-[10%] bg-zinc-900 max-sm:py-5"
      >
        <div className="flex flex-col gap-4" id="about">
          <h1 className="Josefin-Sans max-md:text-6xl text-[10vw] text-neutral-200">
            MY LITTLE
          </h1>
          <h1
            className="Josefin-Sans max-md:text-4xl text-[6vw] text-right
            text-neutral-400"
          >
            BIT ABOUT*
          </h1>
        </div>

        <div
          className="flex justify-center items-center max-lg:flex-row md:gap-6 bg-zinc-800 mx-2 max-md:mx-4 
        max-md:flex-col  shadow shadow-purple-900 max-sm:py-2"
        >
          <img
            src="https://bilalshahid-13.github.io/Portfolio/file.jpg"
            alt=""
            className="max-md:w-[70%] max-md:h-70% w-[100%] h-[100%] p-2 rounded-lg "
          />
          <div className="flex flex-col justify-center items-center tracking-wider px-4 gap-5 mt-2 ">
            <p
              className="font-extralight text-base md:text-xl 
            lg:text-4xl xl:text-5xl dm-sans-font text-left
             leading-relaxed tracking-wider text-neutral-300"
            >
              I help people and companies achieve their&nbsp;
              <span className="font-semibold">goals by designing&nbsp;</span>&
              building&nbsp;
              <span className="font-semibold">user-friendly&nbsp;</span>
              websites and &nbsp;
              <span className="font-semibold">interactive &nbsp;</span>
              experiences.
            </p>

            <p className="text-xl max-md:text-[16px] text-neutral-300 font-extralight text-justify dm-sans-font">
              I’ve been developing work in many disciplines around the world for
              the past 8 years in Web Development, crafting Systematic Digital
              Experiences, defining Brand Design and Product User Interfaces. A
              Developer at heart, I am interested in creating useful
              relationships between people and technology.
            </p>
          </div>
        </div>

        <div className="space-y-7 my-[3%]">
          <h2
            className="Josefin-Sans max-md:text-5xl lg:text-[10vw] 
            text-neutral-300 uppercase max-sm:text-[6vw]"
          >
            Featured
          </h2>
          <h2
            className="Josefin-Sans max-md:text-5xl lg:text-[12vw] 
            text-neutral-500 uppercase text-right max-sm:text-[12vw]"
          >
            servies*
          </h2>
        </div>

        <div
          className="flex flex-col gap-4 
        "
        >
          {services.map((items, index) => (
            <div
              key={index}
              className="bg-zinc-800 p-3 rounded-lg 
              flex flex-col max-md:w-1/2 
              max-md:translate-x-[50%] 
              max-sm:w-[80%] max-sm:translate-x-[13%]
              max-sm:justify-center max-sm:items-center gap-4 shadow shadow-purple-900"
            >
              <img
                src={items.imgs}
                alt=""
                className="w-[10%] h-[10%] max-sm:w-[50%] max-sm:h-[50%] drop-shadow-lg"
              />
              <h1 className="text-neutral-200 font-semibold">{items.title}</h1>
              <p className="text-neutral-300">{items.des}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;

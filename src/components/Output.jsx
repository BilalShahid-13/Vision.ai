import React, { useEffect, useState } from "react";
import Grade from "grade-js";
import { RiDownload2Fill } from "react-icons/ri";

const Output = ({ imgsrc }) => {
  const [imgUrl, setimgUrl] = useState("");
  useEffect(() => {
    if (imgsrc) {
      setimgUrl(imgsrc);
      console.log("output", imgsrc);
    }
  }, [imgsrc]);

  return (
    <div className="shadow p-2 max-md:m-6 rounded-lg shadow-zinc-600 max-sm:mt-[8vh]">
      <img
        src={imgUrl}
        // src={"ec78b5ab-d34e-42de-b49d-d9e12e34103e"}
        // src={'../hero/2.png'}
        alt="ai generated img"
        className="relative"
        cross-origin="anonymous object-cover w-full h-full"
        onLoad={() => {
          Grade(document.querySelector("#main"));
        }}
      />
      <button
        className="absolute max-md:top-[64%] max-sm:top-[68%]
        max-md:right-[06%] right-[18%] top-[61%] max-sm:mr-4 mr-4"
        onClick={() => {
          const link = document.createElement("a");
          link.href = imgsrc;
          link.download = `generated_image_${imgsrc.split("/").pop()}.jpg`;
          link.click();
        }}
      >
        <RiDownload2Fill
          // size={40}
          className="bg-gradient-to-r from-sky-500 to-indigo-500
           text-zinc-800 p-2 rounded-md hover:p-[6px] hover:text-zinc-950 
           ease-linear duration-100 transition-all max-sm:text-[34px] text-5xl"
        />
        {/* Download */}
      </button>
    </div>
  );
};

export default Output;

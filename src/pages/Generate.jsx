import React, { useEffect, useState } from "react";
import InputField from "../components/InputField";

const Generate = () => {
  const [dataFromChild, setDataFromChild] = useState("");
  const [generateClick, setgenerateClick] = useState(false);

  useEffect(() => {}, [generateClick]);

  function handleDataFromChild(data) {
    setDataFromChild(data);
  }

  return (
    <main className={`bg-zinc-900 w-full h-screen`} id="main">
      <div className="flex flex-col justify-start items-center bg-zinc-900 max-md:gap-5 gap-9 py-[10vh]">
        <div className="flex">
          <div className="flex flex-col justify-center items-center max-md:gap-1 gap-4">
            <h1
              className="max-md:text-3xl Josefin-Sans cursor-cell
             text-center text-white font-semibold text-4xl
             max-md:leading-relaxed uppercase"
            >
              Create <span className="gradient-text">Powerfull</span> AI art or
              <br /> image in seconds
            </h1>
            <div className="grid w-[70%] max-md:w-[50%] max-sm:w-[90%]">
              <p className="text-base text-zinc-500 line-clamp-3 text-center cursor-cell max-sm:tracking-widest max-sm:leading-relaxed">
                Meet Vision, the AI powered photo generator who will turn any
                text into unique image in seconds
              </p>
            </div>
          </div>
        </div>

        {/* input */}
        <InputField sendDataToParent={handleDataFromChild} />

        <div></div>
      </div>
    </main>
  );
};

export default Generate;

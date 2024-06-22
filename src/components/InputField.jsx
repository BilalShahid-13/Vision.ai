import React, { useEffect, useState } from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { PiPaintBrushFill } from "react-icons/pi";
import axios from "axios";
import Output from "./Output";
import Loading from "./Loading";
import { useAuth0 } from "@auth0/auth0-react";

const InputField = ({ sendDataToParent }) => {
  const { isAuthenticated, user } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      setloggedin(true);
    } else {
      setloggedin(false);
    }
  }, [isAuthenticated]);

  const [buttonHover, setbuttonHover] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [imgsrc, setimgsrc] = useState("");
  const [loading, setloading] = useState(false);
  const [loggedin, setloggedin] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    const newValue = value.replace(/[^A-Za-z ]/gi, "");
    // const spacedValue = newValue.split("").join(" ");
    setInputValue(value);
    if (value !== newValue) {
      setErrorMessage("Only alphabetic characters are allowed");
    } else {
      setErrorMessage("");
    }
  };

  const PostReq = async () => {
    setloading(true);
    const apiUrl = "http://localhost:8000";
    const apiToken = "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";

    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
        { inputs: inputValue },
        {
          headers: {
            Authorization: `Bearer ${apiToken}`,
            "Content-Type": "application/json",
          },
          responseType: "blob",
        }
      );
      const blob = response.data;
      const url = URL.createObjectURL(blob);
      console.log("result", url);
      console.log("result", blob);
      setimgsrc(url);
      console.log(isAuthenticated);
      if (loggedin) {
        saveData(url, user);
      }
      console.log("imgurl", url);
    } catch (error) {
      console.log("error in post req", error.message);
    } finally {
      setloading(false);
    }
  };

  const saveData = async (img) => {
    console.log("text", inputValue);
    console.log("img", img);
    try {
      const apiUrl = "http://localhost:8000";
      const response = await axios.post(
        `${apiUrl}/insert`,
        {
          text: inputValue,
          img: img,
          email: user.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("inserting data", response);
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  return (
    <>
      {/* input */}
      <div className="flex flex-col border-[1px] border-slate-500 p-1 rounded-full">
        <div className="max-sm:relative flex flex-row justify-center items-center gap-3 pl-3">
          <FaWandMagicSparkles size={20} color="white" />
          <input
            type="text"
            accept="text"
            value={inputValue}
            className="w-[70vw] py-1 outline-none bg-transparent
              placeholder:text-zinc-500 text-blue-400 dm-sans-font max-sm:w-[80vw] 
              max-sm:py-2 max-sm:placeholder:text-sm max-sm:space-y-5"
            onChange={handleChange}
            placeholder="Describe your artistic vision or idea here"
          />
          <button
            disabled={loading}
            className={`bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-row 
            max-sm:absolute max-sm:right-0
           justify-center items-center gap-4 text-neutral-100
           dm-sans-font text-base font-semibold
           max-sm:left-0 max-sm:top-12 rounded-full py-3 px-6 
           disabled:bg-blue-900 disabled:cursor-wait max-sm:my-3`}
            onMouseEnter={() => {
              setbuttonHover(true);
            }}
            onMouseLeave={() => {
              setbuttonHover(false);
            }}
            onClick={() => {
              sendDataToParent(inputValue);
              setimgsrc(null);
              PostReq();
            }}
          >
            Generate
            {buttonHover ? <PiPaintBrushFill /> : ""}
          </button>
        </div>
      </div>

      {imgsrc ? <Output imgsrc={imgsrc} /> : null}
      {loading ? <Loading /> : null}

      {/* <Tmp /> */}
    </>
  );
};

export default InputField;

import React, { useEffect, useState } from "react";
import { RiDownload2Fill } from "react-icons/ri";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const History = () => {
  const { isAuthenticated, user } = useAuth0();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      getData();
    }
  }, [isAuthenticated]);

  const getData = async () => {
    try {
      const apiUrl = "http://localhost:8000";
      const response = await axios.get(
        `${apiUrl}/getData/${encodeURIComponent(user.email)}`
      );
      console.log("Fetched data:", response.data.result);
      setData(response.data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="w-full h-full grid lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 p-4 bg-zinc-950">
      {data.map((item) => (
        <div
          className="relative shadow p-1 max-md:m-6 rounded-lg shadow-zinc-600 max-sm:mt-[8vh] aspect-w-2 aspect-h-1"
          style={{ aspectRatio: "1 / 1" }}
          key={item._id}
        >
          <img
            src={item.img} // Ensure item.img is the correct image URL from MongoDB
            alt="AI generated image"
            className="object-cover w-full h-full rounded-md"
          />
          <button className="absolute max-md:top-0 max-sm:top-[68%] max-md:right-0 top-0 mt-6 right-0 mr-6 max-sm:mr-4">
            <RiDownload2Fill className="bg-gradient-to-r from-sky-500 to-indigo-500 text-zinc-800 p-2 rounded-md hover:p-[6px] hover:text-zinc-950 ease-linear duration-100 transition-all max-sm:text-[34px] text-5xl max-md:text-[35px]" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default History;

{
  /* <div className="relative shadow p-1 max-md:m-6 rounded-lg shadow-zinc-600 max-sm:mt-[8vh] aspect-w-7 aspect-h-10">
  <img
    src="../hero/1.png"
    alt="ai generated img"
    className="object-cover w-full h-full"
  />
  <button className="absolute max-md:top-0 max-sm:top-[68%] max-md:right-0 top-0 mt-6 right-0 mr-6 max-sm:mr-4">
    <RiDownload2Fill className="bg-gradient-to-r from-sky-500 to-indigo-500 text-zinc-800 p-2 rounded-md hover:p-[6px] hover:text-zinc-950 ease-linear duration-100 transition-all max-sm:text-[34px] text-5xl max-md:text-[35px]" />
  </button>
</div>

<div className="relative shadow p-1 max-md:m-6 rounded-lg shadow-zinc-600 max-sm:mt-[8vh] aspect-w-1 aspect-h-1">
  <img
    src="../hero/3.png"
    alt="ai generated img"
    className="object-cover w-full h-full"
  />
  <button className="absolute max-md:top-0 max-sm:top-[68%] max-md:right-0 top-0 mt-6 right-0 mr-6 max-sm:mr-4">
    <RiDownload2Fill className="bg-gradient-to-r from-sky-500 to-indigo-500 text-zinc-800 p-2 rounded-md hover:p-[6px] hover:text-zinc-950 ease-linear duration-100 transition-all max-sm:text-[34px] text-5xl max-md:text-[35px]" />
  </button>
</div>

<div className="relative shadow p-1 max-md:m-6 rounded-lg shadow-zinc-600 max-sm:mt-[8vh] aspect-w-1 aspect-h-1">
  <img
    src="../hero/4.png"
    alt="ai generated img"
    className="object-cover w-full h-full"
  />
  <button className="absolute max-md:top-0 max-sm:top-[68%] max-md:right-0 top-0 mt-6 right-0 mr-6 max-sm:mr-4">
    <RiDownload2Fill className="bg-gradient-to-r from-sky-500 to-indigo-500 text-zinc-800 p-2 rounded-md hover:p-[6px] hover:text-zinc-950 ease-linear duration-100 transition-all max-sm:text-[34px] text-5xl max-md:text-[35px]" />
  </button>
</div> */
}

import React from "react";

const Work = () => {
  return (
    <div className="bg-zinc-950 w-full text-neutral-500 max-sm:pt-9">
      <ol
        className="relative grid max-md:grid-cols-3 grid-cols-4 gap-12 
      justify-center items-center px-8 h-[90vh]
      max-sm:grid-cols-1 max-sm:h-full max-sm:py-4"
      >
        <li className="text-neutral-100 font-semibold shadow shadow-purple-900 flex gap-3 p-3 flex-col justify-center items-start">
          Simple Description
          <ul className="text-neutral-400 font-extralight">
            <li>A black cat with green eyes sitting on a red couch.</li>
          </ul>
        </li>
        <li className="text-neutral-100 font-semibold shadow shadow-purple-900 flex gap-3 p-3 flex-col justify-center items-start">
          Detailed Description
          <ul className="text-neutral-400 font-extralight">
            <li>
              A majestic snow-capped mountain bathed in the golden light of a
              setting sun, with a clear sky and a forest of pine trees at its
              base.
            </li>
          </ul>
        </li>
        <li className="text-neutral-100 font-semibold shadow shadow-purple-900 flex gap-3 p-3 flex-col justify-center items-start">
          Artistic Style
          <ul className="text-neutral-400 font-extralight">
            <li>
              A surreal painting of a black cat with green eyes sitting on a red
              couch, in the style of Salvador Dalí.
            </li>
          </ul>
        </li>

        <li className="text-neutral-100 font-semibold shadow shadow-purple-900 flex gap-3 p-3 flex-col justify-center items-start">
          Specific Scene
          <ul className="text-neutral-400 font-extralight">
            <li>
              A serene landscape with a snowy mountain in the background, a calm
              lake in the foreground, and a sunset casting a golden glow over
              the scene.
            </li>
          </ul>
        </li>

        <li className="text-neutral-100 font-semibold shadow shadow-purple-900 flex gap-3 p-3 flex-col justify-center items-start">
          Mood and Atmosphere
          <ul className="text-neutral-400 font-extralight">
            <li>
              A gloomy, rainy city street at night with neon signs reflecting
              off wet pavement, and a lone figure holding an umbrella
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Work;

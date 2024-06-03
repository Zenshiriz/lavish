import React from "react";
import { motion } from "framer-motion";
import Reveal from "../animations/Reveal";
function WhatWeOfferCard({ title, img }) {
  return (
    <Reveal>
    <div class="relative flex flex-col text-gray-700 bg-[#FBE8E4] shadow-md bg-clip-border rounded-xl w-96">
      <div class="relative flex items-center justify-center mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
        <motion.img
          whileHover={{
            scale: 1.3,
          }}
          transition={{ duration: 0.25 }}
          src={img}
          className=" cursor-pointer"
          alt="profile-picture"
        />
      </div>
      <div class="p-6 text-center">
        <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h4>
      </div>
    </div>
    </Reveal>
  );
}

export default WhatWeOfferCard;

import React from "react";

function InfoCard({img, eventName, description}) {
  return (
    <div class="relative py-4 flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[1000px] md:flex-row transition duration-150 ease-in-out">
      <div class="relative h-full flex items-center justify-center lg:max-w-[500px] max-h-[330px] md:max-w-[300px] m-0 overflow-hidden text-gray-700 px-4 bg-white rounded-r-none bg-clip-border  shrink-0">
        <img
          src={img}
          alt="card-image"
          class="object-cover  w-full h-full bg-center  rounded-lg transition duration-150 ease-in-out"
        />
      </div>
      <div class="p-6 md:px-7">
        <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 transition duration-150 ease-in-out">
          {eventName}
        </h4>
        <p class="block mb-8  font-sans text-base antialiased font-normal leading-relaxed text-gray-700 transition duration-150 ease-in-out">
        {description}
        </p>
      </div>
    </div>
  );
}

export default InfoCard;

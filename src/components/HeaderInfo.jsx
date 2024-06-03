import React from "react";
import Reveal from "../animations/Reveal";

function HeaderInfo({img}) {
  return (
    <div className={` py-10 object-cover`} style={{ background: `url("${img}")` , backgroundPosition:"center", backgroundSize:"cover", backdropFilter:"brightness(60%)"}}>
      <div className=" flex flex-col justify-between items-center">
        <Reveal color="#FBE8E4">
        <h1 class="block font-sans capitalize text-4xl antialiased font-semibold leading-tight tracking-normal text-inherit text-white">
          Lavish
        </h1>
        </Reveal>
        <Reveal color="#FBE8E4">
        <h3 class="block font-sans text-3xl antialiased  font-thin capitalize leading-none tracking-normal text-inherit text-white">
          events & decors
        </h3>
        </Reveal>
      </div>
      <div className="flex justify-center mt-10">
        <Reveal color="#FBE8E4">
        <p class="block font-sans text-sm antialiased font-light leading-normal text-inherit text-white">
        Your vision meets Our expertise
        </p>
        </Reveal>
      </div>
    </div>
  );
}

export default HeaderInfo;

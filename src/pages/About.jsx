import React from "react";
import { Button } from "@material-tailwind/react";
import HeaderInfo from "../components/HeaderInfo";
import InfoCard from "../components/InfoCard";
import logo from "../assets/logo.jpg";
import WhatWeOffer from "../components/WhatWeOffer";
import howItWorksImg from "../assets/how-it-works.jpg"
import HeaderAbout from "../assets/header-about-us.png";

function About() {
  const aboutUs = {
    name: "About Us",
    image: logo,
    description:
      "At [Lavish], our mission is to transform visions into reality by curating bespoke events and breathtaking decor that reflect the unique personalities and preferences of our clients. We are dedicated to delivering exceptional quality, creativity, and attention to detail in every aspect of our work, ensuring seamless execution and unforgettable experiences. Our commitment to excellence drives us to continually innovate, collaborate, and exceed the expectations of our clients, setting new standards of excellence in the event and decor industry.",
  };
  return (
    <>
      <HeaderInfo img={HeaderAbout} />
      <div className="p-6 py-9 flex justify-center items-center">
        <InfoCard
          eventName={aboutUs.name}
          img={aboutUs.image}
          description={aboutUs.description}
        />
      </div>
      <WhatWeOffer />
      <div className="md:flex my-6 text-gray-900">
        <div className=" w-full px-6 md:w-[50%] lg:px-10">
          <img src={howItWorksImg} alt="image" className=" w-full max-h-[400px] object-cover" />
        </div>
        <div className=" my-6 md:my-0 px-6">
          <h2 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-inherit">
            How It Works{" "}
          </h2>
          <p class="block text-gray-700 font-sans text-sm md:text-lg antialiased font-normal leading-relaxed text-inherit ">
            It’s simple. You have an event We have amazing packages
          </p>
          <div className="mt-10 flex flex-col gap-y-6">
            <h4 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-inherit uppercase">
              contact us
            </h4>
            <h4 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-inherit uppercase">
              make the deal
            </h4>
            <h4 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-inherit uppercase">
              EXPERIENCE OUR PROFESSIONAL SERVICE
            </h4>
          </div>
        <Button size='sm' className='my-6 rounded-full text-sm bg-[#FBE8E4] text-[#372825] capitalize font-normal' >Book Now</Button>
        </div>

 
      </div>
    </>
  );
}

export default About;

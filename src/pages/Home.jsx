import React from "react";
import CarouselComponent from "../components/CarouselComponent";
import { RiCustomerService2Fill } from "react-icons/ri";
import { PiMedalBold } from "react-icons/pi";
import { PiMoneyWavy } from "react-icons/pi";
import WEDecor from "../components/WEDecor";
import CherishedGallery from "../components/CherishedGallery";
import TestimonialSection from "../components/TestimonialSection";
import Reveal from "../animations/Reveal";

function Home() {
  return (
    <>
      <CarouselComponent />
      <div className="bg-[#FBE8E4] py-10 px-10 flex flex-col items-center md:flex-row md:justify-between gap-10">
        <Reveal color={"#372825"}>
        <div className="flex gap-x-6 justify-center">
          <RiCustomerService2Fill className=" text-3xl text-gray-900" />
          <div className="">
            <h3 className=" text-lg font-bold text-gray-900">
              RELIABLE QUALITY SERVICE
            </h3>
            <p className=" text-sm max-w-[230px] font-thin text-gray-900">
              We never compromise the quality for high-quality to décor services
            </p>
          </div>
        </div>
        </Reveal>
        <Reveal color={"#372825"}>
        <div className="flex gap-x-6 justify-center">
          <PiMedalBold className=" text-3xl text-gray-900" />
          <div className="">
            <h3 className=" text-lg font-bold text-gray-900">
              MOST TRUSTED COMPANY
            </h3>
            <p className=" text-sm max-w-[230px] font-thin text-gray-900">
              Our expertise and experience establish us as a top event
              decoration company in mangalore.
            </p>
          </div>
        </div>
        </Reveal>
        <Reveal color={"#372825"}>
        <div className="flex gap-x-6 justify-center">
          <PiMoneyWavy className=" text-3xl text-gray-900" />
          <div className="">
            <h3 className=" text-lg font-bold text-gray-900">
              AFFORDABLE RATES
            </h3>
            <p className=" text-sm max-w-[230px] font-thin text-gray-900">
              We are committed to quality and not to high pricing!
            </p>
          </div>
        </div>
        </Reveal>
      </div>
      <WEDecor/>
      <CherishedGallery/>
      <TestimonialSection/>
    </>
  );
}

export default Home;

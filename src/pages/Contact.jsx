import React, { useState } from "react";
import HeaderInfo from "../components/HeaderInfo";
import headingContact from "../assets/header-contact.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdLocationOn, MdEmail, MdLocalPhone } from "react-icons/md";
import contactImg from "../assets/contact-img.jpg";
import { Typography } from "@material-tailwind/react";
import { IoLogoWhatsapp } from "react-icons/io";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Reveal from "../animations/Reveal";


function Contact() {
  const [copiedText, setCopiedText] = useState(null);

  function copyText(textValue) {
    try {
      navigator.clipboard
        .writeText(textValue)
        .then(() => {
          setCopiedText(textValue);
          toast.success("Text copied!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch((error) => {
          console.error("Failed to copy text: ", error);
          toast.error("Failed to copy text!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });
    } catch (error) {}
  }

  return (
    <>
      <HeaderInfo img={headingContact} />
      <div className="pt-10 md:pt-16 md:flex md:flex-row-reverse">
        <div className="h-[400px] md:w-[50%] md:min-h-[500px] lg:min-h-[600px] p-8">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={contactImg}
              className=" object-cover h-full w-full"
              alt=""
            />
          </div>
        </div>
        <div className=" px-10 md:w-[50%] md:pt-16">
          <Reveal>
          <Typography className="font-Lexend uppercase text-gray-900 text-base max-w-[520px]">
            Looking for the best and most experienced décor professionals in
            mangalore? Get in touch with us without the slightest hesitation.
            Call us !
          </Typography>
          </Reveal>
          <div className="my-8 lg:my-10 flex flex-col gap-4">
            <Reveal>    
            <p className=" flex items-center gap-1 text-gray-900 font-Lexend md:text-base">
              <IoLogoWhatsapp />
              <span onClick={() => copyText(event.target.textContent)}>9844235429</span>
            </p>
            </Reveal>
            <Reveal>
            <p className=" flex items-center gap-1 text-gray-900 font-Lexend md:text-base">
              <MdLocalPhone />
              <span onClick={() => copyText(event.target.textContent)}>9844235429</span>
            </p>
            </Reveal>
            <Reveal>
            <p className=" flex items-center gap-1 text-gray-900 font-Lexend md:text-base">
              <MdEmail />
              <span onClick={() => copyText(event.target.textContent)}>lavishmangalore@gmail.com</span>
            </p>
            </Reveal>
            <Reveal>
            <p className=" flex items-center md:items-start gap-1 text-gray-900 font-Lexend md:text-base">
              <MdLocationOn />
              <div className="flex flex-col gap-y-2">
                <span className="text-sm">
                  <span className="font-bold">Address 1:</span>{" "}
                  <span onClick={() => copyText(event.target.textContent)}>
                    yenepoya Mall, Mangalore 575002
                  </span>
                </span>
                <span className="text-sm">
                  <span className="font-bold mr-2">
                    Surathkal branch office:
                  </span>
                  <span onClick={() => copyText(event.target.textContent)}>
                  2nd block, katipalla, near rock gym
                  </span>
                </span>
              </div>
            </p>
            </Reveal>
          </div>
          <div className="mb-8 ">
            <Reveal>
            <p className=" flex items-center gap-1 text-gray-900 font-Lexend md:text-base">
              <AiOutlineInstagram />
              instagram
            </p>
            </Reveal>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden relative h-[300px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d964.4614799311986!2d74.82988552156185!3d13.002143966319043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSurathkal%20branch%20office%20%3A%202nd%20block%2C%20katipalla%2C%C2%A0near%C2%A0rock%C2%A0gym!5e0!3m2!1sen!2sin!4v1716102756582!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className=" border h-full w-full left-0 top-0 absolute"
        ></iframe>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Contact;

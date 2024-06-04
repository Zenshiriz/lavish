import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { GrInstagram } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function FooterComponent() {
  const LINKS = [
    {
      title: "Navigation",
      items: ["Home", "About Us", "Contact Us", "Gallery"],
      path: ["/", "/about", "/contact", "/gallery"],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full  bg-[#372825] text-[#FBE8E4]">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2 ">
          <img
            src={logo}
            alt=""
            className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full my-6"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- justify-between gap-4 gap-y-6 my-6">
            <ul>
              <Typography variant="lead" className="mb-3 font-bold uppercase">
                Navigation
              </Typography>
              <li>
                <Link to="/">
                  <Typography className="py-1.5 font-thin text-sm transition-colors ">
                    Home
                  </Typography>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <Typography className="py-1.5 font-thin text-sm transition-colors ">
                    About Us
                  </Typography>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <Typography className="py-1.5 font-thin text-sm transition-colors ">
                    Contact Us
                  </Typography>
                </Link>
              </li>
              <li>
                <Link to="/gallery">
                  <Typography className="py-1.5 font-thin text-sm transition-colors ">
                    Gallery
                  </Typography>
                </Link>
              </li>
            </ul>
            <ul>
              <Typography variant="lead" className="mb-3 font-bold uppercase">
                Services
              </Typography>
              <li>
                <Typography className="py-1.5 font-thin text-sm transition-colors ">
                  Birthday Events
                </Typography>
              </li>
              <li>
                <Typography className="py-1.5 font-thin text-sm transition-colors ">
                  Baby shower
                </Typography>
              </li>
              <li>
                <Typography className="py-1.5 font-thin text-sm transition-colors ">
                  Bridal / Groom Shower{" "}
                </Typography>
              </li>
              <li>
                <Typography className="py-1.5 font-thin text-sm transition-colors ">
                  Mehendi ceremony{" "}
                </Typography>
              </li>
              <li>
                <Typography className="py-1.5 font-thin text-sm transition-colors ">
                  Haldi ceremony{" "}
                </Typography>
              </li>
              <li>
                <Typography className="py-1.5 font-thin text-sm transition-colors ">
                  Arabic nights{" "}
                </Typography>
              </li>
              <li>
                <Typography className="py-1.5 font-thin text-sm transition-colors ">
                  Dolki decor{" "}
                </Typography>
              </li>
              <li>
                <Typography className="py-1.5 font-thin text-sm transition-colors ">
                  Wedding Stage Decorations{" "}
                </Typography>
              </li>
              <li>
                <Typography className="py-1.5 font-thin text-sm transition-colors ">
                  Hall Decorations{" "}
                </Typography>
              </li>
            </ul>
            <ul>
              <Typography variant="lead" className="mb-3 font-bold uppercase">
                our contacts{" "}
              </Typography>
              <div className=" flex flex-col gap-4">
                <div className="flex items-center">
                  <MdEmail className=" text-lg mr-2" />
                  <span className=" text-sm ">lavishmangalore@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className=" text-lg mr-2" />
                  <span className="text-sm">+91 9844235429</span>
                </div>
                <div className="flex items-center">
                  <IoLocationSharp className=" text-xl mr-2" />
                  <div className="flex flex-col">

                  <span className="text-sm">
                   <span className="font-bold">Address 1</span>: yenepoya Mall, Mangalore 575002
                  </span>
                  <div className="text-sm">
                  <span className="font-bold mr-2">Surathkal branch office:</span>2nd block, katipalla, near rock gym{" "}
                  </div>
                  </div>
                </div>
              </div>
            </ul>
            <ul>
            <Typography variant="lead" className="mb-3 font-bold uppercase">
                Get on social
              </Typography>
              <div className="flex items-center gap-x-4">
              <a
                href="https://wa.me/919980887718?text=Hello How can I help you ?"
                target="_blank"
              >
              <Button
                type="text"
                size="sm"
                className="inline-block w-10 h-10 rounded-full text-center px-0  bg-transparent outline outline-1 outline-[#FBE8E4]"
              >
                <span className="flex justify-center">
                  <IoLogoWhatsapp className=" text-center text-xl" />
                </span>
              </Button>
              </a>
              <a
                href="https://www.instagram.com/lavish.mlr?igsh=NW92ZjZxaDRxZG15&utm_source=qr"
                target="_blank"
              >   
              <Button
                type="text"
                size="sm"
                className="inline-block w-10 h-10 rounded-full text-center px-0  bg-transparent outline outline-1 outline-[#FBE8E4]"
              >
                <span className="flex justify-center">
                  <GrInstagram className=" text-center text-xl" />
                </span>
              </Button>
              </a>
            </div>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal  md:mb-0"
          >
            &copy; {currentYear} <a href="#">Lavish</a>. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import React from "react";
import logo from "../assets/logo.jpg";
import { Link, useLocation } from "react-router-dom";
import { GrInstagram } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import servicesData from "../servicesData";
function NavbarComponent() {
  const pathName = useLocation.pathname;
  const [openNav, setOpenNav] = React.useState(false);
  const [openDropDown, setOpenDropDown] = React.useState(false);
  const toggleDropdown = () => {
    setOpenDropDown(!openDropDown)
  };

  console.log(pathName);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const DropdownButton = () => {
    return (
      <button
        id="dropdownNavbarLink"
        onClick={toggleDropdown}
        data-dropdown-toggle="dropdownNavbar"
        className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
      >
        Services
        <svg
          className="w-4 h-4 ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );
  };

  const DropdownMenu = () => {
    return (
      <div
        id="dropdownNavbar"
        className={`${openDropDown  ? "block md:absolute" : "hidden"}  bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44`}
      >
        <ul className="py-1" aria-labelledby="dropdownLargeButton">
          {servicesData.map(service =>(
            <li key={service.id}>
              <Link
                to={service.link}
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
              >
                {service.eventName}
              </Link>
            </li>
          ))}
        </ul>
       
      </div>
    );
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          to="/"
          className="flex items-center"
          onClick={() => setOpenNav(false)}
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          to="/about"
          className="flex items-center"
          onClick={() => setOpenNav(false)}
        >
          About Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          to="/contact"
          className="flex items-center"
          onClick={() => setOpenNav(false)}
        >
          Contact Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          to="/gallery"
          className="flex items-center"
          onClick={() => setOpenNav(false)}
        >
          Gallery
        </Link>
      </Typography>
      <div >
      <DropdownButton />
      <DropdownMenu />
      </div>

    </ul>
  );
  return (
    <div className="">
      <Navbar className="bg-[#FBE8E4] sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-gray-900">
          <div>
            <img src={logo} className="w-12 h-12" alt="logo" />
          </div>
          <div className="mr-4 hidden lg:block">
            {navList}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-4">
              <a
                href="https://wa.me/919980887718?text=Hello How can I help you ?"
                target="_blank"
              >
                {" "}
                <Button
                  type="text"
                  size="sm"
                  className="hidden lg:inline-block w-10 h-10 rounded-full text-center px-0  bg-transparent outline outline-1 outline-[#372825]"
                >
                  <span className="flex justify-center">
                    <IoLogoWhatsapp className="text-[#372825] text-center text-xl" />
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
                  className="hidden lg:inline-block w-10 h-10 rounded-full text-center px-0  bg-transparent outline outline-1 outline-[#372825]"
                >
                  <span className="flex justify-center">
                    <GrInstagram className="text-[#372825] text-center text-xl" />
                  </span>
                </Button>
              </a>
              <a href="tel:+919980887718">
                <Button
                  size="sm"
                  className="hidden lg:inline-block bg-[#372825] font-medium "
                >
                  <span>book now</span>
                </Button>
              </a>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <div className="hidden border-t-[.5px] mt-2 pt-2 border-black md:flex justify-between">
          <div className="flex items-center">
            <MdEmail className="text-[#372825] text-lg mr-2" />
            <span className="text-[#372825] ">lavishmangalore@gmail.com</span>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="text-[#372825] text-lg mr-2" />
            <span className="text-[#372825] ">+91 9844235429</span>
          </div>
          <div className="flex items-center">
            <IoLocationSharp className="text-[#372825] text-lg mr-2" />
            <span className="text-[#372825] ">
              yenepoya Mall, Mangalore 575002
            </span>
          </div>
        </div>
        <Collapse open={openNav}>
         {openNav && navList}
          <div className="flex items-center justify-between gap-x-4">
            <div className="flex gap-x-4 ml-2 mb-3">
              <a
                href="https://wa.me/919980887718?text=Hello How can I help you ?"
                target="_blank"
              >
                <Button
                  type="text"
                  size="sm"
                  className=" w-10 h-10 rounded-full text-center px-0  bg-transparent outline outline-1 outline-[#372825]"
                >
                  <span className="flex justify-center">
                    <IoLogoWhatsapp className="text-[#372825] text-center text-xl" />
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
                  className=" w-10 h-10 rounded-full text-center px-0  bg-transparent outline outline-1 outline-[#372825]"
                >
                  <span className="flex justify-center">
                    <GrInstagram className="text-[#372825] text-center text-xl" />
                  </span>
                </Button>
              </a>
            </div>
            <a href="tel:+919980887718">
              <Button size="sm" className=" bg-[#372825] font-medium ">
                <span>book now</span>
              </Button>
            </a>
          </div>
          <div className="flex flex-col gap-y-4 mt-2">
            <div className="flex items-center">
              <MdEmail className="text-[#372825] text-lg mr-2" />
              <span className="text-[#372825] ">lavishmangalore@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-[#372825] text-lg mr-2" />
              <span className="text-[#372825] ">+91 9844235429</span>
            </div>
            <div className="flex items-center">
              <IoLocationSharp className="text-[#372825] text-lg mr-2" />
              <span className="text-[#372825] ">
                yenepoya Mall, Mangalore 575002
              </span>
            </div>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;

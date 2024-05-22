import {
  Navbar,
  MobileNav,
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

function NavbarComponent() {
  const pathName =  useLocation.pathname
  const [openNav, setOpenNav] = React.useState(false);
   console.log(pathName)
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/about" className="flex items-center">
          About Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/contact" className="flex items-center">
          Contact Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/gallery" className="flex items-center">
          Gallery
        </Link>
      </Typography>
    </ul>
  );
  return (
    <div className="">
      <Navbar className="bg-[#FBE8E4] sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-gray-900">
          <div>
            <img src={logo} className="w-12 h-12" alt="logo" />
          </div>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-4">
              <Button
                type="text"
                size="sm"
                className="hidden lg:inline-block w-10 h-10 rounded-full text-center px-0  bg-transparent outline outline-1 outline-[#372825]"
              >
                <span className="flex justify-center">
                  <IoLogoWhatsapp className="text-[#372825] text-center text-xl" />
                </span>
              </Button>
              <Button
                type="text"
                size="sm"
                className="hidden lg:inline-block w-10 h-10 rounded-full text-center px-0  bg-transparent outline outline-1 outline-[#372825]"
              >
                <span className="flex justify-center">
                  <GrInstagram className="text-[#372825] text-center text-xl" />
                </span>
              </Button>
              <Button
                size="sm"
                className="hidden lg:inline-block bg-[#372825] font-medium "
              >
                <span>book now</span>
              </Button>
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
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center justify-between gap-x-4">
            <div className="flex gap-x-4 ml-2 mb-3">
              <Button
                type="text"
                size="sm"
                className=" w-10 h-10 rounded-full text-center px-0  bg-transparent outline outline-1 outline-[#372825]"
              >
                <span className="flex justify-center">
                  <IoLogoWhatsapp className="text-[#372825] text-center text-xl" />
                </span>
              </Button>
              <Button
                type="text"
                size="sm"
                className=" w-10 h-10 rounded-full text-center px-0  bg-transparent outline outline-1 outline-[#372825]"
              >
                <span className="flex justify-center">
                  <GrInstagram className="text-[#372825] text-center text-xl" />
                </span>
              </Button>
            </div>
            <Button size="sm" className=" bg-[#372825] font-medium ">
              <span>book now</span>
            </Button>
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
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;

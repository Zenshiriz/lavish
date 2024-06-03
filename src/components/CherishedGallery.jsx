import React from "react";
import { Button } from "@material-tailwind/react";
import cherishedImg1 from "../assets/charished-1.png";
import cherishedImg2 from "../assets/charished-2.png";
import cherishedImg3 from "../assets/charished-3.png";
import cherishedImg4 from "../assets/charished-4.png";
import cherishedImg5 from "../assets/charished-5.png";
import cherishedImg6 from "../assets/charished-6.png";
import { useNavigate } from "react-router-dom";
import Reveal from "../animations/Reveal";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function CherishedGallery() {

  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  const navigate = useNavigate();
  const data = [
    {
      imageLink: cherishedImg1,
    },
    {
      imageLink: cherishedImg2,
    },
    {
      imageLink: cherishedImg3,
    },
    {
      imageLink: cherishedImg4,
    },
    {
      imageLink: cherishedImg5,
    },
    {
      imageLink: cherishedImg6,
    },
  ];
  return (
    <div className=" my-6">
      <div className=" flex justify-center">
        <Reveal color={"#372825"}>
          <h2 class="block antialiased tracking-normal text-center my-10 font-sans text-4xl font-semibold leading-[1.3] text-inherit">
            Cherished Moments
          </h2>
        </Reveal>
      </div>
      <div ref={ref} className="flex flex-wrap justify-center items-center px-6 gap-6">
        {data.map(({ imageLink }, index) => (
          <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 1, delay: 0.25 }}

          key={index}>
            <img
              className="h-40 min-w-[250px] md:min-w-[300px] max-w-full rounded-lg object-cover object-center md:h-60"
              src={imageLink}
              alt=""
            />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center my-4">
        <Button
          size="sm"
          className=" rounded-full text-sm bg-[#FBE8E4] text-[#372825] capitalize font-normal"
          onClick={() => navigate("/gallery")}
        >
          View More
        </Button>
      </div>
    </div>
  );
}

export default CherishedGallery;

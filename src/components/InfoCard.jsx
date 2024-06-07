import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
function InfoCard({ img, eventName, description , buttonVisible , link }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [cardState, setCardState] = useState({ img, eventName, description, link });
  const mainControls = useAnimation();

  useEffect(() => {
    // Animate on initial render and prop changes
    if (isInView) {
      mainControls.start("visible");
    }

    // Update animation state on prop changes
    setCardState({ img, eventName, description });
  }, [isInView, img, eventName, description]);

  return (
    <div ref={ref} className="relative py-4 flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[1000px] md:flex-row transition duration-150 ease-in-out">
      <div className="relative h-full flex items-center justify-center lg:max-w-[500px] max-h-[330px] md:max-w-[300px] m-0 overflow-hidden text-gray-700 px-4 bg-white rounded-r-none bg-clip-border shrink-0">
        <motion.img
          variants={{
            hidden: { opacity: 0,  },
            visible: { opacity: 1,  },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 , ease:"easeInOut"}}
          src={cardState.img}
          alt="card-image"
          className="object-cover  w-full h-full bg-center  rounded-lg transition duration-150 ease-in-out"
        />
      </div>
      <div className="p-6 md:px-7">
        <motion.h4
          variants={{
            hidden: { opacity: 0,  },
            visible: { opacity: 1, },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 , ease:"easeInOut"}}
          
          className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 transition duration-150 ease-in-out"
        >
          {cardState.eventName}
        </motion.h4>
        <motion.p
          variants={{
            hidden: { opacity: 0,  },
            visible: { opacity: 1, },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 , ease:"easeInOut"}}
          className="block mb-6  font-sans text-base antialiased font-normal leading-relaxed text-gray-700 transition duration-150 ease-in-out"
        >
          {cardState.description}
        </motion.p>
           {buttonVisible &&
           <Link to={`/${cardState.link}`}>
           <Button
              size="sm"
              className=" rounded-full text-sm bg-[#FBE8E4] text-[#372825] capitalize font-normal"
            >
            Book {eventName} Event
            </Button>
           </Link>
}
      </div>
    </div>
  );
}

export default InfoCard;

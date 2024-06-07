import React, { useEffect } from "react";
import { motion} from "framer-motion";

function GalleryGrid({images}) {
  
  const [active, setActive] = React.useState(images[0]);
  useEffect(()=>{
    setActive(images[0]);
  },[images])
  return (
    <div className="grid gap-4 justify-center">
      <motion.div id="#img" className=" flex justify-center items-center max-w-7xl mx-auto" layout >
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:max-h-[600px] transition-all duration-300 ease-in-out"
          src={active}
          alt=""
        />
      </motion.div>
      <motion.div
      inherit={{opacity:0}}
      animate={{opacity:1}}
      className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index}>
            <a href="#img">
            <img
              onClick={() => setActive(image)}
              src={image}
              className="h-full w-full max-w-full cursor-pointer rounded-lg object-cover object-center max-h-[360px] hover:opacity-60"
              alt="gallery-image"
            />
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default GalleryGrid;

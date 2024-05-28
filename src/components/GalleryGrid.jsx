import React from "react";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import gallery5 from "../assets/gallery-5.jpg";
import gallery6 from "../assets/gallery-6.jpg";
import gallery7 from "../assets/gallery-7.jpg";
import gallery8 from "../assets/gallery-8.jpg";
import gallery9 from "../assets/gallery-9.jpg";
import gallery10 from "../assets/gallery-10.jpg";
import gallery11 from "../assets/gallery-11.jpg";
import gallery12 from "../assets/gallery-12.jpg";
function GalleryGrid() {
  const data = [
    {
      imgelink: gallery1
    },
    {
      imgelink: gallery2
    },
    {
      imgelink:gallery3
    },
    {
      imgelink: gallery4
    },
    {
      imgelink: gallery5
    },
    {
      imgelink: gallery6
    },
    {
      imgelink: gallery7
    },
    {
      imgelink: gallery8
    },
    {
      imgelink: gallery9
    },
    {
      imgelink: gallery11
    },
    {
      imgelink: gallery12
    },
  ];

  const [active, setActive] = React.useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  );
  return (
    <div className="grid gap-4 justify-center">
      <div className=" flex justify-center items-center max-w-7xl mx-auto">
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:max-h-[600px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-full w-full max-w-full cursor-pointer rounded-lg object-cover object-center max-h-[360px]"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryGrid;

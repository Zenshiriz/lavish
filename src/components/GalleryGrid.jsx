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
  const imgDivStyle = "flex justify-center items-center ";
  const imgStyles = "h-full max-w-full rounded-lg object-fill object-center";

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="grid gap-4">
        <div>
          <img className={imgStyles} src={gallery1} alt="gallery-photo" />
        </div>
        <div>
          <img className={imgStyles} src={gallery2} alt="gallery-photo" />
        </div>
        <div>
          <img className={imgStyles} src={gallery3} alt="gallery-photo" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img className={imgStyles} src={gallery4} alt="gallery-photo" />
        </div>
        <div>
          <img className={imgStyles} src={gallery5} alt="gallery-photo" />
        </div>
        <div>
          <img className={imgStyles} src={gallery6} alt="gallery-photo" />
        </div>
      </div>
      <div className="grid gap-4">
        <div className={imgDivStyle}>
          <img className={imgStyles} src={gallery7} alt="gallery-photo" />
        </div>
        <div className={imgDivStyle}>
          <img className={imgStyles} src={gallery8} alt="gallery-photo" />
        </div>
        <div className={imgDivStyle}>
          <img className={imgStyles} src={gallery9} alt="gallery-photo" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img src={gallery12} className={imgStyles} alt="gallery-photo" />
        </div>
        <div>
          <img className={imgStyles} src={gallery11} alt="gallery-photo" />
        </div>
      </div>
    </div>
  );
}

export default GalleryGrid;

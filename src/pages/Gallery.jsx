import React from 'react'
import HeaderInfo from '../components/HeaderInfo'
import headingGallery from "../assets/header-gallery.png"
import GalleryGrid from '../components/GalleryGrid'
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
function Gallery() {
  const data = [
    gallery1,
   gallery2,
   gallery3,
  gallery4,
   gallery5,
     gallery6,
   gallery7,
  gallery8,
     gallery9,
   gallery11,
  gallery12,
 
  ];
  return (
    <>
     <HeaderInfo img={headingGallery}/> 
     <div className=' px-4 md:px-8 lg:px-12 my-10'>
     <h2 class="block antialiased tracking-normal text-center my-10 font-sans text-4xl font-semibold leading-[1.3] text-inherit">
        Gallery
      </h2>
     <GalleryGrid images={data}/>
     </div>
    </>
  )
}

export default Gallery

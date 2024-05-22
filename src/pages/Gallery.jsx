import React from 'react'
import HeaderInfo from '../components/HeaderInfo'
import headingGallery from "../assets/header-gallery.png"
import GalleryGrid from '../components/GalleryGrid'
function Gallery() {
  return (
    <>
     <HeaderInfo img={headingGallery}/> 
     <div className=' px-4 md:px-8 lg:px-12 my-10'>
     <h2 class="block antialiased tracking-normal text-center my-10 font-sans text-4xl font-semibold leading-[1.3] text-inherit">
        Gallery
      </h2>
     <GalleryGrid/>
     </div>
    </>
  )
}

export default Gallery

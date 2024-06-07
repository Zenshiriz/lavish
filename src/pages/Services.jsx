import React from 'react'
import servicesData from '../servicesData'
import { useParams } from 'react-router-dom'
import InfoCard from '../components/InfoCard'
import GalleryGrid from '../components/GalleryGrid'

function Services() {
    const paramsId = useParams().id
    const serviceInfo = servicesData.filter(service => service.link === paramsId)
    console.log(serviceInfo)
  return (
    <>
    <div className='p-6 py-9 flex justify-center items-center'>
    <InfoCard
      eventName={serviceInfo[0].eventName}
      img={serviceInfo[0].coverImg}
      description={serviceInfo[0].description}
    />
    </div>
    <div className='px-4 md:px-8 lg:px-12 my-10'>
    <h2 class="block antialiased tracking-normal text-center my-10 font-sans text-4xl font-semibold leading-[1.3] text-inherit">
        Gallery
      </h2>
    <GalleryGrid  images={serviceInfo[0].images}/>
    </div>
    </>
  )
}

export default Services

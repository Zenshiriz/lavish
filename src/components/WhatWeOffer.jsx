import React from 'react'
import WhatWeOfferCard from './WhatWeOfferCard'
import babyShowerImg from "../assets/about-baby-shower.jpg"
import hallDecorationImg from "../assets/hall-decor-card.jpg"
import mehendiCeremonyImg from "../assets/about-mehendi.jpg"
import arabicightsImg from "../assets/about-arabian.jpg"
import dholkiImg from "../assets/about-dolki.jpg"
import brithdayImg from "../assets/about-birthday-decor.jpg"
import haldiImg from "../assets/about-haldi.jpg"
import brideImg from "../assets/about-baby-shower.jpg"
import Reveal from '../animations/Reveal'

function WhatWeOffer() {
    const cardInfos = [
        {
            id:1,
            title:"Baby Shower",
            img: babyShowerImg
        },
        {
            id:2,
            title:"Hall Decorations",
            img: hallDecorationImg
        },
        {
            id:3,
            title:"Mehendi ceremony",
            img: mehendiCeremonyImg
        },
        {
            id:4,
            title:"Arabic nights",
            img: arabicightsImg
        },
        {
            id:5,
            title:"Dholki decor",
            img: dholkiImg
        },
        {
            id:6,
            title:"Birthday Events",
            img: brithdayImg
        },
        {
            id:7,
            title:"Haldi ceremony",
            img: haldiImg
        },
        {
            id:8,
            title:"Bridal/Groom Shower",
            img: brideImg
        },
    ]
  return (
      <div className=' my-10'>
        <div className=' flex justify-center'>

        <Reveal color={"#372825"} >
        <h2 class="block antialiased tracking-normal text-center my-10 font-sans text-4xl font-semibold leading-[1.3] text-inherit">
        What We Offer
      </h2>
      </Reveal>
        </div>
      <div className=' flex flex-wrap justify-center items-center gap-10'>
        {cardInfos.map(info =>(
       <WhatWeOfferCard key={info.id} title={info.title} img={info.img}/>
        ))}
      </div>
    </div>
  )
}

export default WhatWeOffer

import React, { useState, useEffect } from "react";
import InfoCard from "./InfoCard";
import decorDetailsBirthdayImg from "../assets/birthday-card.png";
import decorDetailsBabyShowerImg from "../assets/baby-shower-card.jpg";
import decorDetailsHaldiCeremonyImg from "../assets/Haldi-ceremony-card.jpg";
import decorDetailsWeddingCeremonyImg from "../assets/wedding-ceremony-card.jpg";
import decorDetailsDholkiImg from "../assets/dholki-card.jpg";
import decorDetailsHallDecorImg from "../assets/hall-decor-card.jpg";
import decorDetailsBrideDecorImg from "../assets/bride-decor-card.jpg";
import decorDetailsArabianNightsDecorImg from "../assets/arabian-nights-card.jpg";
import decorDetailsMehendiDecorImg from "../assets/mehendi-card.jpg";
import Reveal from "../animations/Reveal";
import { motion } from "framer-motion";
function WEDecor() {
  const decorDetails = [
    {
      id: 1,
      eventName: "Birthday",
      img: decorDetailsBirthdayImg,
      description: `Every wedding is unique, let Lavish Event & Decor be a part of your
      fairytale. We are here to help bring your ideas and dreams to reality.
      lavish Event & Decor is your one-stop-shop for planners and brides who
      want to transform the look, feel, and mood of any wedding venue.`,
    },
    {
      id: 2,
      eventName: "Baby Shower",
      img: decorDetailsBabyShowerImg,
      description: `Every tiny arrival deserves a grand celebration. Lavish Event & Decor is here to transform your baby shower into a heartwarming and unforgettable experience.
      From whimsical themes to elegant settings, we handle all the details so you can focus on welcoming your precious one. Let Lavish Event & Decor create a baby shower that reflects the joy and love surrounding this special occasion.`,
    },
    {
      id: 3,
      eventName: "Haldi Ceremony",
      img: decorDetailsHaldiCeremonyImg,
      description: `Awaken the vibrant colors of celebration with a meticulously planned Haldi ceremony by Lavish Event & Decor. This auspicious pre-wedding ritual signifies blessings, purification, and joyous anticipation.

      We meticulously craft a beautiful and meaningful experience, from sourcing the purest turmeric paste to adorning the venue with vibrant decor. Lavish Event & Decor ensures your Haldi ceremony radiates warmth, joy, and the promise of a prosperous union.`,
    },
    {
      id: 4,
      eventName: "wedding ceremony",
      img: decorDetailsWeddingCeremonyImg,
      description: `Every love story deserves a breathtaking backdrop. Lavish Event & Decor transforms your wedding vision into a captivating reality, exceeding your wildest dreams.

      We are your one-stop shop for wedding décor, meticulously crafting an ambiance that reflects the unique story of your love. From breathtaking floral arrangements and elegant drapery to stunning centerpieces and whimsical lighting, Lavish Event & Decor curates a symphony of design elements that leave a lasting impression.`,
    },
    {
      id: 5,
      eventName: "Dholki Decor",
      img: decorDetailsDholkiImg,
      description: `Embrace the vibrant energy of a Dholki celebration with electrifying décor by Lavish Event & Decor. This joyous pre-wedding event sets the stage for vibrant festivities and joyous anticipation.

      We transform your venue into a pulsating kaleidoscope of color and rhythm. Imagine dazzling strings of fairy lights, colorful drapes flowing with movement, and captivating centerpieces that echo the celebratory spirit. `,
    },
    {
      id: 6,
      eventName: "Hall Decoration",
      img: decorDetailsHallDecorImg,
      description: `Your vision. Our expertise. Lavish Event & Decor elevates any hall into a captivating and unforgettable space. From grand ballrooms to intimate gatherings, we possess the artistry and skill to transform your venue into a reflection of your desires.

      We offer a comprehensive suite of hall decoration services, from stunning drapery and elegant table linens to captivating lighting design and thematic centerpieces.`,
    },
    {
      id: 7,
      eventName: "Bride/Groom Shower",
      img: decorDetailsBrideDecorImg,
      description: `Celebrate the upcoming nuptials with a shower brimming with joy and personality, designed by Lavish Event & Decor! Whether it's a classic bridal shower or a modern co-ed celebration, we create a vibrant and festive atmosphere to honor the bride or groom.

      We take the guesswork out of shower planning, offering a variety of design themes and details to match the guest of honor's personality.`,
    },
    {
      id: 8,
      eventName: "Arabic Nights",
      img: decorDetailsArabianNightsDecorImg,
      description: `Transport your guests to a world of shimmering silks and enchanting fables with an Arabian Nights-themed event designed by Lavish Event & Decor. We'll transform your chosen space into a captivating oasis, brimming with the mystique and opulence of the Orient.

      Imagine a breathtaking scene: Lush fabrics drape the walls, evoking the comfort of desert tents.
      
      `,
    },
    {
      id: 9,
      eventName: "Mehendi ceremony",
      img: decorDetailsMehendiDecorImg,
      description: `Celebrate the vibrant artistry of henna with a captivating Mehndi ceremony designed by Lavish Event & Decor. This joyous pre-wedding tradition signifies blessings, adornment, and the blossoming of love.

      We transform your chosen venue into a kaleidoscope of color and light, creating a space that reflects the celebratory spirit of the occasion. Lavish Event & Decor provides comfortable seating, stunning centerpieces, and thematic décor, ensuring your guests feel welcome and immersed in the festivities.`,
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState(decorDetails[0]); // Initially set to last item

  function handleEventClick(event) {
    const clickedEventName = event.target.innerText
      .toLowerCase()
      .replace(/\s+/g, " "); // Replace multiple spaces with a single space
    const selectedEvent = decorDetails.find(
      (item) => item.eventName.toLowerCase() === clickedEventName
    );
    setSelectedEvent(selectedEvent);
  }


  return (
    <motion.div layout>
      <div className=" flex justify-center">
      <Reveal color={"#372825"} >
        <h2 class="block antialiased   tracking-normal text-center my-10 font-sans text-4xl font-semibold leading-[1.3] text-inherit">
          We Decor
        </h2>
      </Reveal>
      </div>
      <div className="flex justify-between px-6 py-6 md:flex-col md:gap-y-4">
        <ul className="flex flex-col gap-y-3 md:flex-row md:justify-center md:gap-6 lg:gap-8 md:items-center">
          <li
            className={`${
              selectedEvent.eventName === "Birthday"
                ? "font-bold text-[#372825]"
                : null
            } text-gray-900 capitalize cursor-pointer transition duration-150 ease-in-out`}
            onClick={() =>
              handleEventClick({ target: { innerText: "Birthday" } })
            }
          >
            Birthday Events
          </li>
          <li
            className={`${
              selectedEvent.eventName === "Baby Shower"
                ? "font-bold text-[#372825]"
                : null
            } text-gray-900 capitalize cursor-pointer transition duration-150 ease-in-out`}
            onClick={() =>
              handleEventClick({ target: { innerText: "Baby Shower" } })
            }
          >
            Baby Shower
          </li>
          <li
            className={`${
              selectedEvent.eventName === "Haldi Ceremony"
                ? "font-bold text-[#372825]"
                : null
            } text-gray-900 capitalize cursor-pointer transition duration-150 ease-in-out`}
            onClick={() =>
              handleEventClick({ target: { innerText: "Haldi Ceremony" } })
            }
          >
            Haldi Ceremony
          </li>
          <li
            className={`${
              selectedEvent.eventName === "wedding ceremony"
                ? "font-bold text-[#372825]"
                : null
            } text-gray-900 capitalize cursor-pointer transition duration-150 ease-in-out`}
            onClick={() =>
              handleEventClick({ target: { innerText: "wedding ceremony" } })
            }
          >
            Wedding ceremony
          </li>
          <li
            className={`${
              selectedEvent.eventName === "Mehendi ceremony"
                ? "font-bold text-[#372825]"
                : null
            } text-gray-900 capitalize cursor-pointer transition duration-150 ease-in-out`}
            onClick={() =>
              handleEventClick({ target: { innerText: "Mehendi ceremony" } })
            }
          >
            Mehendi ceremony
          </li>
        </ul>
        <ul className="flex flex-col gap-y-3 md:flex-row md:justify-center md:gap-6 lg:gap-8 md:items-center">
          <li
            className={`${
              selectedEvent.eventName === "Dholki Decor"
                ? "font-bold text-[#372825]"
                : null
            } text-gray-900 capitalize cursor-pointer transition duration-150 ease-in-out`}
            onClick={() =>
              handleEventClick({ target: { innerText: "Dholki Decor" } })
            }
          >
            Dholki Decor
          </li>
          <li
            className={`${
              selectedEvent.eventName === "Hall Decoration"
                ? "font-bold text-[#372825]"
                : null
            } text-gray-900 capitalize cursor-pointer transition duration-150 ease-in-out`}
            onClick={() =>
              handleEventClick({ target: { innerText: "Hall Decoration" } })
            }
          >
            Hall Decoration
          </li>
          <li
            className={`${
              selectedEvent.eventName === "Bride/Groom Shower"
                ? "font-bold text-[#372825]"
                : null
            } text-gray-900 capitalize cursor-pointer transition duration-150 ease-in-out`}
            onClick={() =>
              handleEventClick({ target: { innerText: "Bride/Groom Shower" } })
            }
          >
            Bride/Groom Shower
          </li>
          <li
            className={`${
              selectedEvent.eventName === "Arabic Nights"
                ? "font-bold text-[#372825]"
                : null
            } text-gray-900 capitalize cursor-pointer  transition duration-150 ease-in-out`}
            onClick={() =>
              handleEventClick({ target: { innerText: "Arabic Nights" } })
            }
          >
            Arabic Nights
          </li>
        </ul>
      </div>
      <div className="p-6 flex justify-center items-center">
      <InfoCard
          eventName={selectedEvent.eventName}
          img={selectedEvent.img}
          description={selectedEvent.description}
        />
      </div>
    </motion.div>
  );
}

export default WEDecor;

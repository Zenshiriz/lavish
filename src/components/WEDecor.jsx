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
import servicesData from "../servicesData";

function WEDecor() {
 

  const [selectedEvent, setSelectedEvent] = useState(servicesData[0]); // Initially set to last item

  function handleEventClick(event) {
    const clickedEventName = event.target.innerText
      .toLowerCase()
      .replace(/\s+/g, " "); // Replace multiple spaces with a single space
    const selectedEvent = servicesData.find(
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
          img={selectedEvent.coverImg}
          description={selectedEvent.description}
          link={selectedEvent.link}
          buttonVisible={true}
        />
      </div>
    </motion.div>
  );
}

export default WEDecor;

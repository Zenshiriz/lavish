import { Carousel, Typography, Button } from "@material-tailwind/react";
import carsel from "../assets/carsel1.jpg";
import carsel2 from "../assets/carsel2.jpg";
import carsel3 from "../assets/carsel3.jpg";
import Reveal from "../animations/Reveal";
function CarouselComponent() {
  return (
    <Carousel className="h-[50vh] md:h-screen">
      <div className="relative h-full w-full">
        <img src={carsel} alt="image 2" className="h-full w-full   " />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4 mt-3 flex flex-col justify-between  max-h-[500px]">
            <div className="flex justify-center">
              <Reveal color={'#FBE8E4'}>
                <Typography
                  variant="h1"
                  color="white"
                  className="md:mb-4 text-xl md:text-4xl lg:text-5xl uppercase text-center"
                >
                  welcome to Lavish
                </Typography>

                <Typography
                  variant="h3"
                  color="white"
                  className="mb-16 font-medium text-lg md:text-3xl lg:text-4xl  capitalize"
                >
                  events & decors
                </Typography>
              </Reveal>
            </div>
            <div className=" flex justify-center">
            <Reveal color={'#FBE8E4'}>
                <Typography
                  variant="lead"
                  color="white"
                  className="md:mb-12  opacity-80"
                >
                  where Your vision meets Our expertise
                </Typography>
              </Reveal>
            </div>
            <div className="flex justify-center gap-2 mt-6 md:mt-16">
              <Button
                size="sm"
                className="bg-[#FBE8E4] text-[#372825] rounded-full px-4"
              >
                plan your wedding
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full max-h-[800px]">
        <img
          src={carsel2}
          alt="image 2"
          className="h-full w-full  object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4 mt-3 flex flex-col justify-between  max-h-[500px]">
            <div className=" flex justify-center">
            <Reveal color={'#FBE8E4'}>
                <Typography
                  variant="h1"
                  color="white"
                  className="md:mb-4 text-xl md:text-4xl lg:text-5xl uppercase"
                >
                  welcome to Lavish
                </Typography>
                <Typography
                  variant="h3"
                  color="white"
                  className="mb-16 font-medium text-lg md:text-3xl lg:text-4xl  capitalize"
                >
                  events & decors
                </Typography>
              </Reveal>
            </div>
            <div className=" flex justify-center">
              <Reveal>
                <Typography
                  variant="lead"
                  color="white"
                  className="md:mb-12  opacity-80"
                >
                  where Your vision meets Our expertise
                </Typography>
              </Reveal>
            </div>
            <div className="flex justify-center gap-2 mt-6 md:mt-16">
              <Button
                size="sm"
                className="bg-[#FBE8E4] text-[#372825] rounded-full px-4"
              >
                Decor your stage
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full ">
        <img
          src={carsel3}
          alt="image 3"
          className="h-full  w-full  object-cover aspect-square"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4 mt-3 flex flex-col justify-between  max-h-[500px]">
            <div className=" flex justify-center">
              <Reveal>
                <Typography
                  variant="h1"
                  color="white"
                  className="md:mb-4 text-xl md:text-4xl lg:text-5xl uppercase"
                >
                  welcome to Lavish
                </Typography>
                <Typography
                  variant="h3"
                  color="white"
                  className="mb-16 font-medium text-lg md:text-3xl lg:text-4xl  capitalize"
                >
                  events & decors
                </Typography>
              </Reveal>
            </div>
            <div className=" flex justify-center">
              <Reveal>
                <Typography
                  variant="lead"
                  color="white"
                  className="md:mb-12  opacity-80"
                >
                  where Your vision meets Our expertise
                </Typography>
              </Reveal>
            </div>
            <div className="flex justify-center gap-2 mt-6 md:mt-16">
              <Button
                size="sm"
                className="bg-[#FBE8E4] text-[#372825] rounded-full px-4"
              >
                book your dream wedding
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default CarouselComponent;

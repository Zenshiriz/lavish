import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function TestimonialSection() {
  const userData = [
    {
      id: 1,
      userName: "Jessica Devis",
      review: `"The connections you make at Web Summit are unparalleled, we met users all over the world."`,
    },
    {
      id: 2,
      userName: "Linde Michel",
      review: `"Web Summit will increase your appetite, your inspiration, your skills, your motivation and your network."`,
    },
    {
      id: 3,
      userName: "Misha Stam",
      review: `"The pessimist complains about the 
wind; the optimist expects it to 
change; the realist adjusts the sails."`,
    },
  ];

  function StarIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 text-gray-900"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  return (
    <div className="bg-[#FBE8E4] py-8 px-6 lg:mx-12 my-10">
      <div className="flex flex-col items-center px-4 py-8">
        <h3 class="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-inherit">
          Think about us
        </h3>
        <p class="block font-sans text-sm md:text-lg antialiased font-normal leading-relaxed text-inherit text-center">
          That’s the main thing people are controlled by! Thoughts - their
          perception of themselves!
        </p>
      </div>
      <div className=" flex flex-wrap justify-center items-center gap-x-6  ">
        {userData.map((user) => (
          <Card className="mt-6 w-96" key={user.id}>
            <CardBody className=" text-center">
              <Typography variant="h5" color="blue-gray" className="mb-4">
                {user.userName}
              </Typography>
              <Typography>
              {user.review}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0  text-center">
              <div className="5 flex items-center justify-center gap-0 text-gray-900">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSection;

import { workExperience } from "@/data";
import React from "react";
import { Button } from "./MovingBorders";

const Experience = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        My <span className="text-purple"> work experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral dark:border-slate-800 px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4"
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div>
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {" "}
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;

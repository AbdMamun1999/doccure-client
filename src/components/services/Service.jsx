import React from "react";
import { Button, Card } from "@material-tailwind/react";

const Service = ({ img, title }) => {
  return (
    <div class="relative w-full h-[428px] md:h-[420px] lg:h-52 overflow-hidden rounded-md">
      <div class="image-container absolute inset-0 rounded-lg overflow-hidden transition-transform duration-1000 hover:scale-110">
        <img
          src={img}
          alt="Card Image"
          class="image object-cover w-full h-full"
        />
        <div class="absolute inset-0 flex flex-col justify-center items-center gap-y-2 text-white bg-black bg-opacity-50 opacity-100 transition-opacity duration-300">
          <h3 class="title text-2xl font-medium">{title}</h3>
          <Button size="sm" className="text-xs">
            Button
          </Button>
          ;
        </div>
      </div>
    </div>
  );
};

export default Service;

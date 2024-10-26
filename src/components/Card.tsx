import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:absolute after:z-10 after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
        className
      )}
      {...other}
    >
      <div className="absolute inset-0 opacity-5 -z-10">
        <img src={grainImage.src} alt="" />
      </div>

      {children}
    </div>
  );
};

export default Card;

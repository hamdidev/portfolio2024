"use client";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import ReactIcon from "@/assets/icons/react.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import GithubIcon from "@/assets/icons/github.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import Image from "next/image";
import TechIcon from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileImoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "Next.js",
    iconType: NextjsIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Tailwind",
    iconType: TailwindIcon,
  },
  {
    title: "HTML",
    iconType: HtmlIcon,
  },
  {
    title: "CSS",
    iconType: CssIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];
const hobbies = [
  {
    title: "Hiking",
    emoji: "🥾",
    left: "5%",
    top: "5%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "50%",
    top: "5%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "10%",
    top: "35%",
  },
  {
    title: "Traveling",
    emoji: "🌏",
    left: "70%",
    top: "45%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "65%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♀️",
    left: "40%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow={"About Me"}
          title={"A Glimpse into My World"}
          description={
            "Learn more about who I am, what I do, and what inspires me."
          }
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Expore the books shaping my reading journey."
              />

              <div className="mt-2 max-w-40 mx-auto">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                className=""
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft my projects."
              />
              <ToolboxItems
                items={toolboxItems}
                className="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-4 animate-move-right [animation-duration:10s]"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the realm of code."
                className="px-6 py-6"
              />

              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute p-1.5"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="w-full h-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-200">
                <Image src={smileImoji} alt="Memoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

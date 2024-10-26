import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkIcon from "@/assets/icons/sparkle.svg";
import HeroOrbit from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="py-32 md:py-48 lg:py-64 relative z-0 overflow-x-clip"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 pointer-events-none -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <HeroOrbit size={440} rotation={140}>
            <SparkIcon className="text-emerald-300/50 size-5 " />
          </HeroOrbit>
          <HeroOrbit
            size={450}
            rotation={-15}
            shouldOrbit
            orbitDuration="20s"
            shouldSpin
            spinDuration="5s"
          >
            <SparkIcon className="text-emerald-300/50 size-8 " />
          </HeroOrbit>
          <HeroOrbit
            size={550}
            rotation={20}
            shouldOrbit
            orbitDuration="25s"
            shouldSpin
            spinDuration="5s"
          >
            <StarIcon className="text-emerald-300 size-12" />
          </HeroOrbit>
          <HeroOrbit
            size={600}
            rotation={98}
            shouldOrbit
            orbitDuration="20s"
            shouldSpin
            spinDuration="5s"
          >
            <StarIcon className="text-emerald-300 size-8" />
          </HeroOrbit>
          <HeroOrbit
            size={800}
            rotation={-71}
            shouldOrbit
            orbitDuration="40s"
            shouldSpin
            spinDuration="5s"
          >
            <StarIcon className="text-emerald-300 size-28" />
          </HeroOrbit>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} alt="Hero Image" width={100} height={100} />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
            <div className="size-3 bg-green-500 rounded-full relative">
              <div className="absolute inset-0 bg-green-500 animate-ping-large rounded-full"></div>
            </div>
            <div className="font-medium text-sm">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="md:max-w-lg md:mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building exceptional User experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I am a senior front-end developer specialising in building
            accessible, responsive and performant user experiences for web and
            mobile applications.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border boreder-white/15 px-6 h-12 rounded-xl">
            <span className="font-medium">Explore my work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>&#x1F44B;</span>
            <span className="font-semibold">Get in touch</span>
          </button>
        </div>
      </div>
    </section>
  );
};

import { FaLocationArrow, FaDownload } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import { uiText } from "@/data";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();
  return (
    <div id="about" className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center md:flex-row justify-center gap-10">

          {/* LEFT COLUMN: IMAGE */}
          <div className="shrink-0 flex flex-col items-center gap-5">
            <Image 
              src="/profile.png" 
              alt="Lucas Royo Profile" 
              width={300} 
              height={300} 
              className="object-cover rounded-full border-4 border-white/20 shadow-xl"
              priority
            />

            {/* Social Links Row */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/lucas-royo-p%C3%A9rez/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/70 hover:text-[#0A66C2] hover:bg-white/20 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://github.com/LucasRoyoPerez"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/70 hover:text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="mailto:lucasroyoperez@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/70 hover:text-[#EA4335] hover:bg-white/20 hover:scale-110 transition-all duration-300"
                aria-label="Gmail"
              >
                <SiGmail size={18} />
              </a>

              <a
                href="/Lucas_Royo_CV.pdf"
                download
                className="flex items-center gap-2 h-11 px-5 rounded-full bg-[#13162D] border border-white/10 hover:border-purple/50 text-white text-sm font-medium hover:scale-105 transition duration-300"
              >
                <FaDownload size={14} />
                <span>{uiText.downloadCV[language]}</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: TEXTS */}
          <div className="flex flex-col items-center md:items-start justify-center flex-1">

            <TextGenerateEffect
              words={uiText.heroTitle[language]}
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <p className="text-center md:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl whitespace-pre-line">
              {uiText.heroDescription[language]}
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;

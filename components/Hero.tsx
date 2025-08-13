import { FaLocationArrow } from "react-icons/fa6";

import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { MagicButton } from "./ui/MagicButton";

export const Hero = () => {
  return (
    <div className="relative  h-[100vh] w-full overflow-hidden flex items-center justify-center">
      {/* Spotlights */}
      <div className="absolute inset-0 overflow-hidden">
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

      {/* text */}
      <div className="flex justify-center relative my-20 z-10 ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Web dinamica con Next.js
          </p>
          <TextGenerateEffect
            words="Transformando conceptos en experiencias de usuario fluidas"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hola! soy Franco Rinque, desarrollador web desde Argentina.
          </p>

          <a href="#about">
            <MagicButton
              title="Ver mi trabajo"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

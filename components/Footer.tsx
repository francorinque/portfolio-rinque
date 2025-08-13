import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import { MagicButton } from "./ui/MagicButton";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          ¿Estás listo para llevar
          <span className="text-purple"> tu </span>presencia digital al
          siguiente nivel?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Comunicate conmigo hoy y analicemos cómo puedo ayudarte a alcanzar tus
          objetivos.
        </p>
        <a href="mailto:francoagustinrinquecorreo@gmail.com">
          <MagicButton
            title="Contactame"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Developed by Franco Rinque.
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              href={info.link}
              target="_blank"
              rel="noreferrer"
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

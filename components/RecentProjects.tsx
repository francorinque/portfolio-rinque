import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import Image from 'next/image'

export const RecentProjects = () => {
  return (
    <div className="mt-40" id="projects">
      <h1 className="heading">
        Una pequeña selección de{' '}
        <span className="text-purple">Proyectos recientes</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center pt-10 gap-x-14 md:gap-y-70 gap-y-20 lg:gap-y-20 md:mt-30 mt-10">
        {projects.map(
          ({ id, title, des, img, iconLists, link, deployLink }) => (
            <div
              key={id}
              className="sm:h[41rem] lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[570px] w-[80vw] mb-10"
            >
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <Image
                      src="/bg.png"
                      alt="bg-img"
                      width={1000}
                      height={1000}
                    />
                    <Image
                      src={img}
                      alt={title}
                      className="z-10 lg:rotate-2 absolute -bottom-10 left-1/2 -translate-x-1/2 lg:rounded-2xl"
                      width={470}
                      height={470}
                    />
                  </div>
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-3">
                  {des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full overflow-hidden bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index * 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt={icon}
                          className="p-2"
                          width={100}
                          height={100}
                        />
                      </div>
                    ))}
                  </div>

                  <a
                    href={deployLink}
                    target="_blank"
                    className="flex items-center justify-center hover:underline  text-purple"
                  >
                    <p className="flex lg:text-xl md:text-sm">
                      Check live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </a>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </div>
  )
}

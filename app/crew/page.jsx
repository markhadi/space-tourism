"use client";

import Nav from "@/components/Nav";
import data from "@/static/data.json";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { stagger, useAnimate } from "framer-motion";

const crew = data.crew;

console.log(crew);

const CrewPage = () => {
  const [text, setText] = useState([]);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const storedText = localStorage.getItem("crew");

    if (!storedText) {
      localStorage.setItem("crew", JSON.stringify(crew[0]));
      setText(crew[0]);
    } else {
      setText(JSON.parse(storedText));
    }
  }, []);

  const updateLocalStorage = (index) => {
    const newData = crew[index];
    localStorage.setItem("crew", JSON.stringify(newData));

    animate(
      "#newItem",
      {
        opacity: [0, 1],
        scale: [0.3, 1],
        filter: ["blur(20px)", "blur(0px)"],
      },
      {
        ease: [0.13, 0.55, 0.55, 1],
        duration: 0.5,
      }
    );

    setText(newData);
  };

  return (
    <section
      className="min-h-screen h-max flex flex-col bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-no-repeat bg-cover 
                  sm:bg-[url('/assets/crew/background-crew-tablet.jpg')]
                  lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]"
    >
      <Nav />

      <main className="mt-6 pb-[104px] sm:mt-10 sm:pb-0 lg:mt-[76px]">
        <div
          ref={scope}
          className="flex flex-col items-center gap-8 px-6 sm:gap-[60px] lg:max-w-[1110px] lg:gap-0 lg:mx-auto xl:px-0"
        >
          <h5 className="flex gap-5 text-white uppercase text-[16px] leading-[20px] tracking-[2.7px] sm:self-start sm:gap-7 sm:text-[20px] sm:leading-[24px] sm:tracking-[3.38px] lg:text-[28px] lg:leading-[34px] lg:tracking-[4.72px]">
            <span className="font-bold text-[rgba(255,255,255,0.25)] sm:pl-10 lg:pl-0">
              02
            </span>
            Meet your crew
          </h5>

          <div className="flex flex-col items-center w-full lg:flex-row lg:items-end lg:justify-between lg:max-h-[654px]">
            {text.images ? (
              <Image
                src={text.images}
                width={160}
                height={222}
                alt={text.name}
                className="sm:w-[410px] sm:h-[572px] lg:w-[514px] lg:h-[700px] lg:translate-x-[28px]"
                id="newItem"
              />
            ) : (
              <Skeleton className="w-[160px] h-[222px] sm:w-[410px] sm:h-[570px] lg:w-[500px] lg:h-[700px]" />
            )}

            <hr className="w-full border border-[#383B4B] mb-8 sm:hidden" />

            <div className="flex flex-col items-center sm:-order-1 lg:w-full lg:max-w-[614px] lg:items-start lg:pb-[94px]">
              <div className="flex gap-6 mb-8 sm:order-1 sm:mt-10 lg:mt-[120px] lg:mb-0">
                {crew.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => updateLocalStorage(index)}
                    className={`btn_sm_circle  ${
                      item.name === text.name ? "btn_sm_circle_active" : ""
                    }`}
                  ></button>
                ))}
              </div>

              {text.role ? (
                <h4
                  id="newItem"
                  className="text-white opacity-50 font-bellefair text-[16px] leading-[18px] uppercase mb-2  sm:text-[24px] sm:leading-[28px] lg:text-[32px] lg:leading-[37px] lg:mb-4"
                >
                  {text.role}
                </h4>
              ) : (
                <Skeleton className="w-full h-5 mb-2  sm:h-7 lg:h-9 lg:mb-4 " />
              )}

              {text.name ? (
                <h3
                  id="newItem"
                  className="text-white font-bellefair text-[24px] leading-[28px] uppercase mb-4 sm:text-[40px] sm:leading-[46px] lg:text-[56px] lg:leading-[64px] lg:mb-7"
                >
                  {text.name}
                </h3>
              ) : (
                <Skeleton className="w-full h-7 mb-4 sm:h-12 lg:h-16 lg:mb-7" />
              )}

              {text.bio ? (
                <p
                  id="newItem"
                  className="text-blue-light text-center font-barlow text-[15px] leading-[25px] sm:text-[16px] sm:leading-[28px] lg:text-[18px] lg:leading-[32px] lg:text-left lg:max-w-[444px]"
                >
                  {text.bio}
                </p>
              ) : (
                <Skeleton className="w-full h-20 lg:h-32" />
              )}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default CrewPage;

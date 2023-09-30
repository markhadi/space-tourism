"use client";

import Nav from "@/components/Nav";
import SectionTitle from "@/components/SectionTitle";
import { Skeleton } from "@/components/ui/skeleton";

import data from "@/static/data.json";

import Image from "next/image";

import useAnimation from "@/hooks/useAnimation";
import useLocalStorage from "@/hooks/useLocalStorage";

const crew = data.crew;

const CrewPage = () => {
  const [text, updateLocalStorage] = useLocalStorage("crew", crew[0]);
  const [scope, animateElement] = useAnimation();

  const handleUpdateLocalStorage = (index) => {
    const newData = crew[index];

    updateLocalStorage(newData);
    animateElement("#newItem");
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
          className="flex flex-col items-center gap-8 px-6 
                      sm:gap-[60px] 
                      lg:max-w-[1110px] lg:gap-0 lg:mx-auto 
                      xl:px-0"
        >
          <SectionTitle number="02" title="Meet your crew" />

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
                    onClick={() => handleUpdateLocalStorage(index)}
                    className={`btn_sm_circle  ${
                      item.name === text.name ? "btn_sm_circle_active" : ""
                    }`}
                  ></button>
                ))}
              </div>

              {text.role ? (
                <h4 id="newItem" className="mb-2 lg:mb-4">
                  {text.role}
                </h4>
              ) : (
                <Skeleton className="w-60 h-5 mb-2 sm:h-7 sm:w-96 lg:h-9 lg:mb-4 " />
              )}

              {text.name ? (
                <h3 id="newItem" className="mb-4 lg:mb-7">
                  {text.name}
                </h3>
              ) : (
                <Skeleton className="w-60 h-7 mb-4 sm:h-12 sm:w-96 lg:h-16 lg:mb-7" />
              )}

              {text.bio ? (
                <p id="newItem" className="lg:text-left lg:max-w-[444px]">
                  {text.bio}
                </p>
              ) : (
                <Skeleton className="w-60 h-20 sm:w-96 lg:h-32" />
              )}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default CrewPage;

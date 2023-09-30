"use client";

import Nav from "@/components/Nav";
import SectionTitle from "@/components/SectionTitle";
import { Skeleton } from "@/components/ui/skeleton";

import data from "@/static/data.json";

import useAnimation from "@/hooks/useAnimation";
import useLocalStorage from "@/hooks/useLocalStorage";

const technology = data.technology;

const TechnologyPage = () => {
  const [text, updateLocalStorage] = useLocalStorage(
    "technology",
    technology[0]
  );
  const [scope, animateElement] = useAnimation();

  const handleUpdateLocalStorage = (index) => {
    const newData = technology[index];

    updateLocalStorage(newData);
    animateElement("#newItem");
  };

  return (
    <section
      className="min-h-screen h-max flex flex-col bg-[url('/assets/technology/background-technology-mobile.jpg')] bg-no-repeat bg-cover 
                  sm:bg-[url('/assets/technology/background-technology-tablet.jpg')]
                  lg:bg-[url('/assets/technology/background-technology-desktop.jpg')]"
    >
      <Nav />

      <main className="mt-6 pb-14 sm:mt-10 sm:pb-[100px] lg:mt-[76px] lg:pb-[140px]">
        <div
          ref={scope}
          className="flex flex-col items-center gap-8 
                      sm:gap-[60px] 
                      lg:max-w-[1275px] lg:w-full lg:gap-[64px] lg:mr-0 lg:ml-auto 
                      xl:px-0"
        >
          <SectionTitle number="03" title="Space Launch 101" />

          <div
            className="flex flex-col items-center w-full 
                        lg:flex-row lg:h-[450px]"
          >
            {text?.images?.landscape ? (
              <picture
                className="relative w-full max-h-[310px] mb-8 
                            sm:mb-14
                            lg:order-1 lg:max-w-[515px] lg:max-h-none lg:mb-0 lg:ml-[130px]"
              >
                <source
                  media="(min-width: 1024px)"
                  srcSet={text?.images?.portrait}
                />
                <img
                  id="newItem"
                  src={text?.images?.landscape}
                  alt={text.name}
                  className="mx-auto"
                />
              </picture>
            ) : (
              <Skeleton className="w-[160px] h-[170px] mb-8 sm:w-[410px] sm:h-[310px] lg:w-[500px] lg:h-[520px] lg:order-1 lg:ml-[130px]" />
            )}

            <div
              className="flex gap-4 mb-[26px] 
                          sm:mb-11 
                          lg:mb-0 lg:flex-col lg:gap-8 lg:mr-20"
            >
              {technology.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleUpdateLocalStorage(index)}
                  className={`btn_md_circle  ${
                    item.name === text.name ? "btn_md_circle_active" : ""
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <div
              className="flex flex-col items-center px-4 max-w-[458px]
                          lg:px-0 lg:items-start lg:max-w-[470px] lg:w-full"
            >
              <span
                className="uppercase font-barlow-condensed text-blue-light text-[14px] leading-[17px] tracking-[2.36px] mb-2
                            sm:text-[16px] sm:leading-[20px] sm:tracking-[2.7px] sm:mb-3"
              >
                THE TERMINOLOGY…
              </span>
              {text.name ? (
                <h3
                  id="newItem"
                  className="text-white font-bellefair text-[24px] leading-[28px] uppercase mb-4 
                                sm:text-[40px] sm:leading-[46px] 
                                lg:text-[56px] lg:leading-[64px]"
                >
                  {text.name}
                </h3>
              ) : (
                <Skeleton className="w-60 h-7 mb-4 sm:h-12 sm:w-96 lg:h-16 " />
              )}

              {text.description ? (
                <p
                  id="newItem"
                  className="text-blue-light text-center font-barlow text-[15px] leading-[25px] sm:text-[16px] sm:leading-[28px] lg:text-[18px] lg:leading-[32px] lg:text-left lg:max-w-[444px]"
                >
                  {text.description}
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

export default TechnologyPage;

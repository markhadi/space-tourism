"use client";

import Nav from "@/components/Nav";
import DetailCard from "@/components/DetailCard";
import SectionTitle from "@/components/SectionTitle";
import { Skeleton } from "@/components/ui/skeleton";

import data from "@/static/data.json";

import Image from "next/image";

import useAnimation from "@/hooks/useAnimation";
import useLocalStorage from "@/hooks/useLocalStorage";

const destinations = data.destinations;

const DestinationPage = () => {
  const [text, updateLocalStorage] = useLocalStorage(
    "destination",
    destinations[0]
  );
  const [scope, animateElement] = useAnimation();

  const handleUpdateLocalStorage = (index) => {
    const newData = destinations[index];

    updateLocalStorage(newData);
    animateElement("#newItem");
  };

  return (
    <section
      className="min-h-screen h-max flex flex-col bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-no-repeat bg-cover 
                  sm:bg-[url('/assets/destination/background-destination-tablet.jpg')]
                  lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]"
    >
      <Nav />

      <main
        className="mt-6 pb-14 
                    sm:mt-10 sm:pb-16 
                    lg:mt-[76px] lg:pb-[116px]"
      >
        <div
          ref={scope}
          className="flex flex-col items-center gap-8 px-6 
                      sm:gap-[60px] 
                      lg:max-w-[1110px] lg:gap-16 lg:mx-auto 
                      xl:px-0"
        >
          <SectionTitle number="01" title="Pick your destination" />

          <div
            className="flex flex-col items-center gap-7 
                        sm:gap-14 
                        lg:pl-[54px] lg:flex-row lg:items-end lg:justify-between lg:w-full"
          >
            {text.images ? (
              <Image
                src={text.images}
                width={170}
                height={170}
                alt={text.name}
                className="sm:w-[300px] sm:h-[300px] lg:w-[445px] lg:h-[445px]"
                id="newItem"
              />
            ) : (
              <Skeleton className="w-[170px] h-[170px] sm:w-[300px] sm:h-[300px] lg:w-[445px] lg:h-[445px]" />
            )}

            <div
              className="flex flex-col justify-center items-center 
                          sm:max-w-xl 
                          lg:items-start lg:max-w-[444px] lg:w-full"
            >
              <div
                className="subheading-2 flex gap-7 mb-9 
                            sm:gap-9 sm:text-[16px] sm:leading-[20px] sm:tracking-[2.7px] sm:mb-12 
                            lg:mb-[52px]"
              >
                {destinations.map((destination, index) => (
                  <button
                    key={destination.name}
                    onClick={() => handleUpdateLocalStorage(index)}
                    className={`uppercase relative btn ${
                      destination.name === text.name
                        ? "text-white btn_active"
                        : ""
                    }`}
                  >
                    {destination.name}
                  </button>
                ))}
              </div>
              {text.name ? (
                <h2 id="newItem" className="sm:mb-2 lg:mb-4">
                  {text.name}
                </h2>
              ) : (
                <Skeleton className="w-full h-20 lg:h-28" />
              )}

              {text.description ? (
                <p id="newItem" className="lg:text-left">
                  {text.description}
                </p>
              ) : (
                <Skeleton className="w-full h-20 mt-2 lg:h-32" />
              )}

              <hr className="w-full border border-[#383B4B] my-8 sm:my-0 sm:mt-12 sm:mb-7 lg:mt-[52px]" />

              <div className="flex flex-col items-center gap-8 sm:flex-row sm:w-[350px] sm:justify-between lg:gap-20 lg:w-max lg:items-start">
                <DetailCard title="Avg. Distance" content={text.distance} />
                <DetailCard title="Est. travel time" content={text.travel} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default DestinationPage;

"use client";

import Nav from "@/components/Nav";
import data from "@/static/data.json";
import Image from "next/image";

import { useState, useEffect } from "react";

import { Skeleton } from "@/components/ui/skeleton";

const destinations = data.destinations;

const DestinationPage = () => {
  const [text, setText] = useState([]);

  useEffect(() => {
    const storedText = localStorage.getItem("destination");

    if (!storedText) {
      localStorage.setItem("destination", JSON.stringify(destinations[0]));
      setText(destinations[0]);
    } else {
      setText(JSON.parse(storedText));
    }
  }, []);

  const updateLocalStorage = (index) => {
    const newData = destinations[index];
    localStorage.setItem("destination", JSON.stringify(newData));
    setText(newData);
  };

  return (
    <section
      className="min-h-screen h-max flex flex-col bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-no-repeat bg-cover 
                  sm:bg-[url('/assets/destination/background-destination-tablet.jpg')]
                  lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]"
    >
      <Nav />

      <main className="mt-6 pb-14 sm:mt-10 sm:pb-16">
        <div className="flex flex-col items-center gap-8 px-6 sm:gap-[60px] sm:px-0 ">
          <h5 className="flex gap-5 text-white uppercase text-[16px] leading-[20px] tracking-[2.7px] sm:self-start sm:gap-7 sm:text-[20px] sm:leading-[24px] sm:tracking-[3.38px]">
            <span className="font-bold text-[rgba(255,255,255,0.25)] sm:pl-10 ">
              01
            </span>
            Pick your destination
          </h5>

          <div className="flex flex-col items-center gap-7 sm:gap-14 ">
            {text.images ? (
              <Image
                src={text.images}
                width={170}
                height={170}
                alt={text.name}
                className="sm:w-[300px] sm:h-[300px]"
              />
            ) : (
              <Skeleton className="w-[170px] h-[170px] sm:w-[300px] sm:h-[300px]" />
            )}

            <div className="flex flex-col justify-center items-center sm:max-w-xl">
              <div className="text-blue-light text-[14px] leading-[17px] tracking-[2.36px] flex gap-7 mb-9 sm:gap-9 sm:text-[16px] sm:leading-[20px] sm:tracking-[2.7px] sm:mb-12">
                {destinations.map((destination, index) => (
                  <button
                    key={destination.name}
                    onClick={() => updateLocalStorage(index)}
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
                <h2 className="text-white font-bellefair text-[56px] leading-[64px] uppercase sm:text-[80px] sm:leading-[92px] sm:mb-2">
                  {text.name}
                </h2>
              ) : (
                <Skeleton className="w-full h-20" />
              )}

              {text.description ? (
                <p className="text-blue-light text-center font-barlow text-[15px] leading-[25px] sm:text-[16px] sm:leading-[28px]">
                  {text.description}
                </p>
              ) : (
                <Skeleton className="w-full h-20 mt-2" />
              )}

              <hr className="w-full border border-[#383B4B] my-8 sm:my-0 sm:mt-12 sm:mb-7" />

              <div className="flex flex-col items-center gap-8 sm:flex-row sm:w-[350px] sm:justify-between">
                <div className="flex flex-col gap-3 text-center">
                  <span className="uppercase text-blue-light text-[14px] leading-[17px] font-barlow-condensed tracking-[2.36px]">
                    AVG. DISTANCE
                  </span>
                  {text.distance ? (
                    <span className="uppercase text-white text-[28px] leading-[32px] font-bellefair">
                      {text.distance}
                    </span>
                  ) : (
                    <Skeleton className="w-full h-8" />
                  )}
                </div>
                <div className="flex flex-col gap-3 text-center">
                  <span className="uppercase text-blue-light text-[14px] leading-[17px] font-barlow-condensed tracking-[2.36px]">
                    Est. travel time
                  </span>
                  {text.travel ? (
                    <span className="uppercase text-white text-[28px] leading-[32px] font-bellefair">
                      {text.travel}
                    </span>
                  ) : (
                    <Skeleton className="w-full h-8" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default DestinationPage;

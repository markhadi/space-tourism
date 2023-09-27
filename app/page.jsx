"use client";

import Nav from "@/components/Nav";

import { stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(
        "#item",
        {
          opacity: [0, 1],
          scale: [0.3, 1],
          filter: ["blur(20px)", "blur(0px)"],
        },
        {
          ease: [0.13, 0.55, 0.55, 1],
          duration: 0.5,
          delay: stagger(0.5, { startDelay: 0.5 }),
        }
      );
    }
  }, [isInView]);

  return (
    <section
      className="min-h-screen h-max flex flex-col bg-[url('/assets/home/background-home-mobile.jpg')] bg-no-repeat bg-cover 
                  sm:bg-[url('/assets/home/background-home-tablet.jpg')]
                  lg:bg-[url('/assets/home/background-home-desktop.jpg')]"
    >
      <Nav />

      <main className="pb-12 mt-12 sm:mt-[106px] lg:mt-[250px] sm:pb-[90px] lg:pb-[132px]">
        <div
          ref={scope}
          className="flex flex-col gap-[81px] items-center px-6 sm:gap-[156px] lg:flex-row lg:max-w-[1110px] lg:px-16 lg:justify-between lg:items-end lg:mx-auto xl:px-0"
        >
          <div className="flex flex-col gap-4 text-center max-w-[445px] sm:gap-6 lg:text-left">
            <span id="item" className="nav_text">
              SO, YOU WANT TO TRAVEL TO
            </span>
            <h1 id="item">SPACE</h1>
            <p id="item">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <button id="item" className="btn_circle">
            explore
          </button>
        </div>
      </main>
    </section>
  );
}

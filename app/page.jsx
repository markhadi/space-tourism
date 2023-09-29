import Nav from "@/components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <section
      className="min-h-screen h-max flex flex-col bg-[url('/assets/home/background-home-mobile.jpg')] bg-no-repeat bg-cover 
                  sm:bg-[url('/assets/home/background-home-tablet.jpg')]
                  lg:bg-[url('/assets/home/background-home-desktop.jpg')]"
    >
      <Nav />

      <main
        className="pb-12 mt-12 
                    sm:mt-[106px] sm:pb-[90px]
                    lg:mt-[250px] lg:pb-[132px]"
      >
        <div
          className="flex flex-col gap-[81px] items-center px-6 
                      sm:gap-[156px] 
                      lg:flex-row lg:max-w-[1110px] lg:px-16 lg:justify-between lg:items-end lg:mx-auto xl:px-0"
        >
          <div
            className="flex flex-col gap-4 text-center max-w-[445px] 
                        sm:gap-6 
                        lg:text-left"
          >
            <h5>SO, YOU WANT TO TRAVEL TO</h5>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <Link href={"/destination"} className="btn_circle">
            explore
          </Link>
        </div>
      </main>
    </section>
  );
}

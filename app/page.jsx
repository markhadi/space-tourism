export default function Home() {
  return (
    <main className="pb-12 sm:pb-[90px] lg:pb-[132px]">
      <div className="flex flex-col gap-[81px] items-center px-6 sm:gap-[156px] lg:flex-row lg:max-w-[1110px] lg:px-16 lg:justify-between lg:items-end lg:mx-auto xl:px-0">
        <div className="flex flex-col gap-4 text-center max-w-[445px] sm:gap-6 lg:text-left">
          <span className="nav_text">SO, YOU WANT TO TRAVEL TO</span>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <button className="btn_circle">explore</button>
      </div>
    </main>
  );
}

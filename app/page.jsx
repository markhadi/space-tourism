import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="z-[1] pb-12">
        <div className="flex flex-col gap-[81px] justify-start items-center px-6">
          <div className="flex flex-col gap-4 text-center">
            <span className="nav_text">SO, YOU WANT TO TRAVEL TO</span>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <button className="btn_circle">explore</button>
        </div>
      </main>
    </>
  );
}
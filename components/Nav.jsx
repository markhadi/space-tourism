import Link from "next/link";

const Nav = () => {
  return (
    <nav className="z-[1] flex justify-between items-center px-6 pt-6 mb-12">
      <Link href="/">
        <img src="/assets/shared/logo.svg" alt="logo" className="w-10 h-10" />
      </Link>
      <button>
        <img src="/assets/shared/icon-hamburger.svg" alt="icon hamburger" />
      </button>
    </nav>
  );
};

export default Nav;

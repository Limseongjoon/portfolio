import CustomImage from "../components/CustomImage";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed z-50 w-screen bg-transparent font-hrot px-3 sm:px-4 lg:px-5">
      <button
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="inline-block p-3 fixed bg-white text-black border-black border-[1px] rounded-full
        hover:bg-white focus:bg-white active:bg-white active:text-black transition duration-150 ease-in-out bottom-5 right-5 z-20"
        id="btn-back-to-top"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          className="w-3 h-3"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
          ></path>
        </svg>
      </button>
      <div className="h-1" />
      <div className="flex flex-row justify-between">
        <div className="flex gap-3 sm:gap-8 lg:gap-10">
          <Link
            href="/"
            className="flex text-xs lg:text-sm text-black hover:-rotate-6 hover:font-bold focus:-rotate-12 focus:font-bold active:rotate-0 tracking-tight"
          >
            ←←<span className="px-[1px]"></span>colors
          </Link>
          <Link
            href="/voice"
            className="flex text-xs lg:text-sm text-black hover:-rotate-6 hover:font-bold focus:-rotate-12 focus:font-bold active:rotate-0 tracking-tight"
          >
            ←<span className="px-[1px]"></span>voice
          </Link>
        </div>
        <div className="flex gap-3 sm:gap-8 lg:gap-10">
          <Link
            href="/words"
            className="flex flex-row text-xs lg:text-sm text-black hover:rotate-6 hover:font-bold focus:rotate-12 focus:font-bold active:rotate-0 tracking-tight"
          >
            words<span className="px-[1px]"></span>→
          </Link>
          <Link
            href="/touch"
            className="flex text-xs lg:text-sm text-black hover:rotate-6 hover:font-bold focus:rotate-12 focus:font-bold active:rotate-0 tracking-tight"
          >
            touch<span className="px-[1px]"></span>→→
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

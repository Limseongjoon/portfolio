import CustomImage from "../components/CustomImage";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed z-50 w-screen bg-transparent font-hrot px-3 sm:px-4 lg:px-5">
      <div className="h-1" />
      <div className="flex flex-row justify-between">
        <div className="flex gap-3 sm:gap-8 lg:gap-10">
          <Link
            href="/"
            className="flex text-xs lg:text-sm text-black hover:-rotate-6 hover:font-bold active:-rotate-12 active:font-bold tracking-tight"
          >
            ←←<span className="px-[1px]"></span>yours
          </Link>
          <Link
            href="/color"
            className="flex text-xs lg:text-sm text-black hover:-rotate-6 hover:font-bold active:-rotate-12 active:font-bold tracking-tight"
          >
            ←<span className="px-[1px]"></span>color
          </Link>
        </div>
        <div className="flex gap-3 sm:gap-8 lg:gap-10">
          <Link
            href="/words"
            className="flex flex-row text-xs lg:text-sm text-black hover:rotate-6 hover:font-bold active:rotate-12 active:font-bold tracking-tight"
          >
            words<span className="px-[1px]"></span>→
          </Link>
          <Link
            href="/touch"
            className="flex text-xs lg:text-sm text-black hover:rotate-6 hover:font-bold active:rotate-12 active:font-bold tracking-tight"
          >
            touch<span className="px-[1px]"></span>→→
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

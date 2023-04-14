import CustomImage from "../components/CustomImage";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed z-50 w-screen bg-transparent font-hrot px-3 sm:px-4 lg:px-5s">
      <div className="h-1" />
      <div className="flex flex-row justify-between">
        <div className="flex gap-2 sm:gap-12 lg:gap-16">
          <Link
            href="/"
            className="flex text-xs lg:text-sm text-black hover:-rotate-6 hover:font-bold active:-rotate-12 active:font-bold"
          >
            ←← works
          </Link>
          <Link
            href="/"
            className="flex text-xs lg:text-sm text-black hover:-rotate-6 hover:font-bold active:-rotate-12 active:font-bold"
          >
            ← words
          </Link>
        </div>
        <div className="flex gap-2 sm:gap-12 lg:gap-16">
          <Link
            href="/about"
            className="flex flex-row text-xs lg:text-sm text-black hover:rotate-6 hover:font-bold active:rotate-12 active:font-bold"
          >
            about →
          </Link>
          <Link
            href="/touch"
            className="flex text-xs lg:text-sm text-black hover:rotate-6 hover:font-bold active:rotate-12 active:font-bold"
          >
            touch →→
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

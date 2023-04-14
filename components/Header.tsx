import CustomImage from "../components/CustomImage";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed z-50 w-screen bg-transparent font-hrot px-3 sm:px-4 lg:px-5s">
      <div className="h-1" />
      <div className="flex justify-between">
        <Link
          href="/"
          className="flex text-xs lg:text-sm text-black hover:-rotate-6 hover:font-bold active:-rotate-12 active:font-bold"
        >
          ←← work
        </Link>
        <Link
          href="/"
          className="flex text-xs lg:text-sm text-black hover:-rotate-6 hover:font-bold active:-rotate-12 active:font-bold"
        >
          ← words
        </Link>
        <Link
          href="/about"
          className="flex text-xs lg:text-sm text-black hover:rotate-6 hover:font-bold active:rotate-12 active:font-bold"
        >
          about →
        </Link>
        <Link
          href="/contact"
          className="flex text-xs lg:text-sm text-black hover:rotate-6 hover:font-bold active:rotate-12 active:font-bold"
        >
          contact →→
        </Link>
      </div>
    </div>
  );
};

export default Header;

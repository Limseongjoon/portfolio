import CustomImage from "../components/CustomImage";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-[#f8ff34] bg-gradient-to-t from-[#e9e9e9]">
      <div className="fixed font-hrot z-50 w-screen px-4 lg:px-4">
        <div className="h-1" />
        <div className="flex">
          <div>
            <Link
              href="/"
              className="flex font-medium text-sm lg:text-lg text-[#b837fe]"
            >
              WORKS
            </Link>
          </div>
          <div className="grow" />
          <Link
            href="/about"
            className="flex font-medium text-sm lg:text-lg text-[#b837fe]"
          >
            ABOUT
          </Link>
        </div>
      </div>
      <div className="flex flex-col h-screen items-center">
        <div className="h-32 md:h-48 lg:h-56" />
        <div className="font-hrot text-[#b837fe] text-center md:text-lg">
          Contact
        </div>
        <div className="h-4" />
        <div className="text-center text-[#b837fe] font-extralight md:text-lg leading-snug">
          Please feel free to contact me :{")"}
          <br></br>I will get back to you as soon as possible.
        </div>
        <div className="h-10" />
        <div className="font-hrot text-[#b837fe] text-center text-xs md:text-sm">
          <a
            href="mailto:sungjun170@gmail.com"
            className="px-6 py-1 hover:bg-black hover:text-white focus:bg-black focus:text-white"
          >
            sungjun170@gmail.com
          </a>
        </div>

        <div className="grow" />

        <div className="h-36" />
        <div className="h-12 text-[#b837fe] text-center text-2xs lg:text-xs">
          Copyright © JOON. All rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Page;

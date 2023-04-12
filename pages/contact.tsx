import CustomImage from "../components/CustomImage";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-[#f8ff34] bg-gradient-to-t from-[#e9e9e9]">
      <div className="fixed font-hrot z-50 w-screen px-4 lg:px-5">
        <div className="h-1 pt-[5px]" />
        <div className="flex items-center">
          <Link
            href="/"
            className="flex text-2xs lg:text-sm text-black hover:-rotate-6"
          >
            ← works
          </Link>
          <div className="grow" />
          <Link
            href="/"
            className="flex font-bold text-2xs lg:text-sm text-black hover:scale-95"
          >
            CONTACT
          </Link>
          <div className="grow" />
          <Link
            href="/about"
            className="flex text-2xs lg:text-sm text-black hover:rotate-6"
          >
            about →
          </Link>
        </div>
      </div>

      <div className="flex flex-col h-screen items-center">
        <div className="h-16 md:h-24" />
        <div className="flex justify-center py-10 group">
          <div className="relative flex items-center justify-end w-48 h-48 overflow-hidden bg-transparent border-2 border-black rounded-full ">
            <div className="absolute w-1/2 h-1 bg-black rounded-full origin-left -rotate-12 group-hover:rotate-[215deg] duration-1000 ease-in-out" />
            <div className="absolute w-1/2 h-1 origin-left rotate-[70] group-hover:rotate-[340deg] duration-1000 ease-in-out">
              <div className="w-2/3 h-full bg-black rounded-full" />
            </div>
            <div className="absolute flex justify-center flex-1 w-full">
              <div className="w-1 h-1 bg-black rounded-full" />
            </div>
          </div>
        </div>
        <div className="h-4" />
        <div className="text-center text-black font-extralight md:text-lg leading-snug">
          Good afternoon.
        </div>
        <div className="h-2" />
        <div className="text-center text-black font-extralight md:text-lg leading-snug">
          Please feel free to contact me.<br></br>I will get back to you as soon
          as possible.
        </div>
        <div className="h-8" />
        <a
          href="mailto:sungjun170@gmail.com"
          className="font-hrot text-tiny text-black text-center hover:pl-10"
        >
          Send email →
        </a>
        <div className="grow" />
        <div className="h-12 text-black text-center text-2xs lg:text-xs">
          Copyright © JOON. All rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Page;

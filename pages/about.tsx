import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-[#090909] text-[#ffcde5]">
      <div className="fixed font-hrot z-50 w-screen px-4 lg:px-5">
        <div className="h-1 pt-[5px]" />
        <div className="flex justify-between">
          <Link
            href="/contact"
            className="flex text-xs lg:text-sm text-[#ffcde5] hover:-rotate-6 active:-rotate-12"
          >
            ← contact
          </Link>
          <Link
            href="#"
            className="flex font-semibold text-xs lg:text-sm text-[#ffcde5] hover:scale-95 pt-[1px] md:pt-0"
          >
            ABOUT
          </Link>
          <Link
            href="/"
            className="flex text-xs lg:text-sm text-[#ffcde5] hover:rotate-6 active:rotate-12"
          >
            works →
          </Link>
        </div>
      </div>
      <div className="flex flex-col h-screen items-center">
        <div className="h-32 md:h-48 xl:h-52 2xl:h-56" />
        <button className="font-hrot text-center md:text-lg text-[#ffcde5]">
          Norms
        </button>
        <div className="h-10" />
        <div className="font-thin w-10/12 md:3/4 lg:w-2/5 text-center md:text-lg leading-relaxed tracking-tight text-[#ffd5e9]">
          Essentially ahead of itself, it has projected itself upon its
          potentiality-for-Being before going on to any mere consideration of
          itself. Being-in-the-world has always expressed itself, and as Being
          alongside entities encountered within-the-world, it constantly
          expresses itself in addressing itself to the very object of its
          concern and discussing it.
        </div>
        <div className="h-6"></div>
        <div className="text-center text-sm lg:text-tiny text-[#ffcde5] tracking-tight">
          ⎯ Martin Heidegger
        </div>
        <div className="grow" />
        <div className="h-36" />
        <div className="h-12 text-center text-2xs lg:text-xs text-[#ffc8e3]">
          Copyright © JOON. All rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Page;

import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-[#090909] text-[#ffcde5]">
      <div className="fixed z-50 w-screen bg-transparent text-[#ffcde5] text-center font-hrot font-bold text-xs lg:text-sm pt-[5px]">
        나는
      </div>
      <div className="fixed z-50 w-screen bg-transparent font-hrot px-3 sm:px-4 lg:px-5">
        <div className="h-1" />
        <div className="flex flex-row justify-between">
          <div className="flex gap-3 sm:gap-8 lg:gap-10">
            <Link
              href="/"
              className="flex text-xs lg:text-sm text-[#ffcde5] hover:-rotate-6 hover:font-bold focus:-rotate-12 focus:font-bold active:rotate-0 tracking-tight"
            >
              ←←<span className="px-[1px]"></span>colors
            </Link>
            <Link
              href="/voice"
              className="flex text-xs lg:text-sm text-[#ffcde5] hover:-rotate-6 hover:font-bold focus:-rotate-12 focus:font-bold active:rotate-0 tracking-tight"
            >
              ←<span className="px-[1px]"></span>voice
            </Link>
          </div>
          <div className="flex gap-3 sm:gap-8 lg:gap-10">
            <Link
              href="/words"
              className="flex flex-row text-xs lg:text-sm text-[#ffcde5] hover:rotate-6 hover:font-bold focus:rotate-12 focus:font-bold active:rotate-0 tracking-tight"
            >
              words<span className="px-[1px]"></span>→
            </Link>
            <Link
              href="/touch"
              className="flex text-xs lg:text-sm text-[#ffcde5] hover:rotate-6 hover:font-bold focus:rotate-12 focus:font-bold active:rotate-0 tracking-tight"
            >
              touch<span className="px-[1px]"></span>→→
            </Link>
          </div>
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
        <div className="w-full border-t-[0.1px] border-[#ffc8e3] opacity-60" />
        <div className="h-5 font-thin text-center text-2xs lg:text-xs text-[#ffc8e3] my-[1px]">
          Copyright © JOON. All rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Page;

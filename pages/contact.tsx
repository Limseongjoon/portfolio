import CustomImage from '../components/CustomImage';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="bg-[#f8ff34] bg-gradient-to-t from-[#f8ff77]">
      <div className="fixed z-50 w-screen px-6 lg:px-12">
      <div className="h-5 md:h-6 lg:h-8"></div>
      <div className="flex items-start">
        <Link href="/">
          <CustomImage src="/images/logo_joon_purple.png" className="h-4 md:h-5 lg:h-6 w-auto" />
        </Link>
        <div className="grow"></div>
        <div className="flex items-end gap-6 md:gap-10 lg:gap-12 -my-[4px] lg:-my-1">
          <Link
            href="/about"
            className="font-hrot text-[#b837fe] text-2xs md:text-xs lg:text-sm"
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className="font-hrot text-[#b837fe] text-2xs md:text-xs lg:text-sm"
          >
            CONTACT
          </Link>
        </div>
      </div>
      <div className="h-2"></div>
    </div>
      <div className="flex flex-col h-screen items-center">
        <div className="h-36 md:h-48 lg:h-56" />
          <div className="font-hrot text-[#b837fe] text-center text-lg md:text-xl lg:text-2xl">
            Contact
          </div>
          <div className="h-4" />
          <div className="text-center text-[#b837fe] font-extralight md:text-lg">
          Please feel free to contact me :{')'}<br></br>
          I will get back to you as soon as possible.
          </div>
        <div className="h-10" />
        <div className="font-hrot text-[#b837fe] text-center text-sm md:text-base">
          <a
            href="mailto:sungjun170@gmail.com"
            className="px-6 py-1 hover:bg-black hover:text-white focus:bg-black focus:text-white"
          >
            sungjun170@gmail.com
          </a>
        </div>
        <div className="grow" />
        <div className="h-36" />
        <div className="h-24 text-[#b837fe] text-center text-xs md:text-sm lg:text-base">
          Copyright © IM SEONGJOON. All rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Page;

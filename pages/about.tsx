import CustomImage from '../components/CustomImage';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="bg-[#090909] text-[#ffcde5]">
      <div className="fixed z-50 w-screen px-6 lg:px-12">
      <div className="h-5 md:h-6 lg:h-8"></div>
      <div className="flex items-start -my-1">
        <Link href="/">
          <CustomImage src="/images/logo_joon_pink.png" className="h-3 md:h-4 lg:h-5 w-auto" />
        </Link>
        <div className="grow"></div>
        <div className="flex items-end gap-6 md:gap-10 lg:gap-12 -my-[4px] lg:-my-2">
          <Link
            href="/about"
            className="font-hrot text-2xs lg:text-xs"
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className="font-hrot text-2xs lg:text-xs"
          >
            CONTACT
          </Link>
        </div>
      </div>
      <div className="h-2"></div>
    </div>
      <div className="flex flex-col h-screen items-center">
        <div className="h-32 md:h-48 lg:h-56" />
          <div className="font-hrot text-center md:text-lg lg:text-xl bg-gradient-to-r from-[#ffcde5] via-[#ffe8f3] to-[#ffcde5] inline-block text-transparent bg-clip-text">
            My Norm
          </div>
          <div className="h-10" />
          <div className="font-extralight w-10/12 md:3/4 lg:w-1/2 text-center md:text-lg lg:text-xl leading-relaxed bg-gradient-to-r from-[#ffcde5] via-[#fff] to-[#ffcde5] inline-block text-transparent bg-clip-text">
          Essentially ahead of itself, it has projected itself upon its potentiality-for-Being before going on to any mere consideration of itself... Being-in-the-world has always expressed itself, and as Being alongside entities encountered within-the-world, it constantly expresses itself in addressing itself to the very object of its concern and discussing it.
          </div>
          <div className="h-8"></div>
          <div className="font-hrot text-center text-xs md:text-sm lg:text-tiny bg-gradient-to-r from-[#ffcde5] via-[#fff] to-[#ffcde5] inline-block text-transparent bg-clip-text">
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

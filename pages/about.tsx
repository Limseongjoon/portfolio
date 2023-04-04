import CustomImage from '../components/CustomImage';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="bg-[#090909] text-[#ffd9eb]">
      <div className="fixed z-50 w-screen px-6 lg:px-12">
      <div className="h-5 md:h-6 lg:h-8"></div>
      <div className="flex items-start">
        <Link href="/">
          <CustomImage src="/images/logo_joon_pink.png" className="h-4 md:h-5 lg:h-6 w-auto" />
        </Link>
        <div className="grow"></div>
        <div className="flex items-end gap-6 md:gap-10 lg:gap-12 -my-[4px] lg:-my-1">
          <Link
            href="/about"
            className="font-hrot text-2xs md:text-xs lg:text-sm"
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className="font-hrot text-2xs md:text-xs lg:text-sm"
          >
            CONTACT
          </Link>
        </div>
      </div>
      <div className="h-2"></div>
    </div>
      <div className="flex flex-col h-screen items-center">
        <div className="h-36 md:h-48 lg:h-56" />
          <div className="font-hrot text-center text-lg md:text-xl lg:text-2xl">
            My Norm
          </div>
          <div className="h-10" />
          <div className="font-light w-10/12 md:3/4 lg:w-1/2 text-center md:text-lg lg:text-xl leading-relaxed">
          Essentially ahead of itself, it has projected itself upon its potentiality-for-Being before going on to any mere consideration of itself... Being-in-the-world has always expressed itself, and as Being alongside entities encountered within-the-world, it constantly expresses itself in addressing itself to the very object of its concern and discussing it.
          </div>
          <div className="h-8"></div>
          <div className="font-hrot text-center text-xs md:text-sm lg:text-tiny">
          ⎯ Martin Heidegger
          </div>
        <div className="grow" />
        <div className="h-36" />
        <div className="h-24 text-center text-xs md:text-sm lg:text-base">
          Copyright © IM SEONGJOON. All rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Page;

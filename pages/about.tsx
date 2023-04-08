import Link from 'next/link';

const Page = () => {
  return (
    <div className="bg-[#090909] text-[#ffcde5]">
      <div className="fixed z-50 w-screen px-6 lg:px-10">
        <div className="h-3 lg:h-4" />
        <div className="flex items-start">
        <div className="-mt-1">
          <Link href="/" className="font-hrot w-screen text-lg md:text-xl lg:text-2xl tracking-wider text-[#ffcde5]">JOON</Link>
          </div>
          <div className="grow" />
          <div className="flex items-end gap-6 md:gap-10 lg:gap-12">
            <Link
              href="/about"
              className="font-hrot text-[#ffcde5] text-2xs lg:text-xs"
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="font-hrot text-[#ffcde5] text-2xs lg:text-xs"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-screen items-center">
        <div className="h-32 md:h-48 xl:h-52 2xl:h-56" />
          <div className="font-hrot text-center md:text-lg text-[#ffcde5]">
            My Norm
          </div>
          <div className="h-10" />
          <div className="font-thin w-10/12 md:3/4 lg:w-2/5 text-center md:text-lg leading-relaxed tracking-tight text-[#ffd5e9]">
          Essentially ahead of itself, it has projected itself upon its potentiality-for-Being before going on to any mere consideration of itself. Being-in-the-world has always expressed itself, and as Being alongside entities encountered within-the-world, it constantly expresses itself in addressing itself to the very object of its concern and discussing it.
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

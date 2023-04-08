import Link from 'next/link';

const Page = () => {
  return (
    <div className="bg-[#f8ff34] bg-gradient-to-t from-[#e9e9e9]">
      <div className="fixed z-50 w-screen px-6 lg:px-10">
        <div className="h-3 lg:h-4" />
        <div className="flex items-start">
        <div className="-mt-1">
          <Link href="/" className="font-hrot w-screen text-lg md:text-xl lg:text-2xl tracking-wider text-[#b837fe]">JOON</Link>
          </div>
          <div className="grow" />
          <div className="flex items-end gap-6 md:gap-10 lg:gap-12">
            <Link
              href="/about"
              className="font-hrot text-[#b837fe] text-2xs lg:text-xs"
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="font-hrot text-[#b837fe] text-2xs lg:text-xs"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-screen items-center">
        <div className="h-32 md:h-48 lg:h-56" />
          <div className="font-hrot text-[#b837fe] text-center md:text-lg">
            Contact
          </div>
          <div className="h-4" />
          <div className="text-center text-[#b837fe] font-extralight md:text-lg leading-snug">
          Please feel free to contact me :{')'}<br></br>
          I will get back to you as soon as possible.
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

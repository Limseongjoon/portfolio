import CustomImage from '../components/CustomImage';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="bg-white text-black">
      <div className="fixed z-50 w-screen px-6 lg:px-10">
        <div className="h-3 lg:h-4" />
        <div className="flex items-start">
          <div>
          <Link href="/" className="font-hrot w-screen text-lg md:text-xl lg:text-2xl tracking-wider text-black -mt-1">JOON</Link>
          </div>
          <div className="grow" />
          <div className="flex items-end gap-6 md:gap-10 lg:gap-12">
            <Link
              href="/about"
              className="font-hrot text-black text-2xs lg:text-xs"
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="font-hrot text-black text-2xs lg:text-xs"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white text-black flex flex-col h-screen items-center pt-12 md:pt-14 lg:pt-20">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="w-full text-black">
            <CustomImage src="/images/rhetoric_main.jpeg" className="w-full h-auto" />
          </div>
          <div className="w-full rounded-md text-black sm:px-12 md:px-14 py-8">
          <div className="text-xl lg:text-3xl font-bold leading-tight text-[#10A42A]">1</div>
          <div className="h-6 sm:h-4" />
            <div className="text-2xl lg:text-3xl font-semibold leading-tight">Link blog directly<br></br>to your website</div>
            <div className="h-2 sm:h-4" />
            <div className="text-gray-400 font-light w-8/12 leading-snug sm:leading-snug sm:text-lg">Seamless integration with your existing blog in just one minute.</div>
          </div>
        </div>
      </div>
      <div className="bg-white text-black flex flex-col h-screen items-center pt-12 md:pt-14 lg:pt-20">
        <div className="grow" />
        <div className="h-36" />
        <div className="h-12 text-center text-2xs lg:text-xs">
          Copyright © IM SEONGJOON. All rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Page;
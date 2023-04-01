import Header from '../components/Header';

const Page = () => {
  return (
    <div className="flex flex-col items-center bg-white">
      <Header />
      <div className="h-32 md:h-36 lg:h-48"></div>
        <div className="h-12 md:h-16 lg:h-20"></div>
        <div className="font-hrot text-center text-lg md:text-xl lg:text-2xl">
          CONTACT
        </div>
        <div className="h-4"></div>
        <div className="hidden sm:flex text-center font-light md:text-lg">
        Please feel free to contact me with any questions you may have.<br></br>
        I will get back to you as soon as possible.
        </div>
        <div className="sm:hidden text-center font-light md:text-lg">
        Please feel free to contact me<br></br> with any questions you may have.<br></br>
        I will get back to you as soon as possible.
        </div>
      <div className="h-10" />
      <div className="font-hrot text-center text-sm md:text-base">
        <a
          href="mailto:sungjun170@gmail.com"
          className="px-6 py-1 hover:bg-black hover:text-white focus:bg-black focus:text-white"
        >
          sungjun170@gmail.com
        </a>
      </div>
      <div className="h-96 lg:h-72"></div>
      <div className="w-full h-[120px] lg:h-[240px] text-center">
        <div className="text-xs md:text-sm lg:text-base">
          Copyright © IM SEONGJOON. All rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Page;

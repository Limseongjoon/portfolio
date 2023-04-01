import Header from '../components/Header';

const Page = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen items-center">
        <div className="h-48 md:h-56 lg:h-64" />
          <div className="font-hrot text-center text-lg md:text-xl lg:text-2xl">
            CONTACT
          </div>
          <div className="h-4" />
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
        <div className="grow" />
        <div className="h-36" />
        <div className="w-full h-24 text-center">
          <div className="text-xs md:text-sm lg:text-base">
            Copyright © IM SEONGJOON. All rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

import Header from "../components/Header";

const Page = () => {
  return (
    <div className="bg-[#f8ff34] bg-gradient-to-t from-[#fff]">
      <div className="fixed z-50 w-screen bg-transparent text-center font-hrot font-bold text-xs lg:text-sm pt-[5px]">
        너와
      </div>
      <Header />
      <div className="flex flex-col h-screen items-center">
        <div className="h-10 sm:h-16 md:h-24" />
        <div className="flex justify-center py-10 group">
          <div className="relative flex items-center justify-end w-40 sm:w-48 h-40 sm:h-48 overflow-hidden bg-transparent border-[1px] border-black rounded-full ">
            <div className="absolute sm:w-1/2 h-1 bg-black rounded-full origin-left -rotate-12 group-hover:rotate-[215deg] duration-1000 ease-in-out" />
            <div className="absolute w-1/2 h-1 origin-left rotate-[70] group-hover:rotate-[340deg] duration-1000 ease-in-out">
              <div className="w-2/3 h-full bg-black rounded-full" />
            </div>
            <div className="absolute flex justify-center flex-1 w-full">
              <div className="w-1 h-1 bg-black rounded-full" />
            </div>
          </div>
        </div>
        <div className="h-4" />
        <div className="text-center text-black font-extralight md:text-lg leading-snug">
          Good afternoon.
        </div>
        <div className="h-2" />
        <div className="text-center text-black font-extralight md:text-lg leading-snug">
          Please feel free to contact me.<br></br>I will get back to you as soon
          as possible.
        </div>
        <div className="h-8" />
        <div className="flex flex-col items-center">
          <a
            href="mailto:helloitsjoon@gmail.com"
            className="font-hrot text-tiny text-black text-center hover:pt-1 active:pt-4"
          >
            Send email
          </a>
          <div>↓</div>
        </div>
        <div className="grow" />
        <div className="w-full border-t-[0.5px] border-black opacity-60" />
        <div className="h-5 font-light text-center text-2xs lg:text-xs text-black my-[1px]">
          Copyright © JOON. All rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Page;

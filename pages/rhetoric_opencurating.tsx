import CustomImage from "../components/CustomImage";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-white text-black">
      <div className="fixed font-hrot z-50 w-screen px-3 sm:px-4 lg:px-5">
        <div className="h-1" />
        <div className="flex justify-between">
          <Link
            href="/"
            className="flex text-xs lg:text-sm text-black hover:-rotate-6 active:-rotate-12"
          >
            ← back
          </Link>
        </div>
      </div>
      <div className="h-7 lg:mb-[2px]" />
      <div className="bg-white text-black flex flex-col h-screen items-center">
        <div className="w-screen">
          <div className="h-6" />
          <div className="hidden md:flex px-4 lg:px-16 w-full">
            <div className="flex flex-row w-full items-baseline">
              <div className="flex flex-col w-1/2">
                <div className="flex items-baseline">
                  <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">
                    rhetoric
                  </div>
                  <div className="text-xs lg:text-sm">2023</div>
                </div>
                <div className="h-3" />
                <div className="font-hrot text-xs pr-2 lg:pr-4">
                  Dongdaemoon Design Plaza (DDP)<br></br>Opencurating vol.23
                </div>
              </div>
              <div className="w-1/2">
                <div className="font-light">
                  rhetoric delivers the message through a lunch box kit that a
                  life of self-care through daily practices is directly
                  connected to environment. The visual identity of DDP
                  exhibition focuses on the message based on unique visual
                  assets of rhetoric. Circle symbolizes routine and circulation,
                  and square symbolizes recovery and care. Those 2 flat and
                  basic shapes are organized to express connectivity and expand
                  into wonderful patterns.
                </div>
                <div className="h-6" />
                <div className="flex flex-col items-start">
                  <button className="font-hrot text-tiny pr-2 lg:pr-4  hover:pl-2 active:pl-4">
                    <span className="underline">See More</span> →
                  </button>
                  <div className="h-1"></div>
                  <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:pl-2 active:pl-4">
                    <span className="underline">Digital Booth</span> →
                  </button>
                </div>
              </div>
            </div>
            <div className="h-20" />
          </div>
          <div className="md:hidden px-4 lg:px-10 -mt-2">
            <div className="flex items-baseline">
              <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">
                rhetoric
              </div>
              <div className="text-xs lg:text-sm">2023</div>
            </div>
            <div className="h-2" />
            <div className="font-hrot text-2xs pr-2 lg:pr-4">
              Dongdaemoon Design Plaza (DDP)<br></br>Opencurating vol.23
            </div>
            <div className="h-6" />
            <div className="font-light lg:w-1/2">
              rhetoric delivers the message through a lunch box kit that a life
              of self-care through daily practices is directly connected to
              environment. The visual identity of DDP exhibition focuses on the
              message based on unique visual assets of rhetoric. Circle
              symbolizes routine and circulation, and square symbolizes recovery
              and care. Those 2 flat and basic shapes are organized to express
              connectivity and expand into wonderful patterns.
            </div>
            <div className="h-6" />
            <div className="flex flex-col items-start">
              <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:pl-2 active:pl-4">
                <a href="http://3.35.83.107/pharosapp/templates/pharosapp/start.html">
                  <span className="underline">Digital 3D Booth</span>
                </a>{" "}
                →
              </button>
              <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:pl-2 active:pl-4">
                <a href="http://pharosk.com">
                  <span className="underline">Website</span>
                </a>{" "}
                →
              </button>
            </div>
          </div>
          <div className="h-10" />
        </div>
        <div className="h-3 sm:h-8 border-t-[0.5px] border-black opacity-60 mx-4 lg:mx-10" />
        <div>
          <CustomImage
            src="/images/rhetoric_opencurating_1.jpeg"
            className="w-screen lg:px-4 xl:px-16"
          />
          <div className="h-2 sm:h-4" />
          <CustomImage
            src="/images/rhetoric_opencurating_2.jpeg"
            className="w-screen lg:px-4 xl:px-16"
          />
          <div className="h-2 sm:h-4" />
          <CustomImage
            src="/images/rhetoric_opencurating_3.jpeg"
            className="w-screen lg:px-4 xl:px-16"
          />
          <div className="h-2 sm:h-4" />
          <CustomImage
            src="/images/rhetoric_opencurating_4.jpeg"
            className="w-screen lg:px-4 xl:px-16"
          />
          <div className="h-2 sm:h-4" />
          <CustomImage
            src="/images/rhetoric_opencurating_5.jpeg"
            className="w-screen lg:px-4 xl:px-16"
          />
        </div>
        <div className="h-12 text-center text-2xs lg:text-xs text-black">
          Copyright © JOON. All rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Page;

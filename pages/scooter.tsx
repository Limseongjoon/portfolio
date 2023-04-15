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
                    SMEG Scooter
                  </div>
                  <div className="text-xs lg:text-sm">2023</div>
                </div>
                <div className="h-3" />
                <div className="font-hrot text-xs pr-2 lg:pr-4">
                  Dongdaemoon Design Plaza (DDP)<br></br>Opencurating vol.23
                </div>
              </div>
              <div className="w-1/2">
                <div className="font-medium">
                  Travel with SMEG, it&apos;s Delicious.
                </div>
                <div className="h-2" />
                <div className="font-light">
                  Electric scooter for short-distance picnics and would be used
                  as a means of transportation and leisure, suggested by SMEG, a
                  kitchen appliance brand. Based on the increasing number of
                  young single-person households in their 20s and 30s, SMEG
                  provides a delicious trip to solve the increasing problems by
                  mobilities in the city. FUTRO is suitable for commute and a
                  short break to the suburbs. You can find out the expandability
                  of two-wheeled mobility through several items, such as
                  electric batteries, power supply devices, small internal
                  portable appliances, etc.
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
          </div>
          <div className="h-10" />
        </div>
        <div className="h-3 sm:h-8 border-t-[0.5px] border-black opacity-60 mx-4 lg:mx-10" />
        <div className="hidden lg:flex flex-col gap-4 w-screen">
          <div className="flex flex-row w-full items-center justify-center">
            <div className="w-6/12">
              <CustomImage src="/images/smeg_1.png" className="w-full h-auto" />
            </div>
            <div className="w-1/4">
              <CustomImage src="/images/smeg_2.png" className="w-full h-auto" />
            </div>
            <div className="w-1/4">
              <CustomImage src="/images/smeg_3.png" className="w-full h-auto" />
            </div>
          </div>
          <div className="h-8" />
          <CustomImage
            src="/images/smeg_4.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <div className="w-full justify-center lg:px-6 xl:px-14">
            <div className="flex flex-row gap-4 justify-center">
              <CustomImage src="/images/smeg_5.png" className="w-1/2 h-auto" />
              <CustomImage src="/images/smeg_6.png" className="w-1/2 h-auto" />
            </div>
          </div>
          <CustomImage
            src="/images/smeg_7.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/smeg_8.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/smeg_9.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <div className="w-full justify-center lg:px-6 xl:px-14">
            <div className="flex flex-row gap-4 justify-center">
              <CustomImage src="/images/smeg_10.png" className="w-1/2 h-auto" />
              <CustomImage src="/images/smeg_11.png" className="w-1/2 h-auto" />
            </div>
          </div>
          <CustomImage
            src="/images/smeg_12.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/smeg_13.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <div className="w-full justify-center lg:px-6 xl:px-14">
            <div className="flex flex-row gap-4 justify-center">
              <CustomImage src="/images/smeg_14.png" className="w-1/2 h-auto" />
              <CustomImage src="/images/smeg_15.png" className="w-1/2 h-auto" />
            </div>
          </div>
          <div className="w-full justify-center lg:px-6 xl:px-8">
            <div className="flex flex-row gap-4 justify-center">
              <CustomImage src="/images/smeg_16.png" className="w-1/2 h-auto" />
              <CustomImage src="/images/smeg_17.png" className="w-1/2 h-auto" />
            </div>
          </div>
        </div>
        <div className="flex lg:hidden flex-col gap-2 lg:gap-4">
          <CustomImage
            src="/images/smeg_1.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/smeg_2.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/smeg_3.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/smeg_4.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/smeg_5.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/smeg_6.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/smeg_7.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/smeg_8.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/smeg_9.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/smeg_10.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/smeg_11.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/smeg_12.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/smeg_13.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/smeg_14.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/smeg_15.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/smeg_16.png"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/smeg_17.png"
            className="w-screen lg:px-4 xl:px-12"
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

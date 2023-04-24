import CustomImage from "../components/CustomImage";
import Link from "next/link";
import Header from "../components/Header";

const Page = () => {
  return (
    <div className="bg-white text-black w-screen">
      <div className="fixed z-50 w-screen bg-transparent text-center font-hrot font-bold text-xs lg:text-sm pt-[5px] pr-[4px]">
        나의
      </div>
      <Header />
      <div className="h-8 md:h-10 lg:h-16" />
      <div className="bg-white text-black flex flex-col h-screen items-center">
        <div>
          <CustomImage
            src="/images/scooter_main.jpeg"
            className="w-screen lg:px-4 xl:px-16"
          />
          <div className="h-4 sm:h-8 border-b-[0.5px] border-black opacity-60 mx-4 lg:mx-10" />
          <div className="h-6" />
          <div className="hidden md:flex px-4 lg:px-10 w-full">
            <div className="flex flex-row w-full items-baseline">
              <div className="h-6" />
              <div className="flex flex-col w-1/2">
                <div className="flex items-baseline">
                  <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">
                    SMEG Scooter
                  </div>
                  <div className="text-xs lg:text-sm">2021</div>
                </div>
                <div className="h-3" />
                <div className="font-hrot text-xs pr-2 lg:pr-4">
                  Bachelor of Design Degree<br></br>Exhibition Project
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
                <div className="h-6" />
                <div className="flex flex-row items-start hover:gap-1 active:gap-4">
                  <button className="font-hrot text-tiny pr-1 hover:font-semibold hover:rotate-6 active:rotate-12">
                    <Link href="/">
                      <span className="underline">See More</span>
                    </Link>
                  </button>
                  <span>→</span>
                </div>
              </div>
            </div>
            <div className="h-20" />
          </div>
          <div className="md:hidden px-4 lg:px-10 -mt-2">
            <div className="flex items-baseline">
              <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">
                SMEG Scooter
              </div>
              <div className="text-xs lg:text-sm">2023</div>
            </div>
            <div className="h-2" />
            <div className="font-hrot text-2xs pr-2 lg:pr-4">
              Bachelor of Design Degree<br></br>Exhibition Project
            </div>
            <div className="h-6" />
            <div className="font-light lg:w-1/2">
              <div className="font-medium">
                Travel with SMEG, it&apos;s Delicious.
              </div>
              <div className="h-2" />
              <div className="font-light">
                Electric scooter for short-distance picnics and would be used as
                a means of transportation and leisure, suggested by SMEG, a
                kitchen appliance brand. Based on the increasing number of young
                single-person households in their 20s and 30s, SMEG provides a
                delicious trip to solve the increasing problems by mobilities in
                the city. FUTRO is suitable for commute and a short break to the
                suburbs. You can find out the expandability of two-wheeled
                mobility through several items, such as electric batteries,
                power supply devices, small internal portable appliances, etc.
              </div>
            </div>
            <div className="h-6" />
            <div className="flex flex-row items-start hover:gap-1 active:gap-4">
              <button className="font-hrot text-tiny pr-1 hover:font-semibold hover:rotate-6 active:rotate-12">
                <Link href="/">
                  <span className="underline">See More</span>
                </Link>
              </button>
              <span>→</span>
            </div>
          </div>
          <div className="h-48 sm:h-64" />
        </div>
        <div>
          <div className="md:hidden">
            <div className="border-t-[0.5px] border-black opacity-60 mx-4 lg:mx-10" />
            <CustomImage
              src="/images/font_main.jpeg"
              className="w-screen lg:px-4 xl:px-16"
            />
            <div className="border-b-[0.5px] border-black opacity-60 mx-4 lg:mx-10" />
            <div className="h-6" />
            <div className="md:hidden px-4 md:px-10 -mt-2">
              <div className="flex items-baseline">
                <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">
                  Korean Typeface
                </div>
                <div className="text-xs lg:text-sm">2023</div>
              </div>
              <div className="h-2" />
              <div className="font-hrot text-2xs pr-2 lg:pr-4">
                Dongdaemoon Design Plaza (DDP)<br></br>Opencurating vol.23
              </div>
              <div className="h-6" />
              <div className="font-light lg:w-1/2">
                rhetoric delivers the message through a lunch box kit that a
                life of self-care through daily practices is directly connected
                to environment. The visual identity of DDP exhibition focuses on
                the message based on unique visual assets of rhetoric. Circle
                symbolizes routine and circulation, and square symbolizes
                recovery and care. Those 2 flat and basic shapes are organized
                to express connectivity and expand into wonderful patterns.
              </div>
              <div className="h-6" />
              <div className="flex flex-row items-start hover:gap-1 active:gap-4">
                <button className="font-hrot text-tiny pr-1 hover:font-semibold hover:rotate-6 active:rotate-12">
                  <Link href="/rhetoric_opencurating">
                    <span className="underline">See More</span>
                  </Link>
                </button>
                <span>→</span>
              </div>
              <div className="h-48 sm:h-64" />
            </div>
          </div>
          <div className="hidden md:flex gap-8 lg:gap-10">
            <div className="w-7/12">
              <div className="border-t-[0.5px] border-black opacity-60 ml-4 lg:ml-10" />
              <CustomImage src="/images/font_main.jpeg " className="w-screen" />
            </div>
            <div className="w-5/12">
              <div className="flex flex-col items-baseline w-11/12 h-full border-t-[0.5px] border-black">
                <div className="h-6" />
                <div className="flex flex-col">
                  <div className="flex items-baseline">
                    <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">
                      Korean Typeface
                    </div>
                    <div className="text-xs lg:text-sm">2023</div>
                  </div>
                  <div className="h-3" />
                  <div className="font-hrot text-xs pr-2 lg:pr-4">
                    Dongdaemoon Design Plaza (DDP)<br></br>Opencurating vol.23
                  </div>
                  <div className="h-6" />
                </div>
                <div className="font-light">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
                <div className="h-6" />
                <div className="flex flex-row items-start hover:gap-1 active:gap-4">
                  <button className="font-hrot text-tiny pr-1 hover:font-semibold hover:rotate-6 active:rotate-12">
                    <Link href="/">
                      <span className="underline">See More</span>
                    </Link>
                  </button>
                  <span>→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-0 md:h-32" />
          <div className="border-t-[0.5px] border-black opacity-60 mx-4 lg:mx-10" />
          <CustomImage
            src="/images/illustration_main.png"
            className="w-screen lg:px-4 xl:px-16"
          />
          <div className="border-b-[0.5px] border-black opacity-60 mx-4 lg:mx-10" />
          <div className="h-6" />
          <div className="hidden md:flex px-4 lg:px-10 w-full">
            <div className="flex flex-row w-full items-baseline">
              <div className="h-6" />
              <div className="flex flex-col w-1/2">
                <div className="flex items-baseline">
                  <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">
                    Do Not Disturb Me
                  </div>
                </div>
                <div className="h-3" />
                <div className="font-hrot text-xs pr-2 lg:pr-4">
                  Dongdaemoon Design Plaza (DDP)<br></br>Opencurating vol.23
                </div>
              </div>
              <div className="w-1/2">
                <div className="font-light">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
                <div className="h-6" />
                <div className="flex flex-row items-start hover:gap-1 active:gap-4">
                  <button className="font-hrot text-tiny pr-1 hover:font-semibold hover:rotate-6 active:rotate-12">
                    <Link href="/">
                      <span className="underline">See More</span>
                    </Link>
                  </button>
                  <span>→</span>
                </div>
              </div>
            </div>
            <div className="h-20" />
          </div>
          <div className="md:hidden px-4 lg:px-10 -mt-2">
            <div className="flex items-baseline">
              <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">
                Do Not Disturb Me
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
            <div className="flex flex-row items-start hover:gap-1 active:gap-4">
              <button className="font-hrot text-tiny pr-1 hover:font-semibold hover:rotate-6 active:rotate-12">
                <Link href="/">
                  <span className="underline">See More</span>
                </Link>
              </button>
              <span>→</span>
            </div>
          </div>
        </div>
        <div className="h-48 sm:h-64" />
      </div>
    </div>
  );
};

export default Page;

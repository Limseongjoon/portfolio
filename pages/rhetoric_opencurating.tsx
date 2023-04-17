import CustomImage from "../components/CustomImage";
import Link from "next/link";
import { Accordion } from "flowbite-react";
import { Timeline } from "flowbite-react";

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
          <div className="h-4 md:h-12" />
          <div className="px-4 lg:px-10 flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="text-xs md:text-sm">2023</div>
              <div className="h-3 sm:h-4" />
              <CustomImage
                src="/images/rhetoric_logo.png"
                className="w-32 sm:w-44 h-auto"
              />
            </div>
            <div className="sm:h-2" />
            <div className="hidden sm:flex">⎯⎯</div>
            <div className="flex sm:hidden">⎯</div>
            <div className="sm:h-1" />
            <div className="font-hrot text-2xs md:text-sm text-center">
              Dongdaemoon Design Plaza (DDP)<br></br>Opencurating vol.23
            </div>
            <div className="h-8 md:h-10" />
            <div className="w-full sm:px-2">
              <Accordion flush={true}>
                <Accordion.Panel>
                  <Accordion.Title>
                    <div className="font-hrot font-semibold sm:text-lg text-black sm:">
                      About
                    </div>
                  </Accordion.Title>
                  <Accordion.Content>
                    <div className="md:text-lg md:w-4/5 break-keep ml-4 flex flex-col gap-4">
                      <div>
                        <span className="font-bold">rhetoric</span> delivers the
                        message through a lunch box kit that a life of self-care
                        through daily practices is directly connected to
                        environment. The visual identity of DDP exhibition
                        focuses on the message based on unique visual assets of{" "}
                        <span className="font-bold">rhetoric</span>.
                      </div>
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                    <div className="font-hrot font-semibold sm:text-lg text-black sm:">
                      What i Did
                    </div>
                  </Accordion.Title>
                  <Accordion.Content>
                    <div className="md:text-lg md:w-4/5 break-keep ml-4 flex flex-col gap-4">
                      <div>
                        • Key visual identity Graphics
                        <div className="text-sm md:text-tiny leading-snug ml-6">
                          : Main Poster, Visual assets
                        </div>
                      </div>
                      <div>• Motion Graphics</div>
                      <div>
                        • Exhibitional Space Planning
                        <div className="text-sm md:text-tiny leading-snug ml-6">
                          : DDP, Seoul Design Festival
                        </div>
                        <div className="text-sm md:text-tiny leading-snug ml-6">
                          : DDP, Seoul Design Festival
                        </div>
                      </div>
                      <div>
                        • Workshop
                        <div className="text-sm md:text-tiny leading-snug ml-6">
                          : Poster, MC
                        </div>
                      </div>
                      <div>
                        • Part3
                        <div className="text-sm md:text-tiny leading-snug ml-6">
                          : compilation of 16 recipes, 긴 종이, Kinetic
                          Typogrphy
                        </div>
                      </div>
                      <div>
                        • Part4
                        <div className="text-sm md:text-tiny leading-snug ml-6">
                          : Kinetic Typogrphy for Slogan
                        </div>
                      </div>
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                    <p className="font-hrot font-semibold sm:text-lg text-black">
                      Legacy
                    </p>
                  </Accordion.Title>
                  <Accordion.Content>
                    <div className="md:text-lg md:w-4/5 break-keep ml-4 flex flex-col gap-4">
                      Circle symbolizes routine and circulation, and square
                      symbolizes recovery and care. Those 2 flat and basic
                      shapes are organized to express connectivity and expand
                      into wonderful patterns.
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
          <div className="h-4 sm:h-6" />
        </div>
        <div className="h-3 sm:h-8 border-t-[0.5px] border-black opacity-60 mx-4 lg:mx-10" />
        <div className="flex flex-col gap-4">
          <CustomImage
            src="/images/rhetoric_opencurating_1.jpeg"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/rhetoric_opencurating_2.jpeg"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/rhetoric_opencurating_3.jpeg"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/rhetoric_opencurating_4.jpeg"
            className="w-screen lg:px-4 xl:px-12"
          />
          <CustomImage
            src="/images/rhetoric_opencurating_5.jpeg"
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

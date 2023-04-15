import Header from "../components/Header";
import { Accordion } from "flowbite-react";

const Page = () => {
  return (
    <div className="bg-white text-black w-screen">
      <div className="fixed z-50 w-screen bg-transparent text-center font-hrot font-bold text-xs lg:text-sm pt-[5px]">
        나는
      </div>
      <Header />
      <div className="flex flex-col h-screen items-center">
        <div className="h-16 md:h-48 xl:h-36" />
        <div className="w-11/12 sm:w-3/4 lg:w-2/3">
          <Accordion flush={true}>
            <Accordion.Panel>
              <Accordion.Title>
                <div className="font-hrot font-semibold text-lg text-black">
                  In-der-Welt-sein
                </div>
              </Accordion.Title>
              <Accordion.Content>
                <div className="mt-2">
                  Essentially ahead of itself, it has projected itself upon its
                  potentiality-for-Being before going on to any mere
                  consideration of itself. Being-in-the-world has always
                  expressed itself, and as Being alongside entities encountered
                  within-the-world, it constantly expresses itself in addressing
                  itself to the very object of its concern and discussing it.
                </div>
                <div className="h-2 sm:h-4"></div>
                <div className="text-sm mb-2 font-hrot">⎯ Martin Heidegger</div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <p className="font-hrot font-semibold text-lg text-black">
                  My Norms
                </p>
              </Accordion.Title>
              <Accordion.Content>
                <p className="my-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
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

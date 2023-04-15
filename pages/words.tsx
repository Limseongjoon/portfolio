import Header from "../components/Header";
import { Accordion } from "flowbite-react";

const Page = () => {
  return (
    <div className="bg-white text-black w-screen max-h-screen overflow-hidden">
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
                  Why I developed?
                </div>
              </Accordion.Title>
              <Accordion.Content>
                <div className="my-2">
                  Started for my portfolio. 프로젝트에만 몰입하고자.
                  포트폴리오는 결과물을 담는 지면일 뿐인데, 결과물의 모습에
                  집중하는 나를 발견했다. 도구인 매체가 목적보다 우선하게 되는
                  순간 현재에 몰입하지 못하는 나를 발견했다. 자료 업로드 시의
                  규격부터 생각하게 되고, 제한.
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <p className="font-hrot font-semibold text-lg text-black">
                  What is Design?
                </p>
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
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <p className="font-hrot font-semibold text-lg text-black">
                  Methodology
                </p>
              </Accordion.Title>
              <Accordion.Content>
                <div className="mt-2">
                  디자인은 필요로 시작하여 논리와 근거를 바탕으로 감각의 총체로
                  맞이하도록 만드는 방법론이다. 필요로써 예술과 구별되고 논리와
                  근거로써 비로소 모방에서 벗어난다. 나아가 넛지함의 권력을
                  가지기 쉬우므로 절대 함부로 다뤄서는 안된다. 명확한 필요,
                  논리, 근거가 있다면 그럴 수 밖에 없는 결과가 도출된다.
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <p className="font-hrot font-semibold text-lg text-black">
                  Operator vs. Director
                </p>
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
                  My journey
                </p>
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
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <p className="font-hrot font-semibold text-lg text-black">
                  Norms
                </p>
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
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <p className="font-hrot font-semibold text-lg text-black">
                  Thesedays
                </p>
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
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div className="h-64 sm:h-64" />
        <div className="w-full border-t-[0.5px] border-black opacity-60" />
        <div className="h-5 font-light text-center text-2xs lg:text-xs text-black my-[1px]">
          Copyright © JOON. All rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Page;

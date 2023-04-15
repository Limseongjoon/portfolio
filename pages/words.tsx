import Header from "../components/Header";
import { Accordion } from "flowbite-react";
import { Timeline } from "flowbite-react";

const Page = () => {
  return (
    <div className="bg-[#51DA4A] text-black w-screen max-h-screen overflow-hidden">
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
                  Developed for...
                </div>
              </Accordion.Title>
              <Accordion.Content>
                <div className="md:w-4/5 break-keep ml-6">
                  프로젝트 매체의 규격과 포맷에 상관없이 최적의 포트폴리오 구성
                  환경을 조직하기 위하여 제작하였다.
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
                <div className="md:w-4/5 break-keep ml-6 flex flex-col gap-4">
                  <div>
                    디자인은 필요로 시작하여 논리와 근거를 바탕으로 감각의
                    총체로 맞이하도록 만드는 방법론이다. 따라서 명확한 필요,
                    논리, 근거가 있다면 그럴 수 밖에 없는 결과가 도출된다.
                  </div>
                  <div>
                    디자인은 필요로써 예술과 구별되고 논리와 근거로써 비로소
                    모방에서 벗어난다.
                  </div>
                  <div>
                    나아가 촘촘히 설계된 그 무엇은 넛지하는 권력으로 작용하므로
                    반드시 조심스럽게 다루려는 마음을 지녀야 한다. 존재는 있다는
                    사실만으로도 실로 엄청난 힘을 가진다.
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <p className="font-hrot font-semibold text-lg text-black">
                  My Methodology
                </p>
              </Accordion.Title>
              <Accordion.Content>
                <div className="md:w-4/5 break-keep ml-6 flex flex-col gap-4">
                  <div>
                    <div>
                      1. <span className="font-bold">레거시</span>와{" "}
                      <span className="font-bold">보편</span>을 구성하는
                      요소들을 추출하여 조형으로 읽어내기.
                    </div>
                    <div className="text-xs leading-snug ml-3">
                      (어느 시점과 어느 범위까지 통시적/ 공시적, 또는 그 이외의
                      관점에서 리서치를 할 것인지에 대한 스케쥴링과 판단이
                      필요하므로 직관과 경험의 누적이 필요한 부분이다.)
                    </div>
                  </div>
                  <div>
                    <div>
                      2. 위 조형 요소들을 이용하여 지나치게 과하지 않으며,
                      새롭고 강렬한 충격을 주는{" "}
                      <span className="font-semibold">적절한 지형도</span>{" "}
                      그려내기.
                    </div>
                    <div className="text-xs leading-snug ml-3">
                      (1번과 마찬가지로 직관과 경험의 누적이 필요한 부분이라고
                      생각한다.)
                    </div>
                  </div>
                  <div>
                    3. 프로젝트 성격에 부합하는{" "}
                    <span className="font-bold">이성-감각</span> 비율 판단.
                  </div>
                  <div>
                    4. <span className="font-bold">오퍼레이터</span>로서 작업할
                    것인지, 또는 <span className="font-bold">디렉터</span>로서
                    지시할 것인 지를 판단.
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title color="black">
                <p className="font-hrot font-semibold text-lg text-black">
                  Phrase Hit Me Hard
                </p>
              </Accordion.Title>
              <Accordion.Content>
                <div className="md:w-4/5 break-keep ml-6">
                  Essentially ahead of itself, it has projected itself upon its
                  potentiality-for-Being before going on to any mere
                  consideration of itself.{" "}
                  <span className="font-bold">Being-in-the-world</span> has
                  always expressed itself, and as Being alongside entities
                  encountered within-the-world, it constantly expresses itself
                  in addressing itself to the very object of its concern and
                  discussing it.
                </div>
                <div className="h-4" />
                <div className="font-hrot text-sm ml-6">― Martin Heidegger</div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <p className="font-hrot font-semibold text-lg text-black">
                  My Journey
                </p>
              </Accordion.Title>
              <Accordion.Content>
                <Timeline>
                  <Timeline.Item>
                    <Timeline.Point className="bg-secondary" />
                    <Timeline.Content>
                      <Timeline.Time>March 2022</Timeline.Time>
                      <Timeline.Title>
                        Bachelor&apos;s Degree in Design
                      </Timeline.Title>
                      <Timeline.Body>Seoul Nat&apos;l Uni.</Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Time>March 2011 - August 2018</Timeline.Time>
                      <Timeline.Title>
                        Bachelor&apos;s Degree in Biology
                      </Timeline.Title>
                      <Timeline.Body>Korea Uni.</Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                </Timeline>
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

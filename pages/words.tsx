import Header from "../components/Header";
import { Accordion } from "flowbite-react";
import { Timeline } from "flowbite-react";

const Page = () => {
  return (
    <div className="bg-[#51DA4A] text-black w-screen h-screen">
      <div className="fixed italic z-50 w-screen bg-transparent text-center font-hrot font-bold text-xs lg:text-sm pt-[5px] pr-[4px]">
        나는
      </div>
      <Header />
      <div className="flex flex-col bg-[#51DA4A] items-center">
        <div className="flex h-16 md:h-24 xl:h-28" />
        <div className="w-11/12 sm:w-3/4 lg:w-3/5">
          <Accordion flush={true}>
            <Accordion.Panel>
              <Accordion.Title>
                <p className="font-hrot font-semibold sm:text-lg text-black">
                  Designing is
                </p>
              </Accordion.Title>
              <Accordion.Content>
                <div className="md:text-lg md:w-5/6 break-keep ml-1 flex flex-col gap-4">
                  <div className="flex flex-row">
                    <span className="pr-2">•</span>
                    <span>
                      디자이닝은 <strong>필요로 시작</strong>
                      하여 <strong>논리와 근거를 바탕</strong>으로{" "}
                      <strong>감각의 총체로 맞이</strong>하도록 만드는
                      방법론입니다. 명확한 필요, 논리, 근거가 있다면 그럴 수
                      밖에 없는 결과가 도출됩니다.
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <span className="pr-2">•</span>
                    <span>
                      디자인은 필요로써 예술과 구별되고 논리와 근거로써 비로소
                      모방에서 벗어날 수 있습니다.
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <span className="pr-2">•</span>
                    <span>
                      나아가 촘촘히 설계된 결과물은 넛지하는 권력으로 기능하므로
                      시작부터 조심스럽게 다루어야 합니다. 거기 있다는
                      사실만으로도 존재는 무거운 중력을 지니기 때문입니다.
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <span className="pr-2">•</span>
                    <span>
                      무엇보다 중요한 것은 고객의 취향을 존중하고, 고객의 만족을
                      넘어 충만을 목표로 하며, 고객이 추구하는 바를 달성할 수
                      있도록 도우려는 전투적인 마음입니다.
                    </span>
                  </div>
                  <div className="h-4" />
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <p className="font-hrot font-semibold sm:text-lg text-black">
                  Way i Work
                </p>
              </Accordion.Title>
              <Accordion.Content>
                <div className="md:text-lg md:w-5/6 break-keep ml-1 flex flex-col gap-6">
                  <div className="flex flex-row">
                    <span className="pr-2">1]</span>
                    <span>
                      <strong>레거시</strong>와 <strong>보편</strong>을 구성하는
                      요소들을 추출하여 조형으로 읽어냅니다.
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <span className="pr-2">2]</span>
                    <span>
                      과하지 않으며 새롭고 강렬한 충격을 주는{" "}
                      <strong>지형도</strong>를 그려냅니다.
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <span className="pr-2">3]</span>
                    <span>
                      프로젝트 성격에 부합하는 <strong>이성-감각</strong>의
                      적정한 비율을 정의합니다.
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <span className="pr-2">4]</span>
                    <span>
                      어느 수준까지 <strong>오퍼레이터</strong> 또는{" "}
                      <strong>디렉터</strong>로서 기능할 것인지를 판단합니다.
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <span className="pr-2">5]</span>
                    <span>
                      레퍼런스를 다양한 감각으로 수집하고 작업을 진행합니다.
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <span className="pr-2">6]</span>시간이 흘러감에 따라 도출된
                    이미지가 흐트러지지 않고 유지되는지 지속적으로 점검하고
                    살핍니다.
                  </div>
                  <div className="flex flex-row">
                    <span className="pr-2">7]</span>시간이 지나 보다 적절한
                    요소로 대체된 경우에는 이를 기록하여 유념할 수 있도록
                    합니다.
                  </div>
                  <div className="h-4" />
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <p className="font-hrot font-semibold sm:text-lg text-black">
                  Hit Me Hard
                </p>
              </Accordion.Title>
              <Accordion.Content>
                <div className="md:text-lg ml-1 md:w-5/6">
                  Essentially ahead of itself, it has projected itself upon its
                  potentiality-for-Being before going on to any mere
                  consideration of itself.
                  <strong>Being-in-the-world</strong> has always expressed
                  itself, and as Being alongside entities encountered
                  within-the-world, it constantly expresses itself in addressing
                  itself to the very object of its concern and discussing it.
                </div>
                <div className="h-4" />
                <div className="font-hrot text-sm ml-4">― Martin Heidegger</div>
                <div className="h-4" />
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <p className="font-hrot font-semibold sm:text-lg text-black">
                  i Walked Along
                </p>
              </Accordion.Title>
              <Accordion.Content>
                <Timeline>
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                      <div className="h-1" />
                      <Timeline.Time className="text-xs">
                        March 2019 - March 2022
                      </Timeline.Time>
                      <Timeline.Title>
                        Bachelor&apos;s Degree in Design
                      </Timeline.Title>
                      <Timeline.Body>
                        <div>Seoul Nat&apos;l University </div>
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Time className="text-xs">
                        March 2011 - August 2018
                      </Timeline.Time>
                      <Timeline.Title>
                        Bachelor&apos;s Degree in Biology
                      </Timeline.Title>
                      <Timeline.Body>Korea University</Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                </Timeline>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <div className="font-hrot font-semibold sm:text-lg text-black">
                  Developed for
                </div>
              </Accordion.Title>
              <Accordion.Content>
                <div className="md:text-lg md:w-5/6 break-keep ml-1 flex flex-col gap-4">
                  <div className="flex flex-row">
                    <span className="pr-2">•</span>
                    <span>
                      매체의 규격과 포맷에 제한되지 않는 구성 환경과 에셋을
                      조직하기 위하여,
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <span className="pr-2">•</span>
                    <span>
                      큐레이션을 넘어 프로젝트 개개의 목소리를 유지하기 위하여,
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <span className="pr-2">•</span>
                    <span>
                      웹페이지 내의 모든 요소들은 표현의 총체를 구성하므로,
                    </span>
                  </div>
                </div>
                <div className="h-4" />
                <div className="text-right text-xs sm:text-sm">
                  페이지를 제작하게 되었습니다.
                </div>
                <div className="h-4" />
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div className="h-48" />
        <div className="w-full border-t-[0.5px] border-black opacity-60" />
        <div className="h-5 w-full font-light text-center text-2xs lg:text-xs text-black my-[1px]">
          Copyright © JOON. All rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Page;

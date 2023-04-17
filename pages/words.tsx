import Header from "../components/Header";
import { Accordion } from "flowbite-react";
import { Timeline } from "flowbite-react";

const Page = () => {
  return (
    <div className="bg-[#51DA4A] text-black w-screen h-screen">
      <div className="fixed z-50 w-screen bg-transparent text-center font-hrot font-bold text-xs lg:text-sm pt-[5px] pr-[4px]">
        나는
      </div>
      <Header />
      <div className="flex flex-col bg-[#51DA4A] items-center">
        <div className="flex h-16 md:h-48 xl:h-36" />
        <div className="w-11/12 sm:w-3/4 lg:w-3/5">
          <Accordion flush={true}>
            <Accordion.Panel>
              <Accordion.Title>
                <div className="font-hrot font-semibold sm:text-lg text-black pb-[0.8px]">
                  i Developed Page for
                </div>
              </Accordion.Title>
              <Accordion.Content>
                <div className="h-2" />
                <div className="md:text-lg md:w-4/5 break-keep sm:ml-4 flex flex-col gap-4">
                  <div>다음의 이유들로 웹페이지를 개발하게 되었습니다.</div>
                  <div className="">
                    • 프로젝트{" "}
                    <span className="font-bold">
                      매체의 규격과 포맷에 제한되지 않고
                    </span>{" "}
                    높은 자유도를 갖는 포트폴리오 구성 환경을 조직해두기 위하여.
                  </div>
                  <div className="">
                    • 단순한 큐레이션을 넘어{" "}
                    <span className="font-bold">
                      각 프로젝트마다의 성질과 목소리
                    </span>
                    를 유지하기 위하여.
                  </div>
                  <div className="">
                    • 구조, 편집, 형태, 모양, 꼴, 생김새, 타입페이스, 색깔, 자간
                    등 웹페이지를 구성하는{" "}
                    <span className="font-bold">
                      모든 요소들은 표현의 총체를 구성
                    </span>
                    하므로.
                  </div>
                  <div className="h-6" />
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <p className="font-hrot font-semibold sm:text-lg text-black pb-[0.8px]">
                  Designing is
                </p>
              </Accordion.Title>
              <Accordion.Content>
                <div className="h-2" />
                <div className="md:text-lg md:w-4/5 break-keep sm:ml-4 flex flex-col gap-4">
                  <div>
                    • 디자인은 <span className="font-bold">필요로 시작</span>
                    하여
                    <span className="font-bold"> 논리와 근거를 바탕</span>으로
                    <span className="font-bold"> 감각의 총체로 맞이</span>하도록
                    만드는 방법론입니다. 따라서 명확한 필요, 논리, 근거가 있다면
                    그럴 수 밖에 없는 결과가 도출된다고 믿습니다.
                  </div>
                  <div>
                    • 디자인은 필요로써 예술과 구별되고 논리와 근거로써 비로소
                    모방에서 벗어날 수 있습니다.
                  </div>
                  <div>
                    • 나아가 촘촘히 설계된 결과물은 넛지하는 권력으로 작용하므로
                    시작부터 조심스럽게 다루어야 합니다. 존재는 거기 있다는
                    사실만으로도 무거운 중력을 지니기 때문입니다.
                  </div>
                  <div>
                    • 무엇보다 중요한 것은 고객의 취향을 존중하고, 고객의 기쁨과
                    만족을 목표로 하며, 고객이 추구하는 바를 달성할 수 있도록
                    돕는 전투적인 마음입니다.
                  </div>
                  <div className="h-6" />
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <p className="font-hrot font-semibold sm:text-lg text-black pb-[0.8px]">
                  The Way i Work
                </p>
              </Accordion.Title>
              <Accordion.Content>
                <div className="h-2" />
                <div className="md:text-lg md:w-4/5 break-keep sm:ml-4 flex flex-col gap-6">
                  <div>
                    <div>
                      (1) <span className="font-bold">레거시</span>와{" "}
                      <span className="font-bold">보편</span>을 구성하는
                      요소들을 추출하여 조형으로 읽어냅니다.
                    </div>
                    <div className="h-1" />
                    <div className="text-sm md:text-tiny leading-snug ml-6">
                      : 통시적/ 공시적, 또는 그 이외의 관점에서 어느 시점과 어느
                      범위까지 리서치 할 것인지 생각합니다.
                    </div>
                    <div className="h-1" />
                    <div className="text-sm md:text-tiny leading-snug ml-6">
                      : 스케쥴링과 판단이 필요하므로 직관과 경험의 누적이 필요한
                      부분이라고 생각합니다.
                    </div>
                  </div>
                  <div>
                    <div>
                      (2) 지나치게 과하지 않으며, 새롭고 강렬한 충격을 주는{" "}
                      <span className="font-semibold">지형도</span> 그려냅니다.
                    </div>
                    <div className="h-1" />
                    <div className="text-sm md:text-tiny leading-snug ml-6">
                      : 마찬가지로 직관과 경험의 누적이 필요한 부분이며, 여러
                      감각을 적절하게 활용합니다.
                    </div>
                    <div className="h-1" />
                    <div className="text-sm md:text-tiny leading-snug ml-6">
                      : 예상치 못한 등장은 언제나 흥미롭습니다.
                    </div>
                  </div>
                  <div>
                    (3) 프로젝트 성격에 부합하는{" "}
                    <span className="font-bold">이성-감각</span>의 적정한 비율을
                    정의합니다.
                  </div>
                  <div>
                    (4) 어느 수준까지{" "}
                    <span className="font-bold">오퍼레이터</span>로서 기능할
                    것인지, 또는 <span className="font-bold">디렉터</span>로서
                    기능할 것인지를 판단합니다.
                  </div>
                  <div>
                    <div>
                      (5) 프로젝트의 방향성과 결을 같이하는 음악을 찾아내어
                      반복하여 듣고, 최대한 많이 걸으며, 많이 바라봅니다.
                    </div>
                    <div className="h-1" />
                    <div className="text-sm md:text-tiny leading-snug ml-6">
                      : 시간이 흘러도 그려진 이미지가 흐트러지지 않고 유지되는지
                      계속 점검하고 살핍니다.
                    </div>
                    <div className="h-1" />
                    <div className="text-sm md:text-tiny leading-snug ml-6">
                      : 시간에 따라 보다 적절한 요소로 대체된 경우, 이를
                      기록하여 이를 유념하고 반영할 수 있도록 합니다.
                    </div>
                  </div>
                  <div className="h-6" />
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <div className="h-2" />
                <p className="font-hrot font-semibold sm:text-lg text-black pb-[0.8px]">
                  Phrase Hit Me Hard
                </p>
              </Accordion.Title>
              <Accordion.Content>
                <span className="md:text-lg md:w-4/5">
                  Essentially ahead of itself, it has projected itself upon its
                  potentiality-for-Being before going on to any mere
                  consideration of itself.
                  <span className="font-bold">
                    &nbsp;Being-in-the-world
                  </span>{" "}
                  has always expressed itself, and as Being alongside entities
                  encountered within-the-world, it constantly expresses itself
                  in addressing itself to the very object of its concern and
                  discussing it.
                </span>
                <div className="h-4" />
                <div className="font-hrot text-sm ml-4">― Martin Heidegger</div>
                <div className="h-6" />
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <p className="font-hrot font-semibold sm:text-lg text-black pb-[0.8px]">
                  i Walked Along
                </p>
              </Accordion.Title>
              <Accordion.Content>
                <Timeline>
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                      <div className="h-2" />
                      <Timeline.Time>March 2019 - March 2022</Timeline.Time>
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
                      <Timeline.Time>March 2011 - August 2018</Timeline.Time>
                      <Timeline.Title>
                        Bachelor&apos;s Degree in Biology
                      </Timeline.Title>
                      <Timeline.Body>Korea University</Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                </Timeline>
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

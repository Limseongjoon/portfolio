import CustomImage from "../components/CustomImage";
import Link from "next/link";
import Header from "../components/Header";

const Page = () => {
  return (
    <div className="bg-white text-black w-screen h-screen">
      <div className="fixed z-50 italic w-screen bg-transparent text-center font-hrot font-bold text-xs lg:text-sm pt-[5px] pr-[4px]">
        너의
      </div>
      <Header />
      <div className="h-7 lg:mb-[2px]" />
      <div className="bg-white text-black flex flex-col h-screen items-center">
        <div className="w-screen">
          <CustomImage
            src="/images/rhetoric_opencurating_main.jpeg"
            className="w-full"
          />
          <div className="h-6" />
          <div className="hidden md:flex px-4 md:px-10 w-full">
            <div className="flex flex-row w-full items-baseline">
              <div className="flex flex-col w-1/2">
                <div className="flex items-baseline">
                  <div className="pr-2 lg:pr-4">
                    <CustomImage
                      src="/images/rhetoric_logo.png"
                      className="w-36 h-auto"
                    />
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
                  assets of rhetoric.
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
              </div>
            </div>
            <div className="h-20" />
          </div>
          <div className="md:hidden px-4 md:px-10 -mt-1 sm:-mt-2">
            <div className="flex items-baseline">
              <div className="pr-2 lg:pr-4">
                <CustomImage
                  src="/images/rhetoric_logo.png"
                  className="w-24 h-auto"
                />
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
              message based on unique visual assets of rhetoric.
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
          </div>
          <div className="h-48 sm:h-64" />

          <div>
            <div className="md:hidden">
              <CustomImage
                src="/images/cafemoodae_main.jpeg"
                className="w-screen lg:px-4 xl:px-16"
              />
              <div className="h-6" />
              <div className="md:hidden px-4 md:px-10 -mt-1 sm:-mt-2">
                <div className="flex items-baseline">
                  <div className="pr-2 lg:pr-4">
                    <CustomImage
                      src="/images/moodae_logo.png"
                      className="w-[100px] h-auto"
                    />
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
                  life of self-care through daily practices is directly
                  connected to environment. The visual identity of DDP
                  exhibition focuses on the message based on unique visual
                  assets of rhetoric. Circle symbolizes routine and circulation,
                  and square symbolizes recovery and care. Those 2 flat and
                  basic shapes are organized to express connectivity and expand
                  into wonderful patterns.
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
                <div className="flex flex-row items-start hover:gap-1 active:gap-4">
                  <button className="font-hrot text-tiny pr-1 hover:font-semibold hover:rotate-6 active:rotate-12">
                    <Link href="http://pharosk.com">
                      <span className="underline">Posts, Reviews</span>
                    </Link>
                  </button>
                  <span>→</span>
                </div>
                <div className="h-40 sm:h-60" />
                <div className="flex flex-row">
                  <div className="grow"></div>
                  <CustomImage
                    src="/images/moodae_symbol.png"
                    className="w-5 h-auto pb-3"
                  />
                </div>
              </div>
            </div>
            <div className="hidden md:flex gap-8 lg:gap-10">
              <div className="w-7/12">
                <CustomImage
                  src="/images/cafemoodae_main.jpeg"
                  className="w-screen"
                />
              </div>
              <div className="w-5/12">
                <div className="flex flex-col items-baseline w-11/12 h-full border-t-[0.5px] border-b-[0.5px] border-black">
                  <div className="h-6" />
                  <div className="flex flex-col">
                    <div className="flex items-baseline">
                      <div className="pr-2 lg:pr-4">
                        <CustomImage
                          src="/images/moodae_logo.png"
                          className="w-36 h-auto pt-1"
                        />
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
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
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
                  <div className="flex flex-row items-start hover:gap-1 active:gap-4">
                    <button className="font-hrot text-tiny pr-1 hover:font-semibold hover:rotate-6 active:rotate-12">
                      <Link href="http://pharosk.com">
                        <span className="underline">Posts, Reviews</span>
                      </Link>
                    </button>
                    <span>→</span>
                  </div>
                  <div className="grow"></div>
                  <CustomImage
                    src="/images/moodae_symbol.png"
                    className="flex self-end w-6 h-auto pb-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:hidden border-t-[0.5px] border-black opacity-60 mx-4 lg:mx-10" />
          <div className="flex flex-col items-center">
            <CustomImage
              src="/images/inblog_console.gif"
              className="w-10/12 md:w-2/3 lg:px-4 xl:px-16 py-24 md:py-48"
            />
          </div>
          <div className="border-b-[0.5px] border-black opacity-60 mx-4 lg:mx-10" />
          <div className="h-6" />
          <div className="hidden md:flex px-4 md:px-10 w-full">
            <div className="flex flex-row w-full items-baseline">
              <div className="h-6" />
              <div className="flex flex-col w-1/2">
                <div className="flex items-center">
                  <div className="pr-2 lg:pr-4">
                    <CustomImage
                      src="/images/inblog_logo.png"
                      className="w-[110px] h-auto"
                    />
                  </div>
                  <div className="text-xs lg:text-sm pt-2">2023</div>
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
                    <Link href="http://inblog.ai">
                      <span className="underline">
                        Visit
                        <span className="font-Pridi font-medium text-lg">
                          &nbsp;inblog
                        </span>
                      </span>
                    </Link>
                  </button>
                  <span>→</span>
                </div>
              </div>
            </div>
            <div className="h-20" />
          </div>
          <div className="md:hidden px-4 md:px-10 -mt-2">
            <div className="flex items-center">
              <div className="pr-2 lg:pr-4">
                <CustomImage
                  src="/images/inblog_logo.png"
                  className="w-[86px] h-auto"
                />
              </div>
              <div className="text-xs lg:text-sm pt-2">2023</div>
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
                <Link href="http://inblog.ai">
                  <span className="underline">
                    Visit
                    <span className="font-Pridi font-medium text-lg">
                      &nbsp;inblog
                    </span>
                  </span>
                </Link>
              </button>
              <span>→</span>
            </div>
          </div>
          <div className="h-48 sm:h-64" />
        </div>

        <div>
          <CustomImage src="/images/pharos_main.png" className="w-screen" />
          <div className="h-6" />
          <div className="hidden md:flex px-4 md:px-10 w-full">
            <div className="flex flex-row w-full items-baseline">
              <div className="h-6" />
              <div className="flex flex-col w-1/2">
                <div className="flex items-center">
                  <div className="pr-2 lg:pr-4">
                    <CustomImage
                      src="/images/pharos_logo.png"
                      className="w-32 h-auto"
                    />
                  </div>
                  <div className="text-xs lg:text-sm pt-3">2023</div>
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
                <div className="flex flex-col items-start">
                  <div className="flex flex-row items-start hover:gap-1 active:gap-4">
                    <button className="font-hrot text-tiny pr-1 hover:font-semibold hover:rotate-6 active:rotate-12">
                      <Link href="/">
                        <span className="underline">See More</span>
                      </Link>
                    </button>
                    <span>→</span>
                  </div>
                  <div className="h-4" />
                  <div className="flex flex-row items-start hover:gap-1 active:gap-4">
                    <button className="font-hrot text-tiny pr-1 hover:font-semibold hover:rotate-6 active:rotate-12">
                      <Link href="http://3.35.83.107/pharosapp/templates/pharosapp/start.html">
                        <span className="underline">Digital 3D Booth</span>
                      </Link>
                    </button>
                    <span>→</span>
                  </div>
                  <div className="flex flex-row items-start hover:gap-1 active:gap-4">
                    <button className="font-hrot text-tiny pr-1 hover:font-semibold hover:rotate-6 active:rotate-12">
                      <Link href="http://pharosk.com">
                        <span className="underline">Website</span>
                      </Link>
                    </button>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-20" />
          </div>
          <div className="md:hidden px-4 md:px-10 -mt-1">
            <div className="flex items-center">
              <div className="pr-2 lg:pr-4">
                <CustomImage
                  src="/images/pharos_logo.png"
                  className="w-[82px] h-auto"
                />
              </div>
              <div className="text-xs lg:text-sm pt-1">2023</div>
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
              <div className="flex flex-row items-start hover:gap-1 active:gap-4">
                <button className="font-hrot text-tiny pr-1 hover:font-semibold hover:rotate-6 active:rotate-12">
                  <Link href="/">
                    <span className="underline">See More</span>
                  </Link>
                </button>
                <span>→</span>
              </div>
              <div className="h-4" />
              <div className="flex flex-row items-start hover:gap-1 active:gap-4">
                <button className="font-hrot text-tiny pr-1 hover:font-semibold hover:rotate-6 active:rotate-12">
                  <Link href="http://3.35.83.107/pharosapp/templates/pharosapp/start.html">
                    <span className="underline">Digital 3D Booth</span>
                  </Link>
                </button>
                <span>→</span>
              </div>
              <div className="flex flex-row items-start hover:gap-1 active:gap-4">
                <button className="font-hrot text-tiny pr-1 hover:font-semibold hover:rotate-6 active:rotate-12">
                  <Link href="http://pharosk.com">
                    <span className="underline">Website</span>
                  </Link>
                </button>
                <span>→</span>
              </div>
            </div>
          </div>
          <div className="h-48 sm:h-64" />
        </div>
        <div>
          <div className="md:hidden">
            <CustomImage
              src="/images/overrunning_main.png"
              className="w-screen lg:px-4 xl:px-16"
            />
            <div className="h-6" />
            <div className="md:hidden px-4 md:px-10 -mt-2">
              <div className="flex items-baseline">
                <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">
                  Overrunning
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
              <CustomImage
                src="/images/overrunning_main.png"
                className="w-screen"
              />
            </div>
            <div className="w-5/12">
              <div className="flex flex-col items-baseline w-11/12 h-full border-t-[0.5px] border-b-[0.5px] border-black">
                <div className="h-6" />
                <div className="flex flex-col">
                  <div className="flex items-baseline">
                    <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">
                      Overrunning
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

        <div className="bg-white text-black flex flex-col">
          <div className="bg-black">
            <div className="h-full w-screen lg:mt-64 lg:mb-64">
              <iframe
                src="https://player.vimeo.com/video/815950390?autoplay=1&loop=1&muted=1&title=0&autopause=0&background=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="h-full w-full left: -100%; top: 0%"
              ></iframe>
            </div>
            <div className="hidden md:flex px-4 md:px-10 w-full">
              <div className="flex flex-row w-full items-baseline">
                <div className="flex flex-col w-1/2">
                  <div className="flex items-baseline">
                    <div className="pr-2 lg:pr-4">
                      <CustomImage
                        src="/images/rhetoric_logo.png"
                        className="w-32 h-auto"
                      />
                    </div>
                    <div className="text-xs lg:text-sm">2023</div>
                  </div>
                  <div className="h-2" />
                  <div className="font-hrot text-xs pr-2 lg:pr-4">
                    Concept MG of Bojagi Ed.<br></br>Maison & Objet Paris
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="font-light">
                    The edition is designed as a moptif of flexible Korean
                    Bojagi which is a wrapping fabric with different patterns
                    and uses. rhetoric suggest unique lifestyle that develops
                    self-efficiency with a new daily routine. Lunch box and
                    wrapping fabric are designed to memorate Maison&Objet 2022
                    in Paris, France.
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
            <div className="md:hidden px-4 md:px-10">
              <div className="flex items-baseline">
                <div className="pr-2 lg:pr-4">
                  <CustomImage
                    src="/images/rhetoric_logo.png"
                    className="w-24 h-auto"
                  />
                </div>
                <div className="text-xs lg:text-sm">2023</div>
              </div>
              <div className="h-2" />
              <div className="font-hrot text-2xs pr-2 lg:pr-4">
                Dongdaemoon Design Plaza (DDP)<br></br>Opencurating vol.23
              </div>
              <div className="h-6" />
              <div className="font-light lg:w-1/2">
                The edition is designed as a moptif of flexible Korean Bojagi
                which is a wrapping fabric with different patterns and uses.
                rhetoric suggest unique lifestyle that develops self-efficiency
                with a new daily routine. Lunch box and wrapping fabric are
                designed to memorate Maison&Objet 2022 in Paris, France.
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
            <div className="w-full border-t-[0.5px] border-black opacity-60" />
            <div className="h-5 w-full font-light text-center text-2xs lg:text-xs text-black my-[1px]">
              Copyright © JOON. All rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

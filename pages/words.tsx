import CustomImage from "../components/CustomImage";
import Link from "next/link";
import Header from "../components/Header";

const Page = () => {
  return (
    <div className="bg-white text-black w-screen">
      <button
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="inline-block p-3 fixed bg-white text-black border-black border-[1px] rounded-full
        hover:bg-white focus:bg-white active:bg-white active:text-black transition duration-150 ease-in-out bottom-5 right-5 z-20"
        id="btn-back-to-top"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          className="w-3 h-3"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
          ></path>
        </svg>
      </button>
      <div className="fixed z-50 w-screen bg-transparent text-center font-hrot font-bold text-xs lg:text-sm pt-[5px]">
        나의
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
          <div className="hidden md:flex px-4 lg:px-10 w-full">
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
                  <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:font-semibold hover:rotate-6 active:rotate-12">
                    <Link href="/rhetoric_opencurating">
                      <span className="underline">See More</span>
                    </Link>
                    &nbsp;→
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
              <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:font-semibold hover:rotate-6 active:rotate-12">
                <Link href="/rhetoric_opencurating">
                  <span className="underline">See More</span>
                </Link>
                →
              </button>
              <div className="h-4" />
              <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:font-semibold hover:rotate-6 active:rotate-12">
                <Link href="http://3.35.83.107/pharosapp/templates/pharosapp/start.html">
                  <span className="underline">Digital 3D Booth</span>
                </Link>
                →
              </button>
              <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:font-semibold hover:rotate-6 active:rotate-12">
                <Link href="http://pharosk.com">
                  <span className="underline">Website</span>
                </Link>
                →
              </button>
            </div>
          </div>
          <div className="h-64" />
        </div>
        <div>
          <div className="h-3 sm:h-8 border-t-[0.5px] border-black opacity-60 mx-4 lg:mx-10" />
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
                <div className="flex flex-col items-start">
                  <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:font-semibold hover:rotate-6 active:rotate-12">
                    <Link href="/scooter">
                      <span className="underline">See More</span>
                    </Link>
                    →
                  </button>
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
            <div className="flex flex-col items-start">
              <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:font-semibold hover:rotate-6 active:rotate-12">
                <Link href="/scooter">
                  <span className="underline">See More</span>
                </Link>
                →
              </button>
            </div>
          </div>
          <div className="h-64" />
        </div>
        <div>
          <div className="md:hidden">
            <CustomImage
              src="/images/cafemoodae_main.jpeg"
              className="w-screen lg:px-4 xl:px-16"
            />
            <div className="h-6" />
          </div>
          <div className="hidden md:flex border-t-[0.5px] border-black opacity-60 mx-6 lg:mx-10" />
          <div className="hidden md:flex w-full">
            <div className="flex">
              <CustomImage
                src="/images/cafemoodae_main.jpeg "
                className="w-screen"
              />
            </div>
            <div className="flex">
              <div className="flex flex-col w-full items-baseline">
                <div className="h-6" />
                <div className="flex flex-col w-1/2">
                  <div className="flex items-baseline">
                    <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">
                      café Moodae
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </div>
                  <div className="h-6" />
                  <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:font-semibold hover:rotate-6 active:rotate-12">
                    <span className="underline">See More</span> →
                  </button>
                </div>
              </div>
              <div className="h-20" />
            </div>
          </div>
          <div className="md:hidden px-4 lg:px-10 -mt-2">
            <div className="flex items-baseline">
              <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">
                café Moodae
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
            <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:font-semibold hover:rotate-6 active:rotate-124">
              <span className="underline">See More</span> →
            </button>
            <div className="h-64" />
          </div>
        </div>
        <div>
          <div className="border-t-[0.5px] border-black opacity-60 mx-4 lg:mx-10" />
          <CustomImage
            src="/images/inblog_main.png"
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
                    inblog
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
                <div className="h-6" />
                <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:font-semibold hover:rotate-6 active:rotate-12">
                  <Link href="http://inblog.ai">
                    <span className="underline">
                      Visit
                      <span className="font-Pridi font-medium text-lg">
                        &nbsp;inblog
                      </span>
                    </span>
                  </Link>
                  &nbsp;→
                </button>
              </div>
            </div>
            <div className="h-20" />
          </div>
          <div className="md:hidden px-4 lg:px-10 -mt-2">
            <div className="flex items-baseline">
              <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">
                inblog
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
            <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:font-semibold hover:rotate-6 active:rotate-12">
              <Link href="http://inblog.ai">
                <span className="underline">
                  Visit
                  <span className="font-Pridi font-medium text-lg">
                    &nbsp;inblog
                  </span>
                </span>
              </Link>
              &nbsp;→
            </button>
          </div>
          <div className="h-64" />
        </div>

        <div>
          <CustomImage src="/images/pharos_main.png" className="w-screen" />
          <div className="h-6" />
          <div className="hidden md:flex px-4 lg:px-10 w-full">
            <div className="flex flex-row w-full items-baseline">
              <div className="h-6" />
              <div className="flex flex-col w-1/2">
                <div className="flex items-baseline">
                  <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">
                    Pharos Co.,Ltd.
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
                  <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:font-semibold hover:rotate-6 active:rotate-12">
                    <Link href="/">
                      <span className="underline">See More</span>
                    </Link>
                    →
                  </button>
                  <div className="h-4" />
                  <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:font-semibold hover:rotate-6 active:rotate-12">
                    <Link href="http://3.35.83.107/pharosapp/templates/pharosapp/start.html">
                      <span className="underline">Digital 3D Booth</span>
                    </Link>
                    →
                  </button>
                  <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:font-semibold hover:rotate-6 active:rotate-12">
                    <Link href="http://pharosk.com">
                      <span className="underline">Website</span>
                    </Link>
                    &nbsp;→
                  </button>
                </div>
              </div>
            </div>
            <div className="h-20" />
          </div>
          <div className="md:hidden px-4 lg:px-10 -mt-2">
            <div className="flex items-baseline">
              <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">
                Pharos Co.,Ltd.
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
            <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:font-semibold hover:rotate-6 active:rotate-12">
              <Link href="http://inblog.ai">
                <span className="underline">Website</span>
              </Link>
              &nbsp;→
            </button>
          </div>
          <div className="h-64" />
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
          </div>
          <div className="hidden md:flex border-t-[0.5px] border-black opacity-60 mx-4 lg:mx-10" />
          <div className="hidden md:flex w-full">
            <div className="flex">
              <CustomImage src="/images/font_main.jpeg " className="w-screen" />
            </div>
            <div className="flex">
              <div className="flex flex-col w-full items-baseline">
                <div className="h-6" />
                <div className="flex flex-col w-1/2">
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
                </div>
                <div className="w-1/2">
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
                  <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:font-semibold hover:rotate-6 active:rotate-12">
                    <span className="underline">See More</span> →
                  </button>
                </div>
              </div>
              <div className="h-64" />
            </div>
          </div>
          <div className="md:hidden px-4 lg:px-10 -mt-2">
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
              rhetoric delivers the message through a lunch box kit that a life
              of self-care through daily practices is directly connected to
              environment. The visual identity of DDP exhibition focuses on the
              message based on unique visual assets of rhetoric. Circle
              symbolizes routine and circulation, and square symbolizes recovery
              and care. Those 2 flat and basic shapes are organized to express
              connectivity and expand into wonderful patterns.
            </div>
            <div className="h-6" />
            <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:font-semibold hover:rotate-6 active:rotate-12">
              <span className="underline">See More</span> →
            </button>
          </div>
          <div className="h-64" />
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
            <div className="hidden md:flex px-4 lg:px-10 w-full">
              <div className="flex flex-row w-full items-baseline">
                <div className="flex flex-col w-1/2">
                  <div className="flex items-baseline">
                    <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">
                      rhetoric
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
                  <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:font-semibold hover:rotate-6 active:rotate-12">
                    <span className="underline">See More</span> →
                  </button>
                </div>
              </div>
              <div className="h-20" />
            </div>
            <div className="md:hidden px-4 lg:px-10">
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
                The edition is designed as a moptif of flexible Korean Bojagi
                which is a wrapping fabric with different patterns and uses.
                rhetoric suggest unique lifestyle that develops self-efficiency
                with a new daily routine. Lunch box and wrapping fabric are
                designed to memorate Maison&Objet 2022 in Paris, France.
              </div>
              <div className="h-6" />
              <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:font-semibold hover:rotate-6 active:rotate-12">
                <span className="underline">See More</span> →
              </button>
            </div>
            <div className="h-64" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
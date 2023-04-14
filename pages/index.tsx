import CustomImage from "../components/CustomImage";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-white text-black">
      <div className="fixed font-hrot z-50 w-screen px-3 sm:px-4 lg:px-5">
        <div className="h-1" />
        <div className="flex justify-between">
          <Link
            href="/about"
            className="flex text-xs lg:text-sm text-black hover:-rotate-6 active:-rotate-12"
          >
            ← about
          </Link>
          <Link
            href="/"
            className="flex font-bold text-xs lg:text-sm text-black hover:scale-95 pt-[1px] md:pt-0"
          >
            WORKS
          </Link>
          <Link
            href="/contact"
            className="flex text-xs lg:text-sm text-black hover:rotate-6 active:rotate-12"
          >
            contact →
          </Link>
        </div>
      </div>
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
                  <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:pl-2 active:pl-4">
                    <Link href="/rhetoric_opencurating">
                      <span className="underline">See More</span>
                    </Link>
                    →
                  </button>
                  <div className="h-4" />
                  <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:pl-2 active:pl-4">
                    <Link href="http://3.35.83.107/pharosapp/templates/pharosapp/start.html">
                      <span className="underline">Digital 3D Booth</span>
                    </Link>
                    →
                  </button>
                  <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:pl-2 active:pl-4">
                    <a href="http://pharosk.com">
                      <span className="underline">Website</span>
                    </a>{" "}
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
              <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:pl-2 active:pl-4">
                <Link href="/rhetoric_opencurating">
                  <span className="underline">See More</span>
                </Link>
                →
              </button>
              <div className="h-4" />
              <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:pl-2 active:pl-4">
                <a href="http://3.35.83.107/pharosapp/templates/pharosapp/start.html">
                  <span className="underline">Digital 3D Booth</span>
                </a>{" "}
                →
              </button>
              <button className="font-hrot text-tiny pr-2 lg:pr-4 hover:pl-2 active:pl-4">
                <a href="http://pharosk.com">
                  <span className="underline">Website</span>
                </a>{" "}
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
                <button className="font-hrot text-tiny pr-2 lg:pr-4  hover:pl-2 active:pl-4">
                  <span className="underline">See More</span> →
                </button>
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
            <button className="font-hrot text-tiny pr-2 lg:pr-4  hover:pl-2 active:pl-4">
              <span className="underline">See More</span> →
            </button>
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
                  <button className="font-hrot text-tiny pr-2 lg:pr-4  hover:pl-2 active:pl-4">
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
            <button className="font-hrot text-tiny pr-2 lg:pr-4  hover:pl-2 active:pl-4">
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
                <button className="font-hrot text-tiny pr-2 lg:pr-4  hover:pl-2 active:pl-4">
                  <span className="underline">See More</span> →
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
            <button className="font-hrot text-tiny pr-2 lg:pr-4  hover:pl-2 active:pl-4">
              <span className="underline">See More</span> →
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
                <button className="font-hrot text-tiny pr-2 lg:pr-4  hover:pl-2 active:pl-4">
                  <span className="underline">See More</span> →
                </button>
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
            <button className="font-hrot text-tiny pr-2 lg:pr-4  hover:pl-2 active:pl-4">
              <span className="underline">See More</span> →
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
                  <button className="font-hrot text-tiny pr-2 lg:pr-4  hover:pl-2 active:pl-4">
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
            <button className="font-hrot text-tiny pr-2 lg:pr-4  hover:pl-2 active:pl-4">
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
                  <button className="font-hrot text-tiny pr-2 lg:pr-4  hover:pl-2 active:pl-4">
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
              <button className="font-hrot text-tiny pr-2 lg:pr-4  hover:pl-2 active:pl-4">
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

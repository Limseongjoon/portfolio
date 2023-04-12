import CustomImage from "../components/CustomImage";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-white text-black">
      <div className="fixed z-50 w-screen px-6 lg:px-10">
        <div className="h-3" />
        <div className="flex items-start">
          <div className="-mt-1">
            <Link
              href="/"
              className="font-hrot text-lg md:text-xl tracking-wider text-black"
            >
              JOON
            </Link>
          </div>
          <div className="grow" />
          <div className="flex items-end gap-6 md:gap-10 lg:gap-12">
            <Link href="/" className="font-hrot text-black text-2xs lg:text-xs">
              WORKS
            </Link>
            <Link
              href="/about"
              className="font-hrot text-black text-2xs lg:text-xs"
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="font-hrot text-black text-2xs lg:text-xs"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
      <div className="h-10 md:h-14 lg:h-12" />
      <div className="bg-white text-black flex flex-col h-screen items-center">
        <div className="w-screen">
          <CustomImage src="/images/rhetoric_main.jpeg" className="w-full" />
          <div className="h-6" />
          <div className="hidden md:flex px-6 lg:px-10 w-full">
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
                <div className="font-hrot text-tiny pr-2 lg:pr-4 underline">
                  See More →
                </div>
              </div>
            </div>
            <div className="h-20" />
          </div>
          <div className="md:hidden px-6 lg:px-10 -mt-2">
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
            <div className="font-hrot text-tiny pr-2 lg:pr-4 underline">
              See More →
            </div>
          </div>
          <div className="h-64" />
        </div>
        <div className="bg-white text-black flex flex-col items-center -pt-64">
          <div className="bg-black">
            <div className="h-full w-screen lg:mt-64 lg:mb-64">
              <iframe
                src="https://player.vimeo.com/video/815950390?autoplay=1&loop=1&muted=1&title=0&autopause=0&background=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="h-full w-full bg-video__content"
              ></iframe>
            </div>
            <div className="hidden md:flex px-6 lg:px-10 w-full">
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
                  <div className="font-hrot text-tiny pr-2 lg:pr-4 underline">
                    See More →
                  </div>
                </div>
              </div>
              <div className="h-20" />
            </div>
            <div className="md:hidden px-6 lg:px-10">
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
              <div className="font-hrot text-tiny pr-2 lg:pr-4 underline">
                See More →
              </div>
            </div>
            <div className="h-64" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

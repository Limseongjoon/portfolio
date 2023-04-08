import CustomImage from '../components/CustomImage';
import Header from '../components/Header';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="bg-white text-black">
      <Header />
      <div className="bg-white text-black flex flex-col h-screen items-center pt-14 md:pt-16 lg:pt-20">
      <div>
          <CustomImage src="/images/rhetoric_main.jpeg" className="w-screen lg:px-12" />
          <div className="h-8 lg:h-10" />
          <div className="px-6 lg:px-12">
            <div className="flex items-baseline">
              <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">rhetoric</div>
              <div className="text-xs lg:text-sm">2023</div>
            </div>
            <div className="h-3" />
            <div className="font-light lg:w-1/2">Based in Seoul, South Korea. consulting firm that started in 2015. It consists of people who are deeply interested in the impact on our culture and society through our responsible design. design consulting firm.</div>
            <div className="h-6" />
            <div className="font-hrot text-tiny pr-2 lg:pr-4 underline">See More →</div>
            <div className="h-20" />
          </div>
        </div>
      <div>
          <CustomImage src="/images/inblog_main.png" className="w-screen lg:px-12" />
          <div className="px-6 lg:px-12">
            <div className="divide-y divide-black opacity-40">
                <div></div>
                <div></div>
            </div>
            <div className="h-8 lg:h-10" />
            <div className="flex items-baseline">
              <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">inblog</div>
              <div className="text-xs lg:text-sm">2023</div>
            </div>
            <div className="h-3" />
            <div className="font-light">Based in Seoul, South Korea. consulting firm that started in 2015. It consists of people who are deeply interested in the impact on our culture and society through our responsible design. design consulting firm.</div>
            <div className="h-6" />
            <div className="font-hrot text-tiny pr-2 lg:pr-4 underline">See More →</div>
            <div className="h-20" />
          </div>
        </div>
        <div>
          <CustomImage src="/images/pharos_main.png" className="w-screen lg:px-12 " />
          <div className="h-8 lg:h-10" />
          <div className="px-6 lg:px-12">
            <div className="flex items-baseline">
              <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">PHAROS</div>
              <div className="text-xs lg:text-sm">2022</div>
            </div>
            <div className="h-3" />
            <div className="font-light">PHAROS Co., Ltd. consulting firm that started in 2015. It consists of people who are deeply interested in the impact on our culture and society through our responsible design. design consulting firm.</div>
            <div className="h-6" />
            <div className="font-hrot text-tiny pr-2 lg:pr-4 underline">See More →</div>
            <div className="h-1" />
            <Link
              href="http://3.35.83.107/pharosapp/templates/pharosapp/start.html"
              target="_blank"
              className="font-hrot text-tiny pr-2 lg:pr-4 underline"
            >
              Digital Booth →
            </Link>
            <div className="h-20" />
            <div className="z-1 divide-y divide-black opacity-40">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-12 lg:h-16" />
          <CustomImage src="/images/scooter_main.jpeg" className="w-screen lg:px-12" />
          <div className="h-8 lg:h-10" />
          <div className="px-6 lg:px-12">
            <div className="flex items-baseline">
              <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">SCOOTER</div>
              <div className="text-xs lg:text-sm">2021</div>
            </div>
            <div className="h-3" />
            <div className="font-light">Based in Seoul, South Korea. consulting firm that started in 2015. It consists of people who are deeply interested in the impact on our culture and society through our responsible design. design consulting firm.</div>
            <div className="h-6" />
            <div className="font-hrot text-tiny pr-2 lg:pr-4 underline">See More →</div>
            <div className="h-20" />
            <div className="divide-y divide-black opacity-40">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-4 lg:h-6" />
          <CustomImage src="/images/wherewework_main.png" className="w-screen lg:px-12" />
          <div className="h-8 lg:h-10" />
          <div className="px-6 lg:px-12">
            <div className="flex items-baseline">
              <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">WHEREWEWORK</div>
              <div className="text-xs lg:text-sm">2023</div>
            </div>
            <div className="h-3" />
            <div className="font-light">Based in Seoul, South Korea. consulting firm that started in 2015. It consists of people who are deeply interested in the impact on our culture and society through our responsible design. design consulting firm.</div>
            <div className="h-6" />
            <div className="font-hrot text-tiny pr-2 lg:pr-4 underline">See More →</div>
            <div className="h-20" />
          </div>
        </div>
        <div>
          <CustomImage src="/images/overrunning_main.png" className="w-screen lg:px-12" />
          <div className="h-8 lg:h-10" />
          <div className="px-6 lg:px-12">
            <div className="flex items-baseline">
              <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">OVERRUNNING</div>
              <div className="text-xs lg:text-sm">2022</div>
            </div>
            <div className="h-3" />
            <div className="font-light">Based in Seoul, South Korea. consulting firm that started in 2015. It consists of people who are deeply interested in the impact on our culture and society through our responsible design. design consulting firm.</div>
            <div className="h-6" />
            <div className="font-hrot text-tiny pr-2 lg:pr-4 underline">See More →</div>
            <div className="h-20" />
          </div>
        </div>
        <div>
          <CustomImage src="/images/cafemoodae_main.jpeg" className="w-screen lg:px-12" />
          <div className="h-8 lg:h-10" />
          <div className="px-6 lg:px-12">
            <div className="flex items-baseline">
              <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">Café MOODAE</div>
              <div className="text-xs lg:text-sm">2022</div>
            </div>
            <div className="h-3" />
            <div className="font-light">Based in Seoul, South Korea. consulting firm that started in 2015. It consists of people who are deeply interested in the impact on our culture and society through our responsible design. design consulting firm.</div>
            <div className="h-6" />
            <div className="font-hrot text-tiny pr-2 lg:pr-4 underline">See More →</div>
            <div className="h-20" />
            <div className="divide-y divide-black opacity-40">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div>
        <div className="h-4 lg:h-6" />
          <CustomImage src="/images/font_main.jpeg" className="w-screen lg:px-12" />
          <div className="px-6 lg:px-12">
            <div className="divide-y divide-black opacity-40">
                <div></div>
                <div></div>
            </div>
            <div className="h-8 lg:h-10" />
            <div className="flex items-baseline">
              <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">KOREAN TYPEFACE</div>
              <div className="text-xs lg:text-sm">2021</div>
            </div>
            <div className="h-3" />
            <div className="font-light">Based in Seoul, South Korea. consulting firm that started in 2015. It consists of people who are deeply interested in the impact on our culture and society through our responsible design. design consulting firm.</div>
            <div className="h-6" />
            <div className="font-hrot text-tiny pr-2 lg:pr-4 underline">See More →</div>
            <div className="h-20" />
          </div>
        </div>
        <div>
          <CustomImage src="/images/rhetoricandkim_main.png" className="w-screen lg:px-12" />
          <div className="h-8 lg:h-10" />
          <div className="px-6 lg:px-12">
            <div className="flex items-baseline">
              <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">rhetoric</div>
              <div className="text-xs lg:text-sm">2023</div>
            </div>
            <div className="h-3" />
            <div className="font-light">Based in Seoul, South Korea. consulting firm that started in 2015. It consists of people who are deeply interested in the impact on our culture and society through our responsible design. design consulting firm.</div>
            <div className="h-6" />
            <div className="font-hrot text-tiny pr-2 lg:pr-4 underline">See More →</div>
            <div className="h-20" />
          </div>
        </div>
        <div>
          <CustomImage src="/images/rhetoricfrance_main.png" className="w-screen lg:px-12" />
          <div className="h-8 lg:h-10" />
          <div className="px-6 lg:px-12">
            <div className="flex items-baseline">
              <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">rhetoric</div>
              <div className="text-xs lg:text-sm">2023</div>
            </div>
            <div className="h-3" />
            <div className="font-light">Based in Seoul, South Korea. consulting firm that started in 2015. It consists of people who are deeply interested in the impact on our culture and society through our responsible design. design consulting firm.</div>
            <div className="h-6" />
            <div className="font-hrot text-tiny pr-2 lg:pr-4 underline">See More →</div>
            <div className="h-20" />
            <div className="divide-y divide-black opacity-40">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-4 lg:h-6" />
          <CustomImage src="/images/illustration_main.png" className="w-screen lg:px-12" />
          <div className="px-6 lg:px-12">
          <div className="divide-y divide-black opacity-40">
              <div></div>
              <div></div>
            </div>
            <div className="h-8 lg:h-10" />
            <div className="flex items-baseline">
              <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">DO NOT DISTURB ME</div>
              <div className="text-xs lg:text-sm">2023</div>
            </div>
            <div className="h-3" />
            <div className="font-light">Based in Seoul, South Korea. consulting firm that started in 2015. It consists of people who are deeply interested in the impact on our culture and society through our responsible design. design consulting firm.</div>
            <div className="h-6" />
            <div className="font-hrot text-tiny pr-2 lg:pr-4 underline">See More →</div>
            <div className="h-20" />
          </div>
        </div>
        <div>
          <CustomImage src="/images/photo_main.png" className="w-screen lg:px-12" />
          <div className="px-6 lg:px-12">
            <div className="h-8 lg:h-10" />
            <div className="flex items-baseline">
              <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">PHOTOs</div>
              <div className="text-xs lg:text-sm">2023</div>
            </div>
            <div className="h-3" />
            <div className="font-light">Based in Seoul, South Korea. consulting firm that started in 2015. It consists of people who are deeply interested in the impact on our culture and society through our responsible design. design consulting firm.</div>
            <div className="h-6" />
            <div className="font-hrot text-tiny pr-2 lg:pr-4 underline">See More →</div>
            <div className="h-20" />
            <div className="divide-y divide-black opacity-40">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="h-36" />
        <div className="h-12 text-center text-2xs lg:text-xs">
          Copyright © IM SEONGJOON. All rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Page;
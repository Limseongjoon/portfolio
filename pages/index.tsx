import CustomImage from '../components/CustomImage';
import Header from '../components/Header';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen items-center pt-14 md:pt-16 lg:pt-20">
        <div>
          <CustomImage src="/images/pharos_main.png" className="w-screen lg:px-12 " />
          <div className="h-8 lg:h-10" />
          <div className="px-6 lg:px-12">
            <div className="flex items-baseline">
              <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">PHAROS</div>
              <div className="text-xs lg:text-sm">2022</div>
            </div>
            <div className="h-3" />
            <div className="font-light">Based in Seoul, South Korea. consulting firm that started in 2015. It consists of people who are deeply interested in the impact on our culture and society through our responsible design. design consulting firm.</div>
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
        <div className="h-16 lg:h-24" />
        <div className="w-full h-[120px] lg:h-[240px] text-center">
          <div className="text-xs md:text-sm lg:text-base">
            Copyright © IM SEONGJOON. All rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
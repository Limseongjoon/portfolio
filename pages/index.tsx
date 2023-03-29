import CustomImage from '../components/CustomImage';
import Header from '../components/Header';

const Page = () => {
  return (
    <div className="flex flex-col items-center w-screen max-h-fit bg-white text-29xl font-pretendard">
      <Header />
      <div className="h-16 md:h-20 lg:h-24"></div>
      <CustomImage src="/images/pharos_main.png" className="w-screen lg:px-12 h-auto" />
      <div className="h-16 lg:h-24"></div>
      <div className="w-full h-[120px] lg:h-[240px] text-center">
        <div className="text-xs md:text-sm lg:text-base">
          Copyright © IM SEONGJOON. All rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Page;
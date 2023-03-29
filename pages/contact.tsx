import Header from '../components/Header';

const Page = () => {
  return (
    <div className="flex flex-col items-center w-screen max-h-fit bg-white text-29xl font-pretendard">
      <Header />
      <div className="h-48 lg:h-64"></div>
      <div className="text-center text-base font-light sm:text-lg sm:leading-7 tracking-wide">
        <div className="flex sm:hidden leading-5 py-2">
          아래 메일주소로 연락을 주시면<br></br> 성심껏 상담을 도와드리겠습니다.
        </div>
        <div className="hidden sm:flex sm:text-lg">
          아래 메일주소로 연락을 주시면 성심껏 상담을 도와드리겠습니다.
        </div>
      </div>
      <div className="h-4" />
      <div className="max-w-xl w-full text-center">
      2023wwwstartup@gmail.com
      </div>
      <div className="h-96 lg:h-72"></div>
      <div className="w-full h-[120px] lg:h-[240px] text-center">
        <div className="text-xs md:text-sm lg:text-base">
          Copyright © IM SEONGJOON. All rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Page;

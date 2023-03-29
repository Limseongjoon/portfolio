import CustomImage from '../components/CustomImage';
import Header from '../components/Header';

const Page = () => {
  return (
    <div className="flex flex-col items-center w-screen max-h-fit bg-white text-29xl font-pretendard">
      <Header />
      <div className="h-64"></div>
      <CustomImage src="/images/logo.png" className="w-64 pb-6 mr-5"/>
      <div className="h-16 lg:h-24"></div>
      <div className="w-full h-[120px] lg:h-[240px] flex flex-col items-center justify-center gap-4 lg:gap-10 bg-black text-white text-center">
        <div className="w-full text-base lg:text-10xl font-bold tracking-wider">
          WHERE WE WORK
        </div>
        <div className="text-6xs lg:text-base font-regular">
          © WWW. ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  );
};

export default Page;
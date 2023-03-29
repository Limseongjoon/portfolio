import CustomImage from '../components/CustomImage';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="fixed z-5 w-screen px-10 lg:px-12 bg-white">
      <div className="h-8 lg:h-10"></div>
      <div className="flex">
        <Link href="/">
          <CustomImage src="/images/logo_joon.png" className="h-5 lg:h-6 w-auto" />
        </Link>
        <div className="grow"></div>
        <div className="flex items-end gap-4 lg:gap-8">
          <Link
            href="/#"
            className="text-sm lg:text-base"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm lg:text-base"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="h-2"></div>
    </div>
  );
};

export default Page;

import CustomImage from '../components/CustomImage';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="fixed z-5 w-screen px-6 lg:px-12">
      <div className="h-5 md:h-6 lg:h-8"></div>
      <div className="flex items-start">
        <Link href="/">
          <CustomImage src="/images/logo_joon.png" className="h-4 md:h-5 lg:h-6 w-auto" />
        </Link>
        <div className="grow"></div>
        <div className="flex items-end gap-6 lg:gap-12 lg:-my-1">
          <Link
            href="/#"
            className="font-hrot text-2xs lg:text-sm"
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className="font-hrot text-2xs lg:text-sm"
          >
            CONTACT
          </Link>
        </div>
      </div>
      <div className="h-2"></div>
    </div>
  );
};

export default Page;

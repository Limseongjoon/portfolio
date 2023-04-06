import CustomImage from '../components/CustomImage';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="fixed z-50 w-screen px-6 lg:px-12 bg-transparent">
      <div className="h-5 md:h-6 lg:h-8"></div>
      <div className="flex items-start -my-1">
        <Link href="/">
          <CustomImage src="/images/logo_joon_black.png" className="h-3 md:h-4 lg:h-5 w-auto" />
        </Link>
        <div className="grow"></div>
        <div className="flex items-end gap-6 md:gap-10 lg:gap-12 -my-[4px] lg:-my-2">
          <Link
            href="/about"
            className="font-hrot text-2xs lg:text-xs"
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className="font-hrot text-2xs lg:text-xs"
          >
            CONTACT
          </Link>
        </div>
      </div>
      <div className="h-2"></div>
    </div>
  );
};

export default Header;

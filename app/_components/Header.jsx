import Link from "next/link";
import { Button } from ".";
import { FaArrowRightLong, FaAngleDown } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 border-b">
      <div className="flex items-center">
        <Link href="/" className="text-3xl font-bold text-purple">
          ShopDigest
        </Link>
        <div class="border-l border-gray-300 h-7 mx-4"></div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-lg font-semibold text-secondaryGrayDark"
          >
            Shopify
          </Link>

          <IoMdArrowDropdown className="text-gray-500" size={20} />
        </div>
      </div>

      {/* Center: Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-lg font-semibold text-secondaryGrayDark"
          >
            Apps
          </Link>
          <FaAngleDown className="text-gray-500" />
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-lg font-semibold text-secondaryGrayDark"
          >
            Themes
          </Link>
          <FaAngleDown className="text-gray-500" />
        </div>

        <Link href="/" className="text-lg font-semibold text-primaryGray">
          Developers
        </Link>
        <Link href="/" className="text-lg font-semibold text-primaryGray">
          Companies
        </Link>
        <Link href="/" className="text-lg font-semibold text-primaryGray">
          Jobs
        </Link>
      </nav>

      {/* Right Side: Buttons */}
      <div className="lg:flex space-x-4 hidden">
        <Button
          title="Login"
          className="border border-purple px-5 py-2 rounded-lg text-purple"
          textStyle='font-bold gap-2 flex items-center'
        />
        <Button
          title="Add Post"
          className="border bg-purple px-5 py-2 rounded-lg text-white"
          icon={<FaArrowRightLong />}
          textStyle='font-bold gap-2 flex items-center'

        />
      </div>
      <div className="lg:hidden flex">
        <RxHamburgerMenu size={30} />
      </div>
    </header>
  );
}

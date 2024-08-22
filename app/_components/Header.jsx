import Link from "next/link";
import { Button, Dropdown, HamburgerMenu } from ".";
import { FaArrowRightLong, FaAngleDown } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import { dropdownData } from "../data";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center py-4 border-b sticky top-0 bg-white">
     <div className="flex items-center">
        <Link href="/" className="text-3xl font-bold text-purple">
          ShopDigest
        </Link>
        <div className="border-l border-gray-300 h-7 mx-4"></div>

      
        <div className="lg:flex hidden items-center gap-2 cursor-pointer relative group ">
          <Link
            href="/"
            className="text-lg font-semibold text-secondaryGrayDark"
          >
            Shopify
          </Link>
          <IoMdArrowDropdown className="text-gray-500 group-hover:rotate-180" size={20} />
         
          <Dropdown className="group-hover:block hidden" items={dropdownData.shopify}/>
     
       
        </div>
      </div>

      {/* Center: Navigation */}
      <nav className="hidden lg:flex items-center space-x-8 ">
        <div className="flex items-center gap-2 relative group">
          <Link
            href="/"
            className="text-lg font-semibold text-secondaryGrayDark"
          >
            Apps
          </Link>
          <FaAngleDown className="text-gray-500 group-hover:rotate-180" />
          <Dropdown className="group-hover:block hidden" items={dropdownData.apps}/>

        </div>

        <div className="flex items-center gap-2 group relative">
          <Link
            href="/"
            className="text-lg font-semibold text-secondaryGrayDark"
          >
            Themes
          </Link>
          <FaAngleDown className="text-gray-500 group-hover:rotate-180" />
          <Dropdown className="group-hover:block hidden" items={dropdownData.apps}/>

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
      <div className="lg:hidden flex z-[9999]">
        {isMenuOpen ? <IoMdClose size={30}  onClick={handleMenuToggle}/>:  <RxHamburgerMenu size={30} onClick={handleMenuToggle}  />
}
     
      </div>
      {isMenuOpen && (
        <HamburgerMenu isMenuOpen={isMenuOpen}/>
     
      )}
    </header>
  );
}

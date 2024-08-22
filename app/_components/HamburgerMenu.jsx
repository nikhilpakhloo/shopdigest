import Link from 'next/link'
import React from 'react'

export default function HamburgerMenu() {
  return (
    <div className="lg:hidden fixed top-0 left-0 w-full bg-white shadow-lg border-b pt-5 ">
    <nav className="flex flex-col p-4 space-y-2">
      <Link href="/" className="text-lg font-semibold text-secondaryGrayDark">
        Shopify
      </Link>
      <Link href="/" className="text-lg font-semibold text-secondaryGrayDark">
        Apps
      </Link>
      <Link href="/" className="text-lg font-semibold text-secondaryGrayDark">
        Themes
      </Link>
      <Link href="/" className="text-lg font-semibold text-secondaryGrayDark">
        Developers
      </Link>
      <Link href="/" className="text-lg font-semibold text-secondaryGrayDark">
        Companies
      </Link>
      <Link href="/" className="text-lg font-semibold text-secondaryGrayDark">
        Jobs
      </Link>
    </nav>
  </div>
  )
}

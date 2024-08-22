import Link from "next/link";
import React from "react";
import { GoTriangleRight } from "react-icons/go";

const Dropdown = ({ items, className }) => {
  return (
    <div
      className={`w-auto  h-auto bg-white absolute top-8 -right-5 border shadow-lg rounded-md ${className}`}
    >
      {items.map((item) => (
        <>
          <Link
            key={item.id}
            href={item.href}
            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 text-nowrap"
          >
            <span> {item.label} </span>
            <GoTriangleRight size={20} />
          </Link>
        </>
      ))}
    </div>
  );
};

export default Dropdown;

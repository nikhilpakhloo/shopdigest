"use client";
import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function Pagination({ totalLength }) {
  const itemsPerPage = 8; 
  const [current, setCurrent] = useState(1);

  const totalPages = Math.ceil(totalLength / itemsPerPage);

  const handlePrevious = () => {
    if (current > 1) {
      setCurrent(current - 1);
    }
  };

  const handleNext = () => {
    if (current < totalPages) {
      setCurrent(current + 1);
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrent(page);
    }
  };

  return (
    <div className="lg:h-16 rounded-md flex items-center justify-between lg:gap-x-40 border px-6">
      <div className="lg:flex hidden">
        <p className="text-secondaryGrayDark font-medium">
          Showing <span className="text-primaryGray text-lg font-semibold">
            {(current - 1) * itemsPerPage + 1} - {Math.min(current * itemsPerPage, totalLength)}
          </span> of <span className="text-primaryGray text-lg font-semibold">{totalLength}</span>
        </p>
      </div>

      <div className="border rounded-md lg:flex hidden">
        <button
          className={`border-r px-5 py-2 w-28 ${current === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handlePrevious}
          disabled={current === 1}
        >
          Previous
        </button>

        <button
          className={`px-5 py-2 w-28 ${current === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleNext}
          disabled={current === totalPages}
        >
          Next
        </button>
      </div>

      {/* Page Numbers */}
      <div className="flex items-center">
        <button
          className="px-4 h-10 border rounded-tl-lg rounded-bl-lg"
          onClick={() => handlePageChange(current - 1)}
          disabled={current === 1}
        >
          <MdKeyboardArrowLeft size={20} />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`w-10 h-10 border ${current === index + 1 ? 'border-primaryblue border-r-0' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-4 h-10 border rounded-tr-lg rounded-br-lg"
          onClick={() => handlePageChange(current + 1)}
          disabled={current === totalPages}
        >
          <MdOutlineKeyboardArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

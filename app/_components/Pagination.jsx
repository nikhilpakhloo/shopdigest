import React from "react";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Pagination({ currentPage, totalPages, onPageChange, itemsPerPage, totalItems }) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);
 

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className="lg:h-16 rounded-md flex items-center justify-between lg:gap-x-40 border px-6">
       <div className="lg:flex hidden">
      <p className="text-secondaryGrayDark font-medium">
      Showing <span className="text-primaryGray text-lg font-semibold">{startItem}-{endItem}</span> of <span className="text-primaryGray text-lg font-semibold">{totalItems}</span>
      </p>
    </div>
      
      <div className="border rounded-md lg:flex hidden">
        <button
          className={`border-r px-5 py-2 w-28 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <button
          className={`px-5 py-2 w-28 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Page Numbers */}
      <div className="flex items-center">
        <button
          className="px-4 h-10 border rounded-tl-lg rounded-bl-lg"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          <MdKeyboardArrowLeft size={20} />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`w-10 h-10 border ${currentPage === index + 1 ? 'border-primaryblue border-r-0' : ''}`}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-4 h-10 border rounded-tr-lg rounded-br-lg"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          <MdOutlineKeyboardArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

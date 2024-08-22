import React from "react";

export default function Loader() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-4">
      {/* header */}
      <div className="flex justify-between items-center py-4 border-b sticky top-0 animate-pulse">
        <div className="flex space-x-4">
          <div className="w-24 h-4 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="w-24 h-4 bg-gray-200 rounded-md animate-pulse"></div>
        </div>
        <div className="flex space-x-4">
          <div className="w-24 h-4 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="w-24 h-4 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="w-24 h-4 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="w-24 h-4 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="w-24 h-4 bg-gray-200 rounded-md animate-pulse"></div>
        </div>
        <div className="flex space-x-4">
        <div className="w-24 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
        <div className="w-24 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>

      {/* headings */}

      <div className="flex flex-col space-y-4">
        <div className="bg-gray-200 w-1/2 h-10 animate-pulse"></div>
        <div className="flex justify-between">
        <div className="bg-gray-200 w-3/4 h-5 animate-pulse"></div>
        <div className="bg-gray-200 w-20 h-5 animate-pulse"></div>

        </div>


      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 mx-auto place-items-center px-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 border rounded-lg p-4 shadow-sm max-w-xs w-[290px] h-[300px] flex flex-col animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
}

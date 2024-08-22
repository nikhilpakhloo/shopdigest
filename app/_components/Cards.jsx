import Image from 'next/image';
import React from 'react';
import { BiSolidRightArrowAlt } from "react-icons/bi";

export default function Cards({ product }) {
  console.log(product);
  
  const getTruncatedTitle = (title) => {
    // Split the title into words
    const words = title.split(' ');
    // Take the first three words and join them
    const firstThreeWords = words.slice(0, 3).join(' ');
    // Truncate to 19 characters
    return firstThreeWords.length > 19 ? firstThreeWords.slice(0, 19) + '...' : firstThreeWords;
  };

  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm max-w-xs w-[290px] h-[300px] flex flex-col">
    
      
      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 truncate">
        {getTruncatedTitle(product.title)}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 mt-2 line-clamp-4 overflow-hidden">
        {product.description}
      </p>
      
      {/* Icons */}
      <div className="flex items-center space-x-2 mt-auto">
        <Image src={product.image} alt='Icon' className='w-6 h-6' width={100} height={100} />
        <Image src={product.image} alt='Icon' className='w-6 h-6' width={100} height={100} />
        <Image src={product.image} alt='Icon' className='w-6 h-6' width={100} height={100} />
    
      </div>
      
      <div className='py-3 '>
        <hr />
      </div>
      
      <div className='flex justify-between items-center '>
        <div className="text-green font-medium text-md">
          {product?.rating?.count} Pieces
        </div>
        
        <button className="flex items-center text-white space-x-2 bg-black rounded-full px-3 py-1">
          <span className='text-sm'>Explore more</span>
          <BiSolidRightArrowAlt color='white' />
        </button>
      </div>
    </div>
  );
}

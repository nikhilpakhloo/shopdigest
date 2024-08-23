import { Button, Header } from '@/app/_components';
import { getDataById } from '@/app/lib/fetchProducts';

import Image from 'next/image';
import React from 'react';

export default async function Page({ params }) {
  const ItemId = params.slug;
  const data = await getDataById(ItemId);
  const { title, price, description, category, image, rating, id } = data;

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6 bg-gray-50">
      <Header />

      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row justify-center items-center mt-10 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row w-full" key={id}>
          <div className="md:w-1/2 p-4 flex items-center justify-center">
            <Image
              src={image}
              alt={`${title} image`}
              width={400} 
              height={400}
              className="object-fit w-full h-full rounded-md"
              
              style={{ maxWidth: '400px', maxHeight: '400px' }} 
            />
          </div>

          <div className="md:w-1/2 p-4 flex flex-col justify-center gap-4">
            <h1 className="text-xl font-semibold text-gray-900 mb-2 truncate">{title}</h1>
            <p className="text-gray-700 mb-2 text-sm leading-relaxed truncate">{description}</p>
            <span className="text-xs text-gray-500 uppercase font-medium">{category}</span>
            <div className="text-center mt-3">
              <span className="block text-lg font-semibold text-gray-800">${price}</span>
              <div className="flex items-center justify-center mt-1">
                <span className="text-yellow-500 text-lg flex items-center">
                  {rating.rate}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15l-5.878 3.09 1.12-6.514L0 6.267l6.82-.992L10 0l3.18 5.275 6.82.992-4.242 3.576 1.12 6.514L10 15z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-gray-600 text-xs ml-1">{rating.count} Pieces</span>
              </div>
            </div>
           
            <Button className={`mt-3 py-1 px-3 bg-black text-white rounded-md shadow-sm hover:bg-gray-800 transition duration-300`} title={`Coming soon...`}/>
          </div>
        </div>
      </div>
    </div>
  );
}

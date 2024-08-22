"use client";
import Link from "next/link";
import { Cards, Header, Loader, Pagination } from "./_components";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";

export default function Home() {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const {
    data: products,
    loading,
    error,
  } = useFetch(process.env.NEXT_PUBLIC_API_URL);
  const totalItems = products ? products.length : 0;

  console.log(products);
  const totalPages = products ? Math.ceil(products.length / itemsPerPage) : 0;

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products
    ? products.slice(indexOfFirstProduct, indexOfLastProduct)
    : [];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="flex justify-center  h-screen">
        <Loader/>
        
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-red-500">
          Failed to load products: {error}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <Header />
     

        <div className="flex flex-col py-4 space-y-4 px-4">
          <div>
            <h1 className="text-3xl font-semibold text-primaryGray">
              Top shopify collections
            </h1>
          </div>
          <div className="lg:flex justify-between">
            <div>
              <p className="text-secondaryGrayDark">
                We use an agile approach to test assumptions and connect with
                the needs of your audience early and often.
              </p>
            </div>
            <div>
              <Link href="/" className="text-primaryblue">
                See all
              </Link>
            </div>
          </div>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 mx-auto place-items-center px-4 ">
          {currentProducts.map((product) => (
            <Cards key={product.id} product={product} />
          ))}
        </div>

        {/* pagination */}
        <div className="flex justify-center mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            itemsPerPage={itemsPerPage}
            totalItems={totalItems}
          />
        </div>
      </div>
    </>
  );
}

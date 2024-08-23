import Link from "next/link";
import { Cards, Header, Loader, Pagination } from "./_components";
import { getData } from "./lib/fetchProducts";

export default async function Home() {
  const { products } = await getData();
  const totalLength = products.length;
  const itemsPerPage = 8;

    const paginatedProducts = products.slice(0, itemsPerPage);
    console.log(paginatedProducts)

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
          {paginatedProducts.map((product) => (
            <Cards key={product.id} product={product} />
          ))}
        </div>

        {/* pagination */}
        <div className="flex justify-center mt-4">
        <Pagination totalLength={totalLength} products={products} itemsPerPage={itemsPerPage} />
        </div>
      </div>
    </>
  );
}

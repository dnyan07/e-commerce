import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";
function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fethData();
  }, []);

  const fethData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const res = await data.json();
    setProducts(res);
  };
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold mb-8 text-center">Product List</h1> */}
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="flex flex-wrap -mx-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

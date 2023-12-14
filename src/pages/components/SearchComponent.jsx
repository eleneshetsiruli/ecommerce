import { useContext, useEffect, useState } from "react";
import { ProductCard } from "../products/Products";
import { AuthContext } from "../../contexts/AuthContext";

export function SearchComponent() {
  const [searchProducts, setSearchProducts] = useState([]);
  const { searchValue } = useContext(AuthContext);

  function loadAllProducts() {
    fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
      .then((res) => res.json())
      .then((data) => setSearchProducts(data.products));
  }

  useEffect(() => {
    if (searchValue.trim() !== "") {
      loadAllProducts();
    } else {
      setSearchProducts([]);
    }
  }, [searchValue]);

  return (
    searchValue.trim() !== "" && (
      <div className="searchBox">
        {searchProducts.map((el) => (
          <ProductCard key={el.id} data={el} />
        ))}
      </div>
    )
  );
}

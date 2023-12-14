import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../contexts/CategoryContext";
import { ProductCard } from "./products/Products";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export const Categories = () => {
  const [filteredCategories, setFilteredCategories] = useState([]);
  const { categoryName } = useContext(CategoryContext);
  function loadAllCategories() {
    fetch(`https://dummyjson.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setFilteredCategories(data.products));
  }

  useEffect(() => {
    loadAllCategories();
  }, []);

  return (
    <>
      <Link to={"/"}>
        <FaHome className="icon" />
      </Link>
      <div
        style={{
          display: "flex",
          gap: "50px",
          alignItems: "center",
          justifyContent: "center",
          margin: "50px",
        }}
      >
        {filteredCategories.map((el) => (
          <ProductCard key={el.id} data={el} />
        ))}
      </div>
    </>
  );
};

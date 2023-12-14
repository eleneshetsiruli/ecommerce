import React, { useState } from "react";
import { CategoryContext } from "../contexts/CategoryContext";

export const CategoryContextProvider = ({ children }) => {
  const [categoryName, setCategoryName] = useState("smartphones");

  return (
    <div>
      <CategoryContext.Provider value={{ categoryName, setCategoryName }}>
        {children}
      </CategoryContext.Provider>
    </div>
  );
};

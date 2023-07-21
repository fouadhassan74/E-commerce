import React from "react";
import "../categories/categories.scss";
import { categories } from "../../data";
import CategorieItem from "../categoriesItem/CategorieItem";
function Categories() {
  return (
    <>
      <h1 className='categoriesTitle'>Categories</h1>
      <div className='categoriesContainer'>
        {categories.map((item) => (
          <CategorieItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default Categories;

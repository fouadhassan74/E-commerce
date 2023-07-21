import React from "react";
import "../categoriesItem/categorieItem.scss";
import { useNavigate } from "react-router-dom";
function CategorieItem({ item }) {
  const navigate = useNavigate();
  const handelNavigate = () => {
    navigate(`/products/${item.cat}`);
  };
  return (
    <div className='categroiesItemContainer'>
      <img src={item.img} alt='' />
      <div className='info'>
        <h1>{item.title}</h1>
        <button onClick={handelNavigate}>Show Now</button>
      </div>
    </div>
  );
}

export default CategorieItem;

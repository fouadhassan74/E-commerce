import React from "react";
import "../product/Product.scss";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
function Product({ item }) {
  return (
    <div className='productContainer'>
      <img src={item.img} alt='' />
      <div className='circle'></div>
      <div className='info'>
        <div className='icon'>
          {" "}
          <ShoppingCartOutlined />
        </div>
        <div className='icon'>
          <Link to={`/product/${item._id}`}>
            {" "}
            <SearchOutlined />
          </Link>
        </div>
        <div className='icon'>
          {" "}
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
}

export default Product;

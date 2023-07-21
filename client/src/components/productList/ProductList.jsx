import React, { useEffect, useState } from "react";
import "../productList/productList.scss";
import { popularProducts } from "../../data";
import axios from "axios";
import Product from "../product/Product";
function ProductList({ cat, filters, sort }) {
  console.log([cat, filters, sort]);
  const [products, setProducts] = useState([]);
  const [filterdProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        cat
          ? `http://localhost:9900/api/product?category=${cat}`
          : "http://localhost:9900/api/product/"
      );
      const data = res.data;
      setProducts(data);
    };
    getProducts();
  }, [cat]);
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) => {
          return Object.entries(filters).every(([key, value]) => {
            return item[key].includes(value);
          });
        })
      );
  }, [cat, filters, products]);
  useEffect(() => {
    if ((sort = "Newest")) {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => {
          return a.createdAt - b.createdAt;
        });
      });
    } else if ((sort = "asc")) {
      return setFilteredProducts((prev) => {
        [...prev].sort((a, b) => {
          return a.price - b.price;
        });
      });
    } else {
      return setFilteredProducts((prev) => {
        [...prev].sort((a, b) => {
          return b.createdAt - a.createdAt;
        });
      });
    }
  }, [sort]);
  // useEffect(() => {
  //   if (sort === "Newset") {
  //     setFilteredProducts((prev) =>
  //       [...prev].sort((a, b) => a.createdAt - b.createdAt)
  //     );
  //   } else if (sort === "asc") {
  //     setFilteredProducts((prev) =>
  //       [...prev].sort((a, b) => a.price - b.price)
  //     );
  //   } else {
  //     setFilteredProducts((prev) =>
  //       [...prev].sort((a, b) => b.price - a.price)
  //     );
  //   }
  // }, [sort]);

  return (
    <div className='ProductListConstainer'>
      {cat
        ? filterdProducts.map((item) => <Product item={item} key={item.id} />)
        : products.map((item) => <Product item={item} key={item.id} />)}
    </div>
  );
}

export default ProductList;

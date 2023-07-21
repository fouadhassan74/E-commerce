import React, { useEffect, useMemo, useState } from "react";
import "../product/product.scss";
import { Link, useLocation } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { userRequest } from "../../requestMethods";
function Product() {
  const [stats, setStats] = useState();
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  const Month = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getSatats = async () => {
      const res = await userRequest.get(`/order/income?pid=${productId}`);
      const list = res.data.sort((a, b) => a._id - b._id);
      list.map((item) =>
        setStats((prev) => [
          ...prev,
          { name: Month[item._id - 1], "Sales Product": item.total },
        ])
      );
    };
    getSatats();
  }, [Month, productId]);
  console.log(stats);
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <div className='productTitle'>product</div>
        <Link to='/newProduct'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopLeft'>
          <Chart
            data={stats}
            title='Product Analytics'
            grid
            dataKey='Sales Product'
          />
        </div>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img src={product.img} alt='' className='productInfoImg' />
            <span className='productName'>{product.title}</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>{product._id}</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>sales:</span>
              <span className='productInfoValue'>345678</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>active:</span>
              <span className='productInfoValue'>Yes</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>in stock:</span>
              <span className='productInfoValue'>{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label htmlFor=''>Product Name</label>
            <input type='text' id='' placeholder='Apple Airbode' />
            <label htmlFor=''>in stock</label>
            <select name='inStock' id='idStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <label htmlFor=''>Active</label>
            <select name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <img src={product.img} alt='' className='productUploadImg' />
              <label for='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: "none" }} />
            </div>
            <button className='productButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Product;

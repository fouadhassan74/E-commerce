import React, { useEffect, useState } from "react";
import "../productList/productList.scss";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { productRows } from "../../dummyData";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProduct } from "../../rtk/apiCalls";
import { format } from "timeago.js";
function ProductList() {
  const [data, setData] = useState(productRows);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProduct(dispatch);
  }, [dispatch]);
  console.log(productRows);
  console.log(products);
  const handleDelete = (id) => {
    deleteProduct(dispatch, id);
  };
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 150,
    },
    {
      field: "title",
      headerName: "Title",
      width: 220,
      renderCell: (params) => {
        return (
          <div className='productList Product'>
            <img className='productListImg' src={params.row.img} alt='' />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 220 },
    { field: "createdAt", headerName: "CreatedAt", width: 180 },
    { field: "price", headerName: "price ", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='productListDelete'
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className='productList'>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={products}
          getRowId={(row) => row._id}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}

export default ProductList;

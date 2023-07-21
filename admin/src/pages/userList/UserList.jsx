import React, { useEffect, useState } from "react";
import "../userList/userList.scss";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { rows } from "../../dummyData";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { deleteUser, getAllUsers } from "../../rtk/apiCalls";
import { useDispatch, useSelector } from "react-redux";

function UserList() {
  const [data, setData] = useState(rows);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  useEffect(() => {
    getAllUsers(dispatch);
  }, [dispatch]);
  console.log(users);
  const handleDelete = (id) => {
    deleteUser(dispatch, id);
  };
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 230,
      // valueGetter: (params) =>
      //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "userName",
      headerName: "User",
      width: 220,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img
              className='userListImg'
              src={
                params.row.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=''
            />
            {params.row.userName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 220 },
    { field: "createdAt", headerName: "Created At", width: 180 },
    { field: "transaction", headerName: "Transaction Volume", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='userListDelete'
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='userList'>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
          getRowId={(row) => row._id}
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

export default UserList;

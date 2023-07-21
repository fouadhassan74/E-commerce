import "../src/app.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import React from "react";

function App() {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  )?.currentUser?.isAdmin;

  return (
    <>
      {!admin && <Login />}
      <div>
        <Topbar />
        <div className='sidebarContainer'>
          <Sidebar />
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/users' Component={UserList} />
            <Route path='/user/:userid' Component={User} />
            <Route path='/newUser' Component={NewUser} />
            <Route path='/products' Component={ProductList} />
            <Route path='/product/:productid' Component={Product} />
            <Route path='/newProduct' Component={NewProduct} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

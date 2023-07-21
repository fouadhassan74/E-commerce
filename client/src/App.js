import logo from "./logo.svg";
import "./App.css";
import Home from "../src/pages/Home/Home.jsx";
import ListPrducts from "./pages/listProducts/ListPrducts";
import ProductPage from "./pages/productpage/ProductPage";
import Register from "./pages/Reigster/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currenUser);
  return (
    <div className='App'>
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:category' element={<ListPrducts />} />
          <Route path='/products' element={<ListPrducts />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route
            path='/login'
            element={!user ? <Login /> : <Navigate replace to='/' />}
          />
          <Route
            path='/register'
            element={!user ? <Register /> : <Navigate replace to='/' />}
          />
        </Routes>
      </>
    </div>
  );
}

export default App;

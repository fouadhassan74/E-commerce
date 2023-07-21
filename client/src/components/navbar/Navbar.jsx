import "../navbar/navbar.scss";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  const navigate = useNavigate();
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-wrapper'>
          <div className='left'>
            <span className='language'>EN</span>
            <div className='searchContaier'>
              <input type='text' placeholder='Search' />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </div>
          </div>
          <div className='center'>
            <h1 className='logo'>Fouad</h1>
          </div>
          <div className='right'>
            <div className='menuItem'>Sign In</div>
            <div className='menuItem'>Register</div>
            <div className='menuItem'>
              <Badge
                onClick={() => {
                  navigate("/cart");
                }}
                badgeContent={quantity}
                color='secondary'
              >
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

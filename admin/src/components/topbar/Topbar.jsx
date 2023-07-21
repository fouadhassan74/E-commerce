import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import React from "react";
import "../topbar/topbar.scss";

function Topbar() {
  return (
    <div className='topBar'>
      <div className='container'>
        <div className='left'>
          <span className='logo'>FouadBoard</span>
        </div>
        <div className='right'>
          <div className='topBarIconContainer'>
            <NotificationsNone />
            <span className='widged'>2</span>
          </div>
          <div className='topBarIconContainer'>
            <Language />
            <span className='widged'>2</span>
          </div>
          <div className='topBarIconContainer'>
            <Settings />
          </div>
          <img
            src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='avatar'
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;

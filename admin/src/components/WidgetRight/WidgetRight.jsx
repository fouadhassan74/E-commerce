import React, { useEffect } from "react";
import "../WidgetRight/WidgetRight.scss";
import { Visibility } from "@mui/icons-material";
import { useState } from "react";
import { userRequest } from "../../requestMethods";

function WidgetRight() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const res = await userRequest.get("/user/?new=true");
      const data = res.data;
      setUsers(data);
    };
    getUsers();
  }, []);

  //             }
  return (
    <div className='widgetRight'>
      <span className='widgetRightTitle'>New Join Members</span>
      <ul className='widgetRightList'>
        {users.map((user) => (
          <li className='widgetRightListItem' key={user._id}>
            {" "}
            <img
              src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=''
              className='widgetRightImg'
            />
            <div className='widgetRightUser'>
              <span className='widgetRightUsername'>{user.userName}</span>
              <span className='widgetRightUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetRightButton'>
              <Visibility className='widgetRightIcon' />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetRight;

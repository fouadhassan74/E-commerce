import React, { useEffect, useState } from "react";
import "../WidgetLeft/WidgetLeft.scss";
import { userRequest } from "../../requestMethods";
import { format } from "timeago.js";

function WidgetLeft() {
  const [orders, setOreders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const res = await userRequest.get("/order");
      const data = res.data;
      console.log(data);
      setOreders(data);
    };
    getOrders();
  }, []);
  const Button = ({ type }) => {
    return <button className={"widgetLeftButton " + type}>{type}</button>;
  };
  return (
    <div className='WidgetLeft'>
      <span className='widgetLeftTitle'>Latest transactions</span>
      <table className='  widgetLeftTable '>
        <tr className='widgetLargeTr'>
          <th className='widgetLeftTh'>Customer</th>
          <th className='widgetLeftTh'>Date</th>
          <th className='widgetLeftTh'>Amount</th>
          <th className='widgetLeftTh'>Status</th>
        </tr>
        {orders.map((order) => (
          <tr className='widgetLeftTr' key={order._id}>
            {" "}
            <td className='widgetLefteUser'>
              <img
                src={
                  order.img ||
                  "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                }
                alt=''
                className='widgetLeftImg'
              />
              <span className='widgetLeftName'>{order.userId}</span>
            </td>
            <td className='widgetLeftDate'>{format(order.createdAt)}</td>
            <td className='widgetLeftAmount'>$122.00</td>
            <td className='widgetLeftStatus'>
              <Button type='Approved' />
            </td>
          </tr>
        ))}
        {/* <tr className='widgetLeftTr'>
          <td className='widgetLefteUser'>
            <img
              src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt=''
              className='widgetLeftImg'
            />
            <span className='widgetLeftName'>Susan Carol</span>
          </td>
          <td className='widgetLeftDate'>2 Jun 2021</td>
          <td className='widgetLeftAmount'>$122.00</td>
          <td className='widgetLeftStatus'>
            <Button type='Approved' />
          </td>
        </tr> */}
      </table>
    </div>
  );
}

export default WidgetLeft;

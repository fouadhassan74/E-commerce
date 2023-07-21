import React, { useEffect, useState } from "react";
import "../featuredInfo/featured.scss";
import { ArrowDownward } from "@mui/icons-material";
import { userRequest } from "../../requestMethods";
function FeaturedInfo() {
  const [revanue, setRevanue] = useState([{ _id: 0, total: 7 }]);
  const [prec, setPrec] = useState();
  useEffect(() => {
    const getRev = async () => {
      const res = await userRequest.get("/order/income");
      const data = res.data;
      setRevanue(data);
      setPrec((res.data[1].total * 100) / res.data[0].total - 100);
    };
    getRev();
  }, []);
  console.log(revanue.at(-1));
  console.log(prec);
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Revanue</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>
            ${revanue[revanue.length - 1].total}
          </span>
          <span className='featuredMoneyRate'>
            -11.4 <ArrowDownward className='featuredIcon negative' />
          </span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Sales</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,415</span>
          <span className='featuredMoneyRate'>
            -11.4 <ArrowDownward className='featuredIcon negative' />
          </span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Cost</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,415</span>
          <span className='featuredMoneyRate'>
            -11.4 <ArrowDownward className='featuredIcon negative' />
          </span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;

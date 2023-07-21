import React, { useEffect, useMemo, useState } from "react";
import "../Home/home.scss";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";

import WidgetLeft from "../../components/WidgetLeft/WidgetLeft";
import WidgetRight from "../../components/WidgetRight/WidgetRight";
import { userRequest } from "../../requestMethods";

function Home() {
  const [data, setData] = useState([]);
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
    const getChart = async () => {
      const res = await userRequest.get("/user/stats");
      const data = res.data;
      data.map((item) =>
        setData((prev) => [
          ...prev,
          { name: Month[item._id - 1], "Active User": item.total },
        ])
      );
    };
    getChart();
  }, [Month]);
  console.log(data);
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={data} title='User Analytics' dataKey='Active User' />
      <div className='homeWidgets'>
        <WidgetRight />
        <WidgetLeft />
      </div>
    </div>
  );
}

export default Home;

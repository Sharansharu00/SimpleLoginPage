import axios from "axios";
import React, { useEffect, useState } from "react";
import "./chartDetails.css";

import { Chart } from "primereact/chart";

function ChartDetails() {
 
  const [chartDetails, setChartDetails] = useState([]);
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  useEffect(() => {
    axios
      .get(" http://localhost:3000/database")
      .then((res) => setChartDetails(res.data));

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: chartDetails.map((val)=>val.year),
      datasets: [
        {
          type: "bar",
          label: "sharan",
          backgroundColor: documentStyle.getPropertyValue("--red-500"),
          data: chartDetails.map((val)=>val.salary),
        },
        {
          type: "bar",
          label: "Ajay",
          backgroundColor: documentStyle.getPropertyValue("--green-500"),
          data: chartDetails.map((val)=>val.salary),
        },
        {
          type: "bar",
          label: "Ajith",
          backgroundColor: documentStyle.getPropertyValue("--yellow-500"),
          data: chartDetails.map((val)=>val.salary)
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        tooltips: {
          mode: "index",
          intersect: false,
        },
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          stacked: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);
  return (
    <>
      <h1>ChartDetails</h1>
      <div className="card">
        <Chart type="bar" data={chartData} options={chartOptions} />
      </div>
    </>
  );
}

export default ChartDetails;

import React from 'react';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2"; 

const DrugsSold = () => {
  return (
    <div className="drugs-sold-card">
      <Doughnut data={{
        labels: "Drugs Sold",
        datasets: [
            {
                label: "Orders",
                data: 500,
                backgroundColor:  "#60c0a4",
            },
            {
                label: "Sold",
                data: 400,
                backgroundColor: "#9fe0b6",
            }
        ]
      }} />
    </div>
  )
}

export default DrugsSold;
import React, { useState } from "react";
import styles from "./task-done.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TaskDone = () => {
  const [period, setPeriod] = useState("monthly");
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Task Done</h2>
        <div className={styles.period}>
          <div>Daily</div>
          <div>Weekly</div>
          <div
            onClick={() => setPeriod("monthly")}
            className={`${period === "monthly" && styles.active}`}
          >
            Monthly
          </div>
        </div>
      </div>

      <div>{period === "monthly" && <MonthlyChart />}</div>
    </div>
  );
};

export default TaskDone;

const MonthlyChart = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Done",
        data: [0, 10, 5, 2, 20, 30, 45, 43, 32, 12, 23, 56],
        borderColor: "#4BA8A8",
        backgroundColor: "#4BA8A8",
      },
      {
        label: "Not Done",
        data: [3, 2, 10, 21, 18, 12, 30, 24, 25, 43, 12, 32],
        borderColor: "#F8B400",
        backgroundColor: "#F8B400",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

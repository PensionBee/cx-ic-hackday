import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { priceData } from '../data/priceData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const slicedData = priceData.slice(-50);
const dataValues = slicedData.map((item) => {
  const convertedValue = Number.parseFloat(item.Value);
  const convertedValueFixed = convertedValue.toFixed(2);
  return convertedValueFixed;
});
const labels = slicedData.map((item) => item.EndDate);

export const data = {
  labels,
  datasets: [
    {
      label: 'Fund past performance',
      data: dataValues,
      borderColor: '#F9C000',
      backgroundColor: '#F9C000',
    },
  ],
};

function LineChart() {
  return (
    <div className="LineChart">
      <Line options={options} data={data} />
    </div>
  );
}

export default LineChart;

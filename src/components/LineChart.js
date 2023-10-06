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
import { morningstarData } from '../data/VAUSA0NKXT';

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

const { HistoricalPerformanceSeries } = morningstarData;
const returns = HistoricalPerformanceSeries[1];

const labels = ['2022', '2021', '2020', '2019', '2018', '2017', '2016'];
const returnsData = returns.Return.map(
  (returnData) => returnData?.Value?.toFixed(2) || 0
);

export const data = {
  labels,
  datasets: [
    {
      label: 'Fund past performance',
      data: returnsData,
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

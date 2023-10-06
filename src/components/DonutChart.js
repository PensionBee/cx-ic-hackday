import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Title, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { morningstarData } from '../data/VAUSA0NKXT';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Donut Chart',
    },
  },
};

console.log(morningstarData.Portfolios[0].AssetAllocations) ;

const {BreakdownValues} = morningstarData.Portfolios[0].AssetAllocations[0];


const labels = BreakdownValues.map((item) => item.Type);

const dataValues = BreakdownValues.map((item) => item.Value);


const randomColourArray = Array.from({length: labels.length}).map(() => {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
})


console.log(randomColourArray);
export const data = {
  labels: labels,
  datasets: [
    {
      label: 'percentage allocation',
      data: dataValues,
      backgroundColor: randomColourArray,
      borderWidth: 1,
    },
  ],
};

export function DonutChart() {
  return <Doughnut options={options} data={data} />;
}

export default DonutChart;

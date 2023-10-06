import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { morningstarData } from '../data/VAUSA0NKXT';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const options = {
  responsive: true,
  radius: '75%',
  plugins: {
    legend: {
      display: true,
      position: 'left',
    },
    title: {
      display: true,
      text: 'Tailored - Fund Allocation',
    },
  },
};

console.log(morningstarData.Portfolios[0].AssetAllocations) ;

const portfolio = morningstarData.Portfolios[0]

const { BreakdownValues } = portfolio.AssetAllocations.find(({ SalePosition }) => SalePosition === 'L');

const labelMap = {
  "1": {
    label: "Stocks",
    colour: "#F9C000",
  },
  "2": {
    label: "Bonds",
    colour: "#007DB7",
  },
  "3": {
    label: "Cash",
    colour: "#24B6B6",
  },
  "4": {
    label: "Other",
    colour: "#D7384D",
  },
  "99": {
    label: "Unclassified",
    colour: "#FA8C2E",
  }
};

const sorted = BreakdownValues.sort((a, b) =>  b.Value - a.Value)
const dataValues = sorted.map((item) => item.Value.toFixed(2));
const labels = sorted.map((item) => `${labelMap[item.Type].label} ${item.Value.toFixed(2)}%`);
const colours = sorted.map((item) => labelMap[item.Type].colour);

export const data = {
  labels,
  datasets: [
    {
      label: ' % allocation',
      data: dataValues,
      backgroundColor: colours,
      borderWidth: 1,
    },
  ],
};

function DonutChart() {
  return (
    <div className="DonutChart">
      <Doughnut options={options} data={data} />
    </div>
  );
}

export default DonutChart;

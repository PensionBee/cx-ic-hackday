import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { morningstarData } from '../data/VAUSA0NKXT';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'left',
    },
  },
};

console.log(morningstarData.Portfolios[0].AssetAllocations) ;

const { BreakdownValues } = morningstarData.Portfolios[0].GlobalBondSectorBreakdownLevel1[0];

const labelMap = {
  "10": {
    label: "Government",
    colour: "#F9C000",
  },
  "20": {
    label: "Municipal",
    colour: "#007DB7",
  },
  "30": {
    label: "Corporate",
    colour: "#24B6B6",
  },
  "40": {
    label: "Securitized",
    colour: "#D7384D",
  },
  "50": {
    label: "Cash & Equivalents",
    colour: "#FA8C2E",
  },
  "60": {
    label: "Derivative",
    colour: "#519828",
  },
};

const sorted = BreakdownValues.sort((a, b) =>  b.Value - a.Value)


const dataValues = sorted.map((item) => item.Value.toFixed(2));
const labels = sorted.map((item) => `${labelMap[item.Type].label} ${item.Value.toFixed(2)}%`);
const colours = sorted.map((item) => labelMap[item.Type].colour);

export const data = {
  labels,
  datasets: [
    {
      label: 'percentage allocation',
      data: dataValues,
      backgroundColor: colours,
      borderWidth: 1,
    },
  ],
};

export function DonutChart() {
  return <Doughnut options={options} data={data} />;
}

export default DonutChart;

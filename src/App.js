import React from 'react';
import BarChart from './components/BarChart';
import DonutChart from './components/DonutChart';
import LineChart from './components/LineChart';

function App() {
  return (
    <div className="App">
      <BarChart />

      < br />
      < br />
      < hr />
      < br />
      < br />

      <DonutChart />

      < br />
      < br />
      < hr />
      < br />
      < br />

      <LineChart />
    </div>
  );
}

export default App;

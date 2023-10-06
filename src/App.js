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

      <LineChart />

      < br />
      < br />
      < hr />
      < br />
      < br />

      <DonutChart />
    </div>
  );
}

export default App;

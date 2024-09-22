import React from 'react';
import ReactDOM from 'react-dom/client';

import { MyLineChartComponent } from './LineChart';

function App() {
  return (
    <div>
      <h1>Google Charts React Component</h1>
      <MyLineChartComponent />
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

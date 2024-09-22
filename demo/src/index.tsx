import React from 'react';
import ReactDOM from 'react-dom/client';

import { MyLineChartComponent } from './LineChart';

function App() {
  return (
    <div>
      <h1>Google Charts React Component</h1>
      <hr />
      <MyLineChartComponent />
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<React.StrictMode><App /></React.StrictMode>);

/**
 * Render source code for demo blocks
 */
/// <reference types="highlight.js" />
declare const hljs: any;
setTimeout(() => {
  const codeblocks = document.querySelectorAll('pre>code[data-src]');
  codeblocks.forEach(async (codeblock) => {
    let src = codeblock.getAttribute('data-src');
    if (!src) return;
    const res = await fetch(src);
    const text = await res.text();
    let ignore = false;
    const lines = text.split('\n').map(line => {
      if (ignore) return null;
      if (line.includes('embed:ignore:start')) {
        ignore = true;
        return null;
      }
      if (line.includes('embed:ignore:end')) {
        ignore = false;
        return null;
      }
      return line;
    }).filter(line => line !== null);
    codeblock.textContent = lines.join('\n');
  });
  setTimeout(() => hljs.highlightAll(), 1000);
}, 0);

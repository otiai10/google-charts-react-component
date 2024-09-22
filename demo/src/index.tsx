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
declare const hljs: { highlightAll: () => void; };
setTimeout(() => {
  const codeblocks = document.querySelectorAll('pre>code[data-src]');
  codeblocks.forEach(async (codeblock) => {
    const src = codeblock.getAttribute('data-src');
    if (!src) return;
    const res = await fetch(src);
    const text = await res.text();
    let ignore = false;
    const content = text.split('\n').map(line => {
      if (line?.includes('demo:ignore:start')) {
        ignore = true; return null;
      }
      if (line?.includes('demo:ignore:end')) {
        ignore = false; return null;
      }
      return ignore ? null : line;
    }).filter(line => line !== null).join("\n");
    codeblock.textContent  = content + "\n" + `// Source: ${src.replace('https://raw.githubusercontent.com/', 'https://github.com/').replace('/refs/heads/main/', '/blob/main/')}`;
  });
  setTimeout(() => hljs.highlightAll(), 1000);
}, 0);

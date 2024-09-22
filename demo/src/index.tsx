import React from 'react';
import ReactDOM from 'react-dom/client';

import { MyLineChartComponent } from './LineChart';
import { MyAnnotationChartComponent } from './AnnotationChart';

function App() {
  return (
    <div className="container">
      <Header items={["Line", "Annotation"]} />
      <MyLineChartComponent />
      <MyAnnotationChartComponent />
      <Footer />
    </div>
  );
}

function Header({ items }: { items: string[] }) {
  return (
    <div className='header'>
      <h1>Google Charts React Component </h1>
      <ul>{items.map(item => <li key={item}><a href={`#${item.toLowerCase()}-chart`}>{item} Chart</a></li>)}</ul>
    </div>
  )
}

function Footer() {
  return (
    <div className="footer">
      <p>
        <a href="https://github.com/otiai10/google-charts-react-component">GitHub</a>
      </p>
    </div>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<React.StrictMode><App /></React.StrictMode>);

 // {{{ Render source code for demo blocks
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
// }}}

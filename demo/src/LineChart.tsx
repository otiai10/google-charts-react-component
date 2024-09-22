/// <reference types="google.visualization" />
import { GoogleChart } from 'google-charts-react-component';

export function MyLineChartComponent() {
    return (
        <div>
            <h1 id="line-chart">Line Chart</h1>
            <GoogleChart<google.visualization.LineChart>
                type="line"
                data={data}
            />
            {/*demo:ignore:start*/}
            <div style={{ overflowX: "scroll" }}>
                <pre>
                    <code
                        data-src="https://raw.githubusercontent.com/otiai10/google-charts-react-component/refs/heads/main/demo/src/LineChart.tsx"
                        className="language-typescript"
                    ></code></pre>
            </div>
            {/*demo:ignore:end*/}
        </div>
    );
}
//demo:ignore:start
const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
];
//demo:ignore:end
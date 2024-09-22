/// <reference types="google.visualization" />
import { GoogleChart } from 'google-charts-react-component';

export function MyLineChartComponent() {
    return (
        <div>
            <h1 id="line-chart">Line Chart</h1>
            <div>
                <GoogleChart<google.visualization.LineChart>
                    type="line"
                    data={data}
                    options={{}}
                />
            </div>
            {/*embed:ignore:start*/}
            <div>
                <pre>
                    <code
                        data-src="https://raw.githubusercontent.com/otiai10/google-charts-react-component/refs/heads/main/demo/src/LineChart.tsx"
                        className="language-typescript"
                    ></code></pre>
            </div>
            {/*embed:ignore:end*/}
        </div>
    );
}

//embed:ignore:start
const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
];
//embed:ignore:end

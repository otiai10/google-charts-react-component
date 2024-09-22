/// <reference types="google.visualization" />
import { GoogleChart } from 'google-charts-react-component';

export function MyLineChartComponent() {
    return (
        <div>
            <h2 id="line-chart">Line Chart</h2>
            <div>
                <GoogleChart<google.visualization.LineChart>
                    type="line"
                    data={data}
                    options={{}}
                />
            </div>
        </div>
    );
}

const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
];

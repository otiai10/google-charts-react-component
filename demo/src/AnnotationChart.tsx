/// <reference types="google.visualization" />
import { GoogleChart } from 'google-charts-react-component';

export function MyAnnotationChartComponent() {
    return (
        <div>
            <h1 id="annotation-chart">Annotation Chart</h1>
            <GoogleChart<google.visualization.AnnotationChart>
                type="annotation"
                data={tmpdata}
                options={{ displayAnnotations: true }}
                loadOptions={{ packages: ['annotationchart'] }}
                onDraw={(chart) => {
                    const realdata = datafactory();
                    chart.draw(realdata, { displayAnnotations: true });
                }}
                style={{ boxShadow: "5px 5px 10px violet" }}
            />
            {/*demo:ignore:start*/}
            <div style={{ overflowX: "scroll" }}>
                <pre>
                    <code
                        data-src="https://raw.githubusercontent.com/otiai10/google-charts-react-component/refs/heads/main/demo/src/AnnotationChart.tsx"
                        className="language-typescript"
                    ></code></pre>
            </div>
            {/*demo:ignore:end*/}
        </div>
    );
}
//demo:ignore:start
const datafactory = (): google.visualization.DataTable => {
    const data = new google.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', 'Kepler-22b mission');
    data.addColumn('string', 'Kepler title');
    data.addColumn('string', 'Kepler text');
    data.addColumn('number', 'Gliese 163 mission');
    data.addColumn('string', 'Gliese title');
    data.addColumn('string', 'Gliese text');
    data.addRows([
        [new Date(2314, 2, 15), 12400, undefined, undefined, 10645, undefined, undefined],
        [new Date(2314, 2, 16), 24045, 'Lalibertines', 'First encounter', 12374, undefined, undefined],
        [new Date(2314, 2, 17), 35022, 'Lalibertines', 'They are very tall', 15766, 'Gallantors', 'First Encounter'],
        [new Date(2314, 2, 18), 12284, 'Lalibertines', 'Attack on our crew!', 34334, 'Gallantors', 'Statement of shared principles'],
        [new Date(2314, 2, 19), 8476, 'Lalibertines', 'Heavy casualties', 66467, 'Gallantors', 'Mysteries revealed'],
        [new Date(2314, 2, 20), 0, 'Lalibertines', 'All crew lost', 79463, 'Gallantors', 'Omniscience achieved']
    ]);
    return data;
}
const tmpdata = [
    ['Date', 'Kepler-22b', 'Kepler-69c'],
    [new Date(2314, 2, 15), 12400, 10645],
    [new Date(2314, 2, 16), 24045, 12374],
    [new Date(2314, 2, 17), 35022, 15766],
    [new Date(2314, 2, 18), 12284, 34334],
    [new Date(2314, 2, 19), 8476, 66467],
    [new Date(2314, 2, 20), 0, 79463]
]
//demo:ignore:end
# React Google Charts Component

[![JavaScript CI](https://github.com/otiai10/react-google-charts/actions/workflows/javascript-ci.yaml/badge.svg)](https://github.com/otiai10/react-google-charts/actions/workflows/javascript-ci.yaml)
[![codecov](https://codecov.io/gh/otiai10/react-google-charts/graph/badge.svg?token=nBrEIJDlWs)](https://codecov.io/gh/otiai10/react-google-charts)

```jsx
import { GoogleChart } from "to-be-defined";

function YourCoolApp() {
    return (
        <GoogleChart
            title="Sales"
            type="line"
            data={data}
            options={options}
            className="w-full h-full"
        />
    );
}
```

# TypeScript?

If you are using TypeScript, you can use strong type support:

```jsx
<GoogleChart<google.visualization.LineChart>
    data={data}
    type="line"
    options={options} // automatically typed with LineChartOpitions
/>
```
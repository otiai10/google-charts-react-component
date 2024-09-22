# React Google Charts Component

[![JavaScript CI](https://github.com/otiai10/react-google-charts/actions/workflows/javascript-ci.yaml/badge.svg)](https://github.com/otiai10/react-google-charts/actions/workflows/javascript-ci.yaml)
[![codecov](https://codecov.io/gh/otiai10/google-charts-react-component/graph/badge.svg?token=nBrEIJDlWs)](https://codecov.io/gh/otiai10/google-charts-react-component)

```jsx
import { GoogleChart } from "google-charts-react-component";

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

# Demo Gallery

* https://otiai10.github.io/google-charts-react-component/

# Issues and Requests

* https://github.com/otiai10/google-charts-react-component/issues

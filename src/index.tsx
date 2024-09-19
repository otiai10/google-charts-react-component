/// <reference types="google.visualization" />
import { useMemo, useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type GoogleChartDrawer = { draw(data: google.visualization.DataTable | google.visualization.DataView, options: {}): void; };
type GoogleChartDrawerOptions<T extends GoogleChartDrawer> = Parameters<T["draw"]>[1];

// Props for GoogleChart component.
type GoogleChartProps<T extends GoogleChartDrawer> = {
    data: unknown[] | google.visualization.DataTable | google.visualization.DataView;
    options: GoogleChartDrawerOptions<T>;

    // Title to display above the chart.
    // Even if title is also provided in options, this one will be used.
    // @DEFAULT undefined
    title?: string;

    // Class name to apply to the chart container.
    // @DEFAULT undefined
    className?: string;

    // If users don't need to load google.visualization,
    // they can pass it as a prop to avoid loading it over http.
    // @DEFAULT undefined (will download from www.gstatic.com)
    google?: typeof google;

    // If users want to change the source of the google.visualization script,
    // specify URL here.
    // @DEFAULT "https://www.gstatic.com/charts/loader.js"
    src?: string;

    // Version of the google.visualization script to load.
    // @DEFAULT "current"
    version?: string;

    // Options to load the google.visualization script.
    // @DEFAULT {packages: ['corechart']}
    loadOptions?: google.LoadOptions;
}

const DEFAULT_SRC_URL = "https://www.gstatic.com/charts/loader.js";

export function GoogleChart<T extends GoogleChartDrawer>(props: GoogleChartProps<T>) {
    const { title, className, data, options = {} } = props;
    const chartRef = useRef<HTMLDivElement>(null);
    const render = (ggl: typeof google) => {
        // if data is already DataTable or DataView, use it as is
        const ready = (data instanceof ggl.visualization.DataTable || data instanceof ggl.visualization.DataView);
        const datatable = ready ? data : ggl.visualization.arrayToDataTable(data);
        const instance = new ggl.visualization["LineChart"](chartRef.current!);
        instance.draw(datatable, { ...options, title });
        return instance;
    };
    return (
        <>
            <div className={className} ref={chartRef}></div>
            {props.google ? render(props.google) : <ScriptLoader src={props.src || DEFAULT_SRC_URL}
                onload={async () => {
                    await google.charts.load(props.version ?? "current", props.loadOptions ?? { packages: ['corechart'] });
                    google.charts.setOnLoadCallback(() => render(google));
                }}
            />}
        </>
    );
}

function ScriptLoader({ src, onload = () => { } }: {
    src: string;
    onload?: (e: Event) => void;
}) {
    const script = useMemo(() => document.createElement("script"), []);
    useEffect(() => {
        script.onload = onload;
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
    }, [script]);
    return <></>;
}
/// <reference types="google.visualization" />
import { useMemo, useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type GoogleChartDrawer = { draw(data: google.visualization.DataTable | google.visualization.DataView, options: {}): void; };
type GoogleChartDrawerOptions<T extends GoogleChartDrawer> = Parameters<T["draw"]>[1];
type ConstructorOf<T extends GoogleChartDrawer> = new (element: Element) => T;
type ChartLibrary = { [name in (typeof ChartTypes)[keyof typeof ChartTypes]]: ConstructorOf<GoogleChartDrawer> };

/** Props for GoogleChart component. */
type GoogleChartProps<T extends GoogleChartDrawer> = {
    /** Data to be displayed in the chart. */
    data: unknown[] | google.visualization.DataTable | google.visualization.DataView;

    /** Type of chart to display. */
    type: keyof typeof ChartTypes;

    /** Options to customize the chart. */
    options?: GoogleChartDrawerOptions<T>;

    /**
     * Title to display above the chart.
     * Even if title is also provided in options, this one will be used.
     * @DEFAULT undefined
     */
    title?: string;

    /**
     * Class name to apply to the chart container.
     * @DEFAULT undefined
     */
    className?: string;

    /**
     * Id of the chart container.
     * @DEFAULT undefined
     */
    id?: string;

    /**
     * If users don't need to load google.visualization,
     * they can pass it as a prop to avoid loading it over http.
     * @DEFAULT undefined (will download from www.gstatic.com)
     */
    google?: typeof google;

    /**
     * If users want to change the source of the google.visualization script,
     * specify URL here.
     * @DEFAULT "https://www.gstatic.com/charts/loader.js"
     */
    src?: string;

    /**
     * Version of the google.visualization script to load.
     * @DEFAULT "current"
     */
    version?: string;

    /**
     * Options to load the google.visualization script.
     * @DEFAULT { packages: ['corechart'] }
     */
    loadOptions?: google.LoadOptions;

    /**
     * Callback to be called after the chart is drawn.
     * @DEFAULT undefined
     */
    onDraw?: (instance: T) => void;
}

const DEFAULT_SRC_URL = "https://www.gstatic.com/charts/loader.js";

/**
 * Chart types supported by google visualization.
 * @see https://developers.google.com/chart/interactive/docs/gallery
 * @see https://github.com/GoogleWebComponents/google-chart/blob/main/google-chart.ts
 * @see https://github.com/google/google-visualization/blob/bf7955b75cd54d0567455173c3c3fefa5d2a1ebf/loader/loader.ts#L45-L70
 */
const ChartTypes: Record<string, string> = {
    'area': 'AreaChart',
    'bar': 'BarChart',
    // 'md-bar': 'google.charts.Bar',
    'bubble': 'BubbleChart',
    'calendar': 'Calendar',
    'candlestick': 'CandlestickChart',
    'column': 'ColumnChart',
    'combo': 'ComboChart',
    'gantt': 'Gantt',
    'gauge': 'Gauge',
    'geo': 'GeoChart',
    'histogram': 'Histogram',
    'line': 'LineChart',
    // 'md-line': 'google.charts.Line',
    'org': 'OrgChart',
    'pie': 'PieChart',
    'sankey': 'Sankey',
    'scatter': 'ScatterChart',
    // 'md-scatter': 'google.charts.Scatter',
    'stepped-area': 'SteppedAreaChart',
    'table': 'Table',
    'timeline': 'Timeline',
    'treemap': 'TreeMap',
    'wordtree': 'WordTree',

    // Added by react-google-charts
    'annotation': 'AnnotationChart',
};

/**
 * GoogleChart component to display charts using google.visualization.
 * @see https://developers.google.com/chart/interactive/docs/gallery
 * @param {GoogleChartProps} props Props for GoogleChart component.
 * @returns {JSX.Element} GoogleChart component.
 */
export function GoogleChart<T extends GoogleChartDrawer>(props: GoogleChartProps<T>) {
    const { title, className, id, data, options = {}, type, onDraw } = props;
    const chartRef = useRef<HTMLDivElement>(null);
    const render = (ggl: typeof google) => {
        // if data is already DataTable or DataView, use it as is
        const ready = (data instanceof ggl.visualization.DataTable || data instanceof ggl.visualization.DataView);
        const datatable = ready ? data : ggl.visualization.arrayToDataTable(data);
        const instance = new (ggl.visualization as unknown as ChartLibrary)[ChartTypes[type]](chartRef.current!) as T;
        instance.draw(datatable, { ...options, title });
        if (onDraw) onDraw(instance);
        return null;
    };
    return (
        <>
            <div id={id} className={className} ref={chartRef}></div>
            {props.google ? render(props.google) : <ScriptLoader src={props.src || DEFAULT_SRC_URL}
                onload={async () => {
                    await google.charts.load(props.version ?? "current", props.loadOptions ?? { packages: ['corechart'] });
                    google.charts.setOnLoadCallback(() => render(google));
                }}
            />}
        </>
    );
}

/**
 * ScriptLoader component to load scripts dynamically.
 * @param {src:string, onload:Function} props Props for ScriptLoader component.
 * @returns {null}
 */
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
    return null;
}
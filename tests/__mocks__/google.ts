export const mock = {
    visualization: {
        // mock class constructor
        DataTable: class DataTable {},
        DataView: class DataView {},
        arrayToDataTable: jest.fn(),
        LineChart: class LineChart {
            draw = jest.fn();
        },
    },
    charts: {
        load: jest.fn(),
        setOnLoadCallback: jest.fn(),
    },
    load: jest.fn(),
    setOnLoadCallback: jest.fn(),
} as unknown as typeof google;

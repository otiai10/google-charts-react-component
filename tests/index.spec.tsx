import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import { GoogleChart } from '../src';

describe('GoogleChart', () => {
    it('should be rendered', async () => {
        render(<GoogleChart<google.visualization.LineChart> data={[]} options={{ title: "foo" }} />);
        const container = document.querySelector("div");
        expect(container).toBeInTheDocument();
        // render(<GoogleChart<google.visualization.LineChart> data={[]} google={google} options={{}} />);
    });
});

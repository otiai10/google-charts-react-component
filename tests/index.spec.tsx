/// <reference types="google.visualization" />
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import { mock as ggl  } from './__mocks__/google';

import { GoogleChart } from '../src';

describe('GoogleChart', () => {
    it('should be rendered', async () => {
        const { container } = render(<GoogleChart type="line" data={[]} options={{ title: "foo" }} />);
        expect(container.firstChild).toBeInTheDocument();
    });
    describe('className', () => {
        it('should be rendered', async () => {
            const { container } = render(<GoogleChart className="foo baa baz" type="line" data={[]} options={{ title: "foo" }} />);
            const root = container?.firstChild as HTMLElement;
            expect(root).toBeInTheDocument();
            expect(root).toHaveClass("foo baa baz");
        });
    });
    describe('google', () => {
        it('should be rendered', async () => {
            const { container } = render(<GoogleChart<google.visualization.LineChart> google={ggl} type="line" data={[]} options={{ title: "foo" }} />);
            expect(container.firstChild).toBeInTheDocument();
        });
    })
});

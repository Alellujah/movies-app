import React from 'react';
import { render, cleanup } from '@testing-library/react';
import List from './';

afterEach(cleanup);

describe('TestList', () => {
    const { getByTestId } = render(<List movieList={[]} />);
    const listNode = getByTestId('list-id');

    it("List initializes", () => {
        expect(listNode.hasChildNodes.length === 0).toBe(true);
    });
});
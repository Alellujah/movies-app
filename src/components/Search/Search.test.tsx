import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Search from './';

afterEach(cleanup);

describe('TestSearch', () => {
    const { getByTestId } = render(<Search />);
    const inputNode = getByTestId('search-id') as HTMLInputElement;
    it("Search initializes blank", () => {
        expect(inputNode.value).toBe("");
    });
    it('Change input', async () => {
        fireEvent.change(inputNode, { target: { value: 'new value' } });
        expect(inputNode.value).toBe('new value');
    });
});
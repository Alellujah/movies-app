import React from 'react';
import { render, cleanup, getByText } from '@testing-library/react';
import Detail from './';

afterEach(cleanup);

describe('TestDetails', () => {
    const { getByTestId } = render(<Detail
        id={1}
        title={'title'}
        original_title={'original_title'}
        release_date={'date'}
        vote_average={0.2}
        overview={'overview'}
        popularity={1000}
        original_language={'en'}
        poster_path={'url'}
        showModal={true}
        onClose={() => console.log('nothing')}
    />);
    const detailNode = getByTestId('detail-id');
    const title = getByText(detailNode, 'title');
    const original_title = getByText(detailNode, 'original_title');
    const release_date = getByText(detailNode, 'date');
    const vote_average = getByText(detailNode, '0.2');
    const overview = getByText(detailNode, 'overview');
    const popularity = getByText(detailNode, '1000');
    const original_language = getByText(detailNode, 'en');

    it("Details initializes", () => {
        expect(title.innerHTML).toBe("title");
        expect(original_title.innerHTML).toBe("original_title");
        expect(release_date.innerHTML).toBe("date");
        expect(vote_average.innerHTML).toBe("0.2");
        expect(overview.innerHTML).toBe("overview");
        expect(popularity.innerHTML).toBe("1000");
        expect(original_language.innerHTML).toBe("en");
    });
});
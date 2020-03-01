export interface Movie {
    id: number;
    title: string;
    original_title: string;
    release_date: string;
    vote_average: number;
    overview: string;
}

export interface MovieReducer {
    selectedMovie: string;
    list: { [key: number]: Movie[] };
    pageNumber: number;
    toggleBtn: boolean;
}
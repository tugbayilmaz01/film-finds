import { Film } from "../../types";

export const FETCH_FILMS_REQUEST = "FETCH_FILMS_REQUEST";
export const FETCH_FILMS_SUCCESS = "FETCH_FILMS_SUCCESS";
export const FETCH_FILMS_FAILURE = "FETCH_FILMS_FAILURE";

export const fetchFilmsRequest = () => ({
	type: FETCH_FILMS_REQUEST,
});

export const fetchFilmsSuccess = (films: Film[]) => ({
	type: FETCH_FILMS_SUCCESS,
	payload: films,
});

export const fetchFilmsFailure = (error: string) => ({
	type: FETCH_FILMS_FAILURE,
	payload: error,
});

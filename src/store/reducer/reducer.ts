import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Film {
	Title: string;
	Year: string;
	imdbID: string;
}

interface FilmsState {
	films: Film[];
	loading: boolean;
	error: string | null;
}

const initialState: FilmsState = {
	films: [],
	loading: false,
	error: null,
};

const filmsSlice = createSlice({
	name: "films",
	initialState,
	reducers: {
		fetchFilmsRequest: (state) => {
			state.loading = true;
			state.error = null;
		},
		fetchFilmsSuccess: (state, action: PayloadAction<Film[]>) => {
			state.films = action.payload;
			state.loading = false;
		},
		fetchFilmsFailure: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
			state.loading = false;
		},
	},
});

export const { fetchFilmsRequest, fetchFilmsSuccess, fetchFilmsFailure } = filmsSlice.actions;

export default filmsSlice.reducer;

export type RootState = FilmsState;

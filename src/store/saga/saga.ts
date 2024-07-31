import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_FILMS_REQUEST, fetchFilmsSuccess, fetchFilmsFailure } from "../action/actions.ts";

function* fetchFilmsSaga() {
	try {
		console.log("Saga started");
		const responses = yield Promise.all(
			Array.from({ length: 10 }, (_, i) =>
				fetch(`http://www.omdbapi.com/?apikey=2e1e970c&s=star&page=${i + 1}`)
			)
		);
		const dataPromises = responses.map((response) => response.json());
		const dataResults = yield Promise.all(dataPromises);
		const allMovies = dataResults.flatMap((data) => data.Search || []);
		console.log("Fetched movies:", allMovies);
		yield put(fetchFilmsSuccess(allMovies));
	} catch (error) {
		console.error("Fetch error:", error);
		yield put(fetchFilmsFailure(error.message));
	}
}

function* rootSaga() {
	yield takeLatest(FETCH_FILMS_REQUEST, fetchFilmsSaga);
}

export default rootSaga;

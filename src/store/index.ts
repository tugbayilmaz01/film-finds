import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import filmsReducer from "./reducer/reducer.ts";
import filmsSaga from "./saga/saga.ts";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		films: filmsReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(filmsSaga);

export default store;
export type AppDispatch = typeof store.dispatch;

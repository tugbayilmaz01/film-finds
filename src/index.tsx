import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "../src/store/index.ts";
import "./index.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);

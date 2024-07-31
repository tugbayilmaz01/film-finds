import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList.tsx";
import MovieDetails from "./components/MovieDetails.tsx";
import Header from "./components/layout/Header.tsx";
import Footer from "./components/layout/Footer.tsx";

import "./App.css";

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-mainColor text-white flex flex-col">
				<Header />
				<main className="flex-grow">
					<Routes>
						<Route path="/" element={<MovieList />} />
						<Route path="/movie/:imdbID" element={<MovieDetails />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;

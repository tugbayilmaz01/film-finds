import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FilmsList from "./components/FilmsList.tsx";
import MovieDetails from "./components/MovieDetails.tsx";
import Header from "./components/layout/Header.tsx";
import Footer from "./components/layout/Footer.tsx";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-gray-900 text-white flex flex-col">
				<Header />
				<main className="flex-grow">
					<Routes>
						<Route path="/" element={<FilmsList />} />
						<Route path="/movie/:imdbID" element={<MovieDetails />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieTable from "../components/layout/Table.tsx";
import Pagination from "../components/Pagination.tsx";

const FilmsList: React.FC = () => {
	const [films, setFilms] = useState<any[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [filtering, setFiltering] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [searchTerm, setSearchTerm] = useState<string>("Pokemon");
	const [year, setYear] = useState<string>("");
	const [type, setType] = useState<string>("");
	const [triggerSearch, setTriggerSearch] = useState<boolean>(true);

	const filmsPerPage = 10;
	const navigate = useNavigate();

	useEffect(() => {
		const fetchMovies = async () => {
			setLoading(true);
			setFiltering(true);
			setError(null);

			try {
				const query = searchTerm.trim() === "" ? "Pokemon" : searchTerm;

				const url = new URL("http://www.omdbapi.com/");
				url.searchParams.append("apikey", "2e1e970c");
				url.searchParams.append("s", query);
				if (year) url.searchParams.append("y", year);
				if (type) url.searchParams.append("type", type);
				url.searchParams.append("page", String(currentPage));

				const response = await fetch(url.toString());
				const data = await response.json();

				if (data.Response === "True") {
					setFilms(data.Search);
				} else {
					setFilms([]);
					setError(data.Error);
				}
			} catch (error) {
				setError("Failed to fetch movies");
			} finally {
				setLoading(false);
				setFiltering(false);
			}
		};

		if (triggerSearch) {
			fetchMovies();
			setTriggerSearch(false);
		}
	}, [searchTerm, year, type, currentPage, triggerSearch]);

	const handleSearch = () => {
		setCurrentPage(1);
		setTriggerSearch(true);
	};

	const handleMovieClick = (imdbID: string) => {
		navigate(`/movie/${imdbID}`);
	};

	const totalPages = Math.ceil(films.length / filmsPerPage);

	return (
		<div className="min-h-screen bg-customBg text-white p-4 manrope">
			<div className="mb-4 flex flex-wrap items-center gap-4">
				<input
					type="text"
					placeholder="Search by name"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="p-2 bg-inputBg text-white rounded"
				/>
				<input
					type="text"
					placeholder="Filter by year"
					value={year}
					onChange={(e) => setYear(e.target.value)}
					className="p-2 bg-inputBg text-white rounded"
				/>
				<select
					value={type}
					onChange={(e) => setType(e.target.value)}
					className="p-2 bg-inputBg text-white rounded"
				>
					<option value="">All</option>
					<option value="movie">Movies</option>
					<option value="series">TV Series</option>
					<option value="episode">Episodes</option>
				</select>
				<button
					onClick={handleSearch}
					className="px-4 py-2 main-green-color hover:bg-main-purple text-black rounded"
				>
					Search
				</button>
			</div>

			{filtering && (
				<div className="flex justify-center items-center my-4">
					<div className="spinner"></div>
				</div>
			)}

			<MovieTable films={films} onMovieClick={handleMovieClick} />
			<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
		</div>
	);
};

export default FilmsList;

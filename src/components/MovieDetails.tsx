import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface MovieDetailsProps {
	Title: string;
	Year: string;
	Genre: string;
	Director: string;
	Actors: string;
	Plot: string;
	Poster: string;
	imdbRating: string;
	Runtime: string;
}

const MovieDetails: React.FC = () => {
	const { imdbID } = useParams<{ imdbID: string }>();
	const [movie, setMovie] = useState<MovieDetailsProps | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchMovieDetails = async () => {
			setLoading(true);
			setError(null);

			try {
				const url = new URL("https://www.omdbapi.com/");
				url.searchParams.append("apikey", "2e1e970c");
				url.searchParams.append("i", imdbID || "");

				const response = await fetch(url.toString());
				const data = await response.json();

				if (data.Response === "True") {
					setMovie(data);
				} else {
					setError(data.Error);
				}
			} catch (error) {
				setError("Failed to fetch movie details");
			} finally {
				setLoading(false);
			}
		};

		fetchMovieDetails();
	}, [imdbID]);

	const renderStars = (rating: string) => {
		const ratingValue = parseFloat(rating);
		const fullStars = Math.floor(ratingValue / 2);
		const halfStar = ratingValue % 2 >= 1;
		const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

		return (
			<div className="flex items-center">
				{Array(fullStars)
					.fill(null)
					.map((_, index) => (
						<span key={index} className="text-yellow-400">
							&#9733;
						</span>
					))}
				{halfStar && <span className="text-yellow-400">&#189;</span>}
				{Array(emptyStars)
					.fill(null)
					.map((_, index) => (
						<span key={index} className="text-gray-400">
							&#9733;
						</span>
					))}
			</div>
		);
	};

	if (loading)
		return (
			<div className="flex justify-center items-center min-h-screen bg-mainColor">
				<div className="spinner"></div>
			</div>
		);
	if (error) return <p className="text-red-500">Error: {error}</p>;

	if (!movie) return <p className="text-white">No movie data found</p>;

	return (
		<div className="min-h-96 bg-mainColor text-white flex justify-center items-center">
			<div className="bg-lightColor manrope rounded-lg  overflow-hidden max-w-5xl w-full flex flex-col md:flex-row">
				<div className="relative w-full md:w-1/3">
					<img
						src={movie.Poster}
						alt={movie.Title}
						className="object-cover h-full w-full rounded-t-lg md:rounded-t-none md:rounded-l-lg"
					/>
				</div>
				<div className="p-6 flex-1 mt-12">
					<h1 className="text-4xl font-bold mb-4 green-text-color">{movie.Title}</h1>
					<div className="mb-4 space-y-2">
						<div className="flex flex-col md:flex-row md:space-x-6">
							<p className="text-lg">{movie.Year}</p>
							<p className="text-lg">{movie.Genre}</p>
							<p className="text-lg">{movie.Runtime}</p>
						</div>
						<div className="text-lg mt-2 flex items-center">
							<strong className="font-semibold">IMDb Rating:</strong>
							<span className="ml-2">{renderStars(movie.imdbRating)}</span>
							<span className="ml-2 text-gray-400">({movie.imdbRating}/10)</span>
						</div>
						<p className="text-lg">
							<strong>Director:</strong> {movie.Director}
						</p>
						<p className="text-lg mt-2">
							<strong className="font-semibold">Cast:</strong> {movie.Actors}
						</p>
					</div>
					<p className="text-lg mt-4">{movie.Plot}</p>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;

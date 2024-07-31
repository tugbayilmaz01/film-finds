import React from "react";

interface MovieCardProps {
	title: string;
	year: string;
	imdbID: string;
	poster: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, year, imdbID, poster }) => {
	return (
		<div className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
			<div className="bg-gray-800 p-2 rounded-lg shadow-lg h-full flex flex-col">
				<img src={poster} alt={title} className="w-full h-64 object-cover rounded-lg" />
				<div className="mt-2 text-center flex-grow">
					<h2 className="text-lg font-semibold">{title}</h2>
					<p className="text-sm text-gray-400">{year}</p>
					<p className="text-sm text-gray-400">{imdbID}</p>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;

import React from "react";
import { useNavigate } from "react-router-dom";

interface MovieTableProps {
	films: {
		Title: string;
		Year: string;
		imdbID: string;
	}[];
	onMovieClick: (imdbID: string) => void;
}

const MovieTable: React.FC<MovieTableProps> = ({ films, onMovieClick }) => {
	return (
		<div className="overflow-x-auto manrope bg-lightColor border-black rounded">
			<table className="min-w-full bg-color text-white rounded-lg overflow-hidden shadow-lg">
				<thead className="bg-color">
					<tr>
						<th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
							Name
						</th>
						<th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
							Release Date
						</th>
						<th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
							IMDb ID
						</th>
					</tr>
				</thead>
				<tbody>
					{films.map((film) => (
						<tr
							key={film.imdbID}
							className="border-b border-gray-700 text-sm cursor-pointer hover:bg-gray-700"
							onClick={() => onMovieClick(film.imdbID)}
						>
							<td className="px-6 py-4 whitespace-nowrap">{film.Title}</td>
							<td className="px-6 py-4 whitespace-nowrap">{film.Year}</td>
							<td className="px-6 py-4 whitespace-nowrap">{film.imdbID}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MovieTable;

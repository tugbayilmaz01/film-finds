import React from "react";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
	const handlePrev = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1);
		}
	};

	return (
		<div className="flex justify-center mt-4">
			<button
				onClick={handlePrev}
				disabled={currentPage === 1}
				className="px-4 py-2 mx-1 bg-gray-700 rounded-lg text-white disabled:opacity-50"
			>
				Previous
			</button>
			<span className="px-4 py-2 mx-1 text-white">
				Page {currentPage} of {totalPages}
			</span>
			<button
				onClick={handleNext}
				disabled={currentPage === totalPages}
				className="px-4 py-2 mx-1 bg-gray-700 rounded-lg text-white disabled:opacity-50"
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;

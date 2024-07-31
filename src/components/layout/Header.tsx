import React from "react";

const Header: React.FC = () => {
	return (
		<header className="bg-customBg text-white py-4 px-6 flex items-center justify-between shadow-md">
			<div className="text-2xl font-bold">
				<a href="/" className="hover:text-purple-300 anton-regular green-text-color">
					Filmfinds.
				</a>
			</div>
			<nav className="hidden md:flex space-x-6 ml-12 ">
				<a href="/" className="hover:text-gray-400 green-text-color">
					Home
				</a>

				<a href="/contact" className="hover:text-gray-400 green-text-color">
					Contact
				</a>
			</nav>
		</header>
	);
};

export default Header;

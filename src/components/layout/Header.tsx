import React from "react";

const Header: React.FC = () => {
	return (
		<header className="bg-customBg text-white py-4 px-6 flex items-center justify-between shadow-md">
			<div className="text-2xl font-bold">
				<a href="/" className="hover:text-purple-300 anton-regular green-text-color">
					Filmfinds.
				</a>
			</div>
		</header>
	);
};

export default Header;

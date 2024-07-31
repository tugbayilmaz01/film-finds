import React, { FC } from "react";

const Footer: FC = () => {
	return (
		<footer className="bg-lightColor text-white py-6">
			<div className="max-w-screen-lg mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-4">
					<div className="text-sm manrope">
						<p className="font-semibold">Contact the Developer:</p>
						<a
							href="mailto:tugbayill01@gmail.com"
							className="text-main-purple hover:underline space-mono-regular"
						>
							tugbayill01@gmail.com
						</a>
					</div>
					<div className="text-center text-sm space-mono-regular">
						<p>
							&copy; {new Date().getFullYear()}
							<span className="green-text-color"> Filmfinds.</span> All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

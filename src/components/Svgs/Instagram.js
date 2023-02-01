import React from "react";

function Instagram({ height, color }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			strokeWidth="1"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather @CssClass feather-instagram"
		>
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
		</svg>
	);
}

export default Instagram;

import React from "react";

function Mail({ height, color }) {
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
			className="feather feather-mail"
		>
			<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
			<polyline points="22,6 12,13 2,6"></polyline>
		</svg>
	);
}

export default Mail;

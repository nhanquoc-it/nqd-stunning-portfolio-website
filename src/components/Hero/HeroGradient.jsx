import React from "react";

const HeroGradient = () => {
	return (
		<div>
			<div className="shadow-cyanMediumShadow absolute top-0 right-[400px] blur-md -z-10 animate-pulse"></div>
			<div className="shadow-orangeMediumShadow absolute top-[5%] left-0 blur-md -z-10 animate-pulse"></div>
			<div className="shadow-orangeMediumShadow absolute top-0 right-0 blur-md -z-10 animate-pulse"></div>
			<div className="shadow-cyanMediumShadow absolute top-[50%] left-0 blur-md -z-10 animate-pulse"></div>
		</div>
	);
};

export default HeroGradient;

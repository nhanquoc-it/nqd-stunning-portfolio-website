import React from "react";
import avatar from "../../../public/profile.jpg";
import { PiCircleDashed } from "react-icons/pi";

const HeroPicture = () => {
	return (
		<div className="h-full flex items-center justify-center">
			<img
				src={avatar}
				alt="Logo Avatar"
				className="max-h-[350px] w-auto rounded-full"
			/>
			<div className="absolute -z-10 flex justify-center items-center animate-pulse">
				<PiCircleDashed className="md:h-[90%] sm:h-[120%] min-h-[500px] w-auto text-orange blur-md animate-[spin_20s_linear_infinite]" />
			</div>
		</div>
	);
};

export default HeroPicture;

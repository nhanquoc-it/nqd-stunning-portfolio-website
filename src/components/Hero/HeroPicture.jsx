import React from "react";
import { PiCircleDashed } from "react-icons/pi";
import { motion } from "motion/react";
import { fadeIn } from "../../frame-motion/variants";
import avatar from "../../../public/profile.jpg";

const HeroPicture = () => {
	return (
		<motion.div
			variants={fadeIn("left", 0.2)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0 }}
			className="h-full flex items-center justify-center"
		>
			<img
				src={avatar}
				alt="Logo Avatar"
				className="max-h-[350px] w-auto rounded-full"
			/>
			<div className="absolute -z-10 flex justify-center items-center animate-pulse">
				<PiCircleDashed className="md:h-[90%] sm:h-[120%] min-h-[500px] w-auto text-orange blur-md animate-[spin_20s_linear_infinite]" />
			</div>
		</motion.div>
	);
};

export default HeroPicture;

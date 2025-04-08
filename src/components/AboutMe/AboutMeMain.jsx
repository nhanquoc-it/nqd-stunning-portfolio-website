import React from "react";
import { motion } from "motion/react";
import { fadeIn } from "../../frame-motion/variants";
import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";

const AboutMeMain = () => {
	return (
		<div
			id="about"
			className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
		>
			<motion.div
				variants={fadeIn("right", 0)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.7 }}
			>
				<AboutMeText />
			</motion.div>
			<motion.div
				variants={fadeIn("left", 0)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.7 }}
			>
				<AboutMeImage />
			</motion.div>
		</div>
	);
};

export default AboutMeMain;

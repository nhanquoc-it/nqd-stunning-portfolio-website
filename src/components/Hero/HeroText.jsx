import React from "react";
import { motion } from "motion/react";
import { fadeIn } from "../../frame-motion/variants";

const HeroText = () => {
	return (
		<div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
			<motion.h2
				variants={fadeIn("down", 0.2)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0 }}
				className="lg:text-2xl sm:text-xl uppercase text-cyan"
			>
				Front-end Developer
			</motion.h2>
			<motion.h1
				variants={fadeIn("right", 0.4)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0 }}
				className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special uppercase text-orange"
			>
				Cap Huu Nhan Quoc
			</motion.h1>
			<motion.p
				variants={fadeIn("up", 0.6)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0 }}
				className="text-lg mt-4 text-white"
			>
				Hi, I'm Quoc, a web developer with a passion for creativity and problem
				solving.
				<br />I specialize in React and Front-end, always looking for ways to
				optimize user experience.
			</motion.p>
		</div>
	);
};

export default HeroText;

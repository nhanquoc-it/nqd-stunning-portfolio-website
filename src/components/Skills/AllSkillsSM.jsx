import React from "react";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { DiSass } from "react-icons/di";

import { motion } from "motion/react";
import { fadeIn } from "../../frame-motion/variants";

const skills = [
	{
		name: "HTML",
		icon: FaHtml5,
	},
	{
		name: "CSS",
		icon: FaCss3Alt,
	},
	{
		name: "JavaScript",
		icon: IoLogoJavascript,
	},
	{
		name: "SASS",
		icon: DiSass,
	},
	{
		name: "ReactJS",
		icon: FaReact,
	},
	{
		name: "Redux",
		icon: SiRedux,
	},
	{
		name: "Bootstrap",
		icon: BsBootstrapFill,
	},
	{
		name: "TailwindCSS",
		icon: RiTailwindCssFill,
	},
];

const AllSkillsSM = () => {
	return (
		<div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 py-12">
			{skills.map((item, index) => {
				return (
					<motion.div
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.7 }}
						key={index}
						className="flex flex-col items-center"
					>
						<item.icon className="text-7xl text-orange" />
						<p className="text-center mt-4 text-white">{item.name}</p>
					</motion.div>
				);
			})}
		</div>
	);
};

export default AllSkillsSM;

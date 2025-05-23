import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";

import { motion } from "motion/react";
import { fadeIn } from "../../frame-motion/variants";

const projects = [
	{
		name: "Vacation of Africa",
		year: "Mar2022",
		align: "right",
		image: "public/images/website-img-1.jpg",
		link: "#",
	},
	{
		name: "Moola App",
		year: "Sept2022",
		align: "left",
		image: "public/images/website-img-2.webp",
		link: "#",
	},
	{
		name: "Tourzania",
		year: "Jan2023",
		align: "right",
		image: "/public/images/website-img-3.jpg",
		link: "#",
	},
	{
		name: "Bank of Luck",
		year: "May2024",
		align: "left",
		image: "/public/images/website-img-4.jpg",
		link: "#",
	},
];

const ProjectMain = () => {
	return (
		<div id="project">
			<motion.div
				variants={fadeIn("down", 0.2)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.7 }}
			>
				<ProjectText />
			</motion.div>
			<div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
				{projects.map((project, index) => {
					return (
						<SingleProject
							key={index}
							name={project.name}
							year={project.year}
							align={project.align}
							image={project.image}
							link={project.link}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectMain;

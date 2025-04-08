import React from "react";
import { Link } from "react-scroll";

const AboutMeText = () => {
	return (
		<div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
			<h3 className="text-6xl text-cyan mb-10">About Me</h3>
			<p className="text-white">
				As a user interface designer, I am passionate about creating easy and
				friendly online experiences, with the goal of building innovative and
				user-friendly websites. My goal is to develop my programming skills to
				be able to create innovative web products, while bringing practical
				values ​​to the community and businesses.
			</p>
			<Link
				spy={true}
				smooth={true}
				durLinktion={500}
				offset={-120}
				to="project"
			>
				<button className="border text-white border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center hover:text-cyan">
					My Projects
				</button>
			</Link>
		</div>
	);
};

export default AboutMeText;

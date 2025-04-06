import React from "react";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import SingleSkill from "./SingleSkill";
import { BsBootstrapFill } from "react-icons/bs";
import { DiSass } from "react-icons/di";

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

const AllSkills = () => {
	return (
		<>
			<div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
				{skills.map((item, index) => {
					return (
						<SingleSkill key={index} text={item.name} imgSvg={<item.icon />} />
					);
				})}
			</div>
		</>
	);
};

export default AllSkills;

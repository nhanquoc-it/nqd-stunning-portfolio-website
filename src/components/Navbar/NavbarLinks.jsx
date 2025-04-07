import React from "react";
import { Link } from "react-scroll";

const links = [
	{ name: "About Me", section: "about" },
	{ name: "Skills", section: "skills" },
	{ name: "Experience", section: "experience" },
	{ name: "Projects", section: "project" },
	{ name: "Contact", section: "contact" },
];

const NavbarLinks = () => {
	return (
		<ul className="flex gap-6 text-white font-bold text-center py-4 lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:texl-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full">
			{links.map((link, index) => {
				return (
					<li key={index} className="group">
						<Link
							spy={true}
							smooth={true}
							durLinktion={500}
							offset={-120}
							to={link.section}
							className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
						>
							{link.name}
						</Link>
						<div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-300"></div>
					</li>
				);
			})}
		</ul>
	);
};

export default NavbarLinks;

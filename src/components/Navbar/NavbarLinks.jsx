import React from "react";

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
						<a
							href="#"
							className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
						>
							{link.name}
						</a>
						<div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-300"></div>
					</li>
				);
			})}
		</ul>
	);
};

export default NavbarLinks;

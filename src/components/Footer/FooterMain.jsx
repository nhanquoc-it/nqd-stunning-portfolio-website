import React from "react";
import { Link } from "react-scroll";

const links = [
	{ name: "About Me", section: "about" },
	{ name: "Skills", section: "skills" },
	{ name: "Experience", section: "experience" },
	{ name: "Projects", section: "project" },
	{ name: "Contact", section: "contact" },
];

const FooterMain = () => {
	return (
		<div className="px-4">
			<div className="w-full h-[1px] bg-lightGrey mt-24"></div>
			<div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
				<p className="text-3xl text-lightGrey">Nhan Quoc Dev</p>
				<ul className="flex gap-4 text-lightGrey text-xl">
					{links.map((item, index) => {
						return (
							<li key={index}>
								<Link
									spy={true}
									smooth={true}
									duration={500}
									offset={-120}
									to={item.section}
									className="hover:text-white transition-all duration-500 cursor-pointer"
								>
									{item.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
				&copy; 2025 Nhan Quoc Dev || All Right Reserved.
			</p>
		</div>
	);
};

export default FooterMain;

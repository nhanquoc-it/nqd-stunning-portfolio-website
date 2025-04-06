import React from "react";

const AboutMeText = () => {
	return (
		<div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
			<h3 className="text-6xl text-cyan mb-10">About Me</h3>
			<p className="text-white">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam
				amet possimus quos et, voluptate veniam molestiae, vero, libero commodi
				culpa explicabo alias? Deleniti distinctio quae reiciendis vero. Sit
				ratione consequatur aut dolor minus neque animi itaque dolores
				accusantium totam numquam qui, aliquid vero sed distinctio iusto
				officiis mollitia omnis.
			</p>
			<button className="border text-white border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center hover:text-cyan">
				My Projects
			</button>
		</div>
	);
};

export default AboutMeText;

import React from "react";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

import { motion } from "motion/react";
import { fadeIn } from "../../frame-motion/variants";

const ContactMeMain = () => {
	return (
		<div
			id="contact"
			className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4"
		>
			<motion.h3
				variants={fadeIn("down", 0)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.7 }}
				className="text-6xl text-cyan mb-10 text-center"
			>
				Contact Me
			</motion.h3>
			<div className="flex justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col">
				<ContactMeLeft />
				<ContactMeRight />
			</div>
		</div>
	);
};

export default ContactMeMain;

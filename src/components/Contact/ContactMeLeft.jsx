import React from "react";
import ContactText from "./ContactText";
import ContactForm from "./ContactForm";

import { motion } from "motion/react";
import { fadeIn } from "../../frame-motion/variants";

const ContactMeLeft = () => {
	return (
		<motion.div
			variants={fadeIn("right", 0)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.7 }}
			className="flex flex-col gap-8 w-full"
		>
			<ContactText />
			<ContactForm />
		</motion.div>
	);
};

export default ContactMeLeft;

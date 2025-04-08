import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

import { motion } from "motion/react";
import { fadeIn } from "../../frame-motion/variants";

const ContactMeRight = () => {
	return (
		<motion.div
			variants={fadeIn("left", 0)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.7 }}
			className="flex flex-col items-center justify-center gap-12"
		>
			<img
				src="public/images/email-image.png"
				alt="Email Image"
				className="max-w-[300px]"
			/>
			<ContactInfo />
			<ContactSocial />
		</motion.div>
	);
};

export default ContactMeRight;

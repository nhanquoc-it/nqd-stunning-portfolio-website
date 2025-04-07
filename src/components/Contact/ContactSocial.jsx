import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactSocial = () => {
	return (
		<div className="flex gap-4">
			<SingleContactSocial link="#" Icon={FaLinkedin} />
			<SingleContactSocial link="#" Icon={FaGithub} />
			<SingleContactSocial link="#" Icon={FaInstagram} />
		</div>
	);
};

export default ContactSocial;

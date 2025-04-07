import React from "react";
import SingleInfo from "./SingleInfo";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

const ContactInfo = () => {
	return (
		<div className="flex flex-col gap-4">
			<SingleInfo text="caphuunhanquoc2510@gmail.com" Icon={HiOutlineMail} />
			<SingleInfo text="+84 83 5214 619" Icon={FiPhone} />
			<SingleInfo text="Ba Ria - Vung Tau" Icon={IoLocationOutline} />
		</div>
	);
};

export default ContactInfo;

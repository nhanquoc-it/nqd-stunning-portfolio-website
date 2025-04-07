import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [success, setSuccess] = useState("");

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleMessage = (e) => {
		setMessage(e.target.value);
	};

	const form = useRef();
	const YOUR_SERVICE_ID = "service_f5zcudr";
	const YOUR_TEMPLATE_ID = "template_x9qawwy";
	const YOUR_PUBLIC_KEY = "BmatoyHwg-YDDz-lB";

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
				publicKey: YOUR_PUBLIC_KEY,
			})
			.then(
				() => {
					setName("");
					setEmail("");
					setMessage("");
					setSuccess("Message Sent Successfully!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};

	return (
		<div>
			<form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
				<input
					type="text"
					name="user_name"
					placeholder="Your Name"
					required
					className="h-12 rounded-lg bg-lightBrown px-2"
					value={name}
					onChange={handleName}
				/>
				<input
					type="email"
					name="user_email"
					placeholder="Your Email"
					required
					className="h-12 rounded-lg bg-lightBrown px-2"
					value={email}
					onChange={handleEmail}
				/>
				<textarea
					type="text"
					placeholder="Message"
					rows="9"
					cols="50"
					name="user_message"
					required
					className="rounded-lg bg-lightBrown p-2"
					value={message}
					onChange={handleMessage}
				></textarea>
				<button
					type="submit"
					className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
				>
					Send
				</button>
				<p className="text-cyan text-center">{success}</p>
			</form>
		</div>
	);
};

export default ContactForm;

"use client";
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import Input from "../../../Shared/Input";
import Loader from "../../../Shared/Loader";
import emailjs from "@emailjs/browser";

function MailPopUp({ show, hide }) {
	const [copied, setCopied] = useState(false);
	const [recentMail, setRecentMail] = useState(true); // assume allowed initially
	const [mailData, setMailData] = useState({
		name: "",
		mailId: "",
		message: "",
	});
	const [isSendingMailValid, setIsSendingMailValid] = useState({
		mailingName: false,
		mailingID: false,
		mailingMessage: false,
	});
	const [loading, setLoading] = useState(false);
	const mailForm = useRef();

	useEffect(() => {
		const localStorageDate = localStorage.getItem("lastMailSent");
		if (!localStorageDate) {
			setRecentMail(true);
			return;
		}
		const prevDate = new Date(localStorageDate).getTime();
		const newDate = new Date().getTime();
		const diff = Math.abs(newDate - prevDate) / (1000 * 60 * 60); // hours
		setRecentMail(diff > 6);
	}, [show]);

	const handleChange = (e) => {
		setIsSendingMailValid({
			mailingName: false,
			mailingID: false,
			mailingMessage: false,
		});
		setMailData((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
	};

	const cancelMail = () => {
		setIsSendingMailValid({});
		setMailData({
			name: "",
			mailId: "",
			message: "",
		});
		hide();
	};

	const validateMailDetail = () => {
		const mailingName = mailData.name.trim()?.length <= 1;
		const mailingID = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mailData.mailId);
		const mailingMessage = mailData.message.trim()?.length < 10;

		setIsSendingMailValid({
			mailingName,
			mailingID,
			mailingMessage,
		});

		return !mailingName && !mailingID && !mailingMessage;
	};

	const sendMailApi = async () => {
		try {
			setLoading(true);
			await emailjs.send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_CONTACT_ID,
				mailData,
				process.env.REACT_APP_EMAILJS_USER_ID
			);
			localStorage.setItem("lastMailSent", new Date());
			setRecentMail(false); // lock out future mails until cooldown
			cancelMail();
		} catch (error) {
			console.error("Failed to send email:", error);
		} finally {
			setLoading(false);
		}
	};

	const sendMail = async () => {
		if (!recentMail) return;
		const isValid = await validateMailDetail();
		if (isValid) {
			sendMailApi();
		}
	};

	const copyContent = async () => {
		try {
			await navigator.clipboard.writeText("mrinalspec@gmail.com");
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	};

	const errorInMail = (msg) => <div className="errorMail">{msg}</div>;

	return (
		<div className="c2-contact contact-container">
			<Modal isOpen={show} onClose={hide} className="modelContainer">
				<ModalContent>
					<ModalHeader>
					<div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
						<div>
							<span onClick={hide} title="Close" className="modelHeaderMenuAlert modelIcons">
								<i className="fa fa-solid fa-xmark"></i>
							</span>
						</div>
						<div className="modelHeaderMenu d-flex">
							<span
								onClick={cancelMail}
								title="Discard"
								className={`${!recentMail ? "disabledLink" : ""} modelHeaderMenuAlert modelIcons`}
							>
								<i className="fa fa-solid fa-trash"></i>
							</span>
							<span
								onClick={sendMail}
								title="Send"
								className={`${!recentMail ? "disabledLink" : ""} modelHeaderMenuConfirm modelIcons`}
							>
								<i className="fa fa-solid fa-paper-plane"></i>
							</span>
							<span
								title="It's Dummy :)"
								className={`${!recentMail ? "disabledLink" : ""} modelHeaderMenuDummy modelIcons`}
							>
								<i className="fa fa-solid fa-ellipsis-vertical"></i>
							</span>
						</div>
					</div>
					</ModalHeader>
					<ModalBody>
					{recentMail ? (
						<>
							<div className="inputFieldsAlign" ref={mailForm}>
								<div>
									<Input id="recipient" type="text" name="To" value="mrinalspec@gmail.com" disabled={true} />
									<i
										className={`fa fa-copy copyClipboard ${copied ? "copiedField" : ""}`}
										onClick={copyContent}
										title={copied ? "Copied!" : "Copy Mail ID"}
									></i>
								</div>

								<div>
									<Input
										id="mailId"
										type="email"
										name="From"
										value={mailData.mailId}
										onChange={handleChange}
										required
										autoFocus
									/>
									{isSendingMailValid.mailingID &&
										errorInMail("Hey, there is some issue with the Mail provided please verify it!")}
								</div>

								<div>
									<Input id="name" type="text" name="Name" value={mailData.name} onChange={handleChange} required />
									{isSendingMailValid.mailingName && errorInMail("Hey, You need to put your name here.")}
								</div>
							</div>

							<div className="mailMessageBox">
								<textarea
									id="message"
									type="text"
									name="Message"
									placeholder="Write a Message ..."
									value={mailData.message}
									onChange={handleChange}
									required
								></textarea>
								{isSendingMailValid.mailingMessage && errorInMail("Come on, at least share 10 characters.")}
							</div>
						</>
					) : (
						<div className="alreadyMailSent">
							<h1>
								<i className="fa-solid fa-envelope-circle-check" style={{ color: "#6ad920" }}></i>
							</h1>
							<p>You've recently sent an email in the last six hours. Please await a response.</p>
							<p>
								If you'd still like to send another,{" "}
								<span className="resendMial" onClick={() => setRecentMail(true)}>
									click here
								</span>
								.
							</p>
						</div>
					)}
					</ModalBody>
				</ModalContent>
			</Modal>
			{loading && <Loader />}
		</div>
	);
}

MailPopUp.propTypes = {
	show: PropTypes.bool.isRequired,
	hide: PropTypes.func.isRequired,
};

export default MailPopUp;

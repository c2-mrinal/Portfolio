import React, { useState, useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Input from "../../../Shared/Input";
import Loader from "../../../Shared/Loader";
import emailjs from "@emailjs/browser";

function MailPopUp(props) {
	const [Copied, setCopied] = useState(false);
	const [RecentMail, setRecentMail] = useState(false);
	const [MailData, setMailData] = useState({
		name: "",
		mailId: "",
		message: "",
	});
	const [IsSendingMailValid, setIsSendingMailValid] = useState({
		mailingName: false,
		mailingID: false,
		mailingMessage: false,
	});
	const mailForm = useRef();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		return () => {
			const localStorageDate = localStorage.getItem("lastMailSent");
			let prevDate = new Date(localStorageDate).getTime();
			let newDate = new Date().getTime();
			const diff = Math.abs(newDate - prevDate) / (1000 * 60 * 60);
			if (diff > 6) {
				setRecentMail(true);
			} else {
				setRecentMail(false);
			}
		};
	}, [props]);

	const handleChange = (val) => {
		setIsSendingMailValid({
			mailingName: false,
			mailingID: false,
			mailingMessage: false,
		});
		setMailData((prevVal) => ({
			...prevVal,
			[val.target.id]: val.target.value,
		}));
	};
	const cancelMail = () => {
		setIsSendingMailValid({});
		setMailData(
			{
				name: "",
				mailId: "",
				message: "",
			},
			props.hide()
		);
	};
	const validateMailDetail = () => {
		const mailingName = MailData.name.trim()?.length <= 1;

		const mailingID = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(MailData.mailId);
		const mailingMessage = MailData.message.trim()?.length < 10;
		setIsSendingMailValid({
			mailingName: mailingName,
			mailingID: mailingID,
			mailingMessage: mailingMessage,
		});
		return !mailingName && !mailingID && !mailingMessage;
	};
	const sendMailApi = async () => {
		try {
			setLoading(true);
			emailjs
				.send(
					process.env.REACT_APP_EMAILJS_SERVICE_ID,
					process.env.REACT_APP_EMAILJS_TEMPLATE_CONTACT_ID,
					MailData,
					process.env.REACT_APP_EMAILJS_USER_ID
				)
				.then(
					(result) => {
						cancelMail();
						localStorage.setItem("lastMailSent", new Date());
						setRecentMail(true);
					},
					(error) => {
						console.error("Failed to send email:", error);
					}
				);
		} catch (error) {
			console.error("An error occurred while sending email:", error);
		} finally {
			setLoading(false);
		}
	};

	const sendMail = async () => {
		const isValid = await validateMailDetail();
		if (isValid) {
			sendMailApi();
		}
	};

	const errorInMail = (msg) => {
		return <div className="errorMail">{msg}</div>;
	};
	const copyContent = async () => {
		try {
			await navigator.clipboard.writeText("mrinalspec@gmail.com");
			setCopied(true);
			setTimeout(() => {
				setCopied(false);
			}, 2000);
			console.log("Content copied to clipboard");
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	};

	return (
		<div>
			<Modal show={props.show} onHide={props.hide} className="modelContainer">
				<Modal.Header>
					<div>
						<span onClick={props.hide} title="Close" className="modelHeaderMenuAlert modelIcons">
							<i className="fa fa-solid fa-xmark"></i>{" "}
						</span>
					</div>
					<div className="modelHeaderMenu d-flex">
						<span
							onClick={cancelMail}
							title="Discard"
							className={`${!RecentMail ? "disabledLink" : ""} modelHeaderMenuAlert modelIcons`}
						>
							<i className=" fa fa-solid fa-trash"></i>
						</span>
						<span
							onClick={sendMail}
							title="Send"
							className={`${!RecentMail ? "disabledLink" : ""} modelHeaderMenuConfirm modelIcons`}
						>
							<i className="fa fa-solid fa-paper-plane"></i>
						</span>
						<span
							title="Its Dummy : )"
							className={`${!RecentMail ? "disabledLink" : ""} modelHeaderMenuDummy modelIcons`}
						>
							<i className=" fa fa-solid fa-ellipsis-vertical"></i>{" "}
						</span>
					</div>
				</Modal.Header>
				<Modal.Body>
					{RecentMail ? (
						<>
							<div className="inputFieldsAlign" ref={mailForm}>
								<div>
									<Input
										id="name"
										type="text"
										name="To"
										value={"mrinalspec@gmail.com"}
										onChange={handleChange}
										disabled={true}
									/>
									<i
										className={`fa fa-copy copyClipboard ${Copied ? " copiedField " : ""}`}
										onClick={copyContent}
										title="Copy Mail ID"
									></i>
								</div>

								<div>
									<Input
										id="mailId"
										type="mail"
										name="From"
										value={MailData.mailId}
										onChange={handleChange}
										required={true}
										autoFocus={true}
									/>
									<>
										{IsSendingMailValid.mailingID &&
											errorInMail("Hey, there is some issue with the Mail provided please verify it !!!")}
									</>
								</div>
								<div>
									<Input
										id="name"
										type="text"
										name="Name"
										value={MailData.name}
										onChange={handleChange}
										required={true}
									/>
									<>{IsSendingMailValid.mailingName && errorInMail("Hey, You need to put you name here.")}</>
								</div>
							</div>
							<div className="mailMessageBox">
								<textarea
									id="message"
									type="text"
									name="Message"
									placeholder="Write a Message ..."
									value={MailData.message}
									onChange={handleChange}
									required={true}
								></textarea>
								<>{IsSendingMailValid.mailingMessage && errorInMail("Come On atleast share 5 characters.")}</>
							</div>
						</>
					) : (
						<div className="alreadyMailSent">
							<h1>
								<i className="fa-solid fa-envelope-circle-check" style={{ color: "#6ad920" }}></i>
							</h1>
							<p>You've recently sent an email in the last six hours. Please feel free to await my response.</p>
							<p>
								Should you wish to send another email, you may do so by{" "}
								<span
									className="resendMial"
									onClick={() => {
										setRecentMail(true);
									}}
								>
									clicking here
								</span>
								.
							</p>
						</div>
					)}
				</Modal.Body>
			</Modal>
			{loading && <Loader />}
		</div>
	);
}

export default MailPopUp;

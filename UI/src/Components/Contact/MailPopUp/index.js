import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Input from "../../../Shared/Input";
import Loader from "../../../Shared/Loader";
// import SendIcon from "@material-ui/icons/Send";
// import CloseIcon from "@material-ui/icons/Close";
// import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function MailPopUp(props) {
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

			console.log(localStorageDate, prevDate, newDate, diff);
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

	const sendMail = async () => {
		const isValid = await validateMailDetail();

		if (isValid) {
			setLoading(true);
			const rawResponse = await fetch("/api/sendMail", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(MailData),
			});
			if (rawResponse.succes) {
				localStorage.setItem("lastMailSent", new Date());
			}
			setLoading(false);
		}
	};
	const errorInMail = (msg) => {
		return <div className="errorMail">{msg}</div>;
	};

	return (
		<div>
			<Modal show={props.show} onHide={props.hide}>
				<Modal.Header>
					<div>
						<span onClick={props.hide} title="Close" className="modelHeaderMenuAlert">
							<i className="fa-2x fa-solid fa-xmark"></i>{" "}
						</span>
					</div>
					<div className="modelHeaderMenu">
						<span
							onClick={cancelMail}
							title="Discard"
							className={`${!RecentMail ? "disabledLink" : ""} modelHeaderMenuAlert`}
						>
							<i className=" fa-2x fa-solid fa-trash"></i>
						</span>
						<span
							onClick={sendMail}
							title="Send"
							className={`${!RecentMail ? "disabledLink" : ""} modelHeaderMenuConfirm`}
						>
							<i className="fa-2x fa-solid fa-paper-plane"></i>
						</span>
						<span title="Its Dummy : )" className={`${!RecentMail ? "disabledLink" : ""} modelHeaderMenuDummy`}>
							<i className=" fa-2x fa-solid fa-ellipsis-vertical"></i>{" "}
						</span>
					</div>
				</Modal.Header>
				<Modal.Body>
					{RecentMail ? (
						<>
							<div className="inputFieldsAlign">
								<div>
									<Input
										id="name"
										type="text"
										name="To"
										value={"mrinalspec@gmail.com"}
										onChange={handleChange}
										disabled={true}
									/>
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
									placeholder="Compose Message"
									value={MailData.message}
									onChange={handleChange}
									required={true}
								></textarea>
								<>{IsSendingMailValid.mailingMessage && errorInMail("Come On atleast share 5 characters.")}</>
							</div>
						</>
					) : (
						<div className="alreadyMailSent">
							<p>You've already sent an email within the past six hours. You are free to wait for my response. </p>
							<p>
								If you still want to send another email,{" "}
								<span
									className="resendMial"
									onClick={() => {
										setRecentMail(true);
									}}
								>
									click here
								</span>
								.{" "}
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

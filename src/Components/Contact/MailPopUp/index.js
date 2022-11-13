import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Input from "../../../Shared/Input";
import SendIcon from "@material-ui/icons/Send";
import CloseIcon from "@material-ui/icons/Close";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function MailPopUp(props) {
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

  const handleChange = (val) => {
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
    const mailingName = MailData.name.trim().length < 1;

    const mailingID = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(MailData.mailId);
    const mailingMessage = MailData.message.trim().length < 10;
    setIsSendingMailValid(
      {
        mailingName: mailingName,
        mailingID: mailingID,
        mailingMessage: mailingMessage,
      },
      console.log(mailingID, IsSendingMailValid)
    );
    return mailingName || mailingID || mailingMessage;
  };

  const sendMail = () => {
    const isValid = validateMailDetail();
  };
  const errorInMail = (msg) => {
    return <div className="errorMail">{msg}</div>;
  };

  return (
    <div>
      <Modal show={props.show} onHide={props.hide}>
        <Modal.Header>
          <div>
            <span
              onClick={props.hide}
              title="Close"
              className="modelHeaderMenuAlert"
            >
              <CloseIcon fontSize="large" />
            </span>
          </div>
          <div className="modelHeaderMenu">
            <span
              onClick={cancelMail}
              title="Discard"
              className="modelHeaderMenuAlert"
            >
              <DeleteForeverIcon fontSize="large" />
            </span>

            <span
              onClick={sendMail}
              title="Send"
              className="modelHeaderMenuConfirm"
            >
              <SendIcon fontSize="large" />
            </span>
            <MoreHorizIcon />
          </div>
        </Modal.Header>
        <Modal.Body>
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
                  errorInMail(
                    "Hey, there is some issue with the Mail provided please verify it !!!"
                  )}
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
              <>
                {IsSendingMailValid.mailingName &&
                  errorInMail("Hey, You need to put you name here.")}
              </>
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
            <>
              {IsSendingMailValid.mailingMessage &&
                errorInMail("Come On atleast share 5 characters.")}
            </>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MailPopUp;

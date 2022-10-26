import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Input from "../../../Shared/Input";
import Textarea from "../../../Shared/TextArea";

function MailPopUp(props) {
  const [MailData, setMailData] = useState({
    name: "",
    mailId: "",
    message: "",
  });

  const handleChange = (val) => {
    setMailData((prevVal) => ({
      ...prevVal,
      [val.target.id]: val.target.value,
    }));
  };
  const cancelMail = () => {
    setMailData(
      {
        name: "",
        mailId: "",
        message: "",
      },
      props.hide()
    );
  };
  const sendMail = () => {};

  return (
    <div>
      <Modal show={props.show} onHide={props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            id="name"
            type="text"
            name="Your Name"
            value={MailData.name}
            onChange={handleChange}
            required={true}
          />
          <Input
            id="mailId"
            type="mail"
            name="Your Mail"
            value={MailData.mailId}
            onChange={handleChange}
            required={true}
          />
          <Textarea
            id="message"
            type="text"
            name="Message"
            value={MailData.message}
            onChange={handleChange}
            required={true}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button type="cancel" variant="secondary" onClick={cancelMail}>
            Discard
          </Button>
          <Button type="submit" variant="primary" onClick={sendMail}>
            Send Mail
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MailPopUp;

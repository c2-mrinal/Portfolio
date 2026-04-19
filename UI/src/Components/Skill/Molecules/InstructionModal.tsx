import React from "react";
import { Modal, ModalBody, ModalContent } from "@nextui-org/react";

interface InstructionModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export function InstructionModal({ isOpen, onClose }: InstructionModalProps) {
	return (
		<Modal isOpen={isOpen} onClose={onClose} className="modelContainer">
			<ModalContent>
				<ModalBody>
					<ul className="alert-ul">
						<li>
							<span className="alert-emoji">&#x1F913;</span>
							<span>Hover over the bubble to explore additional skill details.</span>
						</li>
						<li>
							<span className="alert-emoji">&#128515;</span>
							<span>Drag the bubble to interact and have fun with them.</span>
						</li>
					</ul>
					<h6 onClick={onClose}>close</h6>
					<div className="pointingTri"></div>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}

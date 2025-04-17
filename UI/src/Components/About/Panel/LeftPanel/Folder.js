import React, { useState, useEffect, useRef } from "react";
import "./leftPanel.css";

function Folder({ explorer, selectedFolder, folderSelected }) {
	const [isExpanded, setIsExpanded] = useState(false);
	const contentRef = useRef(null);

	useEffect(() => {
		if (explorer?.isOpen) {
			setIsExpanded(true);
		}
	}, [explorer]);

	const handleClick = () => {
		setIsExpanded((prev) => !prev);

		if (!explorer?.isFolder) {
			folderSelected({
				category: explorer.category,
				name: explorer.name,
				value: explorer.value,
			});
		}
	};

	useEffect(() => {
		const el = contentRef.current;
		if (!el) return;

		if (isExpanded) {
			// Step 1: From 0 to scrollHeight
			el.style.height = el.scrollHeight + "px";

			// Step 2: After transition, set to auto
			const transitionEnd = () => {
				el.style.height = "auto";
				el.removeEventListener("transitionend", transitionEnd);
			};
			el.addEventListener("transitionend", transitionEnd);
		} else {
			// Step 1: Set current height before collapsing
			el.style.height = el.scrollHeight + "px";

			// Step 2: Force reflow to apply previous height
			void el.offsetHeight;

			// Step 3: Set to 0 to animate collapse
			el.style.height = "0px";
		}
	}, [isExpanded]);

	const isSelected = selectedFolder?.value && explorer?.value && selectedFolder?.value === explorer?.value;

	return (
		<div className="folder-container">
			<div className={`folder-header ${isSelected ? "folder-selected" : ""}`} onClick={handleClick}>
				{explorer?.isFolder && <i className={`fa-solid ${isExpanded ? "fa-chevron-down" : "fa-chevron-right"}`} />}
				<span className="folder-label">{explorer?.name}</span>
			</div>

			<div className="folder-content-wrapper" ref={contentRef}>
				<div className="folder-content-inner">
					{explorer?.items?.map((child) => (
						<Folder key={child.name} explorer={child} selectedFolder={selectedFolder} folderSelected={folderSelected} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Folder;

import React, { useState, useEffect } from "react";

function Folder({ explorer, selectedFolder, folderSelected }) {
	const [expand, setExpand] = useState(false);

	useEffect(() => {
		if (explorer && explorer.isOpen) {
			setExpand(true);
		}
	}, explorer);

	const selectedAboutField = () => {
		setExpand(!expand);
		if (!explorer.isFolder) {
			const folderParams = {
				category: explorer.category,
				name: explorer.name,
				value: explorer.value,
			};
			folderSelected(folderParams);
		}
	};

	return (
		<div>
			<div
				className={`folderTreeExpandable ${selectedFolder.name === explorer.name ? "treeNodeSelected" : ""}`}
				onClick={selectedAboutField}
			>
				<span className="folderTreeNode">
					{" "}
					{explorer?.isFolder && (
						<>
							{expand ? (
								<i class="fa-solid fa-angles-down treeNodeSelected"></i>
							) : (
								<i class="fa-solid fa-caret-right"></i>
							)}
						</>
					)}{" "}
				</span>
				<span className="folderTreeNode">{explorer?.name}</span>
			</div>

			<br />
			<div style={{ display: expand ? "block" : "none", paddingLeft: 15 }}>
				{explorer &&
					explorer.items?.map((explore) => (
						<Folder
							key={explore.name}
							explorer={explore}
							selectedFolder={selectedFolder}
							folderSelected={folderSelected}
						/>
					))}
			</div>
		</div>
	);
}

export default Folder;

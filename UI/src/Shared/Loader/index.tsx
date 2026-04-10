import React from "react";
import "./loader.css";
import ring from "../../image/ring.png";
import c2Icon from "../../image/c2Icon.png";

function Loader() {
	return (
		<div className="loaderBackgroung">
			<div className="loader-box">
				<img className="loader-ring" src={ring.src} alt="loading ... " />
				<img className="loader-c2icon" src={c2Icon.src} alt="loading ... " />
			</div>
		</div>
	);
}

export default Loader;

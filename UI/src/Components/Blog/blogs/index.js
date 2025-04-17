import React from "react";
import { useLocation } from "react-router-dom";
import HooksCheatsheet from "./HooksCheatsheet";
import NotFound from "../../../Shared/NotFound";

const BlogRouting = () => {
	const location = useLocation();
	const renderComponent = (path) => {
		switch (path) {
			case "/blog/react-hooks-cheatsheet":
				return <HooksCheatsheet />;

			default:
				return <NotFound />;
		}
	};

	return <div>{renderComponent(location.pathname)}</div>;
};

export default BlogRouting;

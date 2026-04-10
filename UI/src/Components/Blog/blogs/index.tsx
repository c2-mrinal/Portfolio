import React from "react";
import { usePathname } from "next/navigation";
import HooksCheatsheet from "./HooksCheatsheet";
import NotFound from "../../../Shared/NotFound";

const BlogRouting = () => {
	const pathname = usePathname();
	const renderComponent = (path) => {
		switch (path) {
			case "/blog/react-hooks-cheatsheet":
				return <HooksCheatsheet />;

			default:
				return <NotFound />;
		}
	};

	return <div>{renderComponent(pathname)}</div>;
};

export default BlogRouting;

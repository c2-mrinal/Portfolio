import React from "react";

interface AnimatedTextLineProps {
	text: string;
	headerClass: string;
    spanClassNamePattern?: "text-ind" | "empty";
	getLeftStyle: (ind: number) => string;
}

const AnimatedTextLine: React.FC<AnimatedTextLineProps> = ({ text, headerClass, spanClassNamePattern, getLeftStyle }) => {
	return (
		<h1 className={headerClass}>
			{text.split("").map((val, ind) => {
				return (
					<span
						key={ind}
						className={spanClassNamePattern === "text-ind" ? `text${ind}` : ""}
						style={{ left: getLeftStyle(ind) }}
					>
						{" "}{val}{" "}
					</span>
				);
			})}
		</h1>
	);
};

export default AnimatedTextLine;

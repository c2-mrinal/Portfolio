import React from "react";
import pointerGif from "../../../image/invertedArrowPointing.gif";
import DownloadButton from "../Atoms/DownloadButton";
import IntroTypography from "../Molecules/IntroTypography";

interface IntroHeroProps {
    downloading: boolean;
    downloadSuccess: boolean;
    downloadResume: () => void;
}

export default function IntroHero({ downloading, downloadSuccess, downloadResume }: IntroHeroProps) {
	return (
		<section className=" intoSection ">
			<div className="resumeDownloadContainer">
				<DownloadButton 
					downloading={downloading} 
					downloadSuccess={downloadSuccess} 
					onClick={downloadResume} 
				/>
				<div>
					<img
						src={pointerGif.src ? pointerGif.src : pointerGif as any}
						className="pointingArrow"
						style={{ display: pointerGif ? "block" : "none" }}
						alt="error"
					/>
				</div>
			</div>
			
			<IntroTypography />
		</section>
	);
}

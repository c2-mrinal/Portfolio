import React from "react";

export default function Library(props) {
	const { data } = props;
	console.log(data);

	return (
		<div className="libraryContaner">
			{data?.data &&
				data.data.map((val) => {
					return (
						<div class="card libCard">
							<h5 class="card-header">
								{val.name}
								<span className="linkContainer">
									<a href={val?.url} target="_blank" rel="noopener noreferrer">
										<i className="libExternalLink fa-solid fa-arrow-up-right-from-square"></i>
									</a>
								</span>
							</h5>
							<div class="card-body">
								<h5 class="card-title">Purpose&Use</h5>
								<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
							</div>
						</div>
					);
				})}
		</div>
	);
}

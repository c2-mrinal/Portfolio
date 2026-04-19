export const halfStar = `<i class="fa-solid fa-star-half"></i>`;
export const oneStar = `<i class="fa-solid fa-star"></i>`;

export const getStarsHtml = (val: number) => {
	let starList = "";
	while (val > 0) {
		starList += val < 1 ? halfStar : oneStar;
		val -= 1;
	}
	return starList;
};

export const getSkillTooltipHtml = (d: any) => {
	return `
    <div class="bubble">
      <div class="bubbleTooltip">
        <h5 class="tooltipHeader">
			<span>Skill</span> 
			<span>
			<i class="${d.icon}" ></i>
			<strong class="bubbleStrong"> ${d.label}</strong> 
			</span>
		</h5>
      </div>
	${
		d.experience?.length > 0
			? `<div class="bubbleTooltip">
		<h5 class="tooltipHeader">
			<span>Active </span> 
			<span>
				<em>since ${d.experience}</em>
			</span>
		</h5>
	</div>`
			: ""
	}
      <div class="bubbleTooltip">
        <h5 class="tooltipHeader">
		<span>Proficiency </span>
		<span>${getStarsHtml(d.value)}</span>
		
		</h5>
      </div>
      <div class="bubbleTooltip">
        <h5><strong class="bubbleStrong">Description</strong></h5>
        <h6><span>${d.description}</span></h6>
      </div>
    </div>`;
};

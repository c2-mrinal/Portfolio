const yearAge = (year) => {
	const currentYear = new Date().getFullYear();
	const res = currentYear - year;
	if (res === 0) {
		return "This Year";
	} else if (res === 1) {
		return `${res} Year Back`;
	} else {
		return `${res} Year's Back`;
	}
};
const careerData = [
	{
		year: 2023,
		age: yearAge(2023),
		header: "Softweb Solutions",
		description:
			"Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus amet urna. Urna egestas lorem.",
	},
	{
		year: 2022,
		age: yearAge(2022),
		header: "Qmetry",
		description:
			"Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus amet urna. Urna egestas lorem.",
	},
	{
		year: 2021,
		age: yearAge(2021),
		header: "Magenta BI ",
		description:
			"Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus amet urna. Urna egestas lorem.",
	},
];

module.exports = { careerData };

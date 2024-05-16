const chartItems = document.querySelectorAll(".spending-chart-item");
const columns = document.querySelectorAll(".spending-chart-item-column");
const dayNames = document.querySelectorAll(".spending-chart-item-title");

const displayChart = async () => {
	const res = await fetch("./data.json");
	const data = await res.json();

	let maxVal = 0;
	data.forEach((dataField, index) => {
		if (dataField.amount > maxVal) {
			maxVal = dataField.amount;
		}
	});

	chartItems.forEach((item, index) => {
		columns[index].style.backgroundColor = "hsl(10, 79%, 65%)";

		dayNames[index].textContent = data[index].day;
		columns[index].style.height = `${data[index].amount * 3}px`;

		if (data[index].amount == maxVal) {
			columns[index].style.backgroundColor = "hsl(186, 34%, 60%)";
			item.classList.add("maxVal");
		}
	});
};

displayChart();

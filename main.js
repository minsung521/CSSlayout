const gridBtn = document.getElementById("goto-grid");
const flexBtn = document.getElementById("goto-flex");

function handleClickMessage(event) {
	const pageName = event.path[0].innerText.toLowerCase();
	const link = `${pageName}.html`;
	console.log(event.path[0].innerText);
	location.href = link;
}

gridBtn.addEventListener("click", handleClickMessage);
flexBtn.addEventListener("click", handleClickMessage);

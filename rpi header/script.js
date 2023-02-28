document.addEventListener("DOMContentLoaded", function () {
	const menu = document.getElementsByClassName("hamburger-menu")[0],
		list = document.getElementsByClassName("link-list")[0];

	menu.onclick = function () {
		menu.classList.toggle("active");
		list.classList.toggle("active");
	};
});

const menu = $(".hamburger-menu"),
	dropdown = $(".link-list .wrapper");

menu.on("click", function () {
	menu.toggleClass("active");

	dropdown.toggleClass("-top-full top-auto");
});

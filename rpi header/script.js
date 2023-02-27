const menu = $(".hamburger-menu"),
	dropdown = $(".link-list .wrapper");

menu.on("click", function () {
	menu.toggleClass("active");
	dropdown.toggleClass("flex-col");

	if (menu.hasClass("active")) {
		dropdown.stop().slideDown("slow");
	} else {
		dropdown.stop().slideUp("slow");
	}
});

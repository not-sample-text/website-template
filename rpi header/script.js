$(document).ready(function () {
	const menu = $("header .hamburger-menu"),
		dropdown = $("header nav"),
		line1 = $("header .line:first-child"),
		line2 = $("header .line:nth-child(2)"),
		line3 = $("header .line:nth-child(3)");

	menu.on("click", function () {
		if (dropdown.is(":visible")) {
			dropdown.hide();
			deanimateLines();
		} else {
			dropdown.show();
			animateLines();
		}
	});

	function animateLines() {
		line1.css("animation-name", "rotate-top");

		line2.css("animation-name", "dissappear");

		line3.css("animation-name", "rotate-bottom");
	}

	function deanimateLines() {
		line1.css("animation-name", "unrotate-top");

		line2.css("animation-name", "appear");

		line3.css("animation-name", "unrotate-bottom");
	}
});

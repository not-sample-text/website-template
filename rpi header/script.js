$(document).ready(function () {
	const menu = $("header .hamburger-menu"),
		dropdown = $("header nav"),
		line1 = $("header .line:first-child"),
		line2 = $("header .line:nth-child(2)"),
		line3 = $("header .line:nth-child(3)");

	menu.on("click", function () {
		toggleDropDown();
		animateLines();
	});

	function toggleDropDown() {
		if (!dropdown.is(":visible")) {
			dropdown.show();
		} else {
			dropdown.hide();
		}
	}

	function animateLines() {
		if (dropdown.is(":visible")) {
			line1.css("animation-name", "rotate-top");

			line2.css("animation-name", "dissapear");

			line3.css("animation-name", "rotate-bottom");
		} else {
			line1.removeAttr("style");
			line2.removeAttr("style");
			line3.removeAttr("style");
		}
	}
});

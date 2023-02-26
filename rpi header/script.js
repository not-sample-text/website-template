$(document).ready(function () {
	const menu = $("header .hamburger-menu"),
		dropdown = $("header nav"),
		line1 = $("header .line-top"),
		line2 = $("header .line-middle"),
		line3 = $("header .line-bottom");

	menu.on("click", function () {
		toggleDropDown();
		animateLines();
	});

	function toggleDropDown() {
		if (dropdown.is(":visible")) {
			dropdown.hide();
		} else {
			dropdown.show();
		}
	}

	function animateLines() {
		if (dropdown.is(":visible")) {
			line1.css({
				rotate: "45deg",
				top: "50%"
			});

			line2.css({
				opacity: "0"
			});

			line3.css({
				rotate: "-45deg",
				top: "50%"
			});
		} else {
			line1.removeAttr("style");
			line2.removeAttr("style");
			line3.removeAttr("style");
		}
	}
});

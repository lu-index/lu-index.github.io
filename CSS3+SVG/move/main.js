$(function() {
	$(".stage").click(function() {
		// $('.sunstage > div').toggleClass('.sunstage > div.active')
		$(".sunstage").toggleClass("active");
		$("span").toggleClass("active");
		$(".sunstage div.sun").toggleClass("active");
        $("div.moon").toggleClass("active");
        $("div.moon2").toggleClass("active");
		$("div.cr").addClass("active");
		$(".cloud").toggleClass("active");
		$(".stars").toggleClass("active");
		$(".shooting-star").toggleClass("shooting");
	});
});

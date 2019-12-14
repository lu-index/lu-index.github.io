var contentimg = document.querySelectorAll(".content img");
var current = 0;

function nextPic() {
	current = current >= contentimg.length - 1 ? 0 : ++current;
	actionPic();
}
function prevPic() {
	current = current <= 0 ? contentimg.length - 1 : --current;
	actionPic();
}
function actionPic() {
	$(".content").animate({ "margin-left": current * -600 + "px" });
	$(".dot span")
		.eq(current)
		.addClass("active")
		.siblings()
		.removeClass("active");
}
$(".next").click(nextPic);
$(".prev").click(prevPic);

//创建小点点
$(".content img").each(function(element, index) {
	// $('.dot').append('<span></span>')
	var dotJQ =
		element == 0 ? $("<span class='active'></span>") : $("<span></span>");
	dotJQ.appendTo(".dot").click(function() {
		current = $(this).index();
		actionPic();
	});
});

//自动轮播 定时器
// var time = setInterval(nextPic, 3000);

// $(".box").mouseenter(function() {
// 	clearInterval(time);
// });

// $(".box").mouseleave(function() {
// 	var time = setInterval(nextPic, 3000);
// });

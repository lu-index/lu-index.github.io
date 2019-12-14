function name(name, song,images) {
	(this.name = name),
	 (this.song = song),
	 (this.images = images)
}
var x = [
	"./王贰浪 - 安河桥（Cover 宋冬野）.mp3",
	"./薛之谦 - 演员.mp3",
	"./许嵩 - 雅俗共赏.mp3"
];
var a = new name("王贰浪", "安河桥（Cover 宋冬野",'./王贰浪.jpg');
var b = new name("薛之谦", "演员",'./薛子谦2.jpg');
var c = new name("许嵩", "雅俗共赏",'./许嵩.jpg');
var arr = [a, b, c];

// var g = ['./王贰浪.jpg','./薛之谦.jpg','./许嵩.jpg']
var current = 0;
var n =0;

// 开始/暂停 播放
$(".btn_left span")
	.eq(1)
	.click(function() {
		n++;
        // // console.log(current);
		if (n % 2 == 1) {
			// console.log(current);
			$(".btn_left span i")
				.eq(1)
				.removeClass("glyphicon-play")
				.addClass("glyphicon-pause");

			$(".disc .pointer").css("transform", "rotate(0deg)");
			$(".disc .icon")
				.addClass("active")
                .removeClass("active2");
				$("audio").attr("src", x[current]);
                audio.play();
		} else {
			$(".btn_left span i")
				.eq(1)
				.addClass("glyphicon-play")
				.removeClass("glyphicon-pause");
			$(".disc .pointer").css("transform", "rotate(-15deg)");
			$(".disc .icon").addClass("active2");
			// $("audio").attr("src", x[current]);
			audio.pause();
		}
		
	});


//下一首
$(".btn_left span")
	.eq(2)
	.click(function() {
		// console.log(current);
		//歌单列表
		current++;
		if (current > 2) {
			current = 0;
		}
			console.log(current);
			
			$(".footer .icon span")
			.eq(current)
			.addClass("glyphicon-volume-up")
			.parent()
			.siblings()
			.children()
			.removeClass("glyphicon-volume-up");
		$(".info .font h3").text(arr[current].song);
		$(".info .font p").text(arr[current].name);

		$(".content .bg img").attr("src",arr[current].images)
		$(".content .disc .icon img").attr("src", arr[current].images);

		$("audio").attr("src", x[current]);
		$("audio")[0].play();
        $(".btn_left span i")
				.eq(1)
				.removeClass("glyphicon-play")
				.addClass("glyphicon-pause");
			$(".disc .pointer").css("transform", "rotate(0deg)");
			$(".disc .icon")
				.addClass("active")
				.removeClass("active2");
		
		
	});

//上一首
$(".btn_left span")
	.eq(0)
	.click(function() {
		// console.log(curret);
		current--;
		if (current < 0) {
			current = 2;
		}
		$(".footer .icon span")
			.eq(current)
			.addClass("glyphicon-volume-up")
			.parent()
			.siblings()
			.children()
			.removeClass("glyphicon-volume-up");
       //切换图片
		$(".content .bg img").attr("src",arr[current].images)
		$(".content .disc .icon img").attr("src", arr[current].images);
       //切换歌名
		$(".info .font h3").text(arr[current].song);
		$(".info .font p").text(arr[current].name);
		// console.log(x[curret]);
        //切换歌曲
		$("audio").attr("src", x[current]);
        $("audio")[0].play();
        
        $(".btn_left span i")
				.eq(1)
				.removeClass("glyphicon-play")
				.addClass("glyphicon-pause");
			$(".disc .pointer").css("transform", "rotate(0deg)");
			$(".disc .icon")
				.addClass("active")
				.removeClass("active2");
	});

//播放模式 随机播放
$(".btn_left span")
	.eq(3)
	.click(function() {
		// console.log(currennt);
		n++;
		// if (n > 1) {
		// 	n = 0;
		// }

		// $("audio").attr("src", x[this]);
		// $("audio")[0].play();n

		if (n % 2==1) {
			// console.log(current);
			$(".btn_left span i")
				.eq(3)
				.removeClass("glyphicon-refresh")
				.addClass("glyphicon-random");
		} else {
			$(".btn_left span i")
				.eq(3)
				.addClass("glyphicon-refresh")
				.removeClass("glyphicon-random");
			$(".name")[0].pause();
		}
	});

// 歌单切换
$(".footer li").click(function() {

	$(this)
		.children()
		.addClass("glyphicon-volume-up")
		.end()
		.siblings()
		.children()
		.removeClass("glyphicon-volume-up");
	$(".info .font h3").text(arr[$(this).index()].song);
	$(".info .font p").text(arr[$(this).index()].name);

	$(".content .bg img").attr("src",arr[$(this).index()].images)
	$(".content .disc .icon img").attr("src", arr[$(this).index()].images);

	$("audio").attr("src", x[$(this).index()]);
	$("audio")[0].play();

	// current++;
	if (this) {
		$(".btn_left span i")
			.eq(1)
			.removeClass("glyphicon-play")
			.addClass("glyphicon-pause");
		$(".disc .pointer").css("transform", "rotate(0deg)");
		$(".disc .icon")
			.addClass("active")
			.removeClass("active2");
			$("audio")[0].play();
	} else {
		$(".btn_left span i")
			.eq(1)
			.addClass("glyphicon-play")
			.removeClass("glyphicon-pause");
		$(".disc .pointer").css("transform", "rotate(-15deg)");
		$(".disc .icon").addClass("active2");
		$(".name")[0].pause();
	}
	
});

//音量
$('.btn_right .box ').mousedown(function () {
	$('.btn_right .box').mousemove(function (event) {
		// console.log(event);
		var x = (event.pageX || event.clientX) - $(this).offset().left;
		// console.log(x);
		if(x>0&&x<100){
			$(".btn_right .box .move").css({ width: x  + "px" });
			$(".btn_right .box .move .dot").css({left:x-5+ "px"});
		}
	})
})
	$('.btn_right .box').mouseup(function () {
		$(".btn_right .box ").unbind("mousemove")
	})

//进度条
	$('.key_bottom .plan').mousedown(function (event) {
		console.log(event);
		var x =(event.pageX || event.clientX) - $(this).offset().left
		// console.log(x);
		if(x>0&&x<300){
			$(".key_bottom .plan .move").css({ width: x  + "px" });
			audio.currentTime = x
			$(".btn_left span i")
			.eq(1)
			.removeClass("glyphicon-play")
			.addClass("glyphicon-pause");
	     	$(".disc .pointer").css("transform", "rotate(0deg)");
		    $(".disc .icon")
			.addClass("active")
			.removeClass("active2");
			$("audio")[0].play();
		}
	})
	
// $('.key_bottom .plan').mouseup(function () {
// 	$(".key_bottom .plan ").unbind("mousemove")
// })

// var startm = document.querySelector(".startm")
// var starts = document.querySelector(".starts")

//进度条时间
var audio = $("audio")[0];

function xx(n) {
	// console.log(n);
	return n < 10 ? "0" + n : String(n)
}

setInterval(function () {
	var plaYtime=Math.floor(audio.currentTime)

	var startm=Math.floor(plaYtime / 60)
	var starts=plaYtime % 60

	var endm=Math.floor(audio.duration / 60)
	var ends=Math.floor(audio.duration % 60)
	
	document.querySelector(".start .startm").innerText = xx(startm);
	document.querySelector(".start .starts").innerText = xx(starts);
	document.querySelector(".end .endm").innerText = xx(endm);
	document.querySelector(".end .ends").innerText = xx(ends);
	},1000)

	audio.ontimeupdate= function () {
		console.log(audio.currentTime/ audio.duration * 100 + '%');
		$(".key_bottom .plan .move").css("width", audio.currentTime/ audio.duration * 100 + '%');
		// $(".key_bottom .plan .move .dot").css({left:audio.currentTime/ audio.duration * 100 + '%'});
	}

	//  自动下一曲
	audio.onended = function () {
		current++;
		if (current > 2) {
			current = 0;
		}
			console.log(current);
			
			$(".footer .icon span")
			.eq(current)
			.addClass("glyphicon-volume-up")
			.parent()
			.siblings()
			.children()
			.removeClass("glyphicon-volume-up");
		$(".info .font h3").text(arr[current].song);
		$(".info .font p").text(arr[current].name);

		$(".content .bg img").attr("src",arr[current].images)
		$(".content .disc .icon img").attr("src", arr[current].images);

		$("audio").attr("src", x[current]);
	
        $(".btn_left span i")
				.eq(1)
				.removeClass("glyphicon-play")
				.addClass("glyphicon-pause");
			$(".disc .pointer").css("transform", "rotate(0deg)");
			$(".disc .icon")
				.addClass("active")
				.removeClass("active2");
				$("audio")[0].play();	
		}

// 	// 事件监听
// audio.oncanplay = function() {
// 	console.log("可以播放");
// };
// audio.onloadedmetadata = function() {
// 	console.log("加载到了");
// 	audio.play();
// };




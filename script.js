$(document).ready(()=>{
let images = ["snow.jpg","rain.jpg","hail.jpg","tornado.jpg","fog.jpg","storm.jpg","sky.jpg","bckg2.jpg"];
let x = 0;
let auto;
				
$("#slider").after('<div id="tumbs"></div>');
$("#tumbs").append(images.map(item => '<img src="../Slider_1/img/' + item + '" />'));
$("#tumbs>img")
	.css({
		width: $("#slider").width() / images.length - 10,
		border: "1px solid #fff"
	})
	.on({
		load: ()=>{ 
			$("#tumbs").css({
				width: $("#slider").width(),
				"margin-top": - 60 - $("#tumbs>img").height()
			}) 
		},
		click: function(){
			stop();
			x = $(this).index();
			start();
		}
	});
					
start();
				
function start() {
	show();
	auto = setInterval(()=>{x++; show()}, 3000);
}
				
function stop() {
	clearInterval(auto);
}

function show(){
	if(x >= images.length) x = 0;
	$("#slider")
		.css("backgroundImage","url('../Slider_1/img/" + images[x] + "')")
		.fadeOut(.1)
		.fadeIn("slow");
	active();
}
				
function active() {
	$("#tumbs>img").removeClass("active");
	$("#tumbs>img").eq(x).addClass("active");
}
});
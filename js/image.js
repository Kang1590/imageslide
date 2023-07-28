$(document).ready(function(){
	$("a.mainMenu").mouseenter(function(){
		$("header nav").stop().slideDown();
		$("#bg").stop().slideDown();
	});
	$("header nav a").mouseenter(function(){
		$("a.mainMenu").removeClass('act');
		$(this).parent().prev().addClass('act');		
	});
	
	$("header ul").mouseleave(function(){
		$("a.mainMenu").removeClass('act');
		$("header nav").stop().slideUp();
		$("#bg").stop().slideUp();		
	});
	
	setInterval(show , 2500);
	
	let i = 2;
	function show(){
		$("#slide a").eq(i).fadeOut();
		i--;
		if(i == -1) {
				i = 2;
				$("#slide a").fadeIn();
		}
	}
		
	
	$("main a").click(function(){
		$("#popup").fadeIn();
	});
	$("#popup button").click(function(){
		$("#popup").fadeOut();
	});
});/////////end
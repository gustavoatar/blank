$(window).scroll(function(){
	var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
	var scrolltrigger = 0.95;
	var percentageScrolled= (wintop/(docheight-winheight))*(100);

	console.log('wintop='+wintop);
	console.log('docheight='+docheight);
	console.log('winheight='+winheight);
	console.log(wintop+'=='+(docheight-winheight));
	console.log(wintop==(docheight-winheight));
	console.log(percentageScrolled);
	if(percentageScrolled < 20){
		$(".first-image").removeClass('fixone');
		$(".second-image").removeClass('fixtwo');		
	} 
	else if(percentageScrolled >= 21){
		$(".first-image").addClass('fixone');
		$(".second-image").removeClass('fixtwo');		
	} 
	if(percentageScrolled >= 80){
		$(".second-image").addClass('fixtwo');
		$(".first-image").removeClass('fixone');	
	}

}); 
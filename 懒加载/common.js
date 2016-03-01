$(window).on('scroll', function(){
	checkShow();
});

checkShow();

function checkShow(){
	$('.container img').each(function(){
		var $cur = $(this);
		if(isShow($cur)){
			//setTimeout(function(){
				showImg($cur);
			//}, 500);
		}
	});
}

function isShow($el){
  	var scrollH = $(window).scrollTop(),
  	  	winH = $(window).height(),
  	  	top = $el.offset().top;

	  	if(top < winH + scrollH){
	  		return true;
	  	}else{
	  		return false;
	  	}
}

function showImg($el){
	//setTimeout(function(){
	  	$el.attr('src', $el.attr('data-lazy-img'));
	//}, 1000)
	
}


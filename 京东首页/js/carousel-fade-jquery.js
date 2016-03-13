$(document).ready(function(){
	var $ct = $('.img-ct'),
		$items = $ct.children(),
		$pre = $('.but-l'),
		$next = $('.but-r'),
		$bullet = $('.but-page'),
		imgWidth = $items.width(),
		imgCount = $items.length;

	var curIdx = 0;
	var isAnimate = false;

	$next.on('click', function() {
		playNext();
	});
	$pre.on('click', function() {
		playPre();
	});
	$bullet.find('li').on('click', function() {
		var idx = $(this).index();
		play(idx);
	});

	play(0);
	autoPlay();

	function playNext() {
		play((curIdx + 1)%imgCount);
	}
	function playPre() {
		play((imgCount + curIdx - 1)%imgCount);
	}

	function play(idx) {

		if(isAnimate) return;
		isAnimate = true;
		$items.eq(curIdx).fadeOut("slow");
		$items.eq(idx).fadeIn("slow", function() {
			isAnimate = false;
		});

		curIdx = idx;
		setBullet();
	}


	function setBullet() {
		$bullet.children().removeClass('active')
				.eq(curIdx).addClass('active');
	}
	function stopAuto() {
		clearInterval(clock);
	}
	function autoPlay() {
		clock = setInterval(function() {
			playNext();
		}, 3000);
	}

});
$(document).ready(function(){
	var $ct = $('.img-ct'),
		$items = $ct.children(),
		$pre = $('.pre'),
		$next = $('.next'),
		$bullet = $('.focus-switch'),
		imgWidth = $items.width(),
		imgCount = $ct.children().length;

		
	$ct.prepend($items.last().clone());
	$ct.append($items.first().clone());
	imgRealCount = $ct.children().length;
	$ct.css({left: 0-imgWidth, width: imgRealCount*imgWidth});


	
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
		if(idx > curIdx) {
			playNext(idx - curIdx);
		}else if(idx < curIdx) {
			playPre(curIdx - idx);
		}
	});

	autoPlay();
	
	// function stopAuto() {
	// 	clearInterval(clock);
	// }

	function autoPlay() {
		clock = setInterval(function() {
			playNext();
		}, 3000);
	}

	function playNext(idx) {
		var idx = idx || 1;
		if(!isAnimate) {
			isAnimate = true;
			$ct.animate({left: '-=' + (imgWidth * idx)}, function() {
				curIdx = (curIdx + idx)%imgCount;
				if(curIdx === 0){
					$ct.css({left: 0 - imgWidth});
				}
				isAnimate = false;
				setBullet();
			})
		}
	}

	function playPre(idx) {
		var idx = idx || 1;
		if(!isAnimate) {
			isAnimate = true;
	
			$ct.animate({left: '+=' + (imgWidth * idx)}, function() {
				curIdx = (imgCount + curIdx - idx)%imgCount;
				if(curIdx === (imgCount - 1)) {					
					$ct.css({left: 0 - imgWidth * imgCount});					
				}
				isAnimate = false;
				setBullet();
			})	
		}
	}

	function setBullet() {
		$bullet.find('li').removeClass('active')
				.eq(curIdx).addClass('active');
	}

});
window.onload = function(){
		var ul = document.getElementById('tab');
		var	li = ul.getElementsByTagName('li');
		var con = document.getElementById('content');
		var Ocon = con.getElementsByTagName('li');
			for(var i = 0,len=tab.children.length; i<len;i++){ 
				li[i].index = i;
				addEvent(li[i]);
			}	


	function addEvent(el){
		el.addEventListener('mouseenter',function(){
			for(var j=0,len=li.length; j<len; j++){
				removeClass(li[j],'tab-item-selected');
			}
			addClass(el,'tab-item-selected');
			
			for(var a=0,len=Ocon.length; a<len; a++){
				addClass(Ocon[a],'hide');
				removeClass(Ocon[a],'show');
			}
			addClass(Ocon[this.index],'show');
		});
	}




function hasClass(el, cls) {
   return new RegExp('(\\s|^)'+cls+'(\\s|$)').test(el.className);
}

function addClass(el, cls)
{
   if (!hasClass(el, cls)) { el.className += (el.className ? ' ' : '') +cls; }
}

function removeClass(el, cls)
{
   if (hasClass(el, cls)) {
      el.className=el.className.replace(new RegExp('(\\s|^)'+cls+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, '');
   }
}

};
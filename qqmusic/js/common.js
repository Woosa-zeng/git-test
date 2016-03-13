
//Tab切换
window.onload = function(){
        var oUl = document.querySelector('#ul1'),
        aLi = oUl.getElementsByTagName('li'),
        oDiv = document.querySelector('.sub-navigation'),
        aDiv = oDiv.getElementsByTagName('p');
        menu = document.querySelector('#divtopmenu');

    for(var i=0,len=aLi.length; i<len; i++){
        aLi[i].index = i;
        aLi[i].onmouseover = function(){
            for(var j=0,len=aDiv.length; j<len; j++){
                aDiv[j].id = 'hide';
            }
            aDiv[this.index].id = 'show';
        }
    }
    menu.onmouseleave = function(){
        for(var j=0,len=aDiv.length; j<len; j++){
        aDiv[j].id = 'hide';
        }
        aDiv[0].id = 'show';
    } 



};

// input
var ipt = document.querySelector('.serch-text'),
    search = document.querySelector('.frame-search');

ipt.addEventListener('focus',function(){
   search.id = 'frame-search-click';
   ipt.removeAttribute('placeholder');
});

ipt.addEventListener('blur',function(){
    search.id = '';
    ipt.setAttribute('placeholder','找到好音乐');
});









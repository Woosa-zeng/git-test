
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
            for(var i=0,len=aLi.length; i<len; i++){
                aLi[i].id = '';
            }
            this.id = 'active';
            for(var j=0,len=aDiv.length; j<len; j++){
                aDiv[j].id = 'hide';
            }
            aDiv[this.index].id = 'show';

        }

    }
        menu.onmouseout =function(){
        for(var j=0,len=aDiv.length; j<len; j++){
        aDiv[j].id = 'hide';
        }
        aDiv[0].id = 'show';
    } 

}

var btn = document.querySelector('#btn-modal'),
    modal = document.querySelector('#modal-1'),
    modalCt = document.querySelector('#modal-1 .modal-ct');

btn.addEventListener('click', function(e){
    e.stopPropagation();
    showModal(modal);
});

modal.addEventListener('click', function(e){
   e.stopPropagation();
   if( hasClass(e.target, 'close') || hasClass(e.target, 'btn-cancel') || hasClass(e.target, 'cover') ){
       hideModal(modal);
   } 
});

// document.body.addEventListener('click', function(){
//     hideModal(modal);
// });



function showModal(modal){
    modal.style.display = 'block';
}
function hideModal(modal){
    modal.style.display = 'none';
}
function hasClass (ele, cls){
    return !!ele.className.match(new RegExp('\\b'+cls+'\\b'));
}
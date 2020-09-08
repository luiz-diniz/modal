const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');

gallery.addEventListener('click', ModalHandler);

function ModalHandler(e){
    if(e.target.classList.contains('gallery-item')){
        console.log('teste');
    }
}
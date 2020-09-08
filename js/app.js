const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
const modalItems = document.querySelector('.modal-items');
const closeBtn = document.querySelector('.fa-times');

gallery.addEventListener('click', ModalHandler);
closeBtn.addEventListener('click', CloseModal);

function ModalHandler(e){
    if(e.target.classList.contains('gallery-item')){
        let srcImg = e.target.src;

        modalItems.firstElementChild.src = srcImg;
        modal.style.display = 'block';
    }
}

function CloseModal(){
    modal.style.display = 'none';
}
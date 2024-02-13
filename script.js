'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal)
'click'
btnOpenModal.forEach(element => {
    element.addEventListener('click', () => {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');

    });
});

//This need to have above where it is called
const closeModal = ()  => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape')
        closeModal();
})


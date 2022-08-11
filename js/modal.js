// iniciar sesion
const openModal = document.querySelector('.signin');
const modal = document.querySelector('.moda1');
const closeModal = document.querySelector('.modal-close');
const openclose = document.querySelector('.link-register');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show')
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show')
});

openclose.addEventListener('click', (e)=>{
    e.preventDefault();
    modal2.classList.add('modal--show-2')
});

openclose.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show')
});

// Resgistrarse
const openModal2 = document.querySelector('.register');
const modal2 = document.querySelector('.modal-2');
const closeModal2 = document.querySelector('.modal-close-2');
const openclose2 = document.querySelector('.link-signin');

openModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal2.classList.add('modal--show-2')
});

closeModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal2.classList.remove('modal--show-2')
});

openclose2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show')
});

openclose2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal2.classList.remove('modal--show-2')
});
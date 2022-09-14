const open = document.getElementById('Modal');
// const open = document.getElementById('btnSend');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('btnSendAgain');

open.addEventListener('onclick', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

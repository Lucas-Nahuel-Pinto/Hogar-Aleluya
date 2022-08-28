const open = document.getElementById('btnSend');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('btnSendAgain');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});
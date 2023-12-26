const navBar = document.querySelector('#nav-bar');
const containerNavBarSubmitARequestSignIn = document.querySelector('#container-nav-bar-submit-a-request-sign-in');
const menu = document.querySelector('#menu');
const search = document.querySelector('#search');
const deg45Negativo = document.querySelector('#deg-45-negativo');
const none = document.querySelector('#none');
const deg45Positivo = document.querySelector('#deg-45-positivo');
const containerSearchClosed = document.querySelector('#container-search-closed');
const closed = document.querySelector('#closed');

navBar.addEventListener('click', e => {
  navBar.classList.toggle('toggle-color');
  search.classList.toggle('toggle-color');
  containerNavBarSubmitARequestSignIn.classList.toggle("show-container-nav-bar-submit-a-request-sign-in");
  menu.classList.toggle('toggle-color');
  deg45Negativo.classList.toggle('deg-45-negativo');
  none.classList.toggle('none');
  deg45Positivo.classList.toggle('deg-45-positivo');
})

search.addEventListener('click', e => {
  menu.classList.toggle('show-menu');
  containerSearchClosed.classList.toggle('show-container-search-closed');
})

closed.addEventListener('click', e => {
  menu.classList.toggle('show-menu');
  containerSearchClosed.classList.toggle('show-container-search-closed');
})
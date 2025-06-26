const menu = document.querySelector('.header__dropdown');
const menuButton = document.querySelector('.dropdown__button');
const menuDropdown = document.querySelector('.dropdown__nav');
document.addEventListener('click', (evt) => {
  let targetInside = menu.contains(evt.target);
  if (!targetInside) {
    menuDropdown.classList.add('hidden');
  }	
});
menuButton.addEventListener('click', () => {
	menuDropdown.classList.toggle('hidden');
});
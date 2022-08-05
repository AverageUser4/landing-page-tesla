export default class MainMenu {

  opener;
  closer;
  dropdown;
  menu;
  transitionDuration;

  constructor() {
    this.opener = document.querySelector('.header-bottom__menu-button');
    this.closer = document.querySelector('.main-menu__close-button');
    this.dropdown = document.querySelector('.main-menu-background');
    this.menu = document.querySelector('.main-menu');

    this.transitionDuration = 1000 *
      parseFloat(getComputedStyle(this.dropdown).transitionDuration);

    this.opener.addEventListener('click', () => this.open());
    this.closer.addEventListener('click', () => this.close());
    this.dropdown.addEventListener('click', () => this.close());
    this.menu.addEventListener('click', (event) => event.stopPropagation());
  }

  open() {
    this.dropdown.style.display = 'block';

    setTimeout(() => {
      this.dropdown.classList.add('main-menu-background--visible');
      this.menu.classList.add('main-menu--visible');
    }
    );
  }

  close() {
    this.dropdown.classList.remove('main-menu-background--visible');
    this.menu.classList.remove('main-menu--visible');

    setTimeout(() => { this.dropdown.style.display = 'none' },
      this.transitionDuration
    );
  }

}
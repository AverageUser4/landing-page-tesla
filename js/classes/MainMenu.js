export default class MainMenu {

  opener;
  closer;
  dropdown;
  menu;
  transitionDuration;
  /* dependencies */
  annoyingScroll;

  constructor(annoyingScroll) {
    this.annoyingScroll = annoyingScroll;
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
    document.body.style.overflow = 'hidden';
    this.annoyingScroll.turnOff();

    setTimeout(() => {
      this.dropdown.classList.add('main-menu-background--visible');
      this.menu.classList.add('main-menu--visible');
    }
    );
  }

  close() {
    this.dropdown.classList.remove('main-menu-background--visible');
    this.menu.classList.remove('main-menu--visible');
    this.annoyingScroll.turnOn();

    setTimeout(
      () => { 
        this.dropdown.style.display = 'none';
        document.body.style.overflow = 'auto';
      },
      this.transitionDuration
    );
  }

}
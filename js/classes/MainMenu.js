export default class MainMenu {

  isOpen = false;
  opener;
  closer;
  dropdown;
  menu;
  lastFocusable;
  transitionDuration;
  /* dependencies */
  annoyingScroll;
  movingButtonBackground;

  constructor(annoyingScroll, movingButtonBackground) {
    this.annoyingScroll = annoyingScroll;
    this.movingButtonBackground = movingButtonBackground;

    this.opener = document.querySelector('.header-bottom__menu-button');
    this.closer = document.querySelector('.main-menu__close-button');
    this.dropdown = document.querySelector('.main-menu-background');
    this.menu = document.querySelector('.main-menu');
    this.lastFocusable = document.querySelector('[data-last-focusable="1"]');

    this.transitionDuration = 1000 *
      parseFloat(getComputedStyle(this.dropdown).transitionDuration);

    this.menu.addEventListener('click', e => e.stopPropagation());

    // prevents user from focusing elements outside menu
    this.lastFocusable.addEventListener('blur', () => this.closer.focus());

    this.opener.addEventListener('click', () => this.open());
    this.closer.addEventListener('click', () => this.close());
    this.dropdown.addEventListener('click', () => this.close());

    window.addEventListener('keydown', e => {
      if(e.key === 'Escape')
        this.close();
    });
    window.addEventListener('resize', () => this.close());
  }

  open() {
    if(this.isOpen)
      return;

    this.isOpen = true;

    this.dropdown.style.display = 'block';
    this.annoyingScroll.turnOff();
    document.body.style.overflow = 'hidden';

    // without it the background doesn't get moved but button does
    // (hiding body's overflow changes client width, because of removal of scrollbar)
    this.movingButtonBackground.adjustMenuBackground();

    this.closer.focus();
    this.closer.blur();

    setTimeout(
      () => {
        this.dropdown.classList.add('main-menu-background--visible');
        this.menu.classList.add('main-menu--visible');
      }, 150
    );
  }

  close() {
    if(!this.isOpen)
      return;

    this.isOpen = false;

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
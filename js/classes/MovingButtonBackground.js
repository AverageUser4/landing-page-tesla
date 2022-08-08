export default class MovingButtonBackground {
  
  background;
  buttons;
  disappearTimeoutId;
  backgroundVisible = false;

  constructor() {
    this.background = document.querySelector('.header-bottom__moving-background');
    this.buttons = document.querySelectorAll('[data-mv-bg="1"]');
    this.menuButton = document.querySelector('.header-bottom__menu-button');

    for(let val of this.buttons) {
      val.addEventListener('mouseenter', (event) => this.mouseEnter(event));
      val.addEventListener('mouseleave', (event) => this.mouseLeave(event));
    }
  }

  adjustMenuBackground() {
    this.background.style.left = this.menuButton.getBoundingClientRect().x + 'px';
  }

  mouseEnter(event) {
    if(matchMedia('(max-width: 1200px)').matches)
      return;

    clearTimeout(this.disappearTimeoutId);

    const currentTarget = event.currentTarget;

    if(!this.backgroundVisible) {
      this.background.style.opacity = 1;
      this.background.style.width = currentTarget.getBoundingClientRect().width + 'px';
      this.background.style.left = currentTarget.getBoundingClientRect().x + 'px';
      this.backgroundVisible = true;
      return;
    }

    this.background.style.transition = 'opacity 300ms, width 300ms, left 300ms';

    setTimeout(() => {
      this.background.style.opacity = 1;
      this.background.style.width = currentTarget.getBoundingClientRect().width + 'px';
      this.background.style.left = currentTarget.getBoundingClientRect().x + 'px';
      this.backgroundVisible = true;
    });
  }

  mouseLeave() {
    if(matchMedia('(max-width: 1200px)').matches)
      return;

    this.disappearTimeoutId = setTimeout(() => {
      this.background.style.opacity = 0;
      this.backgroundVisible = false;
      this.background.style.transition = 'opacity 300ms';
    }, 500);
  }

}
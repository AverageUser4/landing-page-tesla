export default class MovingButtonBackground {
  
  background;
  buttons;
  disappearTimeoutId;
  backgroundVisible = false;

  constructor() {
    this.background = document.querySelector('.header-bottom__moving-background');
    this.buttons = document.querySelectorAll('[data-mv-bg="1"]');

    for(let val of this.buttons) {
      val.addEventListener('mouseenter', (event) => this.mouseEnter(event));
      val.addEventListener('mouseleave', (event) => this.mouseLeave(event));
    }
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

/*
  - przy najechaniu na przycisk:
    - jeżeli tło nie jest widoczne:
      - przenieś je natychmiast w miejsce przycisku
      - natychmiast dostosuj jego wielkość
      - odegraj tylko przejście dla opacity z 0 na 1

    - jeżeli tło jest widoczne:
      - przejście z left: x na left: y ma trwać
      tyle co zmiana wielkości
*/
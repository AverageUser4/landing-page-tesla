export default class HeaderAndOtherChanger {

  /*
    text content is unconditionally overridden in some places, even
    with the same value, may need some optimization
  */

  top;
  buttons;
  goDownButton;
  lastScrollY = 0;
  bodyHeight;
  prodDescOne = 'Order Online for <a class="generic-link" href="#">Touchless delivery</a>';
  prodDescTwo = 'Lowest Cost Solar Panels in America';
  prodDescThree = 'Produce Clean Energy From Your Roof';
  hideGoDownButtonTimeoutId;

  constructor() {    
    this.top = document.querySelector('.the-main__top-container');
    this.buttons = document.querySelector('.the-main__buttons-container');
    this.goDownButton = document.querySelector('.the-main__go-down-button');

    this.bodyHeight = document.body.getBoundingClientRect().height;
    window.addEventListener('resize', () => {
      this.bodyHeight = document.body.getBoundingClientRect().height;
    });

    window.addEventListener('scroll', () => this.onScroll());
  }

  onScroll() {
    let scrollDirection = 'up';

    if(scrollY > this.lastScrollY)
      scrollDirection = 'down';

    this.lastScrollY = scrollY;

    let scrollPercent = Math.round(100 * scrollY / innerHeight);
    const actualScrollPercent = scrollPercent;

    while(scrollPercent > 100)
      scrollPercent -= 100;

    if(scrollDirection === 'down') {
      if(scrollPercent < 10) {
        this.setOneOpacity();
      } else if(scrollPercent >= 10 && scrollPercent < 35) {
        this.decreaseOpacity();
      } else if(scrollPercent >= 35 && scrollPercent < 55) {
        this.setZeroOpacity();
        this.changeContent(actualScrollPercent, scrollDirection);
        if(actualScrollPercent < 100)
          this.hideGoDownButton();
      } else if(scrollPercent >= 55 && scrollPercent < 85) {
        this.increaseOpacity();
      } else {
        this.setOneOpacity();
      }
    } else {
      if(scrollPercent < 10) {
        this.setOneOpacity();
      } else if(scrollPercent >= 10 && scrollPercent < 35) {
        this.increaseOpacity();
      } else if(scrollPercent >= 35 && scrollPercent < 55) {
        this.setZeroOpacity();
        this.changeContent(actualScrollPercent, scrollDirection);
        if(actualScrollPercent > 100)
          this.hideGoDownButton();
      } else if(scrollPercent >= 55 && scrollPercent < 85) {
        this.decreaseOpacity();
      } else {
        this.setOneOpacity();
      }
    }

    this.ensureAppropriateContent();
  }

  ensureAppropriateContent() {
    if(scrollY % innerHeight !== 0)
      return;

    if(scrollY === 0)
      this.showGoDownButton();
    else
      this.hideGoDownButton();

    if(scrollY === this.bodyHeight - innerHeight)
      this.setButtonsSpecialView();
    else
      this.setButtonsNormalView();

    const arr = 
      [
        ['Model 3', this.prodDescOne],
        ['Model Y', this.prodDescOne],
        ['Model S', this.prodDescOne],
        ['Model X', this.prodDescOne],
        ['Solar Panels', this.prodDescTwo],
        ['Solar Roof', this.prodDescThree],
        ['Accessories', ''],
      ];

    let i = 0;
    for(let val of arr) {
      if(scrollY === i) {
        this.top.children[0].textContent = val[0];
        this.top.children[1].innerHTML = val[1]
      }

      i += innerHeight;
    }
  }

  changeContent(actualScrollPercent, scrollDirection) {
    if(scrollDirection === 'down') {
      if(actualScrollPercent < 100) {
        this.top.children[0].textContent = 'Model Y';
        this.top.children[1].innerHTML = this.prodDescOne;
      } else if(actualScrollPercent < 200) {
        this.top.children[0].textContent = 'Model S';
        this.top.children[1].innerHTML = this.prodDescOne;
      } else if(actualScrollPercent < 300) {
        this.top.children[0].textContent = 'Model X';
        this.top.children[1].innerHTML = this.prodDescOne;
      } else if(actualScrollPercent < 400) {
        this.top.children[0].textContent = 'Solar Panels';
        this.top.children[1].textContent = this.prodDescTwo;
      } else if(actualScrollPercent < 500) {
        this.top.children[0].textContent = 'Solar Roof';
        this.top.children[1].textContent = this.prodDescThree;
      } else if(actualScrollPercent < 600) {
        this.top.children[0].textContent = 'Accessories';
        this.top.children[1].textContent = '';
        this.setButtonsSpecialView();
      }
    } else {
      if(actualScrollPercent < 100) {
        this.top.children[0].textContent = 'Model 3';
        this.top.children[1].innerHTML = this.prodDescOne;
      } else if(actualScrollPercent < 200) {
        this.top.children[0].textContent = 'Model Y';
        this.top.children[1].innerHTML = this.prodDescOne;
      } else if(actualScrollPercent < 300) {
        this.top.children[0].textContent = 'Model S';
        this.top.children[1].innerHTML = this.prodDescOne;
      } else if(actualScrollPercent < 400) {
        this.top.children[0].textContent = 'Model X';
        this.top.children[1].innerHTML = this.prodDescOne;
      } else if(actualScrollPercent < 500) {
        this.top.children[0].textContent = 'Solar Panels';
        this.top.children[1].textContent = this.prodDescTwo;
      } else if(actualScrollPercent < 600) {
        this.top.children[0].textContent = 'Solar Roof';
        this.top.children[1].textContent = this.prodDescThree;
        this.setButtonsNormalView();
      }
    }
  }

  hideGoDownButton() {
    this.goDownButton.style.opacity = 0;
    this.hideGoDownButtonTimeoutId =
      setTimeout(() => this.goDownButton.style.display = 'none', 250);
  }

  showGoDownButton() {
    clearTimeout(this.hideGoDownButtonTimeoutId);
    this.goDownButton.style.display = 'block';
    setTimeout(() => this.goDownButton.style.opacity = 1);
  }

  setButtonsNormalView() {
    this.buttons.children[0].classList.remove('the-main__info-button--hidden');
    this.buttons.children[1].classList.remove('the-main__info-button--hidden');
    this.buttons.children[2].classList.add('the-main__info-button--hidden');
  }

  setButtonsSpecialView() {
    this.buttons.children[0].classList.add('the-main__info-button--hidden');
    this.buttons.children[1].classList.add('the-main__info-button--hidden');
    this.buttons.children[2].classList.remove('the-main__info-button--hidden');
  }

  setOneOpacity() {
    this.top.style.opacity = 1;
    this.buttons.style.opacity = 1;
  }

  setZeroOpacity() {
    this.top.style.opacity = 0;
    this.buttons.style.opacity = 0;
  }

  increaseOpacity() {
    const newOpacity = parseFloat(this.top.style.opacity) + 0.1;
    this.top.style.opacity = newOpacity;
    this.buttons.style.opacity = newOpacity;
  }

  decreaseOpacity() {
    const newOpacity = parseFloat(this.top.style.opacity) - 0.1;
    this.top.style.opacity = newOpacity;
    this.buttons.style.opacity = newOpacity;
  }

}
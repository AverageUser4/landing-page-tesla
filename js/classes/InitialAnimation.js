export default class InitialAnimation {

  /*
    this can be done with css animations
  */

  header;
  span;
  buttonLeft;
  buttonRight;
  goDownButton;

  constructor() {
    this.header = document.querySelector('.the-main__top-header');
    this.span = document.querySelector('.the-main__top-span');
    this.buttonLeft = document.querySelector('.the-main__info-button-left--hidden');
    this.buttonRight = document.querySelector('.the-main__info-button-right--hidden');
    this.goDownButton = document.querySelector('.the-main__go-down-button');

    // if(1) {
    //   this.header.classList.remove('the-main__top-header--hidden');
    //   this.span.classList.remove('the-main__top-span--hidden');
    //   this.buttonLeft.classList.remove('the-main__info-button-left--hidden');
    //   this.buttonRight.classList.remove('the-main__info-button-right--hidden');
    //   this.goDownButton.classList.remove('the-main__go-down-button--hidden');

    //   return;
    // }

    window.addEventListener('load', () => {

      this.header.classList.remove('the-main__top-header--hidden');

      new Promise((resolve) => {
        setTimeout(() => {
          this.span.classList.remove('the-main__top-span--hidden');
          resolve();
        }, 200);
      })
      .then(() => {
        setTimeout(() => {
          this.buttonLeft.classList.remove('the-main__info-button-left--hidden');
          this.buttonRight.classList.remove('the-main__info-button-right--hidden');
        }, 300);
      })
      .then(() => {
        setTimeout(() => {
          this.goDownButton.classList.remove('the-main__go-down-button--hidden');

        }, 500);
      })
      .then(() => {
        setTimeout(() => {
          this.header.style.transition = 'none';
          this.span.style.transition = 'none';
          this.buttonLeft.style.transition = 'none';
          this.buttonRight.style.transition = 'none';
          this.goDownButton.style.transition = 'all 250ms';
        }, 800);
      });

    });

  }

}
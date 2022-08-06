export default class HeaderAndOtherChanger {

  header;
  lastScrollY = 0;
  currentBase = 0;

  constructor() {    
    this.header = document.querySelector('.the-main__top-header');

    this.header.style.opacity = 1;

    window.addEventListener('scroll', () => this.onScroll());
    // window.addEventListener('click', (e) => console.log(`scrollY: ${scrollY}`, `scrollY / innerHeight: ${scrollY / innerHeight}`));
  }

  onScroll() {
    let scrollDirection = 'up';

    if(scrollY > this.lastScrollY)
      scrollDirection = 'down';

    this.lastScrollY = scrollY;

    const scrollPercent = Math.round(100 * (scrollY / innerHeight + this.currentBase));

    if(scrollDirection === 'down') {

      if(scrollPercent < 10) {
        this.header.style.opacity = 1;
      } else if(scrollPercent >= 10 && scrollPercent < 35) {
        this.header.style.opacity = parseFloat(this.header.style.opacity) - 0.1;
      } else if(scrollPercent >= 35 && scrollPercent < 55) {
        this.header.style.opacity = 0;
        this.header.textContent = 'Model X';
      } else if(scrollPercent >= 55 && scrollPercent < 85) {
        this.header.style.opacity = parseFloat(this.header.style.opacity) + 0.1;
      } else {
        this.header.style.opacity = 1;
      }

    }
    else {

      if(scrollPercent < 10) {
        this.header.style.opacity = 1;
      } else if(scrollPercent >= 10 && scrollPercent < 35) {
        this.header.style.opacity = parseFloat(this.header.style.opacity) + 0.1;
      } else if(scrollPercent >= 35 && scrollPercent < 55) {
        this.header.style.opacity = 0;
        this.header.textContent = 'Model 3';
      } else if(scrollPercent >= 55 && scrollPercent < 85) {
        this.header.style.opacity = parseFloat(this.header.style.opacity) - 0.1;
      } else {
        this.header.style.opacity = 1;
      }

    }

  }

}
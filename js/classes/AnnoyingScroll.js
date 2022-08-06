export default class AnnoyingScroll {

  scrollBlocked = false;
  bodyHeight;
  scrollAnimationIntervalId;

  constructor() {

    this.bodyHeight = document.body.getBoundingClientRect().height;
    window.addEventListener('resize', () => {
      this.bodyHeight = document.body.getBoundingClientRect().height;
    });

    window.addEventListener('wheel',
      e => {
        if(e.ctrlKey)
          return;

        e.preventDefault();

        if(e.deltaY < 0)
          this.moveUp();
        else
          this.moveDown();
      },
      { passive: false }
    );


    /*
      - użytkownik kładzie palec, pobieramy jego współrzędną Y
      - przy przesunięciu porównujemy współrzędne, updatujemy Y i przesuwamy
      w zależności od tego gdzie użytkownik przesunął
    */

    window.addEventListener('touchmove',
      e => {
        e.preventDefault();
        console.log(e);
      },
      { passive: false }
    );

    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    // 'touchmove'
  }

  

  moveUp() {
    if(this.scrollBlocked || scrollY === 0)
      return;

    this.scrollBlocked = true;
    let scrollDestination = scrollY - innerHeight;

    if(scrollDestination < 0)
      scrollDestination = 0;
    else if(scrollDestination % innerHeight !== 0) {

      for(let i = innerHeight * 2; i < this.bodyHeight; i += innerHeight) {

        if(i >= scrollY) {
          scrollDestination = i - innerHeight;
          break;
        }
      }
    }

    const scrollAmount = (scrollDestination - scrollY) / 30;

    this.scrollAnimationIntervalId = 
      setInterval(() => this.scrollingFunction(scrollDestination, scrollAmount, 'up'), 10);
  }

  moveDown() {
    // don't do anything if it's currently scrolling
    // or scroll is at the end
    if(
        this.scrollBlocked ||
        scrollY >= this.bodyHeight - innerHeight
      )
      return;

    this.scrollBlocked = true;
    let scrollDestination = scrollY + innerHeight;

    // destination is not valid if it's not divisible by viewport height
    // if so, find valid destination
    if(scrollDestination % innerHeight !== 0) {

      for(let i = innerHeight; i < this.bodyHeight; i += innerHeight) {

        if(i > scrollY) {
          scrollDestination = i;
          break;
        }
      }
    }

    const scrollAmount = (scrollDestination - scrollY) / 30;

    this.scrollAnimationIntervalId = 
      setInterval(() => this.scrollingFunction(scrollDestination, scrollAmount, 'down'), 10);
  }

  scrollingFunction(scrollDestination, scrollAmount, upOrDown) {
    if(
        (upOrDown === 'down' &&
        scrollY + scrollAmount >= scrollDestination) ||
        (upOrDown === 'up' &&
        scrollY + scrollAmount <= scrollDestination)
      ) {
      clearInterval(this.scrollAnimationIntervalId);
      scrollTo({
        top: scrollDestination, 
        behavior: 'instant'
      });

      setTimeout(() => {
        this.scrollBlocked = false;
      }, 500);

      return;
    }

    scrollBy({
      top: scrollAmount, 
      behavior: 'instant'
    });
  }

}
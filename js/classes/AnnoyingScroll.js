export default class AnnoyingScroll {

  /*
    - kiedy przesuwamy
      - jeżeli nie ma nic w kierunku w którym przesuwamy nie rób nic
      - w przeciwnym razie zablokuj reakcję na scroll na czas trwania
      animacji i przesuń wykonując animację

  */

  constructor() {


    window.addEventListener('wheel',
      (e) => {
        e.preventDefault();
        console.log(e.deltaY);
      },
      { passive: false });

    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    // 'touchmove'

  }

}
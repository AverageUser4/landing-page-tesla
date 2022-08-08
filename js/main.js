import MainMenu from './classes/MainMenu.js';
import MovingButtonBackground from './classes/MovingButtonBackground.js';
import InitialAnimation from './classes/InitialAnimation.js';
import AnnoyingScroll from './classes/AnnoyingScroll.js';
import HeaderAndOtherChanger from './classes/HeaderAndOtherChanger.js';

scrollTo({ top: 0, behavior: 'instant' });

const movingButtonBackground = new MovingButtonBackground();
const initialAnimation = new InitialAnimation();
const annoyingScroll = new AnnoyingScroll();
const mainMenu = new MainMenu(annoyingScroll, movingButtonBackground);
const headerAndOtherChanger = new HeaderAndOtherChanger();


// debug info
window.addEventListener('keydown', (e) => {
  if(e.key !== 'd')
    return;

  console.log(mainMenu);
  console.log(movingButtonBackground);
  console.log(initialAnimation);
  console.log(annoyingScroll);
  console.log(headerAndOtherChanger);
    
});

/*
  innerWidth - ze scrollbarem
  document.body.clientWidth - bez scrollbara
*/

/*
  - the goDownButton sometimes stays invisible when it should be visible
  - when window is zoomed in, the scroll gets locked in seemingly random postiitons,
    does not happen for every amount of zoom, sometimes you can scroll up but not down
  - HeaderAndOtherChanger may need some optimization
*/
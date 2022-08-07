import MainMenu from './classes/MainMenu.js';
import MovingButtonBackground from './classes/MovingButtonBackground.js';
import InitialAnimation from './classes/InitialAnimation.js';
import AnnoyingScroll from './classes/AnnoyingScroll.js';
import HeaderAndOtherChanger from './classes/HeaderAndOtherChanger.js';

scrollTo({ top: 0, behavior: 'instant' });

const movingButtonBackground = new MovingButtonBackground();
const initialAnimation = new InitialAnimation();
const annoyingScroll = new AnnoyingScroll();
const mainMenu = new MainMenu(annoyingScroll);
const headerAndOtherChanger = new HeaderAndOtherChanger();


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
  - add ability to close menu with escape key
  - when menu is open buttons outside should not be selectable with tab
  - when window is zoomed in, the scroll gets locked in seemingly random postiitons,
    does not happen for every amount of zoom, sometimes you can scroll up but not down
  - scrollBlocked inside annoying scroll sometimes keeps being set to true forever
  - menu doesn't have visible scrollbar for whatever reason
  - tab takes you straight to the footer nav, looks bad, etc.
  - menu often isn't animated on open
  - you can scroll when menu is open
  - HeaderAndOtherChanger may need some optimization
  - you cannot scroll menu because of prevent default in ANnoyingScroll.js
*/
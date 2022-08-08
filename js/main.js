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
  - tab takes you straight to the footer nav, looks bad, etc.
  - when tab is pressed:
    - traverse the dom to check if there are still visible nodes to be focused
    - otherwise scroll down / up and focus the first / last visible element
    that wasn't visible earlier
  - DOM traversal will look more or less like this:
    - we are looking for <a> or <button> element that is AFTER the last focused element
    - check sibling, check it's every child
    - check other siblings and their children
    - if no sibling is what we want, check the further children of the parent
    - then grandparent etc. until the parent is an element we dont want to go outside
    (probably .the-main)


  - the goDownButton sometimes stays invisible when it should be visible
  - when window is zoomed in, the scroll gets locked in seemingly random postiitons,
    does not happen for every amount of zoom, sometimes you can scroll up but not down
  - HeaderAndOtherChanger may need some optimization
*/
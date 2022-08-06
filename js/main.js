import MainMenu from './classes/MainMenu.js';
import MovingButtonBackground from './classes/MovingButtonBackground.js';
import InitialAnimation from './classes/InitialAnimation.js';
import AnnoyingScroll from './classes/AnnoyingScroll.js';
import HeaderAndOtherChanger from './classes/HeaderAndOtherChanger.js';

const mainMenu = new MainMenu();
const movingButtonBackground = new MovingButtonBackground();
const initialAnimation = new InitialAnimation();
const annoyingScroll = new AnnoyingScroll();
const headerAndOtherChanger = new HeaderAndOtherChanger();

/*
  - menu często nie jest animowane przy otwieraniu
  - annoying scroll nie jest gotowy, nie ma wsparcia
  dla touch iwentu i przesuwania klawiaturą
*/
import { slideNav, Slide } from './slide.js';

const slides = new slideNav('.slide', '.slide-wrapper');
slides.init();
slides.addArrow('.prev', '.next')
const slides2 = new slideNav('.slide2', '.slide-wrapper2');
slides2.init();
slides2.addArrow('.prev2', '.next2')
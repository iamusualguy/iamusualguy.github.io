let r = 0;
let nX = 0;
let nY = 60;
let sO = 0.6;
const info = document.getElementById("info");
const scroll = document.getElementById("scroll");
const name = document.getElementById("name");
const surname = document.getElementById("surname");
const links = document.getElementById("links");
window.addEventListener(
  "wheel",
  evt => {
    info.style.transform = `translateY(${r}em)`;
    name.style.transform = `rotate(10deg) translateX(${nX}em)`;
    surname.style.transform = `rotate(7deg) translateX(${-1 * nX}em)`;
    links.style.transform = `translateY(${1 * nY}em)`;
    
    scroll.style.opacity = sO;
    
    sO += (evt.deltaY < 0 ? -1 : 1) * 0.05 * 2;
    sO < 0 ? (sO = 0) : (sO = sO);
    sO > 0.6 ? (sO = 0.6) : (sO = sO);
    
    
    r += (evt.deltaY < 0 ? -1 : 1) * 0.5 * 2;
    nX += (evt.deltaY < 0 ? -1 : 1) * 1.7 * 2;
    nY += (evt.deltaY < 0 ? -1 : 1) * 2 * 2;    
    
    r > 0 ? (r = 0) : (r = r);
    r < -17 ? (r = -17) : (r = r);
    nX > 0 ? (nX = 0) : (nX = nX);
    nX < -60 ? (nX = -60) : (nX = nX);
    nY < 0 ? (nY = 0) : (nY = nY);
    nY > 60 ? (nY = 60) : (nY = nY);
  },
  true
);

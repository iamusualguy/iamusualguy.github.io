const menu = document.getElementById('menu');
const menuButton = document.getElementById('menuButton');

let menuOpened = false;

const menuClick = () => {
  menuButton.className = `menuButton link ${!menuOpened ? "close" : ""}`;
  menu.className = `menu ${!menuOpened ? "opened" : ""}`;
  menuOpened = !menuOpened;
}
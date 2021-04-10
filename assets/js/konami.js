/*credit to user Ehsan Kia in the forum https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html*/
let cursor = 0;
const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
document.addEventListener('keydown', (e) => {
  cursor = (e.keyCode == KONAMI_CODE[cursor]) ? cursor + 1 : 0;
  if (cursor == KONAMI_CODE.length) activate();
});
  
  function activate() {
    window.open('cake/', '_blank');
  }
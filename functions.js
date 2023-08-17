
// Write named functions that change the color of the keys below
function keyPlay(event){
  event.target.style.backgroundColor = 'blue';
}

function keyReturn(event){
  event.target.style.backgroundColor = '';
}

module.exports = { keyPlay, keyReturn };
const canvasW = window.innerWidth;
const canvasH = window.innerHeight;
function setup() {

  createCanvas(canvasW, canvasH);
  let canvasX = canvasW/2
  let canvasY = 150
  line(canvasX,0,canvasX,600)

  let alabama = new Tree(canvasX,canvasY);
  let controls = new Controls(alabama)


}



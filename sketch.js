const canvasW = window.innerWidth;
const canvasH = window.innerHeight;
function setup() {

  createCanvas(canvasW, canvasH);
  let canvasX = canvasW/2
  let canvasY = 150


  let alabama = new Node_(null);
  alabama.insert(25);
  alabama.insert(30);
  alabama.insert(33);
  alabama.insert(22);
  alabama.insert(23);

  alabama.insert(15);
  alabama.insert(20);
  alabama.insert(13);
  alabama.insert(14);
  alabama.insert(35);
  alabama.insert(27);
  alabama.insert(21);
  alabama.insert(18);

  alabama.setPositions(canvasX,canvasY)
  alabama.draw()
  console.log(alabama)
}



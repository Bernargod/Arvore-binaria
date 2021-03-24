const canvasW = window.innerWidth;
const canvasH = window.innerHeight;
function setup() {

  createCanvas(canvasW, canvasH);
  let canvasX = canvasW/2
  let canvasY = 150
  line(canvasX,0,canvasX,600)

  let alabama = new Tree(canvasX,canvasY);
  let controls = new Controls(alabama)
  //let alabama = new Node_(null)
  /*alabama.insert(25);
  alabama.insert(30)
  alabama.insert(33);
  alabama.insert(17);
  alabama.insert(20);
  alabama.insert(13);
  alabama.insert(14);
  alabama.insert(15)
  alabama.insert(35);
  alabama.insert(27);
  alabama.insert(26)
  alabama.insert(21);
  alabama.insert(18);
*/

//alabama.setPositions(canvasX,canvasY)
//alabama.draw()
//alabama.fill(14)

  console.log(alabama)

}



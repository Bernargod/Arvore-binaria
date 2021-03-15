
class Node_ {

  static  horizontalSpace = 25
  static  verticalSpace = 75

  constructor(parent) {
    this.data = null
    this.parent =  parent
    this.left = null
    this.right = null

    this.posX = null
    this.posY = null

    this.leftSpacing = 0
    this.rightSpacing = 0

    this.cumulativeLeftSpacing = 0
    this.cumulativeRightSpacing= 0

    

  }
  //draw node vai ter que pegar a poição x e y do node para desenha-lo
  //as posições x e y começarao a partir do root, e depois disso cada um tera um posição diferente, baseado em qual lado da arvore o node sera inserido
  //cada node então precisara de variaveis para posição, porem somente o root tera sua posição colocada manualmente,
  // todos os outros nodes terao a posiçao colocada relativa ao primeiro node
  isFilled(){
    return this.data !== null;
  }
  hasParent(){
    return this.parent !== null;
  }

  insert(data) {
    if(!this.isFilled()){
      this.data = data
      this.left = new Node_(this)
      this.right = new Node_(this)
      return this
    } /*
    var initialLeftSpacing = this.leftNode.cumulativeRightSpacing
    + Node.HORIZONTALSPACING;

    var shiftedNode = this.leftNode.addValue(value);

    this.leftSpacing = this.leftNode.cumulativeRightSpacing
        + Node.HORIZONTALSPACING;

    this.cumulativeLeftSpacing = this.leftNode.cumulativeLeftSpacing
        + this.leftSpacing;

    if(this.leftSpacing !== initialLeftSpacing) {
        return this.leftNode;
    }

    return shiftedNode;
    */
    else if(data < this.data){
      let initialLeftSpacing = this.left.cumulativeRightSpacing + Node_.horizontalSpace
      let shiftedNode = this.left.insert(data)

      this.leftSpacing = this.left.cumulativeRightSpacing + Node_.horizontalSpace
      this.cumulativeLeftSpacing = this.left.cumulativeRightSpacing + this.leftSpacing

      if(this.leftSpacing !== initialLeftSpacing)
        return this.left
      
      return shiftedNode

    }/*            
    var rightSpacing = this.rightNode.cumulativeLeftSpacing
        + Node.HORIZONTALSPACING;

    var shiftedNode = this.rightNode.addValue(value);

    this.rightSpacing = this.rightNode.cumulativeLeftSpacing
        + Node.HORIZONTALSPACING;

    this.cumulativeRightSpacing = this.rightNode.cumulativeRightSpacing
        + this.rightSpacing;

    if(this.rightSpacing !== rightSpacing) {
        return this.rightNode;
    }

    return shiftedNode; */
    else if(data > this.data){
      let initialRightSpacing = this.right.cumulativeLeftSpacing + Node_.horizontalSpace
      let shiftedNode = this.right.insert(data)

      this.rightSpacing = this.right.cumulativeLeftSpacing + Node_.horizontalSpace
      this.cumulativeRightSpacing = this.right.cumulativeRightSpacing + this.rightSpacing

      if(this.rightSpacing !== initialRightSpacing)
        return this.right
      
      return shiftedNode

    }      
    else if (data === this.data){
      console.log("You fucked up, the data already exists maaan")
    }
  }

  setPositions(x,y){
    if (this.isFilled()){
      //caso x e y nao sejam passados para a função
      if(typeof x === "undefined" && typeof y === "undefined"){
        if(this.data < this.parent.data)
          this.posX = this.parent.posX - this.parent.leftSpacing
        else
          this.posX = this.parent.posX + this.parent.rightSpacing
        
        this.posY = this.parent.posY + Node_.verticalSpace
      }
      else{
        this.posX = x
        this.posY = y
      }
      this.left.setPositions()
      this.right.setPositions()
    }
  }

  drawNode(){
    fill(255, 0, 0);
    stroke(255, 0, 0);
    ellipse(this.posX, this.posY, 35, 35);

    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(12);
    text(this.data, this.posX, this.posY);
}
  drawConnection(){
    if(this.hasParent()){
      stroke(0, 0, 0);
      line(this.posX,this.posY,this.parent.posX,this.parent.posY)
    }
  }
  draw(){
      if(this.isFilled()){

        this.left.draw()
        this.right.draw()

        this.drawConnection()
        this.drawNode()
      }
  }
}
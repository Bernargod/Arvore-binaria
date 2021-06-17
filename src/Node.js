
class Node_ {

  static SIZE = 40
  static COLOR = "#bdb9b6"
  static STROKE = "#000000"
  static TEXTSIZE = 17           
  static TEXTCOLOR = color(0, 0, 0)
  static EDGECOLOR = color(0, 0, 0)
  static EDGETHICKNESS = 2        

  static VISITED = "#6d6de3"
  static SUCCESS = "#aded47"                                  
  static FAILURE = "#f04d4d"

  static  horizontalSpace = 35
  static  verticalSpace = 55

  constructor(parent, color,stroke,size,textColor
              ,textSize,edgeColor,edgeThickness)
    {
    this.data = null
    this.parent =  parent
    this.right = null

    this.posX = null
    this.posY = null

    this.leftSpacing = 0
    this.rightSpacing = 0

    this.cumulativeLeftSpacing = 0
    this.cumulativeRightSpacing= 0

    this.color = Node_.COLOR
    this.stroke = Node_.STROKE
    this.size = Node_.SIZE
    this.textColor = Node_.TEXTCOLOR
    this.textSize = Node_.TEXTSIZE
    this.edgeColor = Node_.EDGECOLOR
    this.edgeThickness = Node_.EDGETHICKNESS
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
    }
    else if(data < this.data){
      let initialLeftSpacing = this.left.cumulativeRightSpacing + Node_.horizontalSpace
      let shiftedNode = this.left.insert(data)

      this.leftSpacing = this.left.cumulativeRightSpacing + Node_.horizontalSpace 
      this.cumulativeLeftSpacing = this.left.cumulativeLeftSpacing + this.leftSpacing

      if(this.leftSpacing !== initialLeftSpacing)
        return this.left
      
      return shiftedNode

    }
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
        else if(this.data > this.parent.data) 
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

  search(key) {
    if (!this.isFilled()) {
        return false;

    } else if (this.data === key) {
        return true;

    } else if (key < this.data ) {
        return this.left.search(key);

    } else if (key > this.data) {
        return this.right.search(key);
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
  drawNode(){
    fill(this.color);
    stroke(this.stroke);
    strokeWeight(this.edgeThickness)
    ellipse(this.posX, this.posY, this.size, this.size);
    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(this.textSize);
    text(this.data, this.posX, this.posY + 1);
}
  drawConnection(){
    if(this.hasParent()){
      stroke(this.stroke);
      line(this.posX,this.posY,this.parent.posX,this.parent.posY)
    }
  }
  redraw(){
    if(this.isFilled()){
      this.drawConnection()
      this.drawNode()
      
      if(this.hasParent()) this.parent.drawNode()
    }
  }

  }

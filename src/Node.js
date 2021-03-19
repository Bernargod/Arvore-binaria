
class Node_ {

  static SIZE = 20
  static COLOR = color(255, 255, 255)
  static STROKE = color(0, 0, 0, 0)
  static TEXTSIZE = 10           
  static TEXTCOLOR = color(0, 0, 0)
  static EDGECOLOR = color(0, 0, 0)
  static EDGETHICKNESS = 2        

  static VISITED = color(0, 0, 255)
  static SUCCESS = color(0, 255, 0)
                                   
  static FAILURE = color(255, 0, 0)

  static  horizontalSpace = 25
  static  verticalSpace = 75

  constructor(parent = null, size = Node.SIZE,
              color = Node.COLOR, stroke = Node.STROKE,
              stroke = Node.STROKE, textSize = Node.TEXTSIZE,
              textColor = Node.TEXTCOLOR, edgeColor = Node.EDGECOLOR,)
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
      this.cumulativeLeftSpacing = this.left.cumulativeRightSpacing + this.leftSpacing

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

  search(key){
    if(this.isFilled){
      if(key === this.data) return this
      else if(key < this.data) this.left.search(key)
      else if(key > this.data) this.right.search(key)
    }
    else return false
  }

  drawNode(){
        fill(this.color)
        stroke(this.stroke)
        ellipse(this.x, this.y, this.size, this.size)
        
        noStroke()
        fill(this.textColor)
        textAlign(CENTER, CENTER)
        textSize(this.textSize)
        text(this.value, this.x, this.y + 1)
  }

  drawConnection(){
    if(this.hasParent()){
      stroke(this.edgeColor)
      strokeWeight(this.edgeThickness)
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

  redraw(){
    if(this.isFilled()){
      this.drawConnection()
      this.drawNode()
      
      if(this.hasParent()) this.parent.drawNode()
    }
  }

  recursivePaint(color){
    if(this.isFilled()){
      this.color = color
      this.edgeColor = color
      this.right.recursivePaint(color)
      this.leftSpacing.recursivePaint(color)
    }
  }

  paint(color){
    this.color = color
    this.edgeColor = color
    
    this.redraw()
  }

  resetVisuals(){
    if(this.isFilled()){
      this.size = Node.SIZE
      this.color = Node.COLOR
      this.stroke = Node.STROKE
      this.textSize = Node.TEXTSIZE
      this.textColor = Node.TEXTCOLOR

      this.edgeColor = Node.EDGECOLOR
      this.edgeThickness = Node.EDGETHICKNESS

      this.leftNode.resetVisuals()
      this.rightNode.resetVisuals()    
    }
  }
}

class Node_ {
  constructor(parent) {
    this.data = null
    this.parent =  parent
    this.left = null
    this.right = null

    this.posX = null
    this.posY = null

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
    }
    else if(data < this.data){
      this.left.insert(data)
    }
    else if(data > this.data){
      this.right.insert(data);
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
          this.posX = this.parent.posX - 25
        else
          this.posX = this.parent.posX + 25
        
        this.posY = this.parent.posY + 75
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
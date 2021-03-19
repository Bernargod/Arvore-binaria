class Tree{
    constructor(x,y){
        this.root = new Node_(null)

        this.x = x
        this.y = y

        this.backgoundColor = [0,0,0]
    }

    //Cria um root novo, resetando todas as referencias de nós abaixo
    clear(){
        this.root = new Node_()
    }
    //Retorna um numero aleatório que nao esteja presente na arvore
    uniqueRandom(){
        while(true){
            let value = Math.floor(random(0,150))
            if(!this.search(value)) return value
        }
    }

//---------Wrappers-----------
    addValue(data){
        let newNode = this.root.addValue(data)
        this.setPositions(newNode)
    }
    search(key){
        return this.root.search(key)
    }
    setPositions(node){
        if(node === root) node.setPositions(this.x,this.y)
        else node.setPositions
    }
    draw(){
        this.background(this.backgoundColor)
        if(this.root.isFilled()) 
            this.root.draw
    }

}
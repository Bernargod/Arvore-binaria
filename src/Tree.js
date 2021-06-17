class Tree{
    constructor(x,y){
        this.root = new Node_(null)

        this.x = x
        this.y = y

        this.running = false;
        this.timeout = null; 
        this.node = null;    

        this.backgoundColor = "#bdfcfa"

        this.draw()
        this.controls = null
    }
    
    bindControls(controls){
        this.controls = controls
    }
    //Cria um root novo, resetando todas as referencias de nós abaixo
    clear(){
        this.root = new Node_(null)
    }
    //Retorna um numero aleatório que nao esteja presente na arvore
    uniqueRandom(){
        while(true){
            let value = Math.floor(random(1,100))
            if(!this.search(value)) return value
        }
    }

//---------Wrappers-----------
    insert(data){
        let newNode = this.root.insert(data)
        this.setPositions(newNode)
    }
    search(key){
        return this.root.search(key)
    }
    setPositions(node){
        if(node === this.root) node.setPositions(this.x,this.y)
        else node.setPositions()
    }
    draw(){
        background(this.backgoundColor)
        if(this.root.isFilled()) 
            this.root.draw()
    }

    resetVisuals(){
        this.root.resetVisuals()
        this.draw()
    }

    updateDrawing(){
        image(this, 0, 0)
    }

//--------Animação-----------

    multiInsert(loopVal){
        if(loopVal !== 0){
            this.insert(this.uniqueRandom())
            this.draw()
            setTimeout(()=> this.multiInsert(loopVal - 1), 1000);
            }
    }
}

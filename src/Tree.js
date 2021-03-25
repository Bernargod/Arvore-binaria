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
        image(0,0)
    }
//--------Stuff------------
    
    fill(count) {
        this.clear()

        for(let i = 0; i < count; i++){
            this.insert(this.uniqueRandom())
        }
        this.draw();
    }
//--------Animação-----------
    startAnimation(frame,...args){
        if(this.running)
            throw Error('Animação em progresso')
        else{
            this.running = true
            this.node = this.root

            this.resetVisuals()
            this.continueAnimation(frame.bind(this),...args)
        }
    }
    continueAnimation(frame,...args){
        this.timeout = setTimeout(()=>frame.bind(this)(...args),
            this.controls.animationInterval)
    }
    stopAnimation(comlpete = ()=>{},...callbackArgs){
        this.running = false
        this.node = null
        clearTimeout(this.timeout)
        setTimeout(()=> comlpete(...callbackArgs),this.controls.animationInterval)
    }
    addValueVisual(value,comlpete = ()=>{},...callbackArgs){
        this.startAnimation(this.addValueFrame,value,comlpete,...callbackArgs)
    }
    addValueFrame(value,complete,...callbackArgs){
        if(!this.node.isFilled()){
            this.insert(value)
            this.node.paint(Node_.SUCCESS)
            this.draw()
            this.stopAnimation(complete,...callbackArgs)
        }else{
            this.node.paint(Node_.VISITED)
            this.updateDrawing()

            if(value < this.node.data)
                this.node = this.node.left
            else if(vaue > this.node.data)
                this.node = this.node.right

            this.continueAnimation(this.addValueFrame,value,complete,...callbackArgs)
        }

    }
}
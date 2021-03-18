class Tree{
    constructor(x,y0){
        this.root = new Node_(null)

        this.x = x
        this.y = y
    }

    //Cria um root novo, resetando todas as referencias de nós abaixo
    clear(){
        this.root = new Node_(null)
    }
    uniqueRandom(){
        while(true){
            let value = Math.floor(random(0,150))
            if(!this.search(value)) return value
        }
    }
}
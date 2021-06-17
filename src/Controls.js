class Controls{
    constructor(tree){
        this.tree = tree
        this.tree.bindControls(this)

        this.addBtn = document.getElementById("add-btn")
        this.addBtn.addEventListener('click', () => this.addNode())

        this.addMBtn = document.getElementById("add-multiple")
        this.addMBtn.addEventListener('click',() => this.addMultiple())

        this.clearBtn = document.getElementById("clear-btn")
        .addEventListener('click',()=>this.clearTree())    
    }
    getNumber(text) {
        let value = prompt(text);

        if(value === null) {
            return null;
        } else if(isNaN(parseInt(value)) || value === "" || parseInt(value) < 0) {
            alert('Por favor insira um valor válido');
            return null;
        } else {
            return parseInt(value);
        }
    }

    addNode(){
        let value = this.getNumber("Que valor deseja adicionar a arvore?")
        if(!this.tree.search(value)){
            this.tree.insert(value)
            this.tree.draw()
        }
        else{
            alert("Valor ja está presente na arvore")
        }
        
        
    }
    addMultiple(){
        let iterations = this.getNumber("Quantos nós deseja adicionar a arvore?")
        if(iterations)
            this.tree.multiInsert(iterations)
    }
    clearTree(){
        this.tree.clear()
        this.tree.draw()
    }




}
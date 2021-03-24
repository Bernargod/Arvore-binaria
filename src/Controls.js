class Controls{
    constructor(tree){
        this.tree = tree
        this.tree.bindControls(this)

        this.addBtn = document.getElementById("add-btn")
        this.addBtn.addEventListener('click', () => this.addTemporario())
    }

    addTemporario(){
        this.tree.insert(this.tree.uniqueRandom())
        this.tree.draw()
    }


}
class Controls{
    constructor(tree){
        this.tree = tree
        this.tree.bindControls(this)

        this.addBtn = document.getElementById("add-btn")
        this.addBtn.addEventListener('click', () => this.addTemporario())

        this.yooBtn = document.getElementById("yoo")
        this.yooBtn.addEventListener('click',() => this.testFunc())
    }

    addTemporario(){
        this.tree.addValueVisual(this.tree.uniqueRandom())
        //this.tree.insert(this.tree.uniqueRandom())
        //this.tree.draw()
    }
    testFunc(){
        this.tree.resetVisuals()
    }


}
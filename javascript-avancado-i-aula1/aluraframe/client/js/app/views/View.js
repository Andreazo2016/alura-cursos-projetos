class View{
    constructor(elementoDom){
        this._elementoDom = elementoDom
    }
    template(model){
        throw new Error('O método template deve ser implementado!!')
    }

    update(mensagem) {
        this._elementoDom.innerHTML = this.template(mensagem)
    }
}
class MensagemView extends View {
    constructor(elementoDom){
        super(elementoDom)
    }
    template(mensagem) {
        return `<p class="alert alert-info">${mensagem}</p>`
    }
}
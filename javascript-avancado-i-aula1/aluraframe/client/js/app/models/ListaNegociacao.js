class ListaNegociacao {
    constructor() {
        throw new Error('ListaNegociacao não pode ser instanciada')
    }

    static _negociacoes = []

    static adiciona(negociacao) {
        ListaNegociacao._negociacoes.push(negociacao)
    }

    get negociacoes() {
        return [...ListaNegociacao._negociacoes]
    }
}
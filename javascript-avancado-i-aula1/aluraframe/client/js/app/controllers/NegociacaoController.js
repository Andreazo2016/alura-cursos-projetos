
class NegociacaoController {
    constructor(){
        this._inputQuantidade = this.pegarElementoPeloSeletor('#quantidade')
        this._inputData = this.pegarElementoPeloSeletor('#data')
        this._inputValor = this.pegarElementoPeloSeletor('#valor')
        this._negociacoesView = new NegociacoesView(this.pegarElementoPeloSeletor('#negociacoesView'))
        this._negociacoesView.update(ListaNegociacao._negociacoes)

        this._mensagem = new Mensagem('Adicionado com sucesso')
        this._mensagemView = new MensagemView(this.pegarElementoPeloSeletor('#mensagemView'))
    }

    pegarElementoPeloSeletor(seletor) {
        return document.querySelector(seletor)
    }

    adiciona(event) {
        event.preventDefault()
        ListaNegociacao.adiciona(this._novaNegociacao())
        this._mensagemView.update(this._mensagem.texto)
        this._negociacoesView.update(ListaNegociacao._negociacoes)
        this._limparFormulario()
    }
    _novaNegociacao(){
        return new Negociacao(
            DataHelper.converterStringParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }

    _limparFormulario(){
        this._inputQuantidade.value = 1
        this._inputData.value = ''
        this._inputValor.value = 0

        this._inputData.focus()
    }
}
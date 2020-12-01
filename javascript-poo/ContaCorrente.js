const { Cliente } = require("./Cliente")

class ContaCorrente {
    agencia;
    _saldo = 0;
    _cliente = null;

    set cliente(cliente) {
        if (!(cliente instanceof Cliente)) return;
        this.cliente = cliente
    }
    get cliente(){
        return this._cliente
    }
    get saldo(){
        return this._saldo
    }

    sacar(valor) {
        //early return

        if (this._saldo < valor) return;

        this._saldo -= valor
        return valor
    }

    depositar(valor) {
        //early return
        if (valor <= 0) return;

        this._saldo += valor
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}
/**Obs: Valores primitivo são sempre passado como copia em funções, já objetos são passados como referências */
const {ContaCorrente} = require("./ContaCorrente")

const contaCorrente = new ContaCorrente()

contaCorrente.depositar(100)

const valorSacado = contaCorrente.sacar(10)

console.log('valorSacado',valorSacado)
class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia
    this.numero = numero
    this.tipo = tipo
    this._saldo = 0
  }

  get saldo() {
    return this._saldo
  }

  set saldo(valor) {
    return (this._saldo = valor)
  }

  depositar(valor) {
    this._saldo += valor

    return this._saldo
  }

  sacar(valor) {
    if (valor > this._saldo) {
      return 'Operação Negada - Saldo Insuficiente'
    }
    this._saldo -= valor

    return this._saldo
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero)
    this.tipo = 'corrente'
    this._cartaoCredito = cartaoCredito
  }

  get cartaoCredito() {
    return this._cartaoCredito
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor
  }
}

class ContaPoupança extends ContaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, saldo)
    this.tipo = 'poupança'
    this._saldo = saldo
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero)
    this.tipo = 'universitária'
  }

  sacar(valor) {
    if (valor > this._saldo) {
      return 'Operação Negada - Saldo Insuficiente!'
    } else if (valor > 500) {
      return 'Operação Negada - Valor Não Permitido!'
    }
    this._saldo -= valor

    return this._saldo
  }
}

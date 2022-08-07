"use strict";
window.onload = function mostraNconta() {
    const num = document.getElementById("v-conta");
    let nk = parseInt(num.value);
    nk = 15478788;
};
class conta_banco {
    constructor(nome, numero_da_conta, saldo, cartao_de_credito) {
        this.nome = nome;
        this.numero_da_conta = numero_da_conta;
        this.saldo = Number(saldo.toFixed(2));
        this.cartao_de_credito = cartao_de_credito;
    }
    limpar() {
        const v = document.getElementById("insert-deposito");
        v.value = "";
        const k = document.getElementById("retirar");
        k.value = "";
    }
    getsaldo() {
        let tela = document.getElementById('saldo-atual');
        const trans = tela.value = this.saldo.toFixed(2);
        console.log(typeof trans);
        const k = document.getElementById("btn-saldo");
        k.style.display = "none";
        const kj = document.getElementById("btn-saldo-2");
        kj.style.display = "initial";
    }
    deposito() {
        let valor = document.getElementById("insert-deposito");
        let resultado = this.saldo - -valor.value;
        console.log(typeof valor.value + "value");
        this.saldo = resultado;
        console.log(typeof resultado);
        this.limpar();
        this.getsaldo();
        return resultado;
    }
    saque() {
        let valor = document.getElementById("retirar");
        let saque = parseFloat(valor.value);
        if (saque > this.saldo) {
            const msg = document.getElementById("msg-inicial");
            msg.style.display = "initial";
            setTimeout(() => {
                msg.style.display = "none";
            }, 5000);
        }
        else {
            let resultado = this.saldo - +saque;
            this.saldo = resultado;
            this.limpar();
            this.getsaldo();
        }
    }
    esconder() {
        const y = document.getElementById("saldo-atual");
        y.value = "";
        const b = document.getElementById("btn-saldo");
        b.style.display = "initial";
        const w = document.getElementById("btn-saldo-2");
        w.style.display = "none";
    }
    conta() {
        const conta = document.getElementById('v-conta');
        return console.log(conta.value = this.numero_da_conta.toString());
    }
}
const caio = new conta_banco(null, 0, 0.00, null);
caio.nome = "Caio Bruno de Andrade Almeida";
caio.numero_da_conta = 35.98710;
caio.saldo = 10000;
caio.cartao_de_credito = true;

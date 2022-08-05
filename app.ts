class conta_banco{
    nome
    numero_da_conta
    saldo
    cartao_de_credito

    constructor(nome:string | null,numero_da_conta:number ,saldo:number,cartao_de_credito?:boolean | null) {
        this.nome = nome;
        this.numero_da_conta = numero_da_conta;
        this.saldo = Number(saldo.toFixed(2));
        this.cartao_de_credito = cartao_de_credito;
       
    }
    limpar():void {
        const v = document.getElementById("insert-deposito")  as HTMLInputElement
            v.value = "";
        const k = document.getElementById("retirar") as HTMLInputElement
            k.value = "";
    }

   

    getsaldo(): void {
        let tela = document.getElementById('saldo-atual') as HTMLInputElement
        
        const trans = tela.value = this.saldo.toFixed(2);
        console.log(typeof trans)
        const k = document.getElementById("btn-saldo") as HTMLInputElement
            k.style.display = "none"
       
        const kj = document.getElementById("btn-saldo-2") as HTMLInputElement
            kj.style.display = "initial"
   
    }
     deposito():number {
        let valor = document.getElementById("insert-deposito") as HTMLInputElement
        let resultado = this.saldo - -valor.value;
        console.log(typeof valor.value + "value")
        this.saldo = resultado
        console.log(typeof resultado)
        this.limpar();
        this.getsaldo()
        return resultado
    }

    saque():number {
        let valor = document.getElementById("retirar") as HTMLInputElement
        let resultado = this.saldo - +valor.value;
        console.log(typeof valor.value + "value")
        this.saldo = resultado
        console.log(typeof resultado)
        this.limpar();
        this.getsaldo()
        return resultado
    }

       

        esconder() {
        const y = document.getElementById("saldo-atual") as HTMLInputElement
        y.value = "";
        const b = document.getElementById("btn-saldo") as HTMLInputElement
        b.style.display = "initial"
        const w = document.getElementById("btn-saldo-2") as HTMLInputElement
        w.style.display = "none"
    }

      conta() {
        const conta = document.getElementById('v-conta') as HTMLInputElement
          return console.log(conta.value = this.numero_da_conta.toString())
    }
 
}

const caio = new conta_banco(null, 0 ,0.00, null)

caio.nome = "Caio Bruno de Andrade Almeida";
caio.numero_da_conta = 35.98710;
caio.saldo = 10000;
caio.cartao_de_credito = true;





import { MeuObjeto } from './MeuObjeto';
import { MensagemView } from '../views/index';

export class Negociacao implements MeuObjeto<Negociacao> {

    private _mensagemView = new MensagemView('#mensagemView');

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) { 
        
    }

    get volume() {
        return this.quantidade * this.valor;
    }
    
    paraTexto(): void {
        console.log('-- Impressão paraTexto --')
        console.log(
            `Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
            Volume: ${this.volume}`            
        )
    }


    ehIgual(negociacao: Negociacao): boolean {

        let verificaData = (this.data.getDate() == negociacao.data.getDate() && this.data.getMonth() == negociacao.data.getMonth() && this.data.getFullYear() == negociacao.data.getFullYear());
        if (verificaData) {
            this._mensagemView.update("Não é possível importar negociações duplicadas!");
            return true;
        } else {
            return false;
        }         
    }
}


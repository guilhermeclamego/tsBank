import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index';
import { domInject } from '../helpers/decorators/index';

export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView', true);
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event){   
        
        event.preventDefault();

        let data =  new Date(this._inputData.val().replace(/-/g, ','));
        
        if(!this._ehDiaUtil(data)){
            this._mensagemView.update('Só é possível cadastrar negociações em dias úteis!')
            return
        }
        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);

        // depois de adicionar, atualiza a view novamente para refletir os dados
        this._negociacoesView.update(this._negociacoes);
        
        //Mensagem de sucesso
        this._mensagemView.update('Negociação adiciona com sucesso!');

    }

    private _ehDiaUtil(data: Date) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }   

    //Importar dados da API
    importaDados(){
        function isOk(res: Response){
            if(res.ok){
                return res;
            } else {
                throw new Error(res.statusText);
            }
        }
        fetch('http://localhost:8080/dados')
            .then(res => isOk(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) => {  
            //tipo interface NegociacaoParcial, para não deixar colocar os campos da API errados e validar os mesmos
                    dados
                    .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
                    .forEach(negociacao => this._negociacoes.adiciona(negociacao))
                    this._negociacoesView.update(this._negociacoes)
                })                    
            .catch(err => console.log(err.message));
            
    }
}

//Domingo 0, Segunda 1...
enum DiaDaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}
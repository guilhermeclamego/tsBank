System.register(["../views/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, Negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, quantidade, valor) {
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                }
                get volume() {
                    return this.quantidade * this.valor;
                }
                paraTexto() {
                    console.log('-- Impressão paraTexto --');
                    console.log(`Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
            Volume: ${this.volume}`);
                }
                ehIgual(negociacao) {
                    let verificaData = (this.data.getDate() == negociacao.data.getDate() && this.data.getMonth() == negociacao.data.getMonth() && this.data.getFullYear() == negociacao.data.getFullYear());
                    if (verificaData) {
                        this._mensagemView.update("Não é possível importar negociações duplicadas!");
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});

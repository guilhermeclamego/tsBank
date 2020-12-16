class NegociacoesView {

    private _elemento: Element;

    constructor(seletor: string){
        this._elemento = document.querySelector(seletor);
    }

    //Converte o template ao elemento do DOM
    update(model: Negociacoes): void {
        this._elemento.innerHTML = this.template(model);
    }

    //Define o que vai ser apresentado ao usuário
    template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
            </tbody>
                ${model.paraArray().map( negociacao => {
                    return `
                        <tr>
                            <td>${negociacao.data.getDate()}/${negociacao.data.getMonth()+1}/${negociacao.data.getFullYear()}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                    `
                }).join('')}
            <tfoot>
            </tfoot>
        </table>         
        
    `
    }
}
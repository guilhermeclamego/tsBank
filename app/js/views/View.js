class View {
    constructor(seletor) {
        this._elemento = $(seletor);
    }
    //Converte o template ao elemento do DOM
    update(model) {
        this._elemento.html(this.template(model));
    }
}

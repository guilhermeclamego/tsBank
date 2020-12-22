export abstract class View<T> {
    private _elemento: JQuery;

    constructor(seletor: string){
        this._elemento = $(seletor);
    }

    //Converte o template ao elemento do DOM
    update(model: T) {
        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;
}
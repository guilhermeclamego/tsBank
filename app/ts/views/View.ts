export abstract class View<T> {
    protected _elemento: JQuery;
    private _escapar: boolean;

    //escapar? a interrogação, serve para o parâmetro ser opcional
    //sem o interrogação e com = false, caso não for passado parâmetro, assume por padrão false
    constructor(seletor: string, escapar: boolean = false){
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    //Converte o template ao elemento do DOM
    update(model: T) {
        let template = this.template(model);
        if(this._escapar){
            //Evita colocar scripts dentro do template, por segurança
            template = template.replace(/<script>[\s\S]*?<\/script>/, ''); 
        }    
        this._elemento.html(template);
    }

    abstract template(model: T): string;
}
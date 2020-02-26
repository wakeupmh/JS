class MensagemView {
    private _elemento: Element;

    constructor(selector: string) {
        this._elemento = document.querySelector(selector)
    }

    update(model: string) :void {
        this._elemento.innerHTML = this.template(model);
    }
    
    template(model: string): string {
        return `
           <p class="alert alert-info"> ${model} </p>
        `;
    }
}
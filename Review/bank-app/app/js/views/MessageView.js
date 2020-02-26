class MessageView {
    constructor(selector) {
        this._elemento = document.querySelector(selector);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    template(model) {
        return `
           <p class="alert alert-info"> ${model} </p>
        `;
    }
}

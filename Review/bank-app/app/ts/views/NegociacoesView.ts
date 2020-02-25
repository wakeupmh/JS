class NegociacoesView {
    private _elemento: Element;

    constructor(selector: string) {
        this._elemento = document.querySelector(selector)
    }

    update() :void {
        this._elemento.innerHTML = this.template();
    }
    
    template(): string {
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

                <tfoot>
                </tfoot>
            </table>      
        `;
    }
}
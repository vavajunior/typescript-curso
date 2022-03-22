import { Imprimivel } from "../utils/imprimivel.js"

export class Negociacao implements Imprimivel {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    get data(): Date {
        const dt = new Date(this._data.getTime());
        return dt;
    }

    get total() {
        return this.quantidade * this.valor;
    }

    public static criaNegociacao(dataInput: Date, quantidadeInput: number, valorInput: number): Negociacao {
        const itemNovo = new Negociacao(
            dataInput,
            quantidadeInput,
            valorInput
        );
        return itemNovo;
    }

    public paraTexto(): string {
        return `Data: ${this.data}
Quantidade: ${this.quantidade}
Valor: ${this.valor}`;
    }
}
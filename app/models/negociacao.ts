export class Negociacao {
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
}
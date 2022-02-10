import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private _lista: Array<Negociacao> = [];

    public adiciona(item: Negociacao) {
        this._lista.push(item);
    }

    public lista(): ReadonlyArray<Negociacao> {
        return this._lista;
    }
}
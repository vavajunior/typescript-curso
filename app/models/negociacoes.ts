import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private _lista: Array<Negociacao> = [];

    adiciona(item: Negociacao) {
        this._lista.push(item);
    }

    lista(): ReadonlyArray<Negociacao> {
        return this._lista;
    }
}
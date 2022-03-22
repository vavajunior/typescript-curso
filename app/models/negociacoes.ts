import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel {

    private _lista: Array<Negociacao> = [];

    public adiciona(item: Negociacao) {
        this._lista.push(item);
    }

    public lista(): ReadonlyArray<Negociacao> {
        return this._lista;
    }

    public paraTexto(): string {
        return JSON.stringify(this._lista, null, 4);
    }
}
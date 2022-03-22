import { Imprimivel } from "./imprimivel.js";

export function imprimir(...lista: Imprimivel[]) {
    for (let item of lista) {
        console.log(item.paraTexto());
    }
}
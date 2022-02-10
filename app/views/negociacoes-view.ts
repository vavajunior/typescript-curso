import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    protected template(model: Negociacoes): string {
        return `
        <table class="table table—hover table—bordered"> 
            <thead> 
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(i => {
            return `
                <tr>
                    <td>${new Intl.DateTimeFormat().format(i.data)}</td>
                    <td>${i.quantidade}</td>
                    <td>${i.valor}</td>
                </tr>
                `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
}
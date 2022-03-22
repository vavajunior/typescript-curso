import { INegociacaoAPI } from "../interfaces/INegociacaoAPI.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacaoAPI {
    public buscarNegociacoesHoje(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(response => response.json())
            .then((result: INegociacaoAPI[]) => result.map(item => new Negociacao(new Date(), item.vezes, item.montante)));
    }
}
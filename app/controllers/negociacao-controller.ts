import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private listaNegociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView("#mensagemView");

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.listaNegociacoes);
    }

    public adiciona(): void {
        const novoItem = this.criaNegociacao();
        if (this.ehDiaUtil(novoItem.data)) {
            this.listaNegociacoes.adiciona(novoItem);
            console.log(this.listaNegociacoes.lista());

            this.negociacoesView.update(this.listaNegociacoes);
            this.mensagemView.update("Negociação adicionada com sucesso!");
            this.limpaFormulario();
        }
        else {
            this.mensagemView.update("Data não é dia útil!");
        }
    }

    private criaNegociacao(): Negociacao {
        const itemNovo = new Negociacao(
            this.inputData.valueAsDate,
            this.inputQuantidade.valueAsNumber,
            this.inputValor.valueAsNumber
        );
        return itemNovo;
    }

    private ehDiaUtil(data: Date): boolean {
        return (data.getDay() != DiasDaSemana.DOMINGO && data.getDay() != DiasDaSemana.SABADO);
    }

    private limpaFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
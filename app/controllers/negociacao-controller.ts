import { domInjector } from "../decorators/dom-injector.js";
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacaoAPI } from "../services/negociacao-api.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;

    private listaNegociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView("#mensagemView");
    private serviceAPI = new NegociacaoAPI();

    constructor() {
        this.negociacoesView.update(this.listaNegociacoes);
    }

    @logarTempoExecucao()
    public adiciona(): void {
        const novoItem = Negociacao.criaNegociacao(
            this.inputData.valueAsDate as Date,
            this.inputQuantidade.valueAsNumber,
            this.inputValor.valueAsNumber
        );
        if (this.ehDiaUtil(novoItem.data)) {
            this.listaNegociacoes.adiciona(novoItem);
            const data = new Date();
            imprimir(novoItem, this.listaNegociacoes);

            this.negociacoesView.update(this.listaNegociacoes);
            this.mensagemView.update("Negociação adicionada com sucesso!");
            this.limpaFormulario();                    
        }
        else {
            this.mensagemView.update("Data não é dia útil!");
        }
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

    public importaDados(): void {
        this.serviceAPI
            .buscarNegociacoesHoje()
            .then(lista => {
                for (let item of lista) {
                    this.listaNegociacoes.adiciona(item);
                }
                this.negociacoesView.update(this.listaNegociacoes);
            });
    }
}
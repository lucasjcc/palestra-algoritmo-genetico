import { calcularAptidao } from "./ag/calcularAptidao.js";
import { criarCromossomo } from "./ag/criarCromossomo.js";
import fazerCruzamento from "./ag/fazerCruzamento.js";
import { fazerMutacao } from "./ag/fazerMutacao.js";
import { selecionarPai } from "./ag/selecionarPai.js";
import { letDataset } from "./auxiliares/letDataset.js";
import { ordenarPopulacao } from "./auxiliares/ordenarPopulacao.js";

// Parâmetro
const tamanhoPopulacao = 500;
const tamanhoTorneio = 5;
const probabilidadeMutacao = 0.1;
const geracoes = 800;

// Carregamento da base de dados
const caminhoRelativoDataset = "datasets/br17.txt";
const dimensaoDataset = 17;
const matrizDistancias = letDataset(caminhoRelativoDataset, dimensaoDataset);

// Gerar a população inicial
const listaCidadesEmbaralhar = [];
for (let i = 2; i <= dimensaoDataset; i++) {
    listaCidadesEmbaralhar.push(i);
}

let populacao = [];
for (let i = 0; i < tamanhoPopulacao; i++) {
    const cromossomo = criarCromossomo(listaCidadesEmbaralhar);
    const individuo = {
        cromossomo: cromossomo,
        aptidao: null,
    };
    populacao.push(individuo);
}

for (let i = 0; i < geracoes; i++) {
    // Calcular a aptidão
    for (let individuo of populacao) {
        const aptidao = calcularAptidao(individuo.cromossomo, matrizDistancias);
        individuo.aptidao = aptidao;
    }

    // Ordenar população
    const populacaoOrdenada = ordenarPopulacao(populacao);

    const populacaoFilhos = [];
    for (let j = 0; j < Math.ceil(tamanhoPopulacao / 2); j++) {
        // Selecionar pais
        const pai1 = selecionarPai(tamanhoTorneio, populacaoOrdenada);
        const pai2 = selecionarPai(tamanhoTorneio, populacaoOrdenada);

        // Fazer cruzamento
        const filho1 = fazerCruzamento(pai1.cromossomo, pai2.cromossomo);
        const filho2 = fazerCruzamento(pai2.cromossomo, pai1.cromossomo);

        // Realizar mutação
        const alatorio1 = Math.random();
        const alatorio2 = Math.random();

        if (alatorio1 < probabilidadeMutacao) {
            const novoCromossomoFilho1 = fazerMutacao(filho1.cromossomo);
            filho1.cromossomo = novoCromossomoFilho1;
        }

        if (alatorio2 < probabilidadeMutacao) {
            const novoCromossomoFilho2 = fazerMutacao(filho2.cromossomo);
            filho2.cromossomo = novoCromossomoFilho2;
        }

        populacaoFilhos.push(filho1);
        populacaoFilhos.push(filho2);
    }

    // Calcular aptidão dos filho
    for (let individuo of populacaoFilhos) {
        const aptidao = calcularAptidao(individuo.cromossomo, matrizDistancias);
        individuo.aptidao = aptidao;
    }

    const populacaoTotal = [...populacao, ...populacaoFilhos];
    const populacaoTotalOrdenada = ordenarPopulacao(populacaoTotal);
    populacao = populacaoTotalOrdenada.slice(0, tamanhoPopulacao);
}

const melhorIndividuo = populacao[0];
console.log(melhorIndividuo);

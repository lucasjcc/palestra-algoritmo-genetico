import { gerarNumeroAleatorioInteiroEntre } from "../auxiliares/gerarNumeroAleatorioInteiroEntre.js";

export default function fazerCruzamento(cromossomoPai1, cromossomoPai2) {
    const cromossomoReduzidoPai1 = cromossomoPai1.slice(1, -1);
    const cromossomoReduzidoPai2 = cromossomoPai2.slice(1, -1);
    const quantidadeGenes = cromossomoReduzidoPai1.length;

    let ponto1 = gerarNumeroAleatorioInteiroEntre(0, quantidadeGenes - 1);
    let ponto2 = gerarNumeroAleatorioInteiroEntre(ponto1, quantidadeGenes - 1);

    const cromossomoReduzidoFilho = new Array(quantidadeGenes).fill(null);

    // Preenche com o cromossomo do Pai 1
    for (let i = ponto1; i <= ponto2; i++) {
        cromossomoReduzidoFilho[i] = cromossomoReduzidoPai1[i];
    }

    // Preenche com o cromossomo do Pai 2
    const cromossomoPai2Reordenado = [
        ...cromossomoReduzidoPai2.slice(ponto2 + 1),
        ...cromossomoReduzidoPai2.slice(0, ponto2 + 1),
    ];

    const cromossomoPai2ReordenadoFiltrado = [];
    for (let gene of cromossomoPai2Reordenado) {
        if (!cromossomoReduzidoFilho.includes(gene)) {
            cromossomoPai2ReordenadoFiltrado.push(gene);
        }
    }

    let indiceFilho = ponto2 + 1;

    if (indiceFilho >= quantidadeGenes) {
        indiceFilho = 0;
    }

    for (const gene of cromossomoPai2ReordenadoFiltrado) {
        cromossomoReduzidoFilho[indiceFilho] = gene;

        indiceFilho++;

        if (indiceFilho >= quantidadeGenes) {
            indiceFilho = 0;
        }
    }

    const cromossomoFilho = [1, ...cromossomoReduzidoFilho, 1];

    return {
        cromossomo: cromossomoFilho,
        aptidao: null,
    };
}

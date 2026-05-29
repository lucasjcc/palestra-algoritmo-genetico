import { gerarNumeroAleatorioInteiroEntre } from "../auxiliares/gerarNumeroAleatorioInteiroEntre.js";

export default function fazerCruzamento(cromossomoPai1, cromossomoPai2) {
    const cromossomoReduzidoPai1 = cromossomoPai1.slice(1, -1);
    const cromossomoReduzidoPai2 = cromossomoPai2.slice(1, -1);
    const quantidadeGenes = cromossomoReduzidoPai1.length;

    let ponto1 = gerarNumeroAleatorioInteiroEntre(0, quantidadeGenes - 1);
    let ponto2 = gerarNumeroAleatorioInteiroEntre(ponto1, quantidadeGenes - 1);

    const cromossomoReduzidoFilho = new Array(quantidadeGenes).fill(null);

    for (let i = ponto1; i <= ponto2; i++) {
        cromossomoReduzidoFilho[i] = cromossomoReduzidoPai1[i];
    }

    let indiceFilho = ponto2 + 1;
    if (indiceFilho >= quantidadeGenes) {
        indiceFilho = 0;
    }

    let indicePai2 = ponto2 + 1;
    if (indicePai2 >= quantidadeGenes) {
        indicePai2 = 0;
    }

    for (let i = 0; i < quantidadeGenes; i++) {
        const geneCandidato = cromossomoReduzidoPai2[indicePai2];

        if (!cromossomoReduzidoFilho.includes(geneCandidato)) {
            cromossomoReduzidoFilho[indiceFilho] = geneCandidato;

            indiceFilho++;
            if (indiceFilho >= quantidadeGenes) {
                indiceFilho = 0;
            }
        }

        indicePai2++;
        if (indicePai2 >= quantidadeGenes) {
            indicePai2 = 0;
        }
    }

    const cromossomoFilho = [1, ...cromossomoReduzidoFilho, 1];

    return {
        cromossomo: cromossomoFilho,
        aptidao: null,
    };
}

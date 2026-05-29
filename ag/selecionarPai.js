import { gerarNumeroAleatorioInteiroEntre } from "../auxiliares/gerarNumeroAleatorioInteiroEntre.js";

export function selecionarPai(tamanhoTorneio, populacaoOrdenada) {
    let indiceMelhorPaiTorneio = null;
    for (let i = 0; i < tamanhoTorneio; i++) {
        const numeroAleatorioInteiro = gerarNumeroAleatorioInteiroEntre(0, populacaoOrdenada.length - 1);
        if (indiceMelhorPaiTorneio == null || numeroAleatorioInteiro < indiceMelhorPaiTorneio) {
            indiceMelhorPaiTorneio = numeroAleatorioInteiro;
        }
    }
    const paiSelecionado = populacaoOrdenada[indiceMelhorPaiTorneio];
    return paiSelecionado;
}

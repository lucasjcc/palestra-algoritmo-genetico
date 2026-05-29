import { gerarNumeroAleatorioInteiroEntre } from "../auxiliares/gerarNumeroAleatorioInteiroEntre.js";

export function fazerMutacao(cromossomo) {
    const cromossomoReduzido = cromossomo.slice(1, -1);

    const indice1 = gerarNumeroAleatorioInteiroEntre(0, cromossomoReduzido.length - 1);
    let indice2 = null;

    while (indice2 == null || indice2 == indice1) {
        indice2 = gerarNumeroAleatorioInteiroEntre(0, cromossomoReduzido.length - 1);
    }

    const primeiroCromossomo = cromossomoReduzido[indice1];
    cromossomoReduzido[indice1] = cromossomoReduzido[indice2];
    cromossomoReduzido[indice2] = primeiroCromossomo;

    return [1, ...cromossomoReduzido, 1];
}

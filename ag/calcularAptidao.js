export function calcularAptidao(cromossomo, matrizDistancias) {
    let aptidao = 0;

    for (let i = 0; i < cromossomo.length - 1; i++) {
        const cidadeAnterior = cromossomo[i];
        const cidadePosterior = cromossomo[i + 1];
        aptidao += matrizDistancias[cidadeAnterior - 1][cidadePosterior - 1];
    }

    return aptidao;
}

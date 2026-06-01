export function gerarNumeroAleatorioInteiroEntre(limiteInferior, limiteSuperior) {
    const aleatorio = Math.random();
    const numeroAleatorio = limiteInferior + aleatorio * (limiteSuperior - limiteInferior + 1);
    return Math.floor(numeroAleatorio);
}

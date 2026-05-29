export function gerarNumeroAleatorioInteiroEntre(limiteInferior, limiteSuperior) {
    const aleatorio = Math.random();
    const numeroAleatorio = limiteInferior + aleatorio * (limiteSuperior - limiteInferior);
    return Math.floor(numeroAleatorio);
}

export function ordenarPopulacao(populacao) {
    return [...populacao].sort((a, b) => a.aptidao - b.aptidao);
}

import lodash from "lodash";

export function criarCromossomo(listaCidadesEmbaralhar) {
    // Gerar um vetor aleatório sem repetição indo de 2 à 17
    const cromossomo = lodash.shuffle([...listaCidadesEmbaralhar]);
    cromossomo.push(1);
    cromossomo.unshift(1);
    return cromossomo;
}

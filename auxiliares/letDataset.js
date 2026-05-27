import fs from "fs";

export function letDataset(caminhoRelativoDataset, dimensaoDataset) {
    try {
        const dadosPuros = fs.readFileSync(caminhoRelativoDataset, "utf8");
        const numerosLista = dadosPuros.trim().split(/\s+/).map(Number);
        const totalNecessario = dimensaoDataset * dimensaoDataset;
        if (numerosLista.length < totalNecessario) {
            throw new Error(
                `O arquivo possui apenas ${numerosLista.length} números, mas a dimensão ${dimensaoDataset} exige ${totalNecessario}.`,
            );
        }
        const matriz = [];
        for (let i = 0; i < dimensaoDataset; i++) {
            const inicio = i * dimensaoDataset;
            const fim = inicio + dimensaoDataset;
            const linha = numerosLista.slice(inicio, fim);

            matriz.push(linha);
        }

        return matriz;
    } catch (erro) {
        console.error("Erro ao processar a dataset:", erro.message);
    }
}

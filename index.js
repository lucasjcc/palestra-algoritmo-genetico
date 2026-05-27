import { letDataset } from "./auxiliares/letDataset.js";

let tamanhoPopulacao = 50;

const caminhoRelativoDataset = "datasets/br17.txt";
const dimensaoDataset = 17;
const matrizDistancias = letDataset(caminhoRelativoDataset, dimensaoDataset);
console.log(matrizDistancias);

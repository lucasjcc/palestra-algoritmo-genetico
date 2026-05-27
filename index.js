import { letDataset } from "./auxiliares/letDataset.js";

// Carregamento da base de dados
const caminhoRelativoDataset = "datasets/br17.txt";
const dimensaoDataset = 17;
const matrizDistancias = letDataset(caminhoRelativoDataset, dimensaoDataset);

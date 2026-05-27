# 🌍 Problema do Caixeiro Viajante Assimétrico (ATSP)

_Asymmetric Traveling Salesman Problem_

## 📌 O que é o ATSP?

O Problema do Caixeiro Viajante é um dos desafios mais famosos da otimização combinatória. O objetivo geral é simples: dado um conjunto de $n$ nós (ou cidades), deve-se encontrar a menor rota possível que visite cada nó exatamente uma vez e retorne ao ponto de partida.

Nesta variação **Assimétrica (ATSP)**, há um detalhe crucial: a distância (ou custo, ou tempo) para viajar de uma cidade $i$ para uma cidade $j$ pode ser diferente da distância para voltar de $j$ para $i$. Matematicamente, isso significa que $C(i, j) \neq C(j, i)$.

## 💡 Aplicações no Mundo Real

Na prática, o mundo raramente é perfeitamente simétrico. Por exemplo:

- **Logística urbana e Roteamento de Veículos:** Em cidades, as ruas costumam ter mão única. Além disso, ir de um ponto A para o B pode envolver uma subida íngreme (exigindo mais combustível e tempo), enquanto a volta de B para A é uma descida rápida.

---

## 📂 Sobre as Instâncias

Os dados trabalhados neste repositório referem-se à instância **fb17** e pertencentem à biblioteca clássica TSPLIB.

- **Instâncias:** `ftv17.atsp` e `ftv64.atsp`
- **Tipo:** ATSP (_Asymmetric Traveling Salesman Problem_)
- **Dimensão:** 17
- **Melhor solução conhecida (Ótimo):** `39`
- **Download dos dados:** [TSPLIB95 - br17.atsp.gz](https://comopt.ifi.uni-heidelberg.de/software/TSPLIB95/atsp/br17.atsp.gz)

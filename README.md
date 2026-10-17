# Solution to the challenge [Number Guessing](https://roadmap.sh/projects/number-guessing-game)
Link to the challege: https://roadmap.sh/projects/number-guessing-game 

## Sobre o projeto

Jogo de adivinhação de número no terminal, escrito em Node.js. O jogo sorteia um número aleatório e o jogador tenta acertá-lo recebendo dicas de "maior" ou "menor" a cada palpite.

## Funcionalidades

- Dificuldades com intervalos diferentes:
  - **easy**: número entre 1 e 50
  - **medium**: número entre 1 e 100
  - **hard**: número entre 1 e 200
- Validação de entrada (apenas números dentro do intervalo são aceitos)
- Contagem de tentativas e tempo de jogo (em segundos)
- Mensagens coloridas no terminal com [chalk](https://www.npmjs.com/package/chalk)
- Opção de jogar novamente ao final da partida

## Requisitos

- [Node.js](https://nodejs.org/) 14 ou superior

## Como executar

```bash
# instale as dependências
npm install

# inicie o jogo
npm start
```

## Como jogar

1. Escolha a dificuldade: `easy`, `medium` ou `hard`
2. Digite um palpite dentro do intervalo indicado
3. Use as dicas ("Try a higher number" / "Try a lower number") até acertar
4. Ao final, o jogo mostra o número de tentativas e o tempo decorrido
5. Responda `yes` para jogar novamente ou qualquer outra coisa para sair

## Estrutura do projeto

```
.
├── src/
│   ├── main.js   # Ponto de entrada — inicia o jogo
│   ├── game.js   # Lógica do jogo (número secreto, tentativas, timer)
│   └── ui.js     # Exibição das mensagens no terminal (chalk)
├── package.json
└── README.md
```

## Tecnologias

- Node.js
- [chalk](https://www.npmjs.com/package/chalk) — cores no terminal
- `readline` (módulo nativo) — leitura de entrada do usuário

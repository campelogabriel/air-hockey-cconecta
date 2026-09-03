[README.md](https://github.com/user-attachments/files/31763835/README.md)# 🏒 Air Hockey --- Projeto CConecta

Um jogo de **Air Hockey desenvolvido em HTML, CSS e JavaScript**, criado
como um projeto prático do curso de **Prompt Engineering** do
**CConecta**.

A proposta do projeto é mostrar como uma ideia descrita em linguagem
natural pode ser transformada, com o auxílio de IA e bons prompts, em
uma aplicação web interativa e funcional.

O jogo funciona diretamente no navegador e não depende de frameworks ou
bibliotecas externas.

------------------------------------------------------------------------

## 🎯 Objetivo do projeto

Este projeto faz parte da proposta educacional do **CConecta** de
ensinar os alunos a utilizar Inteligência Artificial de maneira prática
e criativa.

Em vez de apenas aprender conceitos teóricos sobre prompts, o aluno pode
utilizar a IA para:

-   transformar uma ideia em um projeto;
-   especificar funcionalidades;
-   solicitar código;
-   testar o resultado;
-   identificar problemas;
-   pedir melhorias;
-   iterar até chegar a uma versão funcional.

O **Air Hockey** serve como um exemplo concreto desse processo.

------------------------------------------------------------------------

## 🎮 Sobre o jogo

O objetivo é simples: rebater o disco com o mallet e marcar pontos no
gol adversário.

A partida termina quando um dos jogadores alcança **7 pontos**.

### Funcionalidades

-   🏒 Partida de Air Hockey no navegador;
-   👥 Modo para dois jogadores;
-   🤖 Modo contra a máquina/IA;
-   🎮 Controles por teclado;
-   📱 Controle por toque em dispositivos móveis;
-   ⏸️ Botão para pausar e continuar;
-   🔄 Botão para iniciar uma nova partida;
-   ✏️ Nomes dos jogadores editáveis;
-   🔥 Sistema de sequência de pontos;
-   🏆 Tela de vitória;
-   📖 Tutorial inicial explicando como jogar;
-   💡 Botão "Como jogar" para reabrir o tutorial;
-   ✨ Animações, efeitos visuais e rastro do disco;
-   📱 Layout responsivo para diferentes tamanhos de tela.

------------------------------------------------------------------------

## 🕹️ Controles

### Jogador 1

O Jogador 1 utiliza as **setas do teclado**:

  Tecla   Movimento
  ------- -----------
  ⬆️      Cima
  ⬇️      Baixo
  ⬅️      Esquerda
  ➡️      Direita

### Jogador 2

No modo para dois jogadores, o Jogador 2 utiliza:

  Tecla   Movimento
  ------- -----------
  W       Cima
  S       Baixo
  A       Esquerda
  D       Direita

### Modo contra a máquina

No modo contra a máquina:

-   o Jogador 1 continua utilizando as setas;
-   o Jogador 2 é controlado automaticamente pelo computador.

O botão de modo alterna entre **dois jogadores** e **jogar contra a
máquina**.

------------------------------------------------------------------------

## 📱 Dispositivos móveis

O jogo também possui suporte a interação por toque.

No celular:

-   o mallet do Jogador 1 pode ser arrastado diretamente;
-   o Jogador 2 possui interação por toque na região superior da mesa;
-   o jogo utiliza `touchstart`, `touchmove` e `touchend`;
-   o código procura preservar a rolagem da página quando o toque não
    está sendo utilizado para controlar o jogo.

------------------------------------------------------------------------

## 🧠 Como o jogo foi desenvolvido

O projeto foi construído utilizando tecnologias web fundamentais:

### HTML

Responsável pela estrutura da aplicação, incluindo:

-   tutorial;
-   painel dos jogadores;
-   placar;
-   mesa;
-   mallets;
-   disco;
-   gols;
-   mensagens;
-   botões de controle.

### CSS

Responsável pela interface visual.

O projeto utiliza:

-   CSS Variables;
-   `flexbox`;
-   `radial-gradient`;
-   `linear-gradient`;
-   `backdrop-filter`;
-   animações com `@keyframes`;
-   media queries;
-   layout responsivo;
-   efeitos de brilho e sombra.

A interface utiliza uma estética inspirada em **glassmorphism**, com
fundo escuro, transparências, gradientes e elementos luminosos.

### JavaScript

Responsável pela lógica do jogo.

Entre as principais funções estão:

-   movimentação dos jogadores;
-   movimentação do disco;
-   colisão entre disco e mallets;
-   detecção de gols;
-   contagem de pontos;
-   sequência de pontos;
-   modo contra a máquina;
-   pausa;
-   reinício;
-   tutorial;
-   controles de teclado;
-   controles de toque;
-   atualização da interface;
-   loop de animação com `requestAnimationFrame()`.

------------------------------------------------------------------------

## ⚙️ Estrutura do projeto

O projeto é propositalmente simples:

``` text
air-hockey/
│
├── index.html
└── README.md
```

Todo o jogo está concentrado no arquivo `index.html`, que contém:

``` text
HTML
├── Estrutura da interface
│
CSS
├── Estilos
├── Responsividade
└── Animações
│
JavaScript
├── Estado do jogo
├── Física básica
├── Controles
├── IA
├── Tutorial
└── Loop de animação
```

Essa abordagem facilita a utilização do projeto em uma aula de
programação, HTML/CSS/JavaScript ou Prompt Engineering.

------------------------------------------------------------------------

# 🤖 O projeto como exercício de Prompt Engineering

O principal objetivo educacional não é simplesmente entregar o código do
jogo.

A ideia é ensinar o aluno a **construir o projeto através de instruções
para uma IA**.

Um bom prompt pode especificar:

1.  o que deve ser criado;
2.  quais tecnologias utilizar;
3.  quais funcionalidades devem existir;
4.  como a interface deve se comportar;
5.  quais dispositivos devem ser suportados;
6.  quais regras o jogo deve seguir;
7.  como o código deve ser organizado;
8.  quais problemas precisam ser corrigidos.

O desenvolvimento pode ser realizado de forma iterativa.

### Fluxo sugerido

``` text
IDEIA
  ↓
PROMPT
  ↓
PRIMEIRA VERSÃO
  ↓
TESTE
  ↓
IDENTIFICAÇÃO DE PROBLEMAS
  ↓
NOVO PROMPT
  ↓
MELHORIA
  ↓
TESTE NOVAMENTE
```

Esse processo mostra que **Prompt Engineering não significa apenas pedir
"crie um jogo"**.

Quanto mais clara for a especificação, maior a possibilidade de a IA
produzir um resultado próximo do que foi imaginado.

------------------------------------------------------------------------

# ✍️ Prompts utilizados/sugeridos para o projeto

> **Observação:** os prompts abaixo são uma reconstrução didática dos
> tipos de instrução necessários para produzir e evoluir o projeto. Eles
> servem como material do curso e não devem ser interpretados
> necessariamente como uma transcrição literal de uma conversa
> específica com uma IA.

## Prompt 1 --- Criar a primeira versão

``` text
Crie um jogo completo de Air Hockey para navegador utilizando apenas HTML, CSS e JavaScript puro.

Quero que todo o projeto esteja em um único arquivo index.html, sem frameworks ou bibliotecas externas.

O jogo deve ter:
- dois jogadores;
- uma mesa de Air Hockey;
- um disco;
- dois mallets;
- sistema de pontuação;
- vitória quando um jogador chegar a 7 pontos;
- movimentação com teclado;
- botão para iniciar uma nova partida;
- botão para pausar;
- interface visual moderna;
- layout responsivo.

O Jogador 1 deve utilizar as setas do teclado.
O Jogador 2 deve utilizar W, A, S e D.

Crie uma interface visual moderna, com fundo escuro, gradientes, transparências, sombras e aparência semelhante a glassmorphism.

O código deve ser funcional e pronto para ser aberto diretamente no navegador.
```

------------------------------------------------------------------------

## Prompt 2 --- Adicionar modo contra a máquina

``` text
Agora evolua o jogo de Air Hockey existente.

Adicione um modo "Jogar contra Máquina".

Nesse modo:
- o Jogador 1 continua sendo controlado pelas setas;
- o Jogador 2 será controlado automaticamente pelo computador;
- a máquina deve acompanhar a posição do disco;
- o movimento da máquina deve ser limitado à metade superior da mesa;
- deve existir um botão para alternar entre dois jogadores e contra a máquina;
- ao trocar o modo, reposicione os dois mallets;
- mantenha todas as funcionalidades existentes.

Não remova funcionalidades que já existem.
Entregue o código completo atualizado em um único index.html.
```

------------------------------------------------------------------------

## Prompt 3 --- Criar o tutorial

``` text
Adicione ao jogo um tutorial inicial em formato de modal/overlay.

O tutorial deve explicar:
1. o objetivo do jogo;
2. os controles do Jogador 1;
3. os controles do Jogador 2;
4. o modo contra a máquina;
5. dicas rápidas.

O tutorial deve possuir:
- botão "Próximo";
- botão "Pular";
- indicadores de progresso;
- botão para fechar o tutorial;
- botão "Como jogar" na interface principal para abrir o tutorial novamente.

Enquanto o tutorial estiver aberto, o jogo deve permanecer pausado.

Mantenha o estilo visual do jogo.
```

------------------------------------------------------------------------

## Prompt 4 --- Melhorar a experiência visual

``` text
Melhore a interface visual do jogo sem alterar suas regras principais.

Quero uma aparência moderna e sofisticada utilizando apenas CSS.

Adicione:
- glassmorphism;
- gradientes;
- sombras;
- efeitos de brilho;
- animações sutis;
- destaque visual para o jogador ativo;
- animação quando um ponto for marcado;
- efeito de tremor na mesa após um gol;
- rastro visual acompanhando o disco;
- mensagens de vitória;
- interface responsiva para celular.

Não utilize bibliotecas externas.
Mantenha tudo dentro do index.html.
```

------------------------------------------------------------------------

## Prompt 5 --- Adicionar suporte para celular

``` text
Adapte o jogo de Air Hockey para dispositivos móveis.

Além dos controles por teclado, permita controlar os mallets por toque.

Requisitos:
- Jogador 1 pode arrastar seu próprio mallet;
- Jogador 2 pode controlar seu mallet na região superior da mesa;
- limite o movimento dos jogadores às suas respectivas áreas;
- evite bloquear a rolagem da página quando o usuário não estiver tentando controlar o jogo;
- mantenha os controles de teclado funcionando;
- preserve o layout responsivo.

Faça as alterações sem remover as funcionalidades existentes.
```

------------------------------------------------------------------------

## Prompt 6 --- Corrigir problemas após os testes

Um dos pontos mais importantes do projeto é mostrar que o
desenvolvimento com IA é **iterativo**.

Depois de testar o jogo, um aluno pode fornecer um problema específico
para a IA:

``` text
Testei o jogo no celular e encontrei um problema.

Quando tento rolar a página tocando fora do mallet, a página não rola corretamente.

Analise o código atual e corrija somente o comportamento relacionado ao toque.

O jogo deve:
- continuar permitindo controlar o mallet por toque;
- impedir o scroll somente enquanto o usuário estiver realmente controlando o mallet;
- permitir o scroll normalmente quando o toque não estiver sendo utilizado para jogar;
- manter todas as outras funcionalidades.

Explique brevemente o que foi alterado e depois forneça o index.html completo atualizado.
```

------------------------------------------------------------------------

# 🧪 O que o aluno pode aprender com este projeto

Este projeto pode ser utilizado para trabalhar diferentes habilidades.

### Prompt Engineering

-   criação de prompts detalhados;
-   especificação de requisitos;
-   divisão de problemas;
-   refinamento de instruções;
-   desenvolvimento iterativo;
-   depuração utilizando IA.

### Programação

-   estrutura HTML;
-   CSS moderno;
-   JavaScript;
-   manipulação do DOM;
-   eventos de teclado;
-   eventos de toque;
-   animações;
-   `requestAnimationFrame()`;
-   lógica condicional;
-   estado de uma aplicação;
-   colisão entre objetos;
-   implementação de uma IA simples.

### Pensamento computacional

O aluno também pode aprender a decompor uma ideia:

``` text
"Quero criar um jogo de Air Hockey"
             ↓
        Quais elementos?
             ↓
      Quais regras?
             ↓
      Quais controles?
             ↓
      Como marcar pontos?
             ↓
       Como detectar gol?
             ↓
      Como criar uma IA?
             ↓
      Como testar e corrigir?
```

------------------------------------------------------------------------

# 🚀 Como executar

Não é necessário instalar nada.

### Opção 1 --- Abrir diretamente

Baixe/clique no arquivo:

``` text
index.html
```

Depois abra-o com qualquer navegador moderno.

### Opção 2 --- GitHub Pages

Como o projeto é composto por HTML, CSS e JavaScript no navegador, ele
pode ser publicado utilizando o **GitHub Pages**.

Depois de publicar, o jogo pode ser acessado através de um endereço web
e compartilhado com os alunos.

------------------------------------------------------------------------

# 📂 Arquivo principal

### `index.html`

Contém toda a implementação do jogo.

O código inclui a interface, estilos e lógica em um único arquivo,
tornando o projeto fácil de estudar e modificar.

------------------------------------------------------------------------

# 🎓 Projeto educacional --- CConecta

Este projeto integra o **CConecta** e pode ser utilizado como atividade
prática dentro de um curso de **Prompt Engineering e Inteligência
Artificial**.

A proposta é aproximar o aluno da tecnologia através de um projeto
concreto: em vez de apenas aprender o que é um prompt, o aluno utiliza
prompts para **imaginar, construir, testar e melhorar um produto
digital**.

O projeto também demonstra uma ideia importante:

> **A IA não substitui o processo de pensar. Ela pode ser utilizada como
> uma ferramenta para transformar ideias em protótipos e ajudar a
> resolver problemas.**

------------------------------------------------------------------------

## 🔮 Possíveis melhorias futuras

O projeto pode continuar sendo desenvolvido pelos alunos.

Algumas possibilidades:

-   🏆 ranking de partidas;
-   💾 armazenamento do placar;
-   🔊 efeitos sonoros;
-   🎵 música de fundo;
-   ⚡ níveis de dificuldade da máquina;
-   🎨 escolha de temas;
-   🌐 multiplayer online;
-   🥇 sistema de campeonatos;
-   📊 estatísticas das partidas;
-   📱 controles virtuais para celular;
-   🎯 diferentes modos de jogo;
-   👤 perfis de jogadores.

Cada nova funcionalidade pode ser utilizada como uma nova atividade de
**Prompt Engineering**.

------------------------------------------------------------------------

## 📜 Licença

Projeto desenvolvido para fins educacionais no âmbito do **CConecta**.

Consulte os responsáveis pelo projeto antes de utilizar ou redistribuir
o material em outros contextos.

# 🏒 Air Hockey com Inteligência Artificial

> 🎓 Projeto prático do curso de **Prompts e Inteligência Artificial** — **CConecta**

Este projeto é um jogo de **Air Hockey criado com a ajuda da Inteligência Artificial**.

O objetivo não é apenas jogar, mas mostrar na prática como uma pessoa que **não sabe programação** pode utilizar a IA para transformar uma ideia em um projeto funcionando.

Você não precisa ser programador para entender este projeto.

Ao longo deste README, vamos explicar tudo de forma simples.

---

## 🎮 O que é este projeto?

O projeto consiste em um jogo de **Air Hockey** que pode ser executado diretamente no navegador.

No jogo, dois jogadores disputam uma partida tentando colocar o disco no gol do adversário.

### 🏆 Como funciona?

* O Jogador 1 controla o mallet rosa.
* O Jogador 2 controla o mallet roxo.
* O disco se movimenta pela mesa.
* Cada gol aumenta o placar de um jogador.
* O primeiro jogador a fazer **7 pontos vence**.
* Também existe um modo para jogar **contra a máquina**.
* O jogo possui tutorial, botão de pausa e opção de iniciar uma nova partida.
* Os nomes dos jogadores podem ser alterados.

---

# 🤖 Por que este projeto foi feito com IA?

A proposta deste projeto é mostrar uma ideia importante:

> **Você não precisa saber programar para começar a criar com tecnologia.**

A Inteligência Artificial pode ajudar uma pessoa a transformar uma ideia em código.

Por exemplo, em vez de começar escrevendo centenas de linhas de programação, podemos explicar para a IA o que queremos:

> "Crie um jogo de Air Hockey que funcione no navegador, com dois jogadores, placar e controles pelo teclado."

A IA pode então gerar uma primeira versão do projeto.

Depois disso, podemos continuar conversando com ela para:

* corrigir problemas;
* melhorar o visual;
* adicionar funcionalidades;
* alterar as regras;
* criar novos modos de jogo;
* melhorar a experiência no celular;
* organizar o código.

Esse processo é conhecido como **Vibe Coding**.

---

# 💬 O que é Vibe Coding?

Vibe Coding é uma forma de desenvolvimento em que utilizamos a **linguagem natural** para orientar a Inteligência Artificial na criação e alteração de código.

Em vez de pensar primeiro:

> "Preciso escrever uma função JavaScript que faça determinada coisa..."

Podemos começar pensando:

> "Quero que, quando o jogador marcar dois gols seguidos, apareça uma mensagem informando que ele está em uma sequência."

A IA pode ajudar a transformar essa ideia em código.

### 🧠 A lógica é:

**Ideia → Prompt → IA → Código → Teste → Correção → Novo prompt**

Você conversa com a IA, testa o resultado e continua refinando o projeto.

---

# 🧩 O que existe dentro deste projeto?

O jogo é composto por três partes principais:

```text
📁 air-hockey
│
├── 📄 index.html
├── 🎨 style.css
└── ⚙️ script.js
```

Não se preocupe se você não entende esses nomes.

Vamos explicar cada um.

---

# 🌐 1. HTML — A estrutura do projeto

O arquivo:

```text
index.html
```

é responsável pela **estrutura da página**.

Pense no HTML como se fosse o **esqueleto** do jogo.

Ele define coisas como:

* onde fica o título;
* onde ficam os jogadores;
* onde aparece o placar;
* onde fica a mesa;
* onde ficam os botões;
* onde aparece o tutorial.

Por exemplo, o HTML possui elementos para representar os jogadores e seus respectivos placares.

### 🧠 Uma forma simples de entender:

```text
HTML = estrutura
```

É como construir uma casa:

> HTML define onde ficam as paredes, portas, janelas e cômodos.

---

# 🎨 2. CSS — A aparência do projeto

O arquivo:

```text
style.css
```

é responsável pela **aparência do jogo**.

Ele controla coisas como:

* cores;
* tamanhos;
* espaçamentos;
* fontes;
* bordas;
* sombras;
* animações;
* posicionamento;
* adaptação para celular.

Por exemplo, é o CSS que ajuda a criar o visual escuro e moderno da mesa de Air Hockey.

### 🧠 Uma forma simples de entender:

```text
CSS = aparência
```

Voltando ao exemplo da casa:

> Se o HTML constrói a casa, o CSS decide a pintura, o tamanho dos cômodos, os móveis e a decoração.

---

# ⚙️ 3. JavaScript — O funcionamento do jogo

O arquivo:

```text
script.js
```

é responsável pela **lógica do jogo**.

É aqui que ficam as instruções que fazem o jogo funcionar.

Por exemplo:

* movimentar os jogadores;
* movimentar o disco;
* detectar colisões;
* contar os pontos;
* determinar o vencedor;
* controlar a inteligência artificial;
* pausar o jogo;
* iniciar uma nova partida;
* controlar o tutorial;
* responder aos comandos do teclado.

### 🧠 Uma forma simples de entender:

```text
JavaScript = comportamento
```

No exemplo da casa:

> HTML constrói a casa, CSS deixa a casa bonita e JavaScript faz as coisas acontecerem.

---

# 🏗️ Como as três partes trabalham juntas?

Podemos resumir assim:

```text
                 🌐 HTML
                Estrutura
                    │
                    ▼
              🎨 CSS
              Aparência
                    │
                    ▼
            ⚙️ JavaScript
             Funcionamento
                    │
                    ▼
              🎮 JOGO
```

Ou, de maneira ainda mais simples:

| Tecnologia | Função        |
| ---------- | ------------- |
| HTML       | Estrutura     |
| CSS        | Aparência     |
| JavaScript | Funcionamento |

Você não precisa memorizar programação neste momento.

O mais importante é entender **qual é o papel de cada arquivo**.

---

# 🎯 O que podemos aprender com este projeto?

Este projeto foi pensado para ensinar que a IA pode ser utilizada como uma ferramenta de criação.

Ao analisar o projeto, podemos aprender conceitos como:

### 💡 Criação

Transformar uma ideia em um projeto real.

### 💬 Prompt

Explicar para a IA aquilo que queremos criar.

### 🔄 Iteração

Pedir alterações e melhorias várias vezes.

### 🧪 Teste

Executar o projeto e verificar se tudo funciona.

### 🐛 Correção

Quando alguma coisa não funciona, explicar o problema para a IA e pedir ajuda.

### 🚀 Evolução

Começar com uma ideia simples e adicionar novas funcionalidades.

---

# 📝 Exemplos de prompts utilizados no projeto

Os prompts são uma das partes mais importantes deste projeto.

Eles mostram como podemos conversar com a IA para construir algo.

## Prompt inicial

Um exemplo de prompt para começar o projeto seria:

> Crie um jogo de Air Hockey que funcione diretamente no navegador utilizando HTML, CSS e JavaScript. O jogo deve ter dois jogadores, uma mesa de Air Hockey, um disco, dois mallets, sistema de pontuação e condição de vitória.

Esse prompt cria a **primeira versão**.

Mas não precisamos parar por aí.

---

## 🎨 Melhorando o visual

Depois podemos pedir:

> Melhore o visual do jogo deixando a interface moderna, utilizando um estilo futurista, com efeito de vidro, gradientes, sombras e animações.

---

## 📱 Adaptando para celular

Depois:

> Faça o jogo funcionar também em telas de celular, adaptando o tamanho da mesa e permitindo controlar o mallet por toque.

---

## 🤖 Criando um adversário

Podemos pedir:

> Adicione um modo contra a máquina. Quando esse modo estiver ativado, o Jogador 2 deve ser controlado automaticamente pelo computador.

---

## ⏸️ Adicionando pausa

Outro exemplo:

> Adicione um botão para pausar e continuar a partida.

---

## 🏆 Criando uma condição de vitória

Podemos pedir:

> Faça a partida terminar quando um dos jogadores alcançar 7 pontos e mostre uma mensagem informando quem venceu.

---

# 🔄 O mais importante: não existe apenas um prompt

Uma das principais lições deste projeto é que **criar algo com IA não significa escrever um único prompt perfeito**.

Normalmente fazemos várias interações.

Por exemplo:

```text
PROMPT 1
"Crie um jogo de Air Hockey."

        ↓

TESTE

        ↓

PROMPT 2
"Melhore o visual."

        ↓

TESTE

        ↓

PROMPT 3
"Adicione modo contra a máquina."

        ↓

TESTE

        ↓

PROMPT 4
"O jogo não está funcionando corretamente no celular."

        ↓

CORREÇÃO

        ↓

🎮 PROJETO FINAL
```

Esse processo é muito importante para aprender a trabalhar com IA.

---

# 🧠 Como escrever bons prompts?

Um bom prompt normalmente explica:

### 1. O que você quer

> "Quero criar um jogo de Air Hockey."

### 2. Como você quer

> "Quero um visual moderno e futurista."

### 3. Onde será utilizado

> "O jogo deve funcionar no navegador."

### 4. Quais funcionalidades devem existir

> "Deve ter dois jogadores, placar e modo contra a máquina."

### 5. Restrições

> "Não utilize bibliotecas externas."

Quanto mais claramente explicamos o objetivo, mais fácil fica para a IA entender o que queremos.

---

# 🔍 Como estudar este projeto sem saber programação?

Você não precisa entender todas as linhas de código.

Comece fazendo perguntas para a IA.

Por exemplo:

> "Explique este projeto como se eu nunca tivesse programado."

Depois:

> "Explique somente o arquivo index.html."

Depois:

> "Agora explique o style.css."

E finalmente:

> "Explique o script.js sem utilizar termos técnicos."

A partir daí, você pode ir aumentando a dificuldade.

---

# 🧪 Experimente modificar o jogo

Uma das melhores maneiras de aprender é experimentar.

Abra o projeto e tente pedir para a IA modificar alguma coisa.

### Exemplos:

> "Mude a cor do jogador 1 para azul."

> "Faça o jogo terminar com 10 pontos."

> "Adicione um botão para reiniciar o jogo."

> "Mude o nome Air Hockey para CConecta Air Hockey."

> "Adicione um contador de tempo."

> "Crie três níveis de dificuldade para a máquina."

> "Adicione uma tela inicial."

Você não precisa saber exatamente **como programar essas mudanças**.

Seu trabalho é explicar claramente **o que você deseja**.

A IA pode ajudar com a parte técnica.

---

# 📂 Estrutura do projeto

A estrutura atual é:

```text
air-hockey/
│
├── index.html
├── style.css
└── script.js
```

### 📄 index.html

Contém a estrutura visual da página.

### 🎨 style.css

Contém os estilos e o design.

### ⚙️ script.js

Contém a lógica e o funcionamento do jogo.

Essa separação torna o projeto mais organizado e facilita futuras alterações.

---

# ▶️ Como executar o jogo?

Você não precisa instalar um programa complicado.

Basta ter os três arquivos na mesma pasta:

```text
index.html
style.css
script.js
```

Depois:

1. Abra a pasta.
2. Clique duas vezes em `index.html`.
3. O navegador abrirá o jogo.
4. Clique em **Como jogar** para visualizar o tutorial.

---

# 🎮 Controles

## Jogador 1

O Jogador 1 utiliza as **setas do teclado**:

```text
       ↑
    ←     →
       ↓
```

O mallet rosa fica na parte inferior da mesa.

---

## Jogador 2

No modo de dois jogadores, o Jogador 2 utiliza:

```text
       W
    A     D
       S
```

O mallet roxo fica na parte superior.

---

# 🤖 Modo contra a máquina

O jogo também possui um modo contra a máquina.

Nesse modo:

```text
Você → Jogador 1
        ↓
      SETAS

Máquina → Jogador 2
          ↓
       computador
```

O computador movimenta automaticamente o mallet do Jogador 2.

---

# 🏆 Sistema de pontuação

Cada vez que o disco entra no gol de um jogador, o adversário recebe um ponto.

O jogo termina quando um jogador alcança:

```text
🏆 7 pontos
```

Depois disso, aparece uma mensagem informando o vencedor.

---

# 📱 Compatibilidade com celular

O projeto também possui suporte para dispositivos móveis.

No celular, é possível utilizar o toque para movimentar os mallets.

Isso é um exemplo de como podemos utilizar a IA para adaptar um projeto existente para diferentes dispositivos.

---

# 🎓 Relação com o CConecta

Este projeto faz parte da proposta educacional do **CConecta**.

A ideia é utilizar a Inteligência Artificial não apenas para conversar ou fazer perguntas, mas como uma ferramenta para **criar projetos reais**.

O Air Hockey representa um projeto prático porque reúne várias possibilidades:

* criatividade;
* tecnologia;
* resolução de problemas;
* criação de prompts;
* testes;
* interação com IA;
* desenvolvimento de um produto digital.

O objetivo não é transformar o aluno imediatamente em programador.

O objetivo é mostrar que ele pode **ter uma ideia, conversar com a IA e começar a construir**.

---

# 🚀 O que você pode criar depois?

Depois de entender este projeto, você pode utilizar a mesma lógica para criar outros projetos.

Por exemplo:

🎮 Jogos

* Pong
* Jogo da memória
* Quiz
* Snake
* Jogo de plataforma

📚 Projetos educacionais

* Quiz de matemática
* Jogo de perguntas
* Simulador
* Flashcards

💻 Aplicações

* Calculadora
* Lista de tarefas
* Cronômetro
* Agenda
* Sistema de pontuação

A ideia é sempre a mesma:

```text
💡 IDEIA
   ↓
💬 PROMPT
   ↓
🤖 IA
   ↓
💻 PROJETO
   ↓
🧪 TESTE
   ↓
🔧 MELHORIAS
   ↓
🚀 NOVA VERSÃO
```

---

# 🌟 Principal aprendizado

O principal aprendizado deste projeto não é decorar HTML, CSS ou JavaScript.

É aprender a **comunicar uma ideia para uma Inteligência Artificial**.

Programar tradicionalmente exige escrever as instruções diretamente.

Com ferramentas de IA, podemos começar descrevendo o resultado que queremos alcançar e utilizar a IA como parceira durante o processo.

Isso não significa que não precisamos aprender tecnologia.

Pelo contrário.

Quanto mais entendemos o funcionamento de um projeto, melhor conseguimos:

* escrever prompts;
* identificar problemas;
* avaliar respostas da IA;
* corrigir erros;
* melhorar nossos projetos.

---

# 🧠 Desafio para o aluno

Agora é sua vez.

Escolha **uma funcionalidade nova** para o Air Hockey.

Por exemplo:

> "Quero adicionar um modo difícil em que a máquina fique mais rápida."

Não tente descobrir sozinho como programar.

Primeiro, transforme sua ideia em um prompt.

Depois peça para a IA implementar a mudança.

Teste.

Veja o que aconteceu.

Se algo estiver errado, explique o problema para a IA.

E tente novamente.

Esse é o verdadeiro exercício.

---

# 🏁 Conclusão

Este Air Hockey é mais do que um jogo.

Ele é um exemplo de como podemos utilizar **Inteligência Artificial + criatividade + bons prompts** para transformar uma ideia em algo concreto.

Você começou com uma ideia:

> 🏒 "Quero criar um jogo."

E terminou com:

> 🎮 **Um jogo funcionando no navegador.**

Essa é a proposta do projeto.

**Não comece pensando "eu não sei programar".**

Comece pensando:

> **"O que eu quero criar?"**

Depois, utilize a IA para ajudar você a descobrir **como transformar essa ideia em realidade.**

---

## 🤝 Projeto

**CConecta**

Projeto educacional desenvolvido como atividade prática de aprendizagem de **Prompts e Inteligência Artificial**.

🏒 **Air Hockey — Criando com IA**

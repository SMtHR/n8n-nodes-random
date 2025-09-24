# 🧩 Random Node for n8n

Este projeto implementa um nó customizado chamado `Random`, que gera números aleatórios com base em um intervalo fornecido, utilizando a API pública do [random.org](https://www.random.org/).

> 📌 Desenvolvido como uma extensão para o [n8n](https://n8n.io/).

---

## Pré-requisitos

Confira se o Node.js e o NPM estão instalados em sua máquina. Para isto, abra um terminal e rode os comandos:

```bash
node -v
npm -v
```

> Caso estes comandos não retornem a versão instalada destes programas, acesse https://nodejs.org/pt/download, selecione a versão 22 (LTS) para seu sistema operacional, baixe-o e instale-o.

A aplicação Docker Desktop também é necessária para rodar o n8n localmente. Acesse https://www.docker.com/ e baixe a versão compatível com seu sistema operacional.

## 📦 Instalação das dependências

### Clone o [repositório](https://github.com/SMtHR/n8n-nodes-random), abra um terminal dentro da pasta e instale as dependências:

```
npm install
```

### Compile o projeto:

```
npm run build
```

### Em seguida, configure o ambiente:

As variáveis de ambiente necessárias estão definidas no `docker-compose.yaml`. Crie um arquivo `.env` a partir de `.env.example`, completando os campos faltantes a sua preferência. O `docker-compose.yaml` usará estas variáveis para configurar o container Docker.

### Então, execute os containers:

```
docker-compose up -d
```

---

# 🔹Acessando o n8n

Acesse o n8n em: http://localhost:5678

> Ao acessar o link pela primeira vez, o n8n pedirá para que você cadastre sua "Owner Account". Preencha o formulário e avance para a próxima etapa.
>
> Customize seu n8n no próximo formulário, ou clique em "Get Started" para pular.
>
> A próxima tela lhe oferecerá algumas funcionalidades a partir de uma key que será enviada para seu e-mail. Estas funcionalidades não são necessárias para o que vamos fazer, portanto, você pode clicar em "Skip". Caso deseje-as, preencha seu email e ative sua key.

## 🧩 Sobre o nó Random

> O nó realiza uma requisição GET para a API do random.org:

Operação disponível: GET

Parâmetros:

De: → número mínimo (ex: 1)

Até: → número máximo (ex: 100)

> O resultado é retornado como um array JSON com um número aleatório.

## Utilizando o nó Random

Na tela inicial, clique em "Start from scratch" para abrir o editor do n8n. É nele que você conectará nós para criar processos automatizados.

O primeiro passo é adicionar um Trigger, um gatilho que iniciará o processo. Para efeito de simplicidade, escolha o "Trigger manually", que inicia o processo ao clicar no botão "Execute Workflow".

A seguir, vamos implementar o nosso nó Random. Clique no símbolo "+" à direita do nó, busque por "Random" e selecione o nó correspondente.

> Obs: Caso o nó não apareça, certifique-se que executou os comandos definidos no início deste documento. Provavelmente você pode ter esquecido de compilar o projeto. Digite `docker-compose down` no terminal para apagar os containeres criados anteriormente, compile o projeto com `npm run build` e execute os containers novamente com `docker-compose up -d`.

Após selecionar o nó, defina os limites do intervalo que você deseja gerar o número aleatório. Em seguida, clique em "Execute step" no canto superior direito e um número dentro deste intervalo aparecerá na coluna "Output" à direita. (Selecione a opção JSON para visualizar a resposta)

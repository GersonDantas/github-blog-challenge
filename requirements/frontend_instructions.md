# Project overview
essa é uma aplicação que utilizará da API do GitHub para buscar issues de um repositório, dados do seu perfil e exibir elas como um blog.

# Features requirements
- Nós iremos usar, React através do Vite com TypeScript, Axios, react-hook-form, entre outras bibliotecas.
- Listagem do seu perfil com imagem, número de seguidores, nome e outras informações disponíveis pela API do GitHub.
- Listar e filtrar todas as issues do repositório com um pequeno resumo do conteúdo dela
- Criar uma página para exibir um post (issue) completo   

# Relevant docs
## How to use replicate emoji generator model

você irá precisar utilizar algumas API’s do GitHub:

- [GitHub Users API](https://docs.github.com/pt/rest/users/users#get-a-user): Será utilizada para buscar os dados do seu usuário do GitHub. No link você pode ver como fazer a requisição para ela, mas basicamente você deve fazer uma chamada para `api.github.com/users/${username}`.
    
    
- [GitHub Search API:](https://docs.github.com/pt/rest/search) Essa é a parte mais divertida da aplicação! Você vai utilizar a API de busca do GitHub para filtrar por issues do repositório que você criou. Além disso, essa será a mesma API que você utilizará para fazer o filtro por busca.

A rota a ser utilizada principalmente é a rota [`https://api.github.com/search/issues`](https://api.github.com/search/issues?q=Dynamic%20typing%20repo:daltonmenezes/test).
Essa rota recebe um parâmetro `q` que faz uma busca a partir de uma string. Nessa string, você pode passar, por exemplo, qual repositório você quer buscar enviando o texto `q=${texto}%20repo:${username}/${repo}`. Além disso, o parâmetro `q` também será usado para enviar um texto de busca, ou seja, você enviara o texto de busca + o parâmetro `repo` para ele buscar tudo junto.

Você pode ver mais sobre a busca de issues na API do GitHub por aqui: https://docs.github.com/pt/rest/search#search-issues-and-pull-requests

Um exemplo de chamada à API com busca é a seguinte: [`https://api.github.com/search/issues?q=Boas%20práticas%20repo:rocketseat-education/reactjs-github-blog-challenge`](https://api.github.com/search/issues?q=Boas%20pr%C3%A1ticas%20repo:rocketseat-education/reactjs-github-blog-challenge)

PS: Perceba que nessa busca, no parâmetro `q` foi passado a string `Boas%20práticas` e também o nome do repositório com um espaço do título. Isso irá buscar entre as issues qualquer uma que possua o texto `boas práticas` em seu título ou até descrição.
- [GitHub Issues API:](https://docs.github.com/pt/rest/issues/issues#get-an-issue) Para exibir o post completo, você precisará utilizar a `GitHub Issues API` para retornar todos os dados de uma issue. Você pode fazer isso através do `number` da issue para acessá-la através da URL no mesmo repositório, onde no mesmo exemplo de issue anterior, a URL ficaria assim: [`https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1`](https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1)

- GitHub Issues API: Para exibir o post completo, você precisará utilizar a GitHub Issues API para retornar todos os dados de uma issue. Você pode fazer isso através do number da issue para acessá-la através da URL no mesmo repositório, onde no mesmo exemplo de issue anterior, a URL ficaria assim: https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1 

- Além disso, é legal que você utilize as rotas dinâmicas do [react-router](https://reactrouter.com/), onde você pode receber parâmetros através dela para exibir a página do post completa. Esse parâmetro pode ser o `number` da issue para você conseguir fazer o fetch na Issues API. Para isso, você pode utilizar o hook useParams do react-router-dom.

- Como última dica, para exibir o post você precisará formatar ele, pois no GitHub ele é escrito no formato de markdown e para ser exibido em tela corretamente, você precisará converter ele desse formato markdown para um formato HTML. Para isso você pode utilizar o [react-markdown](https://github.com/remarkjs/react-markdown).


# Current file structure
EMOJI-MAKER/
├── src/
│   ├── app/                     # Next.js app router pages
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── __mocks__/              # Manual mocks for node_modules
│   ├── __tests__/              # Tests and test mocks
│   ├── domain/                 # Business rules and interfaces
│   │   ├── models/            # Domain models/entities
│   │   ├── usecases/         # Use case interfaces
│   │   └── errors/           # Domain error definitions
│   ├── data/                  # Use case implementations
│   │   ├── models/           # Data layer models
│   │   ├── protocols/        # Protocols/contracts
│   │   └── usecases/        # Concrete use case implementations
│   ├── infra/                 # External implementations
│   │   └── http/             # HTTP clients (Axios, Fetch)
│   │       ├── axios-client/
│   │       └── github-api/   # GitHub API specific implementations
│   ├── presentation/          # UI and state management
│   │   ├── components/       # Reusable UI components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── pages/           # Page components
│   │   └── styles/          # Styling files
│   ├── validation/           # Form and data validation
│   └── main/                 # Composition root
│       ├── factories/        # Factories for creating instances
│       ├── adapters/        # Adapters between layers
│       └── config/          # Configuration files
├── public/                   # Static files
├── requirements/             # Project requirements
└── [config files...]        # Various config files

# Rules
- Todas as funcionalidades devem ser abstraidas para o clean architecture para melhor desaclopamento
- Todas as funcionalidades devem conter testes unitários
- todas as funcionalidades devem ser implementadas de maneira simples

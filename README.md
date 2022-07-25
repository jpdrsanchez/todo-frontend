# Coopers TODO app - Frontend

[Live URL](https://github.com/jpdrsanchez/todo-frontend)
[repositório back-end](https://github.com/jpdrsanchez/todo-api)

## Stack utilizada

- NextJS
- Styled Components
- Jest e RTL
- Axios
- React Hook Form e Yup
- Nookies

## Estrutura do projeto

- `public` - contém todos os assets estáticos do projeto, como imagens, e tipografias externas.
- `src/components` - componentes gerais e reutilizavies em toda a aplicação, ex: Header, Footer, Botões, Container, Modal e etc...
- `src/config` - configurações globais de bibliotecas externas.
- `src/hooks` - hooks globais da aplicação, como por exemplo hooks de autenticação e informações globais.
- `src/interfaces` - interfaces globais da aplicação.
- `src/pages` - páginas da aplicação, diretório obrigatório em uma aplicação em nextJS pois aqui o será feito o roteamento automático com base no nome da página
- `src/services` - serviços da aplicação, como por exemplo comunicação com a nossa API em NodeJS
- `src/styles` - estilos gerais da aplicação, além de helpers de acessibilidade como a classe `.visually-hidden`
- `src/templates` - página dos templates gerais da aplicação referente à cada uma das páginas do app, contendo seus componentes e todas as suas lógicas.
- `src/utils` - funções e helpers úteis para serem reutilizados em toda a aplicação

Vale observar que foi aplicada no projeto uma pattern que tenho achado o tanto quanto interessante, aonde separamos a lógica de um componente dentro de um custom hook dentro dele, o template da aplicação não precisa saber de sua lógica, assim o código fica mais limpo e de mais fácil entendimento.

O projeto conta também com uma configuração de ESLint e prettier, indispensável para manter um padrão de código uniforme em toda a aplicação.

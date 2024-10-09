# Portfólio Pessoal - Backend

Este é o backend da aplicação web do meu portfólio, responsável por fornecer a lógica de negócio e a API para o frontend.

## Estrutura do Projeto

O backend foi desenvolvido em Node.js com TypeScript, e abaixo estão as instruções para execução e construção do projeto.

### Scripts disponíveis no backend

Execute os seguintes scripts usando o comando `npm run-script`:

- **Iniciar:**
  ```bash
  npm start
Inicia a aplicação em produção, executando o arquivo compilado ./dist/server.js.

- **Desenvolvimento:**
  ```bash
  npm run dev
Executa o servidor em modo de desenvolvimento com tsnd, usando tsconfig-paths para lidar com paths personalizados, e monitora alterações no código.

- **Linting:**
  ```bash
  npm run lint
Verifica a qualidade do código com ESLint e corrige automaticamente os problemas encontrados.

- **Linting em tempo real:**
  ```bash
  npm run lint:watch
Monitora alterações no código e executa o ESLint automaticamente sempre que houver uma mudança.

- **Build:**
  ```bash
  npm run build
Compila o código TypeScript em JavaScript utilizando tsup, e o resultado é salvo no diretório ./dist.

### Variáveis de Ambiente

As variáveis de ambiente podem ser configuradas no arquivo .env. Abaixo está um exemplo:
  ```bash
  PORT=<>

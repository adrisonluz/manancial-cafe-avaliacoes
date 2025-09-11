# Manancial Café - Avaliação

Este é um projeto de aplicativo de avaliação para o Manancial Café, construído com o Firebase Studio. O aplicativo permite que os clientes avaliem sua experiência em várias categorias e deixem comentários.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida.
- **ShadCN/UI**: Coleção de componentes de UI reutilizáveis.
- **Genkit**: Para funcionalidades de IA generativa, como análise de sentimento e sugestão de ações.
- **Zod**: Para validação de esquemas.

## Primeiros Passos

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 20 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

### Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd manancial-cafe-avaliacao
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

### Executando o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento do Next.js e o servidor do Genkit (para as funcionalidades de IA), execute os seguintes comandos em terminais separados:

1.  **Para o aplicativo Next.js:**
    ```bash
    npm run dev
    ```
    Abra [http://localhost:9002](http://localhost:9002) em seu navegador para ver o aplicativo.

2.  **Para o Genkit:**
    ```bash
    npm run genkit:dev
    ```
    Isso iniciará o servidor do Genkit, que é necessário para as integrações de IA funcionarem.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

- `npm run dev`: Inicia o aplicativo em modo de desenvolvimento.
- `npm run build`: Compila o aplicativo para produção.
- `npm run start`: Inicia um servidor de produção.
- `npm run lint`: Executa o linter para verificar a qualidade do código.
- `npm run genkit:dev`: Inicia o servidor do Genkit em modo de desenvolvimento.

## Estrutura do Projeto

- `src/app/`: Contém as páginas principais e layouts do aplicativo Next.js (App Router).
- `src/components/`: Contém os componentes React, incluindo os componentes de UI da ShadCN.
- `src/ai/`: Contém a lógica de IA com Genkit, incluindo os fluxos (`flows`).
- `src/lib/`: Funções utilitárias e configurações.
- `public/`: Arquivos estáticos.

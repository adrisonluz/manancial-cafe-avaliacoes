# Manancial Café - Avaliação

Este é um projeto de aplicativo de avaliação para o Manancial Café, construído com o Firebase Studio. O aplicativo permite que os clientes avaliem sua experiência em várias categorias, deixem comentários e enviem os dados para um Firebase Realtime Database.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida.
- **ShadCN/UI**: Coleção de componentes de UI reutilizáveis.
- **Firebase**: Para armazenamento de dados em tempo real (Realtime Database).
- **Zod**: Para validação de esquemas.

## Primeiros Passos

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 20 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)
- Uma conta no [Firebase](https://firebase.google.com/).

### Instalação

1.  Clone o repositório:
    ```bash
    git clone <url-do-repositorio>
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd manancial-cafe-avaliacao
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  **Configuração do Firebase:**
    - Crie um projeto no [console do Firebase](https://console.firebase.google.com/).
    - Adicione um aplicativo da Web ao seu projeto.
    - Copie as credenciais do Firebase do seu aplicativo.
    - Ative o **Realtime Database**.
    - Copie a URL do seu Realtime Database.
    - Renomeie o arquivo `.env.example` para `.env` e preencha com as suas credenciais do Firebase.
      ```
      NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
      NEXT_PUBLIC_FIREBASE_APP_ID=...
      # etc.
      NEXT_PUBLIC_FIREBASE_DATABASE_URL=...
      ```

### Executando o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento do Next.js, execute o seguinte comando:

```bash
npm run dev
```

Abra [http://localhost:9002](http://localhost:9002) em seu navegador para ver o aplicativo.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

- `npm run dev`: Inicia o aplicativo em modo de desenvolvimento.
- `npm run build`: Compila o aplicativo para produção.
- `npm run start`: Inicia um servidor de produção.
- `npm run lint`: Executa o linter para verificar a qualidade do código.

## Estrutura do Projeto

- `src/app/`: Contém as páginas principais e layouts do aplicativo Next.js (App Router).
- `src/components/`: Contém os componentes React, incluindo os componentes de UI da ShadCN.
- `src/lib/`: Funções utilitárias e configurações, incluindo a configuração do Firebase.
- `public/`: Arquivos estáticos.

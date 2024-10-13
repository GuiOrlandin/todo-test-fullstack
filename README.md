# APP

Este projeto foi desenvolvido com o objetivo de criar uma aplicação de gerenciamento de tarefas (to-do list) simples e eficiente em um projeto fullstack, utilizando Next.js no frontend para proporcionar uma experiência de usuário com renderização do lado do servidor. No backend, foram empregados Node.js e NestJS, juntamente com o Prisma e o banco de dados PostgreSQL, para construir APIs robustas e escaláveis, garantindo a manipulação eficiente de dados. A aplicação permite que os usuários criem, visualizem, editem e deletem suas tarefas de maneira intuitiva.

### Clonando o repositório

```sh
gh repo clone GuiOrlandin/todo-test-fullstack
```

### Acessar o back-end

```sh
cd .\todo-test-api\
```

### Instale as dependências

```sh
npm i
```

### Execute o docker compose

```sh
docker compose up
```

### Execute o docker e rode as migrations

```sh
docker start
```

```sh
npx prisma migrate dev
```

### Inicie a aplicação na parte back-end

```sh
npm run start:dev
```

### Rode os testes no back-end

```sh
npm run test
```

### Navegue até o front-end

```sh
cd cd .\todo-test-web\
```

### Instale as dependências

```sh
npm i
```

### Inicie a aplicação na parte Front-end

```sh
npm run dev
```

### Rode os testes no Front-end

```sh
npm run test
```

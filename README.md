# Node API 

Projeto simples utilizando **Node.js**, **TypeScript** e **Fastify** para criar uma API leve e performática.

## 📦 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) v22+
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev/) — Framework web rápido para Node.js
- [Pino Pretty](https://github.com/pinojs/pino-pretty) — Logs formatados no console

## 📂 Estrutura Básica do Projeto


## ⚙️ Configuração do TypeScript (`tsconfig.json`)
Configuração ajustada para:
- **Target:** `ES2022`
- **Module:** `nodenext`
- **Strict mode:** Ativado
- Suporte a bibliotecas `es2024` e recursos ESNext

## 🚀 Como Rodar

1. **Instalar dependências**
   ```bash
   npm install


## 📡 Endpoints da API

| Método | Rota                     | Descrição |
|--------|--------------------------|-----------|
| **GET** | `/`                      | Retorna um objeto com a mensagem `"Hello World"`. |
| **GET** | `/courses`               | Retorna a lista completa de cursos cadastrados. |
| **GET** | `/courses/:id`           | Busca e retorna um curso pelo seu `id` (UUID ou numérico), ou 404 se não encontrado. |
| **GET** | `/courses/nanoid/:id`    | Busca e retorna um curso pelo seu `nanoID` (gerado aleatoriamente), ou 404 se não encontrado. |
| **POST** | `/courses`              | Cria um novo curso com `title` enviado no corpo da requisição. Gera automaticamente `id` (UUID), `time` (timestamp) e `nanoID` (hexadecimal de 8 caracteres). |

> Exemplos de uso podem ser encontrados no arquivo `resquisicoes.http`.
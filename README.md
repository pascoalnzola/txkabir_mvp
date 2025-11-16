
# TX KABIR - TUDKABIR Integration API (MVP)

Projeto de exemplo que implementa um MVP da API de integração entre TX KABIR (serviço de mobilidade)
e TUDKABIR (motor de busca), demonstrando princípios de Clean Architecture / DDD.

## O que inclui
- Node.js + TypeScript
- Estrutura baseada em Clean Architecture (domains, usecases, ports, infra)
- Autenticação JWT simulada
- Logging e tratamento de erros centralizado
- Swagger (OpenAPI) docs
- Testes unitários com Jest (exemplo do usecase)
- In-memory repository (substituível por PostgreSQL/MongoDB)

## Rodando localmente (após `npm install`)
- `npm run dev` — iniciar em modo de desenvolvimento (ts-node-dev)
- `npm run build && npm start` — build + run
- `npm test` — rodar testes

## Endpoints principais
- `GET /api/drivers` — retorna lista de motoristas/veículos disponíveis (requer header Authorization: Bearer <token>)
- `GET /api/docs` — Swagger UI

## Como trocar implementação de persistência
A arquitetura separa a porta (DriverRepository) da implementação (DriverInMemoryRepository).
Basta implementar a interface em `src/infra/repositories` usando PostgreSQL ou MongoDB.

## Observações de design
- Entities e DTOs no domínio (`src/core/domain`)
- Usecases orquestram regras de negócio (`src/core/usecases`)
- Controllers traduzem HTTP para usecases
- Middlewares tratam autenticação e erros


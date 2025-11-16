
# Arquitetura proposta (resumo)

- Camadas:
  - core/domain: entidades e tipos do domínio.
  - core/ports: interfaces (ports/gateways) usadas pelo domínio.
  - core/usecases: regras de aplicação (casos de uso).
  - infra: implementações concretas (http, repositories).
  - shared: erros, logger, middlewares.
- Principais decisões:
  - Dependências apontam para interfaces, não implementações.
  - Repositório em memória para MVP; facilmente substituível por Postgres/Mongo.
  - Controladores traduzem HTTP <-> DTOs e chamam usecases.

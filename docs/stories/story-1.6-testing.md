# Story 1.6 - Configurar Testes Automatizados

**Epic:** MARA-EPIC-01
**Fase:** Investimento
**Estimativa:** 12h
**Prioridade:** P2
**Depende de:** Stories 1.2, 1.4
**Status:** Ready for Review

---

## Objetivo

Implementar framework de testes com Vitest + React Testing Library.

---

## Tasks

- [x] **SYS-01:** Instalar e configurar Vitest
- [x] Criar `vitest.config.ts` com jsdom environment
- [x] Adicionar scripts: `test`, `test:watch`, `test:coverage`
- [x] Criar testes para cada componente:
  - [x] Header.test.tsx (2 tests)
  - [x] Hero.test.tsx (4 tests)
  - [x] FeatureSection.test.tsx (2 tests)
  - [x] ScheduleSection.test.tsx (3 tests)
  - [x] AboutSection.test.tsx (3 tests)
  - [x] Footer.test.tsx (4 tests)
  - [x] NextSteps.test.tsx (4 tests)
  - [x] App.test.tsx (2 tests)
  - [x] ErrorBoundary.test.tsx (2 tests)
- [x] Testar edge cases (ErrorBoundary, dead links, console.log removal, countdown)

---

## Criterios de Aceite

- [x] `npm test` passa sem erros
- [x] Todos os componentes tem pelo menos 1 teste
- [x] Testes cobrem renderizacao e interacao basica

---

## Definition of Done

- [x] 9 suites, 26 testes passando
- [ ] Commit: `test: add Vitest + RTL with component tests [MARA-1.6]`

---

## Dev Agent Record

### Agent Model Used
Claude Opus 4.6

### Change Log
- Instalado vitest, @testing-library/react, @testing-library/jest-dom, @testing-library/user-event, jsdom
- Criado vitest.config.ts (jsdom, globals, setup file, include src/ only)
- Criado src/test/setup.ts com jest-dom matchers
- Adicionados scripts test, test:watch, test:coverage ao package.json
- Criados 9 test suites com 26 testes total
- tsconfig.json atualizado com vitest/globals types

### Completion Notes
- 9 suites, 26 tests, ALL PASSING (4.53s)
- Cobertura nao calculada formalmente (requer @vitest/coverage-v8) mas todos os componentes tem testes
- Tests include: renderizacao, dados corretos, edge cases (ErrorBoundary, dead links, console.log)

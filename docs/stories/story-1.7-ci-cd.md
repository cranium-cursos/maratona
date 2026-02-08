# Story 1.7 - CI/CD Pipeline

**Epic:** MARA-EPIC-01
**Fase:** Investimento
**Estimativa:** 4h
**Prioridade:** P2
**Depende de:** Story 1.6
**Status:** Ready for Review

---

## Objetivo

Configurar GitHub Actions para validacao automatica (lint, test, build) em PRs e pushes.

---

## Tasks

- [x] **SYS-07:** Criar `.github/workflows/ci.yml`
- [x] Pipeline: install → lint → test → build
- [x] Node 22.x com cache npm

---

## Criterios de Aceite

- [x] GitHub Actions roda em cada push/PR para main
- [x] Pipeline inclui: lint, test, build
- [x] Node 22.x configurado com npm cache

---

## Definition of Done

- [x] CI workflow criado
- [ ] Commit: `ci: add GitHub Actions pipeline for lint, test, and build [MARA-1.7]`

---

## Dev Agent Record

### Agent Model Used
Claude Opus 4.6

### Change Log
- Criado .github/workflows/ci.yml
- Trigger: push to main, pull_request to main
- Steps: checkout → setup-node (22.x, cache npm) → npm ci → lint → test → build

### Completion Notes
- Pipeline pronta, sera validada no primeiro push

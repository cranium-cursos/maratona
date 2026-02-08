# Story 1.8 - Design System Basico

**Epic:** MARA-EPIC-01
**Fase:** Investimento
**Estimativa:** 8h
**Prioridade:** P2
**Depende de:** Stories 1.2, 1.4
**Status:** Ready for Review

---

## Objetivo

Criar componentes reutilizaveis padronizados, eliminando inconsistencias visuais.

---

## Tasks

- [x] **UX-04:** Criar componentes base: Button, Card, Badge, SectionHeading
- [x] **UX-13:** Substituir todos os botoes inline por `<Button>`
- [x] Substituir cards inline por `<Card>`
- [x] Documentar componentes com TypeScript props
- [x] Adicionar testes para cada componente UI

---

## Criterios de Aceite

- [x] Nenhum botao inline restante (todos usam `<Button>`)
- [x] Cards de feature e schedule usam `<Card>`
- [x] Props documentadas com TypeScript
- [x] Componentes testados
- [x] Visual consistente

---

## Definition of Done

- [x] Build funciona
- [x] 12 suites, 34 testes passando
- [ ] Commit: `refactor: create basic design system with Button, Card, Badge [MARA-1.8]`

---

## Dev Agent Record

### Agent Model Used
Claude Opus 4.6

### Change Log
- Criados 4 componentes UI em src/components/ui/
  - Button.tsx: 3 variantes (primary, secondary, whatsapp), 3 tamanhos (sm, md, lg), fullWidth, icon
  - Card.tsx: 3 variantes (default, exclusive, feature)
  - Badge.tsx: componente base com className customizavel
  - SectionHeading.tsx: titulo + divider + subtitle opcional
- Header, Hero, Footer, MobileCTA: botoes inline → `<Button>`
- FeatureSection: cards inline → `<Card variant="feature">`
- ScheduleSection: cards + heading → `<Card>`, `<Badge>`, `<SectionHeading>`
- 3 novos test files para componentes UI (8 testes)

### Completion Notes
- Build OK (2.36s)
- 12 suites, 34 testes passando
- NextSteps nao usa Button pois tem link `<a>` com estilo whatsapp especifico

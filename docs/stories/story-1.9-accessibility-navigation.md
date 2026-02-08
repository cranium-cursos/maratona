# Story 1.9 - Acessibilidade e Navegacao

**Epic:** MARA-EPIC-01
**Fase:** Investimento
**Estimativa:** 6h
**Prioridade:** P2
**Depende de:** Story 1.8
**Status:** Ready for Review

---

## Objetivo

Melhorar acessibilidade e navegacao do site.

---

## Tasks

- [x] **UX-10:** Adicionar skip-to-content link
- [x] **UX-19:** Configurar focus-visible personalizado (outline primario)
- [x] **UX-18:** Adicionar aria-hidden="true" em icones decorativos
- [x] **UX-14:** Implementar scroll-to navigation no Header (Features, Cronograma, Sobre)
- [x] **UX-22:** Criar 404 page com link para home
- [x] **UX-12:** Adicionar indicador visual passado/futuro nos dias do cronograma
- [x] Adicionar aria-labels em botoes e secoes
- [x] Adicionar role="banner" no header, aria-labelledby nas secoes

---

## Criterios de Aceite

- [x] Skip-to-content funciona via keyboard (CSS + link no App)
- [x] Focus visible em todos os elementos interativos (CSS global)
- [x] Navegacao por sections funciona (scroll-to com offset)
- [x] 404 page renderiza para rotas invalidas
- [x] Cronograma indica dias passados (opacity + "Realizado") e dia atual (ring + "Hoje")
- [x] Build funciona
- [x] Todos os testes passam (13 suites, 36 testes)

---

## Definition of Done

- [x] Build + testes + lint passam
- [ ] Commit: `feat: improve accessibility, add navigation and 404 page [MARA-1.9]`

---

## Dev Agent Record

### Agent Model Used
Claude Opus 4.6

### Change Log
- UX-10: Skip-to-content com CSS em index.css + link no App.tsx
- UX-19: :focus-visible personalizado com outline primary em index.css
- UX-18: aria-hidden="true" adicionado em icones decorativos (FeatureSection, ScheduleSection)
- UX-14: Header com nav links (Aprenda, Cronograma, Sobre) + smooth scroll com offset 80px
- UX-22: NotFound.tsx com 404, mensagem amigavel e botao para home + rota catch-all
- UX-12: ScheduleSection com getDayStatus() - passado (opacity-60 + "Realizado"), hoje (ring-primary + "Hoje"), futuro (normal)
- Secoes com ids (features, schedule, about) e aria-labelledby
- Header com role="banner" e nav com aria-label
- NotFound.test.tsx criado (2 testes)
- ESLint config atualizado para globals corretos (DOM types, test globals)

### Completion Notes
- Build OK (4.23s)
- 13 suites, 36 testes, ALL PASSING
- Lint: 0 errors, 1 warning

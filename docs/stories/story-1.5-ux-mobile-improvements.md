# Story 1.5 - Melhorias de UX e Mobile

**Epic:** MARA-EPIC-01
**Fase:** Fundacao
**Estimativa:** 4h
**Prioridade:** P1
**Depende de:** Story 1.2
**Status:** Ready for Review

---

## Objetivo

Resolver debitos de UX que impactam a experiencia do usuario, especialmente em mobile.

---

## Tasks

- [x] **UX-08:** Ajustar fluxo NextSteps — "Inscricao Confirmada!" → "Voce esta quase la!"
- [x] **UX-09:** Remover avatares picsum (social proof mantido como texto)
- [x] **UX-11:** Adicionar `safe-area-inset-bottom` no mobile CTA
- [x] **UX-20:** Adicionar meta canonical e robots no `index.html`
- [x] **SYS-12 / UX-17:** Adicionar favicon usando logo Cranium existente

---

## Criterios de Aceite

- [x] NextSteps nao menciona "inscricao confirmada"
- [x] Social proof consistente (sem picsum)
- [x] Mobile CTA respeita safe-area do iPhone
- [x] Favicon aparece na aba do navegador
- [x] Meta canonical e robots configurados
- [x] Build funciona

---

## Definition of Done

- [x] Build funciona
- [ ] Commit: `fix: improve UX flow, mobile experience and meta tags [MARA-1.5]`

---

## Dev Agent Record

### Agent Model Used
Claude Opus 4.6

### Change Log
- UX-08: NextSteps titulo alterado para "Voce esta quase la!"
- UX-09: Removidos avatares picsum, mantido texto social proof "+2.000 profissionais"
- UX-11: MobileCTA com pb-[max(1rem,env(safe-area-inset-bottom))] + viewport-fit=cover
- UX-20: canonical + robots adicionados ao index.html
- SYS-12: favicon (webp) + apple-touch-icon (png) usando logo Cranium existente

### Completion Notes
- Build OK (2.32s)
- UX-21 lazy loading nao implementado (imagens do Hero sao above-the-fold, lazy seria contraproducente)

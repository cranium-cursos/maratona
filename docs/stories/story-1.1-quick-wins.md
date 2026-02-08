# Story 1.1 - Quick Wins: Correcoes Imediatas

**Epic:** MARA-EPIC-01
**Fase:** Quick Wins
**Estimativa:** 2h
**Prioridade:** P0
**Status:** Ready for Review

---

## Objetivo

Corrigir todos os problemas visiveis ao usuario que podem ser resolvidos em minutos, sem risco de regressao.

---

## Tasks

- [x] **UX-01:** Corrigir typo "ARTICIAL" → "ARTIFICIAL" em `constants.tsx:163`
- [x] **UX-03:** Remover `console.log("Pixel Fired")` em `NextSteps.tsx:10`
- [x] **UX-07:** Atualizar copyright "2024" → "2026" em `LandingPage.tsx:276`
- [x] **SYS-16:** Atualizar version "0.0.0" → "1.0.0" em `package.json`
- [x] **UX-06:** Corrigir texto 8px nos nomes dos experts no Hero mobile. Minimo 10px em `LandingPage.tsx:47`
- [x] **UX-02:** Remover links mortos do footer (#) ou substituir por links reais (Termos, Privacidade, Social)
- [x] **SYS-02:** Remover `express` e `@anthropic-ai/sdk` do package.json + npm install
- [x] **SYS-09:** Rodar `npm prune` para limpar pacotes extraneous

---

## Criterios de Aceite

- [x] Nenhum typo visivel ao usuario
- [x] Console limpo (sem logs de debug)
- [x] Copyright atualizado
- [x] Texto legivel em mobile (min 10px)
- [x] Nenhum link aponta para "#"
- [x] `npm run build` funciona sem erros
- [x] Nenhuma dependencia desnecessaria no package.json

---

## Definition of Done

- [x] Todas as tasks marcadas como concluidas
- [x] Build funciona
- [ ] Verificacao visual em mobile e desktop
- [ ] Commit com mensagem: `fix: resolve quick wins - typos, dead links, unused deps [MARA-1.1]`

---

## Arquivos Afetados

- constants.tsx
- NextSteps.tsx
- LandingPage.tsx
- package.json
- package-lock.json

---

## Dev Agent Record

### Agent Model Used
Claude Opus 4.6

### Change Log
- UX-01: Corrigido typo "ARTICIAL" → "ARTIFICIAL" em constants.tsx:163
- UX-03: Removido console.log("Pixel Fired") em NextSteps.tsx:10
- UX-07: Atualizado copyright "2024" → "2026" em LandingPage.tsx:276
- SYS-16: Atualizado version "0.0.0" → "1.0.0" em package.json
- UX-06: Corrigido text-[8px] → text-[10px] nos nomes dos experts no Hero mobile em LandingPage.tsx:47
- UX-02: Substituido links mortos (#) por links reais no footer (Termos, Privacidade, Site, Instagram)
- SYS-02: Removidos express, @anthropic-ai/sdk, axios, dotenv do package.json + npm install
- SYS-09: Executado npm prune - 0 pacotes extraneous

### Completion Notes
- Build passou sem erros (vite build - 1.82s)
- Removidas 4 dependencias desnecessarias (express, @anthropic-ai/sdk, axios, dotenv)
- Links do footer apontam para craniumcursos.com.br (termos, privacidade, site, instagram)
- Verificacao visual pendente (requer browser)

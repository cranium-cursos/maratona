# Story 1.2 - Reorganizacao de Estrutura do Projeto

**Epic:** MARA-EPIC-01
**Fase:** Fundacao
**Estimativa:** 5h
**Prioridade:** P1
**Depende de:** Story 1.1
**Status:** Ready for Review

---

## Objetivo

Reorganizar os arquivos do projeto seguindo convencoes React/Vite padrao, extrair sub-componentes do LandingPage monolito, e configurar ESLint + Prettier.

---

## Tasks

- [x] **SYS-08:** Mover componentes .tsx do root para `src/components/`
- [x] **SYS-13:** Extrair sub-componentes do LandingPage (321 linhas)
- [x] **SYS-06:** Configurar ESLint + Prettier
- [x] **SYS-11:** Mover scripts utilitarios para `scripts/`
- [x] Atualizar `index.html` entry point para novo path
- [x] Atualizar `vite.config.ts` path aliases
- [x] Atualizar `tsconfig.json` paths

---

## Criterios de Aceite

- [x] Todos os componentes em `src/components/`
- [x] LandingPage.tsx tem < 50 linhas (imports + composicao) — 27 linhas
- [x] ESLint passa sem erros (0 errors, 1 warning)
- [x] `npm run build` funciona
- [x] Todos os imports resolvem corretamente
- [x] Scripts utilitarios em `scripts/`

---

## Definition of Done

- [x] Build + Dev funcionam
- [x] ESLint configurado e passando
- [x] Prettier configurado
- [ ] Commit: `refactor: reorganize project structure and extract components [MARA-1.2]`

---

## Arquivos Afetados

- src/main.tsx (novo - entry point)
- src/App.tsx (movido do root)
- src/pages/LandingPage.tsx (novo - composicao)
- src/pages/NextSteps.tsx (movido do root)
- src/components/Header.tsx (extraido)
- src/components/Hero.tsx (extraido)
- src/components/FeatureSection.tsx (extraido)
- src/components/ScheduleSection.tsx (extraido)
- src/components/AboutSection.tsx (extraido)
- src/components/Footer.tsx (extraido)
- src/components/MobileCTA.tsx (extraido)
- src/components/LoadingSpinner.tsx (extraido)
- src/data/constants.ts (movido)
- src/types/index.ts (movido)
- index.html (entry point atualizado)
- vite.config.ts (alias atualizado)
- tsconfig.json (paths atualizados)
- package.json (novos scripts lint/format)
- eslint.config.js (novo)
- .prettierrc (novo)
- scripts/ (4 scripts movidos)

---

## Dev Agent Record

### Agent Model Used
Claude Opus 4.6

### Change Log
- SYS-08: Movidos todos .tsx/.ts do root para src/ (pages/, components/, data/, types/)
- SYS-13: LandingPage extraido em 8 sub-componentes (Header, Hero, FeatureSection, ScheduleSection, AboutSection, Footer, MobileCTA, LoadingSpinner)
- SYS-06: ESLint 9 + Prettier configurados com flat config
- SYS-11: 4 scripts utilitarios movidos para scripts/
- index.html: entry point atualizado para /src/main.tsx
- vite.config.ts: alias @ → ./src, removido GEMINI_API_KEY define
- tsconfig.json: paths atualizados, include restrito a src/

### Completion Notes
- Build OK (1.74s)
- ESLint: 0 errors, 1 warning (react-hooks/exhaustive-deps em NextSteps — aceitavel)
- LandingPage: de 321 linhas para 27 linhas

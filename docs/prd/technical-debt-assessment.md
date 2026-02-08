# Technical Debt Assessment - FINAL

**Projeto:** maratona-fisioterapia-cranium
**Tipo:** Landing Page SPA (Frontend Only, gerado por Lovable/v0.dev)
**Repositorio:** cranium-cursos/maratona
**Data:** 2026-02-08
**Aprovado por:** @qa (APPROVED)

---

## Executive Summary

- **Total de debitos:** 39
- **Criticos:** 8 | **Altos:** 10 | **Medios:** 14 | **Baixos:** 7
- **Esforco total estimado:** ~50 horas
- **Fases:** 3 (Quick Wins: 2h, Fundacao: 18h, Investimento: 30h)

---

## Inventario Completo de Debitos

### Sistema (validado por @architect)

| ID | Debito | Severidade | Horas | Prioridade | Fase |
|----|--------|-----------|-------|------------|------|
| SYS-01 | Zero cobertura de testes | Critico | 12h | P2 | Investimento |
| SYS-02 | Deps nao usadas (express, @anthropic-ai/sdk) | Medio | 0.5h | P0 | Quick Win |
| SYS-03 | API key exposta no frontend (GEMINI_API_KEY) | Critico | 1h | P1 | Fundacao |
| SYS-04 | Sem error boundaries | Alto | 2h | P1 | Fundacao |
| SYS-05 | WhatsApp link hardcoded | Alto | 1h | P1 | Fundacao |
| SYS-06 | Sem ESLint/Prettier | Alto | 2h | P1 | Fundacao |
| SYS-07 | Sem CI/CD pipeline | Alto | 4h | P2 | Investimento |
| SYS-08 | Componentes no root (nao em src/) | Alto | 2h | P1 | Fundacao |
| SYS-09 | Pacotes extraneous | Baixo | 0.25h | P0 | Quick Win |
| SYS-10 | Sem source maps producao | Baixo | 0.5h | P2 | Fundacao |
| SYS-11 | Scripts no root | Baixo | 0.5h | P1 | Fundacao |
| SYS-12 | Sem favicon | Medio | 1h | P2 | Fundacao |
| SYS-13 | LandingPage monolito (321 linhas) | Medio | 3h | P1 | Fundacao |
| SYS-14 | README minimo | Baixo | 1h | P3 | Nice-to-have |
| SYS-15 | Sem CHANGELOG | Baixo | 0.5h | P3 | Nice-to-have |
| SYS-16 | version 0.0.0 | Baixo | 0.1h | P0 | Quick Win |

### Frontend/UX (validado por @ux-design-expert)

| ID | Debito | Severidade | Horas | Prioridade | Fase |
|----|--------|-----------|-------|------------|------|
| UX-01 | Typo "ARTICIAL" | Critico | 0.1h | P0 | Quick Win |
| UX-02 | Links mortos footer | Critico | 0.5h | P0 | Quick Win |
| UX-03 | console.log em producao | Alto | 0.1h | P0 | Quick Win |
| UX-04 | Sem design system | Alto | 8h | P2 | Investimento |
| UX-05 | Material Symbols full load (~200KB) | Critico | 2h | P1 | Fundacao |
| UX-06 | Texto 8px mobile (ilegivel) | Critico | 0.5h | P0 | Quick Win |
| UX-07 | Copyright 2024 desatualizado | Medio | 0.1h | P0 | Quick Win |
| UX-08 | "Inscricao Confirmada" sem inscricao | Alto | 2h | P1 | Fundacao |
| UX-09 | Picsum avatares (mudam cada reload) | Alto | 0.5h | P1 | Fundacao |
| UX-10 | Sem skip-to-content | Medio | 0.5h | P2 | Investimento |
| UX-11 | Sem safe-area iOS | Alto | 0.25h | P1 | Fundacao |
| UX-12 | Sem indicador passado/futuro dias | Medio | 2h | P2 | Investimento |
| UX-13 | Botoes inconsistentes | Medio | 1h | P2 | Investimento |
| UX-14 | Sem scroll-to navigation | Medio | 2h | P2 | Investimento |
| UX-15 | GTM render-blocking | Alto | 0.5h | P1 | Fundacao |
| UX-16 | Dark mode sem toggle | Baixo | 2h | P3 | Nice-to-have |
| UX-17 | Sem favicon | Medio | 1h | P2 | Fundacao |
| UX-18 | Sem aria-hidden icones | Baixo | 0.5h | P3 | Nice-to-have |
| UX-19 | Sem focus-visible | Medio | 1h | P2 | Investimento |
| UX-20 | Sem meta robots/canonical | Medio | 0.25h | P2 | Fundacao |
| UX-21 | Hero images sem loading lazy | Medio | 0.25h | P1 | Fundacao |
| UX-22 | Sem 404 page | Medio | 1h | P2 | Investimento |
| UX-23 | Sem scroll reveal animations | Baixo | 3h | P3 | Nice-to-have |

---

## Plano de Resolucao

### FASE 1: Quick Wins (~2h)
**Objetivo:** Corrigir problemas visiveis ao usuario sem risco de regressao.

| Ordem | ID | Debito | Tempo |
|-------|-----|--------|-------|
| 1 | UX-01 | Corrigir typo "ARTICIAL" → "ARTIFICIAL" | 5min |
| 2 | UX-03 | Remover console.log("Pixel Fired") | 5min |
| 3 | UX-07 | Atualizar copyright 2024 → 2026 | 5min |
| 4 | SYS-16 | Corrigir version 0.0.0 → 1.0.0 | 5min |
| 5 | UX-06 | Corrigir texto 8px → min 12px mobile | 30min |
| 6 | UX-02 | Remover ou corrigir links mortos do footer | 30min |
| 7 | SYS-02 | Remover express e @anthropic-ai/sdk | 30min |
| 8 | SYS-09 | Limpar pacotes extraneous | 15min |

**Validacao:** Visual + console limpo + build funciona

---

### FASE 2: Fundacao (~18h)
**Objetivo:** Estabelecer estrutura solida para manutencao e evolucao.

**Pre-requisito critico: SYS-08 primeiro!**

| Ordem | ID | Debito | Tempo | Depende de |
|-------|-----|--------|-------|-----------|
| 1 | SYS-08 | Reorganizar componentes em src/components/ | 2h | - |
| 2 | SYS-13 | Extrair sub-componentes do LandingPage | 3h | SYS-08 |
| 3 | SYS-06 | Configurar ESLint + Prettier | 2h | SYS-08 |
| 4 | UX-05 | Substituir Material Symbols por Lucide React | 2h | SYS-08 |
| 5 | SYS-03 | Remover API key do frontend, mover para .env | 1h | - |
| 6 | SYS-05 | Mover WhatsApp link para .env | 1h | SYS-03 |
| 7 | SYS-04 | Adicionar error boundaries | 2h | SYS-08 |
| 8 | UX-08 | Ajustar fluxo NextSteps (remover "inscricao") | 2h | - |
| 9 | UX-09 | Substituir picsum por avatares estaticos | 0.5h | - |
| 10 | UX-11 | Adicionar safe-area-inset iOS | 0.25h | - |
| 11 | UX-15 | Mover GTM para async | 0.5h | - |
| 12 | UX-21 | Adicionar loading="lazy" hero images | 0.25h | - |
| 13 | UX-20 | Adicionar meta canonical/robots | 0.25h | - |
| 14 | SYS-11 | Mover scripts para scripts/ | 0.5h | - |

**Validacao:** Build + ESLint + visual em mobile/desktop

---

### FASE 3: Investimento (~30h)
**Objetivo:** Qualidade profissional, testes, CI/CD, design system.

| Ordem | ID | Debito | Tempo | Depende de |
|-------|-----|--------|-------|-----------|
| 1 | SYS-01 | Configurar Vitest + React Testing Library + testes | 12h | SYS-06, SYS-08 |
| 2 | SYS-07 | GitHub Actions (lint + test + build) | 4h | SYS-01, SYS-06 |
| 3 | UX-04 | Design system basico (Button, Card, Badge) | 8h | SYS-13, UX-05 |
| 4 | UX-14 | Scroll-to navigation no header | 2h | SYS-08 |
| 5 | UX-22 | 404 page | 1h | SYS-08 |
| 6 | UX-12 | Indicador passado/futuro dias | 2h | - |
| 7 | UX-19 | Focus-visible personalizado | 1h | UX-04 |

**Validacao:** CI/CD green, Lighthouse >= 90, cobertura >= 60%

---

## Riscos e Mitigacoes

| Risco | Prob. | Impacto | Mitigacao |
|-------|-------|---------|-----------|
| Troca Material Symbols quebra layout | Media | Alto | Mapear todos os icones 1:1 antes de trocar |
| Reorganizacao de imports quebra build | Alta | Alto | Branch separada, testar build antes de merge |
| ESLint gera muitos warnings | Alta | Medio | Iniciar com regras permissivas, apertar gradualmente |
| Remover deps quebra scripts utilitarios | Baixa | Medio | Verificar uso em .js/.sh antes de remover |
| CI/CD bloqueia deploys por falta de testes | Media | Alto | Configurar CI como warning-only inicialmente |

---

## Criterios de Sucesso

### Apos Quick Wins
- [ ] Zero erros visiveis ao usuario (typos, console logs)
- [ ] Build funciona sem erros
- [ ] Links do footer funcionam ou sao removidos

### Apos Fundacao
- [ ] Componentes organizados em src/components/
- [ ] ESLint passa sem erros
- [ ] Icones usam Lucide React (sem Material Symbols font)
- [ ] Nenhuma API key exposta no frontend
- [ ] Mobile CTA funciona em iPhone (safe-area)

### Apos Investimento
- [ ] Lighthouse Performance >= 90
- [ ] Lighthouse Accessibility >= 85
- [ ] Cobertura de testes >= 60%
- [ ] CI/CD pipeline green
- [ ] Design system com Button, Card, Badge

---

## Metricas Baseline (a coletar antes de iniciar)

| Metrica | Ferramenta | Prioridade |
|---------|-----------|-----------|
| Lighthouse scores | Chrome DevTools | P0 |
| Bundle size | vite-bundle-visualizer | P0 |
| Core Web Vitals (LCP, FID, CLS) | Lighthouse | P0 |
| Numero de dependencias | npm ls --depth=0 | P1 |

---

*Assessment Final gerado por @architect (Aria) - Brownfield Discovery Fase 8*
*Incorpora inputs de: @ux-design-expert (Fase 6), @qa (Fase 7)*

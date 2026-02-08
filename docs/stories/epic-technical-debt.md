# Epic: Resolucao de Debitos Tecnicos - Maratona Cranium

**Epic ID:** MARA-EPIC-01
**Projeto:** maratona-fisioterapia-cranium
**Criado:** 2026-02-08
**Status:** Ready for Development
**Prioridade:** Alta

---

## Objetivo

Resolver os 39 debitos tecnicos identificados no Brownfield Discovery, transformando a landing page gerada por Lovable/v0.dev em um projeto sustentavel, performatico e reutilizavel para futuros eventos da Cranium.

---

## Escopo

### Incluido
- Correcoes de conteudo (typos, links, copyright)
- Limpeza de dependencias e seguranca
- Reorganizacao de estrutura de projeto
- Substituicao de icones (Material Symbols → Lucide React)
- Configuracao de ferramentas de qualidade (ESLint, Prettier)
- Testes automatizados (Vitest + RTL)
- CI/CD (GitHub Actions)
- Design system basico
- Melhorias de acessibilidade e performance

### Excluido
- Redesign visual completo
- Novas features de negocio
- Backend/API development
- Migracoes de hospedagem

---

## Criterios de Sucesso

- [ ] Zero debitos criticos restantes
- [ ] Lighthouse Performance >= 90
- [ ] Lighthouse Accessibility >= 85
- [ ] Cobertura de testes >= 60%
- [ ] CI/CD pipeline operacional
- [ ] Build time < 30s

---

## Timeline

| Fase | Duracao | Stories |
|------|---------|---------|
| Quick Wins | 1 dia | Story 1.1 |
| Fundacao | 1 semana | Stories 1.2 - 1.5 |
| Investimento | 2-3 semanas | Stories 1.6 - 1.9 |

---

## Budget

| Fase | Horas | Custo |
|------|-------|-------|
| Quick Wins | 2h | R$ 300 |
| Fundacao | 18h | R$ 2.700 |
| Investimento | 30h | R$ 4.500 |
| **Total** | **50h** | **R$ 7.500** |

---

## Stories

| ID | Story | Fase | Horas | Prioridade |
|----|-------|------|-------|------------|
| 1.1 | Quick Wins - Correcoes Imediatas | Quick Wins | 2h | P0 |
| 1.2 | Reorganizacao de Estrutura do Projeto | Fundacao | 5h | P1 |
| 1.3 | Seguranca e Configuracao de Ambiente | Fundacao | 3h | P1 |
| 1.4 | Performance - Substituir Material Symbols | Fundacao | 3h | P1 |
| 1.5 | Melhorias de UX e Mobile | Fundacao | 4h | P1 |
| 1.6 | Configurar Testes Automatizados | Investimento | 12h | P2 |
| 1.7 | CI/CD Pipeline | Investimento | 4h | P2 |
| 1.8 | Design System Basico | Investimento | 8h | P2 |
| 1.9 | Acessibilidade e Navegacao | Investimento | 6h | P2 |

---

## Dependencias entre Stories

```
Story 1.1 (Quick Wins) → independente, fazer primeiro
Story 1.2 (Reorganizacao) → DEPOIS de 1.1
Story 1.3 (Seguranca) → independente de 1.2, pode ser paralelo
Story 1.4 (Material Symbols) → DEPOIS de 1.2
Story 1.5 (UX/Mobile) → DEPOIS de 1.2
Story 1.6 (Testes) → DEPOIS de 1.2 e 1.4
Story 1.7 (CI/CD) → DEPOIS de 1.6
Story 1.8 (Design System) → DEPOIS de 1.2 e 1.4
Story 1.9 (A11y) → DEPOIS de 1.8
```

---

## Riscos

| Risco | Mitigacao |
|-------|-----------|
| Reorganizacao quebra imports | Branch separada, testar build |
| ESLint muitos warnings | Regras permissivas no inicio |
| Troca de icones quebra layout | Mapeamento 1:1 antes de trocar |
| CI bloqueia deploys | Warning-only inicialmente |

---

*Epic criado por @pm - Brownfield Discovery Fase 10*

# Technical Debt Assessment - DRAFT

**Projeto:** maratona-fisioterapia-cranium
**Tipo:** Landing Page SPA (Frontend Only)
**Origem:** Lovable/v0.dev
**Data:** 2026-02-08
**Status:** DRAFT - Pendente revisao de especialistas

---

## Para Revisao dos Especialistas

---

## 1. Debitos de Sistema

*Fonte: docs/architecture/system-architecture.md*
*Validado por: @architect (Aria)*

### Criticos (3)

| ID | Debito | Impacto | Esforco Est. |
|----|--------|---------|-------------|
| SYS-01 | Zero cobertura de testes | Alto - sem rede de seguranca para mudancas | 8-16h |
| SYS-02 | Dependencias nao utilizadas (express, @anthropic-ai/sdk) | Medio - bundle inflado, confusao | 30min |
| SYS-03 | API key exposta no frontend (GEMINI_API_KEY via define) | Alto - risco de seguranca | 1h |

### Altos (5)

| ID | Debito | Impacto | Esforco Est. |
|----|--------|---------|-------------|
| SYS-04 | Sem error boundaries | Medio - crash sem recovery | 2h |
| SYS-05 | WhatsApp link hardcoded nos componentes | Medio - mudanca requer deploy | 1h |
| SYS-06 | Sem linting/formatting (ESLint, Prettier) | Medio - inconsistencia de codigo | 2h |
| SYS-07 | Sem CI/CD pipeline | Medio - deploy manual, sem quality gate | 4h |
| SYS-08 | Componentes no root (nao em src/components/) | Medio - organizacao ruim | 2h |

### Medios (5)

| ID | Debito | Impacto | Esforco Est. |
|----|--------|---------|-------------|
| SYS-09 | Pacotes extraneous (@emnapi/runtime, tslib) | Baixo - higiene | 15min |
| SYS-10 | Sem source maps de producao | Baixo - debug dificulta | 30min |
| SYS-11 | Scripts utilitarios no root (.js/.sh) | Baixo - organizacao | 30min |
| SYS-12 | Sem favicon/apple-touch-icon | Baixo - branding | 1h |
| SYS-13 | LandingPage.tsx monolito (321 linhas) | Medio - manutencao | 3h |

### Baixos (3)

| ID | Debito | Impacto | Esforco Est. |
|----|--------|---------|-------------|
| SYS-14 | README minimo | Baixo - documentacao | 1h |
| SYS-15 | Sem CHANGELOG | Baixo - documentacao | 30min |
| SYS-16 | version 0.0.0 no package.json | Baixo - versionamento | 5min |

---

## 2. Debitos de Database

**N/A** - Projeto nao possui banco de dados.

---

## 3. Debitos de Frontend/UX

*Fonte: docs/frontend/frontend-spec.md*
*Validado por: @ux-design-expert (perspectiva)*

### Criticos (3)

| ID | Debito | Impacto | Esforco Est. |
|----|--------|---------|-------------|
| UX-01 | Typo "ARTICIAL" no dia 7 do cronograma | Alto - credibilidade | 5min |
| UX-02 | Links mortos no footer (Termos, Privacidade, Social) | Alto - legal/compliance | 30min |
| UX-03 | console.log("Pixel Fired") em producao | Medio - profissionalismo | 5min |

### Altos (5)

| ID | Debito | Impacto | Esforco Est. |
|----|--------|---------|-------------|
| UX-04 | Sem design system (componentes inline) | Alto - manutencao | 8h |
| UX-05 | Material Symbols inteiro para ~10 icones | Alto - performance (200KB+) | 2h |
| UX-06 | Texto 8px em mobile (nomes experts) | Alto - acessibilidade/legibilidade | 30min |
| UX-07 | Copyright desatualizado (2024) | Medio - credibilidade | 5min |
| UX-08 | "Inscricao Confirmada" sem inscricao real | Medio - UX/trust | 2h |

### Medios (7)

| ID | Debito | Impacto | Esforco Est. |
|----|--------|---------|-------------|
| UX-09 | Avatares social proof via picsum (placeholder) | Medio - credibilidade | 30min |
| UX-10 | Sem skip-to-content link | Medio - a11y | 30min |
| UX-11 | Sem safe-area-inset para iOS (mobile CTA) | Medio - mobile UX | 15min |
| UX-12 | Sem indicador passado/futuro nos dias | Medio - UX | 2h |
| UX-13 | Botoes com formatos/tamanhos inconsistentes | Medio - design | 1h |
| UX-14 | Sem navegacao interna (scroll-to) | Medio - UX | 2h |
| UX-15 | GTM render-blocking no head | Medio - performance | 30min |

### Baixos (4)

| ID | Debito | Impacto | Esforco Est. |
|----|--------|---------|-------------|
| UX-16 | Dark mode sem toggle manual | Baixo - feature | 2h |
| UX-17 | Sem favicon configurado | Baixo - branding | 1h |
| UX-18 | Sem aria-hidden em icones decorativos | Baixo - a11y | 30min |
| UX-19 | Sem focus-visible personalizado | Baixo - a11y | 1h |

---

## 4. Matriz Preliminar de Priorizacao

### Quick Wins (Alto impacto, Baixo esforco)

| ID | Debito | Esforco | Impacto |
|----|--------|---------|---------|
| UX-01 | Corrigir typo "ARTICIAL" | 5min | Alto |
| UX-03 | Remover console.log | 5min | Medio |
| UX-07 | Atualizar copyright | 5min | Medio |
| SYS-16 | Corrigir version 0.0.0 | 5min | Baixo |
| SYS-02 | Remover deps nao usadas | 30min | Medio |
| UX-06 | Corrigir texto 8px mobile | 30min | Alto |
| SYS-09 | Limpar pacotes extraneous | 15min | Baixo |
| UX-11 | Safe-area iOS | 15min | Medio |

### Fundacao (Alto impacto, Esforco medio)

| ID | Debito | Esforco | Impacto |
|----|--------|---------|---------|
| SYS-03 | Remover API key do frontend | 1h | Alto |
| SYS-06 | Configurar ESLint + Prettier | 2h | Medio |
| SYS-08 | Reorganizar componentes em src/ | 2h | Medio |
| SYS-04 | Adicionar error boundaries | 2h | Medio |
| SYS-05 | Mover config para .env | 1h | Medio |
| UX-02 | Corrigir/remover links mortos | 30min | Alto |
| UX-05 | Substituir Material Symbols por SVG | 2h | Alto |
| SYS-13 | Extrair sub-componentes do LandingPage | 3h | Medio |

### Investimento (Alto impacto, Alto esforco)

| ID | Debito | Esforco | Impacto |
|----|--------|---------|---------|
| SYS-01 | Adicionar testes (Vitest + RTL) | 8-16h | Alto |
| SYS-07 | Configurar CI/CD (GitHub Actions) | 4h | Medio |
| UX-04 | Criar design system basico | 8h | Alto |
| UX-08 | Implementar fluxo real de inscricao | 2h | Medio |

---

## 5. Totais

| Categoria | Criticos | Altos | Medios | Baixos | Total |
|-----------|---------|-------|--------|--------|-------|
| Sistema | 3 | 5 | 5 | 3 | 16 |
| Frontend/UX | 3 | 5 | 7 | 4 | 19 |
| **TOTAL** | **6** | **10** | **12** | **7** | **35** |

### Esforco Total Estimado

| Fase | Horas |
|------|-------|
| Quick Wins | ~2h |
| Fundacao | ~14h |
| Investimento | ~30h |
| **TOTAL** | **~46h** |

---

## 6. Perguntas para Especialistas

### Para @ux-design-expert:
1. O fluxo "Inscricao Confirmada" sem formulario real e aceitavel para uma landing page de evento? Ou deveria ter captura de email?
2. Substituir Material Symbols por SVG inline ou usar uma lib como Lucide React?
3. O design system basico deveria incluir quantas variantes de botao?

### Para @qa:
1. Qual nivel de cobertura de testes e aceitavel para uma landing page de evento?
2. Os quick wins devem ser validados com testes automatizados ou manual e suficiente?
3. CI/CD e prioridade ou pode ser implementado depois?

---

*DRAFT gerado por @architect (Aria) - Brownfield Discovery Fase 4*
*Pendente revisao de @ux-design-expert (Fase 6) e @qa (Fase 7)*

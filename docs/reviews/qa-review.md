# QA Review - Technical Debt Assessment

**Revisao do:** docs/prd/technical-debt-DRAFT.md + reviews de especialistas
**Data:** 2026-02-08
**Agent:** @qa

---

## Gate Status: APPROVED

O assessment esta completo e pode seguir para finalizacao. Todos os debitos foram identificados com severidade e esforco adequados. As revisoes dos especialistas trouxeram ajustes pertinentes.

---

## Gaps Identificados

### Cobertos adequadamente
- Estrutura do projeto (sistema)
- Componentes UI (frontend/UX)
- Performance (parcial)
- Acessibilidade (parcial)
- Seguranca (basico)

### Gaps encontrados

| # | Gap | Area | Recomendacao |
|---|-----|------|-------------|
| 1 | Sem analise de bundle size real (vite-bundle-analyzer) | Performance | Rodar `npx vite-bundle-visualizer` antes de priorizar |
| 2 | Sem Lighthouse score baseline | Performance | Rodar Lighthouse e documentar metricas atuais |
| 3 | Sem verificacao de links externos (WhatsApp, Picsum) | Integracao | Validar se links estao ativos |
| 4 | Sem analise de SEO tecnico alem do basico | SEO | Rodar ferramenta de SEO audit |
| 5 | Nao foi verificado se o build atual funciona sem erros | Build | Rodar `npm run build` e validar |

---

## Riscos Cruzados

| Risco | Areas Afetadas | Probabilidade | Mitigacao |
|-------|---------------|---------------|-----------|
| Remover Material Symbols pode quebrar layout | UX + Sistema | Media | Implementar Lucide React com mapeamento de icones 1:1 antes de remover |
| Reorganizar componentes em src/ pode quebrar imports | Sistema + Build | Alta | Fazer em branch separada, validar build |
| Remover express/anthropic pode afetar scripts | Sistema | Baixa | Verificar se scripts (create-fisio-template.js, etc.) dependem deles |
| Configurar ESLint pode gerar centenas de warnings | DX | Alta | Configurar com regras mais permissivas no inicio, apertar gradualmente |
| Mover config para .env pode quebrar deploy Vercel | DevOps | Media | Verificar env vars no Vercel dashboard |

---

## Dependencias Validadas

### Ordem de resolucao recomendada

```
FASE 1: Quick Wins (nenhuma dependencia)
  UX-01 → UX-03 → UX-07 → SYS-16 → SYS-02 → SYS-09
  Podem ser feitos em qualquer ordem.

FASE 2: Fundacao
  SYS-08 (reorganizar componentes) → ANTES de tudo
  SYS-06 (ESLint/Prettier) → DEPOIS de SYS-08
  SYS-13 (extrair sub-componentes) → DEPOIS de SYS-08
  UX-05 (Lucide React) → DEPOIS de SYS-08
  SYS-03 (remover API key) → independente
  SYS-04 (error boundaries) → DEPOIS de SYS-08
  SYS-05 (config .env) → DEPOIS de SYS-03

FASE 3: Investimento
  SYS-01 (testes) → DEPOIS de SYS-06 e SYS-08
  SYS-07 (CI/CD) → DEPOIS de SYS-06 e SYS-01
  UX-04 (design system) → DEPOIS de SYS-13 e UX-05
```

**Dependencia critica:** SYS-08 (reorganizar componentes) deve ser o PRIMEIRO da Fase 2, pois todas as outras mudancas dependem de uma estrutura limpa.

---

## Testes Requeridos

### Para Quick Wins (manual suficiente)
- [ ] Verificar typo corrigido visualmente
- [ ] Confirmar console limpo (sem logs)
- [ ] Validar copyright atualizado
- [ ] Verificar build funciona apos remover deps

### Para Fundacao (automatizar)
- [ ] Build passa apos reorganizacao de componentes
- [ ] ESLint passa sem erros criticos
- [ ] Todos os icones renderizam corretamente apos troca para Lucide
- [ ] Error boundary captura erros e mostra fallback
- [ ] Env vars carregam corretamente no Vercel
- [ ] Mobile CTA nao sobrepoe conteudo no iPhone (safe-area)

### Para Investimento (CI obrigatorio)
- [ ] Cobertura minima de testes: 60% para componentes
- [ ] Lighthouse Performance score >= 90
- [ ] Lighthouse Accessibility score >= 85
- [ ] Build + Lint + Tests passam no CI
- [ ] Design system documentado com exemplos

### Metricas de Qualidade (Baseline a coletar)
| Metrica | Antes | Meta |
|---------|-------|------|
| Lighthouse Performance | ? | >= 90 |
| Lighthouse Accessibility | ? | >= 85 |
| Lighthouse SEO | ? | >= 90 |
| Bundle size (gzip) | ? | < 200KB |
| LCP | ? | < 2.5s |
| FCP | ? | < 1.8s |
| CLS | ? | < 0.1 |
| Cobertura de testes | 0% | >= 60% |

---

## Parecer Final

### Assessment esta COMPLETO para prosseguir

**Pontos fortes do assessment:**
- Cobertura abrangente de sistema e frontend
- Priorizacao clara (Quick Wins → Fundacao → Investimento)
- Estimativas de esforco realistas
- Revisao de UX trouxe ajustes importantes de severidade

**Ressalvas:**
1. Coletar metricas baseline (Lighthouse) antes de iniciar resolucao
2. SYS-08 (reorganizacao) e pre-requisito critico - nao pular
3. Considerar que o projeto e uma landing page de evento - priorizar o que impacta conversao
4. Esforco de ~46h e realista para 1 dev, ~2-3 semanas em ritmo normal

**Recomendacao:** Aprovar o assessment e seguir para finalizacao (Fase 8).

---

*Review gerado por @qa - Brownfield Discovery Fase 7*

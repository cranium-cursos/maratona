# Relatorio de Debito Tecnico

**Projeto:** Maratona Fisioterapia em Cabeca e Pescoco - Cranium
**Data:** 2026-02-08
**Versao:** 1.0
**Preparado por:** Equipe Tecnica (Architect, UX, QA)

---

## Executive Summary

### Situacao Atual

O site da Maratona Fisioterapia Cranium e uma landing page moderna construida com React, hospedada na Vercel. Foi gerada via Lovable/v0.dev, uma ferramenta de criacao rapida de sites por IA.

Embora funcional e visualmente atraente, o projeto acumula **39 debitos tecnicos** que afetam performance, credibilidade, acessibilidade e capacidade de manutencao. Os problemas mais urgentes incluem erros de texto visiveis ao usuario, links que nao funcionam, e carregamento de recursos desnecessarios que tornam o site mais lento.

A boa noticia: a maioria dos problemas criticos pode ser resolvida rapidamente (em menos de 2 horas), e o investimento total de ~50 horas traz retorno imediato em conversao e profissionalismo.

### Numeros Chave

| Metrica | Valor |
|---------|-------|
| Total de Debitos | 39 |
| Debitos Criticos | 8 |
| Debitos Altos | 10 |
| Esforco Total | ~50 horas |
| Custo Estimado | R$ 7.500 |
| Fases de Resolucao | 3 |

### Recomendacao

**Iniciar imediatamente a Fase 1 (Quick Wins)** que resolve os 8 problemas mais visiveis em apenas 2 horas (R$ 300). Agendar a Fase 2 (Fundacao) para a proxima sprint. A Fase 3 (Investimento) pode ser planejada para o proximo ciclo.

---

## Analise de Custos

### Custo de RESOLVER

| Fase | Horas | Custo (R$150/h) | Prazo |
|------|-------|-----------------|-------|
| Quick Wins | 2h | R$ 300 | 1 dia |
| Fundacao | 18h | R$ 2.700 | 1 semana |
| Investimento | 30h | R$ 4.500 | 2-3 semanas |
| **TOTAL** | **50h** | **R$ 7.500** | **4-5 semanas** |

### Custo de NAO RESOLVER (Risco Acumulado)

| Risco | Probabilidade | Impacto | Custo Potencial |
|-------|---------------|---------|-----------------|
| Perda de credibilidade (typos, links mortos) | Alta | Alto | Reducao de 10-20% na conversao |
| Site lento (200KB+ de icones desnecessarios) | Alta | Alto | Reducao de 5-15% na conversao |
| Problemas de acessibilidade em mobile | Alta | Medio | Perda de publico mobile (~60% do trafego) |
| Impossibilidade de manter/evoluir o site | Media | Alto | Rewrite completo: R$ 15.000-25.000 |
| Compliance (links de Termos/Privacidade mortos) | Alta | Critico | Risco regulatorio (LGPD) |

**Custo potencial de nao agir: R$ 15.000 - R$ 25.000** (rewrite eventual + perda de conversao acumulada)

---

## Impacto no Negocio

### Performance
- **Problema:** Site carrega ~200KB extras de icones nao utilizados
- **Apos resolucao:** Reducao de 60-70% no carregamento de fonts
- **Impacto estimado:** +10-15% no score de velocidade, melhor experiencia mobile

### Credibilidade
- **Problemas:** Typo visivel ("ARTICIAL"), copyright 2024, fotos placeholder que mudam a cada visita
- **Apos resolucao:** Imagem profissional consistente
- **Impacto estimado:** +5-10% na taxa de conversao (trust signals)

### Experiencia do Usuario
- **Problemas:** Textos ilegiveis em mobile (8px), botao cortado no iPhone, links que nao funcionam
- **Apos resolucao:** Experiencia fluida em todos os dispositivos
- **Impacto estimado:** Reducao de 15-20% no bounce rate mobile

### Manutenibilidade
- **Problema atual:** Codigo monolitico, sem testes, sem linting
- **Tempo para implementar mudanca simples:** 2-4 horas (com risco)
- **Apos resolucao:** 30min-1 hora (com seguranca)
- **Impacto:** +300% velocidade de entrega para proximos eventos

---

## Timeline Recomendado

### Fase 1: Quick Wins (1 dia)
- Corrigir typo "ARTICIAL" → "ARTIFICIAL"
- Remover logs de debug
- Atualizar copyright
- Corrigir texto ilegivel em mobile
- Remover links mortos ou corrigir
- Limpar dependencias nao usadas
- **Custo:** R$ 300
- **ROI:** Imediato - credibilidade + compliance

### Fase 2: Fundacao (1 semana)
- Reorganizar estrutura do projeto
- Configurar ferramentas de qualidade (ESLint)
- Substituir icones pesados por alternativa leve
- Corrigir seguranca (remover chave API exposta)
- Melhorar experiencia mobile (safe-area iPhone)
- Otimizar carregamento (GTM async, lazy images)
- **Custo:** R$ 2.700
- **ROI:** Performance + seguranca + base para evolucao

### Fase 3: Investimento (2-3 semanas)
- Adicionar testes automatizados
- Configurar CI/CD (deploy automatico com verificacao)
- Criar sistema de design basico (botoes, cards padronizados)
- Melhorar navegacao e acessibilidade
- **Custo:** R$ 4.500
- **ROI:** Manutencao sustentavel + velocidade para proximos eventos

---

## ROI da Resolucao

| Investimento | Retorno Esperado |
|--------------|------------------|
| R$ 7.500 (resolucao completa) | Evita rewrite de R$ 15.000-25.000 |
| 50 horas de trabalho | +300% velocidade para proximos eventos |
| 4-5 semanas | Site profissional, rapido e acessivel |

**ROI Estimado: 2:1 a 3:1**

O projeto reusavel para futuros eventos da Cranium (com base solida) multiplica o retorno: cada novo evento usando a mesma base economiza R$ 5.000-10.000 em desenvolvimento.

---

## Proximos Passos

1. [ ] Aprovar orcamento de R$ 7.500 (ou R$ 300 para Quick Wins imediatos)
2. [ ] Coletar metricas baseline (Lighthouse, bundle size)
3. [ ] Executar Fase 1 - Quick Wins (1 dia)
4. [ ] Planejar sprint para Fase 2 - Fundacao
5. [ ] Agendar Fase 3 - Investimento para proximo ciclo

---

## Anexos

- [Assessment Tecnico Completo](../prd/technical-debt-assessment.md)
- [Arquitetura do Sistema](../architecture/system-architecture.md)
- [Especificacao Frontend/UX](../frontend/frontend-spec.md)
- [Review UX](../reviews/ux-specialist-review.md)
- [Review QA](../reviews/qa-review.md)

---

*Relatorio gerado por @analyst - Brownfield Discovery Fase 9*

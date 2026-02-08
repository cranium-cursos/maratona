# UX Specialist Review

**Revisao do:** docs/prd/technical-debt-DRAFT.md
**Data:** 2026-02-08
**Agent:** @ux-design-expert

---

## Debitos Validados

| ID | Debito | Severidade Original | Severidade Ajustada | Horas | Prioridade | Impacto UX |
|----|--------|---------------------|---------------------|-------|------------|------------|
| UX-01 | Typo "ARTICIAL" | Critico | Critico | 5min | P0 | Credibilidade - erro visivel ao usuario |
| UX-02 | Links mortos footer | Critico | Critico | 30min | P0 | Legal - links de Termos e Privacidade obrigatorios |
| UX-03 | console.log em producao | Critico | Alto | 5min | P1 | Menor impacto direto ao usuario, mas profissionalismo |
| UX-04 | Sem design system | Alto | Alto | 8h | P2 | Manutencao - sem ele cada mudanca e arriscada |
| UX-05 | Material Symbols full load | Alto | Critico | 2h | P0 | Performance - 200KB+ de fonte para 10 icones |
| UX-06 | Texto 8px mobile | Alto | Critico | 30min | P0 | Acessibilidade - ilegivel em mobile |
| UX-07 | Copyright 2024 | Alto | Medio | 5min | P1 | Menor severidade - credibilidade sutil |
| UX-08 | "Inscricao Confirmada" falsa | Alto | Alto | 2h | P1 | Trust - usuario nao fez inscricao real |
| UX-09 | Picsum avatares | Medio | Alto | 30min | P1 | Credibilidade - fotos mudam a cada reload |
| UX-10 | Sem skip-to-content | Medio | Medio | 30min | P2 | a11y - afeta usuarios de screen reader |
| UX-11 | Sem safe-area iOS | Medio | Alto | 15min | P1 | Mobile - botao cortado no iPhone |
| UX-12 | Sem indicador passado/futuro | Medio | Medio | 2h | P2 | UX - usuario nao sabe qual dia ja passou |
| UX-13 | Botoes inconsistentes | Medio | Medio | 1h | P2 | Design - falta de coerencia visual |
| UX-14 | Sem scroll-to sections | Medio | Medio | 2h | P2 | UX - navegacao interna ausente |
| UX-15 | GTM render-blocking | Medio | Alto | 30min | P1 | Performance - atrasa primeiro render |
| UX-16 | Dark mode sem toggle | Baixo | Baixo | 2h | P3 | Feature nice-to-have |
| UX-17 | Sem favicon | Baixo | Medio | 1h | P2 | Branding - aba sem identidade |
| UX-18 | Sem aria-hidden icones | Baixo | Baixo | 30min | P3 | a11y menor |
| UX-19 | Sem focus-visible | Baixo | Medio | 1h | P2 | a11y - keyboard navigation |

---

## Debitos Adicionados

| ID | Debito | Severidade | Horas | Prioridade | Impacto UX |
|----|--------|-----------|-------|------------|------------|
| UX-20 | Sem meta robots/canonical configurado | Medio | 15min | P2 | SEO - pode duplicar indexacao |
| UX-21 | Hero image grid sem loading="lazy" nos experts | Medio | 15min | P1 | Performance - 6 imagens acima do fold |
| UX-22 | Sem 404 page | Medio | 1h | P2 | UX - rota invalida mostra tela branca |
| UX-23 | Sem animacoes de entrada (scroll reveal) | Baixo | 3h | P3 | UX - pagina estatica, sem engagement |

---

## Respostas ao Architect

### 1. Fluxo "Inscricao Confirmada" sem formulario
**Resposta:** Para uma landing page de evento com redirect para WhatsApp, o fluxo atual e **aceitavel mas enganoso**. A mensagem "Inscricao Confirmada" implica que algo foi processado. Recomendo alterar para "Voce sera redirecionado ao grupo VIP" sem a palavra "inscricao", ou implementar captura de email/nome antes do redirect para ter dados de lead.

### 2. Material Symbols vs alternativa
**Resposta:** Recomendo **Lucide React** como substituicao. Motivos:
- Tree-shakeable (so importa icones usados)
- ~1KB por icone vs 200KB+ da fonte completa
- TypeScript nativo
- Estilo consistente e moderno
- Alternativa: SVG inline direto, mas Lucide facilita manutencao

### 3. Variantes de botao no design system
**Resposta:** Para este projeto, 3 variantes sao suficientes:
- **Primary** (bg-primary, rounded-xl) - CTAs principais
- **Secondary** (outline, rounded-xl) - acoes secundarias
- **WhatsApp** (bg-green, rounded-xl) - redirect WhatsApp
- Tamanhos: sm, md, lg
- Estados: default, hover, active, disabled, focus-visible

---

## Recomendacoes de Design

### Prioridade Imediata (P0)
1. Corrigir typo, texto 8px, links mortos
2. Substituir Material Symbols por Lucide React (maior ganho de performance)
3. Adicionar safe-area-inset no mobile CTA

### Curto Prazo (P1)
1. Mover GTM para async/defer
2. Substituir picsum por imagens reais ou remover social proof
3. Criar componente Button unificado
4. Corrigir fluxo de "inscricao"

### Medio Prazo (P2)
1. Implementar design system basico
2. Adicionar 404 page
3. Scroll-to navigation
4. Favicon e meta tags SEO

### Longo Prazo (P3)
1. Scroll reveal animations
2. Dark mode toggle
3. Full a11y audit e correcoes

---

*Review gerado por @ux-design-expert - Brownfield Discovery Fase 6*

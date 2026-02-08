# Frontend Spec - Maratona Fisioterapia Cranium

**Projeto:** maratona-fisioterapia-cranium
**Tipo:** Landing Page SPA
**Origem:** Lovable/v0.dev
**Data:** 2026-02-08
**Agent:** @ux-design-expert (perspectiva UX/UI)

---

## 1. Fluxos de Usuario

### Fluxo Principal (Happy Path)
```
Landing Page (/)
  → Visualiza hero com especialistas
  → Scroll pelas features
  → Scroll pelo cronograma (7 dias)
  → Le sobre Dr. Samuel
  → Clica CTA ("QUERO PARTICIPAR" / "ENTRAR NO GRUPO VIP")
  → /proximos-passos
  → Redirect automatico para WhatsApp (3s)
```

### Pontos de Conversao (CTAs)
| Local | CTA | Visibilidade |
|-------|-----|-------------|
| Header | "QUERO ME INSCREVER" | Desktop only (hidden md:block) |
| Hero | "QUERO PARTICIPAR GRATUITAMENTE" | Sempre visivel |
| Footer | "ENTRAR NO GRUPO VIP" | Sempre visivel |
| Mobile CTA fixo | "INSCREVER-SE GRATUITAMENTE" | Mobile only (md:hidden) |

**Total: 4 CTAs** - todos levam para `/proximos-passos`

---

## 2. Componentes UI

### Header
- Logo Cranium (webp com dark:invert)
- Botao CTA (desktop only)
- Sticky top com backdrop-blur
- **Debito:** Sem navegacao mobile (hamburger menu ausente)
- **Debito:** Sem link para secoes internas (scroll-to)

### Hero
- Grid 6 colunas com fotos dos especialistas
- Efeito grayscale → color no hover
- Badge "ONLINE E GRATUITO | DIAS 02/02 A 10/02"
- Titulo H1 com gradiente
- Subtitulo com termos em bold
- Botao CTA principal
- Social proof (avatares + "+2.000 profissionais")
- **Debito:** Avatares usam picsum.photos (placeholder externo, nao controlado)
- **Debito:** Texto do expert com font-size 8px em mobile (muito pequeno)
- **Debito:** Sem alt text descritivo nos avatares de social proof ("Physio Participant" generico)

### FeatureSection
- 4 cards em grid responsivo (1col → 2col → 4col)
- Icones Material Symbols
- Hover com border-primary e shadow
- **Status:** Bem implementado

### ScheduleSection
- 7 cards de cronograma
- Layout flex (coluna em mobile, row em desktop)
- Card especial "isExclusive" (dia 7) com bg escuro
- Badge "Exclusivo" animado (pulse)
- Foto do especialista por dia
- **Debito:** Dia 7 tem typo: "ARTICIAL" em vez de "ARTIFICIAL"
- **Debito:** Sem indicador visual de "passado/futuro" para dias ja realizados

### AboutSection
- Layout 2 colunas (texto + foto)
- Gradiente escuro de fundo
- Foto do Dr. Samuel com glow effect
- **Debito:** `samuel?.imageUrl` usa optional chaining mas nao tem fallback visual
- **Status:** Visualmente bem executado

### Footer
- CTA final para WhatsApp
- Copyright "2024" (desatualizado)
- Links "Termos" e "Privacidade" apontam para "#" (nao funcionam)
- Icones sociais apontam para "#" (nao funcionam)
- **Debito:** Links mortos (# href)
- **Debito:** Copyright desatualizado (2024 vs 2026)

### Mobile CTA (Fixed Bottom)
- Botao fixo na parte inferior em mobile
- z-index 60 com backdrop-blur
- **Debito:** Pode sobrepor conteudo do footer
- **Debito:** Sem safe area para iOS (env(safe-area-inset-bottom))

### NextSteps
- Card centralizado com check icon
- Countdown 3s → redirect WhatsApp
- Botao manual "ENTRAR AGORA" (verde WhatsApp)
- **Debito:** console.log("Pixel Fired") em producao
- **Debito:** Sem tratamento se WhatsApp nao abrir
- **Debito:** "Inscricao Confirmada" sem de fato ter inscricao/formulario

### LoadingSpinner
- Spinner CSS puro (border animation)
- Centralizado vertical/horizontal
- **Status:** Funcional mas basico

---

## 3. Design System

### Status: INEXISTENTE (Lovable pattern)

Nao ha design system formal. Padroes sao aplicados inline via Tailwind.

### Cores (Custom Properties)
| Token | Valor | Uso |
|-------|-------|-----|
| primary | #10C1B4 | CTAs, destaques, links |
| secondary | #1E4853 | Headings, backgrounds |
| accent | #153D84 | Destaques secundarios |
| accent-light | #A5B8E3 | Complementar |
| background-light | #FFFFFF | Fundo claro |
| background-dark | #0A1114 | Fundo escuro |

### Tipografia
| Fonte | Peso | Uso |
|-------|------|-----|
| Montserrat | 700-900 | Titulos (font-display) |
| Inter | 300-800 | Body text (font-sans) |
| Material Symbols | - | Icones |

### Espacamento
- Sem sistema formal de spacing
- Usa valores arbitrarios do Tailwind (p-4, p-6, p-8, py-12, py-20, etc.)

### Breakpoints
- Mobile: default
- Tablet: md (768px)
- Desktop: lg (1024px)
- Nao usa sm (640px) de forma consistente

---

## 4. Acessibilidade (a11y)

### Problemas Identificados

| ID | Problema | Severidade | WCAG |
|----|----------|-----------|------|
| A11Y-01 | Sem skip-to-content link | Medio | 2.4.1 |
| A11Y-02 | Botoes sem aria-label (CTAs repetidos) | Medio | 4.1.2 |
| A11Y-03 | Imagens de social proof com alt generico | Baixo | 1.1.1 |
| A11Y-04 | Icones Material Symbols sem aria-hidden | Medio | 1.1.1 |
| A11Y-05 | Texto 8px nos nomes de experts (Hero mobile) | Alto | 1.4.4 |
| A11Y-06 | Links do footer com href="#" sem significado | Medio | 2.4.4 |
| A11Y-07 | Sem focus visible personalizado | Medio | 2.4.7 |
| A11Y-08 | Dark mode toggle nao existe (so via sistema) | Baixo | - |
| A11Y-09 | Sem lang nos textos em ingles (role, etc.) | Baixo | 3.1.2 |
| A11Y-10 | Countdown sem aria-live region | Medio | 4.1.3 |

---

## 5. Responsividade

### Mobile (< 768px)
- Hero: grid 6col funciona mas textos muito pequenos (8px)
- CTA fixo no bottom: funciona mas sem safe-area
- Schedule: cards empilhados verticalmente
- About: imagem em cima, texto embaixo
- **Geral:** Funcional mas com gaps de UX

### Tablet (768px - 1024px)
- Layout intermediario funciona
- Grid de features 2 colunas
- **Status:** Aceitavel

### Desktop (> 1024px)
- Max-width 7xl (1280px) ou 5xl (1024px) por secao
- Layout completo com colunas
- **Status:** Bom

---

## 6. Performance Percebida

### Positivo
- Lazy loading das paginas (React.lazy)
- Spinner enquanto carrega
- WebP otimizado
- Preconnect fonts

### Negativo
| ID | Problema | Impacto |
|----|----------|---------|
| PERF-01 | 3 requests Google Fonts (Inter + Montserrat + Material Symbols) | Render blocking |
| PERF-02 | Material Symbols carrega fonte inteira para ~10 icones usados | Bundle desnecessario |
| PERF-03 | Picsum Photos sem cache-control | Imagens diferentes a cada reload |
| PERF-04 | Sem preload de hero images | LCP impactado |
| PERF-05 | GTM no head (render blocking) | FCP impactado |

---

## 7. Consistencia Visual

### Problemas
| ID | Problema |
|----|----------|
| VIS-01 | Botoes com formatos diferentes: rounded-full (Header, Footer) vs rounded-xl (Hero, Mobile CTA) |
| VIS-02 | Tamanhos de CTA inconsistentes: py-2.5, py-4, py-5 |
| VIS-03 | Sem componente reutilizavel de botao (cada CTA e inline) |
| VIS-04 | Sombras inconsistentes: shadow-lg, shadow-xl, shadow-2xl |
| VIS-05 | Copyright 2024 vs evento 2025/2026 |

---

## 8. Inventario de Debitos Frontend/UX

### CRITICOS

| ID | Debito | Impacto | Area |
|----|--------|---------|------|
| UX-01 | Typo "ARTICIAL" no dia 7 do cronograma | Alto | Conteudo |
| UX-02 | Links mortos no footer (Termos, Privacidade, Social) | Alto | Legal/Compliance |
| UX-03 | console.log("Pixel Fired") em producao | Medio | Qualidade |

### ALTOS

| ID | Debito | Impacto | Area |
|----|--------|---------|------|
| UX-04 | Sem design system (componentes inline) | Alto | Manutencao |
| UX-05 | Material Symbols inteiro para ~10 icones | Alto | Performance |
| UX-06 | Texto 8px em mobile (nomes experts) | Alto | Acessibilidade |
| UX-07 | Copyright desatualizado (2024) | Medio | Credibilidade |
| UX-08 | "Inscricao Confirmada" sem inscricao real | Medio | UX/Trust |

### MEDIOS

| ID | Debito | Impacto | Area |
|----|--------|---------|------|
| UX-09 | Avatares de social proof via picsum (placeholder) | Medio | Credibilidade |
| UX-10 | Sem skip-to-content link | Medio | a11y |
| UX-11 | Sem safe-area-inset para iOS (mobile CTA) | Medio | Mobile UX |
| UX-12 | Sem indicador passado/futuro nos dias do cronograma | Medio | UX |
| UX-13 | Botoes com formatos/tamanhos inconsistentes | Medio | Design |
| UX-14 | Sem navegacao interna (scroll-to sections) | Medio | UX |
| UX-15 | GTM render-blocking no head | Medio | Performance |

### BAIXOS

| ID | Debito | Impacto | Area |
|----|--------|---------|------|
| UX-16 | Dark mode sem toggle manual | Baixo | Feature |
| UX-17 | Sem favicon configurado | Baixo | Branding |
| UX-18 | Sem aria-hidden em icones decorativos | Baixo | a11y |
| UX-19 | Sem focus-visible personalizado | Baixo | a11y |

---

## 9. Recomendacoes Prioritarias

1. **Corrigir typo** "ARTICIAL" → "ARTIFICIAL" (5 min)
2. **Remover console.log** de producao (5 min)
3. **Atualizar copyright** 2024 → 2026 (5 min)
4. **Substituir Material Symbols** por SVG icons inline (~10 icones) (2h)
5. **Criar componente Button** reutilizavel com variantes (1h)
6. **Corrigir links mortos** ou remover do footer (30 min)
7. **Substituir picsum avatares** por imagens reais ou remover (30 min)
8. **Adicionar safe-area-inset** no mobile CTA (15 min)
9. **Corrigir tamanho minimo** de texto em mobile (30 min)

---

*Documento gerado por @ux-design-expert (perspectiva) - Brownfield Discovery Fase 3*

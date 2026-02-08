# System Architecture - Maratona Fisioterapia Cranium

**Projeto:** maratona-fisioterapia-cranium
**Tipo:** SPA (Single Page Application) - Frontend Only
**Origem:** Lovable/v0.dev
**Data:** 2026-02-08
**Agent:** @architect (Aria)

---

## 1. Stack Tecnologico

| Camada | Tecnologia | Versao |
|--------|-----------|--------|
| Framework | React | 19.2.3 |
| Build Tool | Vite | 6.4.1 |
| Linguagem | TypeScript | 5.8.3 |
| CSS | Tailwind CSS | 4.1.18 |
| Routing | react-router-dom | 7.12.0 |
| HTTP | axios | 1.13.4 |
| Deploy | Vercel | - |
| Analytics | Google Tag Manager | GTM-KSX3JBW |

### Dependencias de Producao (7)

| Package | Versao | Proposito | Status |
|---------|--------|-----------|--------|
| react | ^19.2.3 | UI framework | OK |
| react-dom | ^19.2.3 | React rendering | OK |
| react-router-dom | ^7.12.0 | Client-side routing | OK |
| axios | ^1.13.4 | HTTP requests | SUSPEITO - uso nao visivel |
| @anthropic-ai/sdk | ^0.72.1 | Claude API | SUSPEITO - nao integrado |
| express | ^5.2.1 | Backend server | DEBITO - nao usado no frontend |
| dotenv | ^17.2.3 | Environment vars | OK |

### Dependencias Dev (13)

| Package | Versao | Proposito |
|---------|--------|-----------|
| vite | ^6.2.0 | Build tool |
| @vitejs/plugin-react | ^5.0.0 | React HMR |
| typescript | ~5.8.2 | Type checking |
| tailwindcss | ^4.1.18 | Utility CSS |
| @tailwindcss/postcss | ^4.1.18 | Tailwind core |
| @tailwindcss/forms | ^0.5.11 | Form styling |
| @tailwindcss/container-queries | ^0.1.1 | Container queries |
| postcss | ^8.5.6 | CSS transformation |
| autoprefixer | ^10.4.23 | Vendor prefixes |
| @types/node | ^22.14.0 | Node types |
| sharp | ^0.34.5 | Image optimization |

---

## 2. Estrutura de Pastas

```
maratona/
├── public/
│   └── images/              # 16 assets (webp/jpg/png)
├── src/
│   └── index.css            # Tailwind CSS entry + theme
├── dist/                    # Build output
├── node_modules/            # 145+ packages
│
├── index.html               # HTML entry point (GTM, meta, fonts)
├── index.tsx                 # React entry (18 lines)
├── App.tsx                   # Router (30 lines)
├── LandingPage.tsx           # Pagina principal (321 lines)
├── NextSteps.tsx             # Pagina confirmacao (60 lines)
├── constants.tsx             # Dados estaticos (174 lines)
├── types.ts                  # Interfaces (31 lines)
│
├── vite.config.ts            # Vite config
├── tsconfig.json             # TypeScript config
├── postcss.config.js         # PostCSS config
├── vercel.json               # Vercel deploy
├── package.json              # Dependencies
└── .env.example              # Env template
```

---

## 3. Arquitetura de Componentes

```
App (BrowserRouter)
├── LandingPage (/) [lazy loaded]
│   ├── Header         - Navegacao topo
│   ├── Hero           - Grid de especialistas + CTA
│   ├── FeatureSection - 4 cards de features
│   ├── ScheduleSection - Cronograma 7 dias
│   ├── AboutSection   - Sobre Dr. Samuel
│   ├── Footer         - Footer com CTA
│   └── Mobile CTA     - Botao fixo mobile
└── NextSteps (/proximos-passos) [lazy loaded]
    └── Redirect countdown → WhatsApp
```

**Total:** 9+ componentes | 2 rotas | Lazy loading em ambas

---

## 4. Gerenciamento de Estado

| Aspecto | Abordagem |
|---------|-----------|
| State management | Nenhum (props + local state) |
| Data source | constants.tsx (dados estaticos) |
| Global state | Nenhum |
| Side effects | useEffect em NextSteps (countdown) |
| Forms | Nenhum formulario real |

---

## 5. Estilizacao

### Design Tokens (CSS Custom Properties)

```css
--color-primary: #10C1B4      /* Teal */
--color-secondary: #1E4853    /* Dark teal */
--color-accent: #153D84       /* Navy blue */
--color-accent-light: #A5B8E3 /* Light blue */
--color-background-light: #FFFFFF
--color-background-dark: #0A1114
```

### Tipografia

- **Display:** Montserrat (700, 800, 900)
- **Body:** Inter (300-800)
- **Icons:** Material Symbols Outlined

### Custom Utilities

- `.gradient-text` - Texto com gradiente
- `.tech-glow` - Efeito glow primario
- `.mask-gradient` - Mascara gradiente
- Dark mode custom variant

---

## 6. Integracoes Externas

| Servico | Tipo | Status |
|---------|------|--------|
| Google Tag Manager | Analytics | Ativo (GTM-KSX3JBW) |
| WhatsApp | Redirect | Ativo (link hardcoded) |
| Google Fonts | CDN | Ativo (Inter, Montserrat) |
| Picsum Photos | Placeholder | Ativo (avatares dinamicos) |
| Anthropic Claude | AI SDK | Instalado mas NAO integrado |
| Vercel | Deploy | Configurado |

---

## 7. Performance

### Otimizacoes Implementadas
- WebP com fallback JPG
- React.lazy() + Suspense para code splitting
- Preconnect para Google Fonts
- Lazy loading de imagens com efeito grayscale
- Tailwind CSS v4 (output otimizado)

### Gaps de Performance
- Sem source maps de producao configurados
- Sem bundle analysis
- Picsum Photos carrega de CDN externo sem cache control
- Google Fonts sem font-display:swap explicito

---

## 8. Seguranca

| Aspecto | Status |
|---------|--------|
| API keys no frontend | GEMINI_API_KEY exposta via define |
| Links hardcoded | WhatsApp link no componente |
| Sanitizacao de input | N/A (sem formularios) |
| CSP Headers | Nao configurado |
| HTTPS | Via Vercel (automatico) |

---

## 9. Testes

| Aspecto | Status |
|---------|--------|
| Framework de testes | NENHUM |
| Unit tests | 0 |
| Integration tests | 0 |
| E2E tests | 0 |
| Cobertura | 0% |
| CI/CD | Nao configurado |

---

## 10. Inventario de Debitos Tecnicos

### CRITICOS

| ID | Debito | Impacto | Area |
|----|--------|---------|------|
| SYS-01 | Zero cobertura de testes | Alto | Quality |
| SYS-02 | Dependencias nao utilizadas (express, @anthropic-ai/sdk) | Medio | Bundle size |
| SYS-03 | API key exposta no frontend (GEMINI_API_KEY) | Alto | Seguranca |

### ALTOS

| ID | Debito | Impacto | Area |
|----|--------|---------|------|
| SYS-04 | Sem error boundaries | Medio | Resiliencia |
| SYS-05 | WhatsApp link hardcoded nos componentes | Medio | Manutencao |
| SYS-06 | Sem linting/formatting configurado (ESLint, Prettier) | Medio | DX |
| SYS-07 | Sem CI/CD pipeline | Medio | DevOps |
| SYS-08 | Componentes no root (nao em src/components/) | Medio | Organizacao |

### MEDIOS

| ID | Debito | Impacto | Area |
|----|--------|---------|------|
| SYS-09 | Pacotes extraneous (@emnapi/runtime, tslib) | Baixo | Higiene |
| SYS-10 | Sem source maps de producao | Baixo | Debug |
| SYS-11 | Arquivos utilitarios no root (scripts .js/.sh) | Baixo | Organizacao |
| SYS-12 | Sem favicon ou apple-touch-icon configurado | Baixo | UX |
| SYS-13 | LandingPage.tsx com 321 linhas (monolito) | Medio | Manutencao |

### BAIXOS

| ID | Debito | Impacto | Area |
|----|--------|---------|------|
| SYS-14 | README minimo | Baixo | Documentacao |
| SYS-15 | Sem CHANGELOG | Baixo | Documentacao |
| SYS-16 | version 0.0.0 no package.json | Baixo | Versionamento |

---

## 11. Metricas do Projeto

| Metrica | Valor |
|---------|-------|
| Componentes React | 9+ |
| Rotas | 2 |
| Arquivos TypeScript | 4 |
| Arquivos Config | 6 |
| Assets (imagens) | 16 |
| Dependencies (prod) | 7 |
| Dependencies (dev) | 13 |
| Linhas de codigo (aprox.) | ~650 |
| Testes | 0 |
| Cobertura | 0% |

---

*Documento gerado por @architect (Aria) - Brownfield Discovery Fase 1*

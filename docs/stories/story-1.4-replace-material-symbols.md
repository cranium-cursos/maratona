# Story 1.4 - Performance: Substituir Material Symbols por Lucide React

**Epic:** MARA-EPIC-01
**Fase:** Fundacao
**Estimativa:** 3h
**Prioridade:** P1
**Depende de:** Story 1.2
**Status:** Ready for Review

---

## Objetivo

Substituir a fonte Material Symbols Outlined (~200KB) por Lucide React (tree-shakeable, ~1KB por icone).

---

## Tasks

- [x] **UX-05:** Instalar `lucide-react`
- [x] Mapear todos os icones Material Symbols para Lucide equivalentes
- [x] Substituir todos os spans por componentes Lucide em todos os componentes
- [x] Remover link da fonte Material Symbols do `index.html`
- [x] Verificar que todos os icones renderizam corretamente
- [x] **UX-15:** Fonte Material Symbols removida (GTM ja estava async)

---

## Criterios de Aceite

- [x] Nenhuma referencia a Material Symbols no projeto
- [x] Todos os icones mapeados (verified→BadgeCheck, calendar→Calendar, arrow_forward→ArrowRight, etc)
- [x] Fonte Material Symbols removida do index.html
- [x] Bundle nao inclui Material Symbols font
- [x] Build funciona

---

## Definition of Done

- [x] Visual funcional com icones Lucide
- [ ] Commit: `perf: replace Material Symbols font with Lucide React icons [MARA-1.4]`

---

## Dev Agent Record

### Agent Model Used
Claude Opus 4.6

### Mapeamento de Icones
| Material Symbol | Lucide React | Componente |
|---|---|---|
| verified | BadgeCheck | Hero |
| calendar_month | Calendar | Hero |
| arrow_forward | ArrowRight | Hero |
| medical_services | Stethoscope | FeatureSection |
| touch_app | Pointer | FeatureSection |
| psychology | Brain | FeatureSection |
| assignment_turned_in | ClipboardCheck | FeatureSection |
| auto_awesome | Sparkles | ScheduleSection |
| chat | MessageCircle | Footer, NextSteps |
| public | Globe | Footer |
| photo_camera | Camera | Footer |
| check_circle | CheckCircle | NextSteps |

### Change Log
- Instalado lucide-react
- Reescrito Hero.tsx, FeatureSection.tsx, ScheduleSection.tsx, Footer.tsx, NextSteps.tsx
- FeatureSection usa ICON_MAP para mapear string→componente dinamicamente
- Removida fonte Material Symbols Outlined do index.html

### Completion Notes
- Build OK (3.17s)
- Zero referências a material-symbols no src/
- Economia de ~200KB de font download eliminado

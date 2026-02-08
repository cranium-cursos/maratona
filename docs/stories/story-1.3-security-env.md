# Story 1.3 - Seguranca e Configuracao de Ambiente

**Epic:** MARA-EPIC-01
**Fase:** Fundacao
**Estimativa:** 3h
**Prioridade:** P1
**Depende de:** Story 1.1
**Status:** Ready for Review

---

## Objetivo

Remover exposicao de API keys no frontend e centralizar configuracoes em variaveis de ambiente.

---

## Tasks

- [x] **SYS-03:** Remover GEMINI_API_KEY do `vite.config.ts` define
- [x] **SYS-05:** Mover WhatsApp link de `NextSteps.tsx` para `.env`
- [x] Atualizar `.env.example` com todas as variaveis necessarias
- [x] Verificar que `.env` esta no `.gitignore`
- [x] **SYS-04:** Adicionar ErrorBoundary component

---

## Criterios de Aceite

- [x] Nenhuma API key exposta no codigo fonte
- [x] WhatsApp link vem de variavel de ambiente
- [x] `.env.example` documentado com todas as vars
- [x] ErrorBoundary captura erros e mostra mensagem amigavel
- [x] Build funciona

---

## Definition of Done

- [x] Zero API keys no bundle final (verificado com grep no dist/)
- [ ] Commit: `fix: remove exposed API keys and add error boundaries [MARA-1.3]`

---

## Dev Agent Record

### Agent Model Used
Claude Opus 4.6

### Change Log
- SYS-03: Removido GEMINI_API_KEY do vite.config.ts define block
- SYS-05: NextSteps usa import.meta.env.VITE_WHATSAPP_GROUP_URL com fallback
- .env.example: Limpo (removida API key real exposta), documentado VITE_WHATSAPP_GROUP_URL
- .gitignore: Adicionado .env, .env.local, .env.*.local
- SYS-04: ErrorBoundary criado em src/components/ErrorBoundary.tsx, envolvendo App

### Completion Notes
- Build OK (2.79s)
- grep no dist/ confirma zero API keys no bundle
- .env.example anterior tinha API key real (AssemblyAI) — removida

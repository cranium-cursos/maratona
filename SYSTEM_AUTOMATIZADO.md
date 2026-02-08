# 🤖 Sistema Automatizado - Maratona Fisioterapia

## ✨ Como Funciona

Você coloca um **link do vídeo**, o sistema:

1. ✅ **Baixa o vídeo** automaticamente
2. ✅ **Transcreve** com AssemblyAI (qualidade medical-grade)
3. ✅ **Processa conteúdo** com IA
4. ✅ **Passa por Quality Gate** automático
5. ✅ **Gera DOCX pronto** com as cores certas

**Tempo**: ~3-5 minutos (você não faz nada!)

---

## 🚀 Como Usar

### Pré-requisitos

#### 1. Instalar yt-dlp (para baixar vídeos)

**Mac:**
```bash
brew install yt-dlp
```

**Linux:**
```bash
sudo apt install yt-dlp
```

**Windows:**
```bash
choco install yt-dlp
```

Ou via Python:
```bash
pip install yt-dlp
```

#### 2. Configurar Arquivo .env

O arquivo `.env` já existe com sua chave AssemblyAI:

```bash
cat maratona/.env
```

Se precisar alterar:
```bash
nano maratona/.env
```

### Usar o Sistema

**Comando simples:**

```bash
cd maratona

node processar-video.js "https://youtube.com/watch?v=XXXXX"
```

**Exemplo com link real:**

```bash
node processar-video.js "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
```

**Para Instagram:**

```bash
node processar-video.js "https://www.instagram.com/p/XXXXX/"
```

---

## 📊 O que Você Recebe

Arquivo gerado em: `maratona/materiais/Maratona_[timestamp].docx`

Contém:
- ✅ Título com marca Maratona
- ✅ Resumo automático da aula
- ✅ Palavras-chave principais
- ✅ Transcrição completa
- ✅ Formatação profissional com cores (#1e4853 e #10c1b4)

---

## ⚙️ Fluxo Técnico

```
URL do Vídeo
    ↓ [Passo 1] Validação
    ↓ [Passo 2] Download com yt-dlp
    ↓ [Passo 3] Transcrição AssemblyAI
    ↓ [Passo 4] Processamento IA
    ↓ [Passo 5] Quality Gate
    ↓ [Passo 6] Geração DOCX
    ↓ [Passo 7] Finalização
    ↓
DOCX PRONTO ✅
```

---

## 🆘 Troubleshooting

### Erro: "yt-dlp not found"

**Solução:** Instale yt-dlp conforme instruções acima

### Erro: "Chave AssemblyAI não configurada"

**Solução:** Verifique se `.env` tem a chave:
```bash
cat maratona/.env | grep ASSEMBLYAI
```

### Erro: "Link inválido"

**Solução:** Use URLs completas do YouTube ou Instagram:
- ✅ `https://www.youtube.com/watch?v=...`
- ✅ `https://youtu.be/...`
- ✅ `https://www.instagram.com/p/...`

### Transcrição muito lenta

**Esperado!** Transcrição de 1h de vídeo leva ~5-10 minutos
- Sistema mostra progresso a cada 30 segundos
- Não interrompa o processo

---

## 📈 Próximos Passos

Após gerar o primeiro material, o DOCX pode ser:
- ✏️ **Editado** no Word/LibreOffice para melhorar
- 📊 **Exportado** para PDF
- 📤 **Compartilhado** direto com alunos

---

## 🎯 Seus 7 Vídeos

Cole aqui os links para processar:

```
DIA 1:
DIA 2:
DIA 3:
DIA 4:
DIA 5:
DIA 6:
DIA 7:
```

Depois execute:
```bash
node processar-video.js "LINK_DIA_1"
node processar-video.js "LINK_DIA_2"
# ... etc
```

---

## 📞 Suporte

Se algo não funcionar, verifique:

1. ✅ `yt-dlp --version` - Instalado?
2. ✅ `cat .env` - Chave AssemblyAI presente?
3. ✅ URL do vídeo - É válida?
4. ✅ Conexão internet - Ativa?

---

*Sistema Automatizado - Maratona Fisioterapia 2026*

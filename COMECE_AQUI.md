# 🚀 SISTEMA AUTOMATIZADO - COMECE AQUI

## ⚡ Tl;dr - 30 Segundos

1. **Instale yt-dlp** (uma única vez):
   ```bash
   brew install yt-dlp
   ```

2. **Cole o link do vídeo e execute**:
   ```bash
   ./run.sh "https://youtube.com/watch?v=XXXXX"
   ```

3. **Aguarde 3-5 minutos**

4. **Seu DOCX está pronto em** `materiais/`

---

## ✅ Checklist de Preparação

- [ ] Instalou yt-dlp? (`brew install yt-dlp`)
- [ ] Arquivo `.env` existe com chave AssemblyAI?
- [ ] Testou um comando? (`./run.sh "link"`)

---

## 🎯 Seu Primeiro Processamento

### Passo 1: Instalar yt-dlp (UMA VEZ)

```bash
# Mac
brew install yt-dlp

# Linux
sudo apt install yt-dlp

# Windows
pip install yt-dlp
```

### Passo 2: Ter um Link de Vídeo

Pode ser:
- YouTube: `https://www.youtube.com/watch?v=XXXXX`
- YouTube Curto: `https://youtu.be/XXXXX`
- Instagram: `https://www.instagram.com/p/XXXXX/`

### Passo 3: Executar (é só isso!)

```bash
cd maratona
./run.sh "seu_link_aqui"
```

**Exemplo real:**
```bash
./run.sh "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
```

### Passo 4: Aguardar

O sistema mostra o progresso:
```
[1/7] Validando link...
[2/7] Baixando áudio...
[3/7] Transcrevendo... (pode levar alguns minutos)
[4/7] Processando conteúdo...
[5/7] Validando qualidade...
[6/7] Gerando DOCX...
[7/7] Finalizando...
✨ Material pronto em: maratona/materiais/Maratona_1707234567.docx
```

### Passo 5: Pronto!

Seu arquivo DOCX está em `materiais/` com:
- ✅ Título formatado
- ✅ Resumo automático
- ✅ Palavras-chave
- ✅ Transcrição completa
- ✅ Cores profissionais (#1e4853 e #10c1b4)

---

## 📋 Seus 7 Vídeos

### Coloque os links aqui:

```
🎬 DIA 1:  https://...
🎬 DIA 2:  https://...
🎬 DIA 3:  https://...
🎬 DIA 4:  https://...
🎬 DIA 5:  https://...
🎬 DIA 6:  https://...
🎬 DIA 7:  https://...
```

### Depois execute:

```bash
# Dia 1
./run.sh "DIA_1_URL"

# Dia 2
./run.sh "DIA_2_URL"

# ... etc
```

Cada um leva ~3-5 minutos. Pode rodar enquanto trabalha!

---

## 🆘 Se Tiver Erro

### Erro: "yt-dlp not found"
```bash
brew install yt-dlp
```

### Erro: "Chave AssemblyAI"
Verifique `.env`:
```bash
cat .env | grep ASSEMBLYAI
```

### Erro: "Link inválido"
Use URL completa:
- ✅ `https://www.youtube.com/watch?v=...`
- ❌ `youtube.com/...` (sem https://)

### Transcrição muito lenta?
Normal! Vídeo de 1h leva ~5-10 min. O sistema mostra progresso.

---

## 📊 Resultado de Cada Execução

Arquivo gerado: `materiais/Maratona_[timestamp].docx`

Você pode:
- ✏️ Editar no Word (melhorar conteúdo)
- 📊 Exportar para PDF
- 📤 Compartilhar direto

---

## 🎓 Próximas Melhorias (Opcional)

Conforme você usar, podemos adicionar:
- Estrutura automática em 7 seções (apresentação, lógica diagnóstica, etc)
- Agente redator especializado
- Quality gate mais sofisticado
- Gerar múltiplos formatos (PDF, HTML)

Por enquanto, foco é: **link → DOCX pronto em 3-5 minutos**

---

## 💪 Comece Agora!

```bash
cd maratona
./run.sh "seu_primeiro_link"
```

Tudo é automático a partir daqui! 🚀

---

*Sistema Automatizado - Maratona Fisioterapia em Cabeça e Pescoço*

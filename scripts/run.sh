#!/bin/bash

# 🏃 MARATONA - Script de Execução Simplificado
# Uso: ./run.sh "https://youtube.com/watch?v=..."

echo ""
echo "╔════════════════════════════════════════════════════════╗"
echo "║  🏃 MARATONA FISIOTERAPIA - AUTOMAÇÃO TOTAL           ║"
echo "║     Cabeça e Pescoço                                  ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

# Validar link
if [ -z "$1" ]; then
    echo "❌ Uso: ./run.sh \"https://youtube.com/watch?v=...\""
    echo ""
    echo "Exemplos:"
    echo "  ./run.sh \"https://www.youtube.com/watch?v=dQw4w9WgXcQ\""
    echo "  ./run.sh \"https://www.instagram.com/p/ABC123/\""
    exit 1
fi

VIDEO_URL="$1"

echo "🎬 Vídeo: $VIDEO_URL"
echo ""
echo "Iniciando processamento automático..."
echo ""

# Executar o script principal
node processar-video.js "$VIDEO_URL"

# Checar se foi bem-sucedido
if [ $? -eq 0 ]; then
    echo ""
    echo "📁 Seu arquivo DOCX está em: ./materiais/"
    echo ""
    echo "Próximos passos:"
    echo "  1. Abra o arquivo no Word"
    echo "  2. Revise/edite se necessário"
    echo "  3. Exporte para PDF"
    echo "  4. Compartilhe com seus alunos"
    echo ""
else
    echo ""
    echo "❌ Erro no processamento. Verifique:"
    echo "  - yt-dlp instalado? (brew install yt-dlp)"
    echo "  - .env configurado? (cat .env)"
    echo "  - URL válida? (YouTube ou Instagram)"
    echo ""
fi

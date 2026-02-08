#!/bin/bash

# Script auxiliar para criar os arquivos dos 7 dias

# Cores
VERDE='\033[0;32m'
AZUL='\033[0;34m'
AMARELO='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${AZUL}"
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║   🏃 CRIADOR DE MATERIAIS - MARATONA FISIOTERAPIA           ║"
echo "║       Cabeça e Pescoço                                      ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Criar pasta
echo -e "${AMARELO}📁 Criando pasta materiais-maratona...${NC}"
mkdir -p materiais-maratona
echo -e "${VERDE}✅ Pasta criada!${NC}"

# Questionar dias
echo ""
echo -e "${AZUL}Quantos materiais você quer criar? (1-7):${NC}"
read -p "Digite o número: " NUM_DIAS

if ! [[ "$NUM_DIAS" =~ ^[1-7]$ ]]; then
    echo -e "${AMARELO}❌ Digite um número entre 1 e 7!${NC}"
    exit 1
fi

# Criar templates para cada dia
for i in $(seq 1 $NUM_DIAS); do
    echo ""
    echo -e "${AZUL}--- DIA $i ---${NC}"
    read -p "Título do caso clínico do Dia $i: " TITULO
    read -p "Link do vídeo (YouTube/Instagram): " LINK
    read -p "Nome do instrutor: " INSTRUTOR

    # Sanitizar título para nome de arquivo
    TITULO_SANITIZADO=$(echo "$TITULO" | sed 's/[^a-zA-Z0-9 ]/_/g' | sed 's/ /_/g')
    ARQUIVO="materiais-maratona/Dia_${i}_${TITULO_SANITIZADO}.docx"

    # Copiar template
    cp "Template_Caso_Clinico_Fisioterapia.docx" "$ARQUIVO"

    echo -e "${VERDE}✅ Arquivo criado: $ARQUIVO${NC}"
    echo "   📌 Lembre-se de preencher:"
    echo "   • Dados do paciente"
    echo "   • Lógica diagnóstica"
    echo "   • Insights e dicas"
    echo "   Link: $LINK"
    echo "   Instrutor: $INSTRUTOR"
done

echo ""
echo -e "${VERDE}"
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║  ✅ Pronto! Seus arquivos foram criados em:                 ║"
echo "║     📂 materiais-maratona/                                  ║"
echo "║                                                              ║"
echo "║  ➡️  Próximo passo: Abra cada arquivo e preencha            ║"
echo "║                                                              ║"
echo "║  📚 Guia: docs/guides/WORKFLOW_CRIACAO_MATERIAIS.md        ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

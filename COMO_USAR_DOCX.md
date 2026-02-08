# 💻 Como Abrir e Editar o DOCX - Guia Prático

> **Tl;dr**: Dupla-clique no arquivo `.docx` para abrir. Edite como um documento normal. Salve. Pronto!

---

## 🖥️ Opção 1: Microsoft Word (Recomendado)

### Passo 1: Abrir
1. Localize: `Template_Caso_Clinico_Fisioterapia.docx`
2. Dupla-clique no arquivo
3. Word abrirá automaticamente

### Passo 2: Editar
- Clique onde quer escrever
- Digite normalmente
- **Não altere a formatação** (fonts, cores, espaçamento já estão configurados)

### Passo 3: Salvar
- `Ctrl+S` (Windows) ou `Cmd+S` (Mac)
- Ou: `Arquivo > Salvar`

### Passo 4: Exportar para PDF (Opcional)
1. `Arquivo > Exportar como PDF`
2. Escolha local
3. Clique em "Exportar"

---

## 🍎 Opção 2: LibreOffice Writer (Grátis, Multiplataforma)

### Instalação (se não tiver)
- Baixe em: https://www.libreoffice.org
- Mac: `LibreOffice.dmg` (arrastar para Applications)
- Windows: Executável padrão
- Linux: `apt install libreoffice`

### Passo 1: Abrir
1. Abra LibreOffice Writer
2. `Arquivo > Abrir`
3. Selecione: `Template_Caso_Clinico_Fisioterapia.docx`

### Passo 2: Editar
- Mesmo que Word - clique, digite, formata
- Compatível 100% com formatação

### Passo 3: Salvar
- `Ctrl+S` mantém no formato DOCX
- Ou `Arquivo > Salvar`

### Passo 4: Exportar para PDF
- `Arquivo > Exportar como PDF`

---

## 📱 Opção 3: Google Docs

### Passo 1: Upload
1. Acesse: https://docs.google.com
2. `Arquivo > Fazer upload de arquivo`
3. Selecione `Template_Caso_Clinico_Fisioterapia.docx`

### Passo 2: Editar Online
- Edite como um documento normal
- Colaborar em tempo real (se compartilhar)
- Salva automaticamente

### Passo 3: Download
1. `Arquivo > Download > Microsoft Word (.docx)`
2. Seu arquivo DOCX editado será baixado

---

## 🔄 Duplicar o Template (Criar Novos Arquivos)

### Método 1: No Arquivo (Mais Fácil)

**Mac:**
1. Clique direito no template
2. "Duplicar"
3. Renomeie para: `Dia_01_[TITULO].docx`

**Windows:**
1. Clique direito no template
2. "Copiar"
3. Clique direito em espaço vazio
4. "Colar"
5. Renomeie o arquivo

### Método 2: Usando Terminal (Rápido)

**Mac/Linux:**
```bash
cp Template_Caso_Clinico_Fisioterapia.docx "Dia_01_Titulo.docx"
```

**Windows (PowerShell):**
```powershell
Copy-Item "Template_Caso_Clinico_Fisioterapia.docx" "Dia_01_Titulo.docx"
```

### Método 3: Script Automático (7 arquivos)

**Mac/Linux:**
```bash
./criar-material-dia.sh
```

Segue as instruções na tela. Cria todos os 7 arquivos de uma vez.

---

## 🎨 Editando as Seções

### Substituir Texto

**Para substituir partes do template:**

1. Encontre o texto entre colchetes: `[ASSIM]`
2. Selecione-o: clique no início, arraste até o fim
3. Digite o novo texto (o antigo será substituído)
4. **O texto em volta não muda!** Formatação preservada ✅

### Exemplo:
```
Antes: [NOME DO INSTRUTOR]
Depois de editar: João Silva Martins
```

### Adicionar Conteúdo

1. Coloque o cursor onde quer escrever
2. Aperte `Enter` para nova linha se necessário
3. Digite

### Não Mexa Em:

❌ **NÃO altere:**
- Cores dos títulos
- Tamanho das fontes
- Espaçamento de parágrafos
- Box de destaque
- Bordas de tabelas

✅ **Está seguro alterar:**
- Texto dos placeholders `[ASSIM]`
- Conteúdo das seções
- Adicionar mais linhas
- Remover seções inteiras se necessário

---

## 📊 Estrutura do Documento

```
CABEÇALHO (não mexa)
├─ MARATONA FISIOTERAPIA EM
├─ CABEÇA E PESCOÇO
└─ CASO CLÍNICO #[DIA]

SEÇÃO 1
├─ Tabela de dados (preencha com dados reais)
└─ História clínica (escreva aqui)

SEÇÃO 2
├─ Hipóteses iniciais
├─ Testes realizados
├─ Achados positivos
└─ Diagnóstico final

SEÇÃO 3
├─ Inspeção
├─ Palpação
├─ Amplitude
└─ Testes especiais

BOX DE DESTAQUE
└─ Um achado diferencial (bullet ou frase)

SEÇÃO 5
├─ Insight 1, 2, 3, 4 (bullets)

SEÇÃO 6
├─ Objetivos, Estratégia, Técnicas, Prognóstico

SEÇÃO 7
├─ Links, Literatura, Recursos

FOOTER (não mexa)
└─ Créditos da Maratona
```

---

## 🎨 Formatação Rápida (Dentro do Word)

### Fazer Texto Negrito
- Selecione o texto
- `Ctrl+B` (Windows) ou `Cmd+B` (Mac)

### Fazer Texto Itálico
- Selecione o texto
- `Ctrl+I` (Windows) ou `Cmd+I` (Mac)

### Fazer Underline
- Selecione o texto
- `Ctrl+U` (Windows) ou `Cmd+U` (Mac)

### Adicionar Bullet Point
- Coloque cursor na linha
- Na barra superior: clique no ícone de bullets (●)
- Ou `Ctrl+Shift+L`

---

## 🆘 Problemas Comuns

### Problema: Arquivo não abre

**Solução:**
1. Certifique-se de ter Word ou LibreOffice
2. Tente dupla-clique no arquivo
3. Se não abrir, clique direito > Abrir Com > Escolha Microsoft Word

### Problema: Formatação saiu errada

**Solução:**
1. Feche o arquivo SEM salvar
2. Duplique o template novamente
3. Comece do zero

### Problema: Não consigo mudar as cores

**Solução:**
1. As cores são parte do design - deixe como estão
2. Só mude o **conteúdo de texto**, não formatação
3. Se precisar mudar cores, use FORMATO > CARACTERE no Word

### Problema: A tabela ficou feia

**Solução:**
1. Clique dentro da tabela
2. Clique em DESIGN (aba de Tabelas)
3. Escolha um estilo predefinido
4. (Ou deixe como está - já está boa!)

### Problema: Não consigo encontrar o arquivo

**Solução:**
```
Arquivo deve estar em:
/Users/marcelowillianmatos/projetos-marcelo/
    Template_Caso_Clinico_Fisioterapia.docx
```

Procure por este nome exato.

---

## 💾 Salvando Seus Arquivos

### Estrutura Recomendada

```
materiais-maratona/
├─ Dia_01_[Titulo].docx
├─ Dia_02_[Titulo].docx
├─ Dia_03_[Titulo].docx
├─ Dia_04_[Titulo].docx
├─ Dia_05_[Titulo].docx
├─ Dia_06_[Titulo].docx
└─ Dia_07_[Titulo].docx
```

### Criar a Pasta
```bash
mkdir materiais-maratona
```

### Mover Arquivos
No Windows/Mac: Arraste os arquivos `.docx` para a pasta

No Terminal:
```bash
mv Dia_*.docx materiais-maratona/
```

---

## 🖨️ Exportar para PDF

### Por quê?
- PDF é universal (qualquer um abre)
- PDF preserva formatação
- Não precisa ter Word instalado

### Como Fazer

**Word:**
1. `Arquivo > Exportar como PDF`
2. Escolha pasta
3. Clique "Exportar"

**LibreOffice:**
1. `Arquivo > Exportar como PDF`
2. Escolha configurações
3. Salve

**Google Docs:**
1. `Arquivo > Download > PDF Document (.pdf)`

---

## ✅ Checklist Antes de Finalizar

- [ ] Arquivo aberto sem erros
- [ ] Todas as seções preenchidas
- [ ] Nenhum texto em branco `[ASSIM]` deixado por acaso
- [ ] Formatação visual está ok (cores, tamanho)
- [ ] Sem erros de digitação
- [ ] Arquivo salvo com nome correto: `Dia_[NUM]_[TITULO].docx`
- [ ] PDF exportado (opcional mas recomendado)

---

## 🎓 Próximas Etapas

Após dominar a edição:

1. Use: `FORMULARIO_COLETA_RAPIDA.md` enquanto assiste vídeo
2. Siga: `WORKFLOW_CRIACAO_MATERIAIS.md` passo a passo
3. Verifique: `CHECKLIST_QUALIDADE.md` antes de finalizar

---

## 🚀 Pronto!

Você já sabe:
- ✅ Como abrir o arquivo
- ✅ Como editar
- ✅ Como salvar
- ✅ Como exportar para PDF

**Vamos criar os 7 materiais!**

Próximo passo: `GUIA_RAPIDO_INICIO.md`

---

*Dúvidas? Veja `README_MARATONA.md`*

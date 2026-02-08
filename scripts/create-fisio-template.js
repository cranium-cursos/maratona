const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, AlignmentType, WidthType, BorderStyle, ShadingType, VerticalAlign, LevelFormat, HeadingLevel } = require('docx');
const fs = require('fs');

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Arial", size: 22, color: "000000" }
      }
    },
    paragraphStyles: [
      {
        id: "Title",
        name: "Title",
        basedOn: "Normal",
        run: { size: 48, bold: true, color: "1e4853", font: "Arial" },
        paragraph: { spacing: { before: 240, after: 120 }, alignment: AlignmentType.CENTER }
      },
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        run: { size: 32, bold: true, color: "1e4853", font: "Arial" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 }
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        run: { size: 28, bold: true, color: "10c1b4", font: "Arial" },
        paragraph: { spacing: { before: 180, after: 100 }, outlineLevel: 1 }
      },
      {
        id: "HighlightBox",
        name: "Highlight Box",
        basedOn: "Normal",
        run: { size: 22, color: "1e4853", font: "Arial" },
        paragraph: { spacing: { before: 120, after: 120 } }
      }
    ]
  },
  numbering: {
    config: [
      {
        reference: "bullet-list",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "•",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } }
          }
        ]
      },
      {
        reference: "numbered-list",
        levels: [
          {
            level: 0,
            format: LevelFormat.DECIMAL,
            text: "%1.",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } }
          }
        ]
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: [
      // Header com identidade visual
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 240 },
        children: [
          new TextRun({
            text: "MARATONA FISIOTERAPIA EM",
            bold: true,
            size: 28,
            color: "1e4853"
          })
        ]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 240 },
        children: [
          new TextRun({
            text: "CABEÇA E PESCOÇO",
            bold: true,
            size: 32,
            color: "10c1b4"
          })
        ]
      }),

      // Título do caso
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 240, after: 120 },
        children: [
          new TextRun("CASO CLÍNICO #[DIA]: [TÍTULO DO CASO]")
        ]
      }),

      // Informações do Instructor
      new Paragraph({
        spacing: { after: 240 },
        children: [
          new TextRun({
            text: "Instrutor: ",
            bold: true,
            color: "4FA9B9"
          }),
          new TextRun("[NOME DO INSTRUTOR]")
        ]
      }),

      // 1. APRESENTAÇÃO DO CASO
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 200, after: 120 },
        children: [
          new TextRun("1. APRESENTAÇÃO DO CASO")
        ]
      }),

      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({
            text: "Dados do Paciente:",
            bold: true
          })
        ]
      }),

      new Table({
        columnWidths: [2340, 2340, 2340, 2340],
        margins: { top: 100, bottom: 100, left: 180, right: 180 },
        rows: [
          new TableRow({
            tableHeader: true,
            children: [
              new TableCell({
                width: { size: 2340, type: WidthType.DXA },
                shading: { fill: "d0f0eb", type: ShadingType.CLEAR },
                borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "10c1b4" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "10c1b4" }, left: { style: BorderStyle.SINGLE, size: 1, color: "10c1b4" }, right: { style: BorderStyle.SINGLE, size: 1, color: "10c1b4" } },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Idade", bold: true, size: 20 })] })]
              }),
              new TableCell({
                width: { size: 2340, type: WidthType.DXA },
                shading: { fill: "d0f0eb", type: ShadingType.CLEAR },
                borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "10c1b4" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "10c1b4" }, left: { style: BorderStyle.SINGLE, size: 1, color: "10c1b4" }, right: { style: BorderStyle.SINGLE, size: 1, color: "10c1b4" } },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Sexo", bold: true, size: 20 })] })]
              }),
              new TableCell({
                width: { size: 2340, type: WidthType.DXA },
                shading: { fill: "d0f0eb", type: ShadingType.CLEAR },
                borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "10c1b4" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "10c1b4" }, left: { style: BorderStyle.SINGLE, size: 1, color: "10c1b4" }, right: { style: BorderStyle.SINGLE, size: 1, color: "10c1b4" } },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Profissão", bold: true, size: 20 })] })]
              }),
              new TableCell({
                width: { size: 2340, type: WidthType.DXA },
                shading: { fill: "d0f0eb", type: ShadingType.CLEAR },
                borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "10c1b4" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "10c1b4" }, left: { style: BorderStyle.SINGLE, size: 1, color: "10c1b4" }, right: { style: BorderStyle.SINGLE, size: 1, color: "10c1b4" } },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Queixa Principal", bold: true, size: 20 })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                width: { size: 2340, type: WidthType.DXA },
                borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" }, left: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" }, right: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" } },
                children: [new Paragraph({ children: [new TextRun("[Idade]")] })]
              }),
              new TableCell({
                width: { size: 2340, type: WidthType.DXA },
                borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" }, left: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" }, right: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" } },
                children: [new Paragraph({ children: [new TextRun("[Sexo]")] })]
              }),
              new TableCell({
                width: { size: 2340, type: WidthType.DXA },
                borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" }, left: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" }, right: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" } },
                children: [new Paragraph({ children: [new TextRun("[Profissão]")] })]
              }),
              new TableCell({
                width: { size: 2340, type: WidthType.DXA },
                borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" }, left: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" }, right: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" } },
                children: [new Paragraph({ children: [new TextRun("[Queixa Principal]")] })]
              })
            ]
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 120, before: 240 },
        children: [
          new TextRun({
            text: "História Clínica:",
            bold: true
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 240 },
        children: [
          new TextRun("[Descrever o histórico clínico do paciente, incluindo duração dos sintomas, fatores desencadeantes, tratamentos anteriores, etc.]")
        ]
      }),

      // 2. LÓGICA DIAGNÓSTICA
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 240, after: 120 },
        children: [
          new TextRun("2. LÓGICA DIAGNÓSTICA - PASSO A PASSO")
        ]
      }),

      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({
            text: "Como o professor chegou ao diagnóstico?",
            bold: true,
            italics: true,
            color: "4FA9B9"
          })
        ]
      }),

      new Paragraph({
        numbering: { reference: "numbered-list", level: 0 },
        spacing: { after: 120 },
        children: [
          new TextRun({
            text: "Hipóteses Iniciais: ",
            bold: true
          }),
          new TextRun("[Quais foram as primeiras suspeitas diagnósticas?]")
        ]
      }),

      new Paragraph({
        numbering: { reference: "numbered-list", level: 0 },
        spacing: { after: 120 },
        children: [
          new TextRun({
            text: "Testes Especiais Realizados: ",
            bold: true
          }),
          new TextRun("[Qual teste foi decisivo? Por quê?]")
        ]
      }),

      new Paragraph({
        numbering: { reference: "numbered-list", level: 0 },
        spacing: { after: 120 },
        children: [
          new TextRun({
            text: "Achados Positivos: ",
            bold: true
          }),
          new TextRun("[O que confirmou o diagnóstico?]")
        ]
      }),

      new Paragraph({
        numbering: { reference: "numbered-list", level: 0 },
        spacing: { after: 240 },
        children: [
          new TextRun({
            text: "Diagnóstico Final: ",
            bold: true
          }),
          new TextRun("[Diagnóstico clínico/fisioterapêutico]")
        ]
      }),

      // 3. ACHADOS CLÍNICOS
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 240, after: 120 },
        children: [
          new TextRun("3. ACHADOS CLÍNICOS IMPORTANTES")
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 80 },
        children: [
          new TextRun({
            text: "Inspeção: ",
            bold: true
          }),
          new TextRun("[Descrever observações visuais relevantes]")
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 80 },
        children: [
          new TextRun({
            text: "Palpação: ",
            bold: true
          }),
          new TextRun("[Estruturas palpáveis, pontos dolorosos, tonalidade muscular]")
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 80 },
        children: [
          new TextRun({
            text: "Amplitude de Movimento: ",
            bold: true
          }),
          new TextRun("[Restrições encontradas]")
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 240 },
        children: [
          new TextRun({
            text: "Testes Especiais: ",
            bold: true
          }),
          new TextRun("[Quais foram positivos?]")
        ]
      }),

      // 4. BOX DE DESTAQUE
      new Table({
        columnWidths: [9360],
        margins: { top: 150, bottom: 150, left: 200, right: 200 },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: { size: 9360, type: WidthType.DXA },
                shading: { fill: "d0f0eb", type: ShadingType.CLEAR },
                borders: { top: { style: BorderStyle.SINGLE, size: 3, color: "10c1b4" }, bottom: { style: BorderStyle.SINGLE, size: 3, color: "10c1b4" }, left: { style: BorderStyle.SINGLE, size: 3, color: "10c1b4" }, right: { style: BorderStyle.SINGLE, size: 3, color: "10c1b4" } },
                children: [
                  new Paragraph({
                    spacing: { before: 100, after: 50 },
                    children: [
                      new TextRun({
                        text: "⭐ DESTAQUE CLÍNICO",
                        bold: true,
                        size: 24,
                        color: "10c1b4"
                      })
                    ]
                  }),
                  new Paragraph({
                    spacing: { after: 100 },
                    children: [
                      new TextRun("[Qual é o achado mais importante neste caso? O que diferencia este diagnóstico de outros?]")
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),

      new Paragraph({
        spacing: { before: 240, after: 240 },
        children: [new TextRun("")]
      }),

      // 5. INSIGHTS CLÍNICOS
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 240, after: 120 },
        children: [
          new TextRun("5. INSIGHTS CLÍNICOS E DICAS IMPORTANTES")
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 120 },
        children: [
          new TextRun({
            text: "Ponto-Chave #1: ",
            bold: true,
            color: "1e4853"
          }),
          new TextRun("[Qual é a aprendizagem principal deste caso?]")
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 120 },
        children: [
          new TextRun({
            text: "Ponto-Chave #2: ",
            bold: true,
            color: "1B5E77"
          }),
          new TextRun("[Qual é o erro comum que devemos evitar?]")
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 120 },
        children: [
          new TextRun({
            text: "Ponto-Chave #3: ",
            bold: true,
            color: "1B5E77"
          }),
          new TextRun("[Como este caso modifica sua abordagem clínica?]")
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 240 },
        children: [
          new TextRun({
            text: "Ponto-Chave #4: ",
            bold: true,
            color: "1B5E77"
          }),
          new TextRun("[Qual é a dica prática para levar para a clínica?]")
        ]
      }),

      // 6. TRATAMENTO E CONDUTA
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 240, after: 120 },
        children: [
          new TextRun("6. TRATAMENTO E CONDUTA FISIOTERAPÊUTICA")
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 120 },
        children: [
          new TextRun({
            text: "Objetivos Terapêuticos: ",
            bold: true
          }),
          new TextRun("[Quais são os objetivos principais?]")
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 120 },
        children: [
          new TextRun({
            text: "Estratégia de Tratamento: ",
            bold: true
          }),
          new TextRun("[Qual é a abordagem terapêutica utilizada?]")
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 120 },
        children: [
          new TextRun({
            text: "Técnicas Específicas: ",
            bold: true
          }),
          new TextRun("[Quais técnicas foram mais efetivas?]")
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 240 },
        children: [
          new TextRun({
            text: "Prognóstico: ",
            bold: true
          }),
          new TextRun("[Como foi a evolução? Qual é o tempo esperado de recuperação?]")
        ]
      }),

      // 7. REFERÊNCIAS E LINKS
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 240, after: 120 },
        children: [
          new TextRun("7. REFERÊNCIAS E MATERIAIS ADICIONAIS")
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 80 },
        children: [
          new TextRun({
            text: "Link do vídeo: ",
            bold: true
          }),
          new TextRun("[Cole aqui o link do YouTube ou Instagram]")
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 80 },
        children: [
          new TextRun({
            text: "Literatura Recomendada: ",
            bold: true
          }),
          new TextRun("[Cite artigos ou livros relacionados]")
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 240 },
        children: [
          new TextRun({
            text: "Recursos Clínicos: ",
            bold: true
          }),
          new TextRun("[Escalas, testes, ferramentas mencionadas]")
        ]
      }),

      // Footer
      new Paragraph({
        spacing: { before: 240 },
        border: { top: { color: "10c1b4", space: 1, style: BorderStyle.SINGLE, size: 6 } },
        children: [new TextRun("")]
      }),

      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 120 },
        children: [
          new TextRun({
            text: "Maratona Fisioterapia em Cabeça e Pescoço",
            italics: true,
            size: 20,
            color: "999999"
          })
        ]
      }),

      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: "Análise de casos clínicos reais para elevar sua prática clínica",
            italics: true,
            size: 20,
            color: "999999"
          })
        ]
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("Template_Caso_Clinico_Fisioterapia.docx", buffer);
  console.log("✅ Template criado com sucesso: Template_Caso_Clinico_Fisioterapia.docx");
});

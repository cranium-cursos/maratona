import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';

const CERTIFICATE_IMAGE_PATH = '/images/CERTIFICADO.jpg';
const FONT_PATH = '/fonts/Ubuntu-Bold.ttf';

const NAME_POSITION = {
  yPercent: 0.47,
  fontSize: 100,
  color: rgb(0.12, 0.29, 0.33),
};

function sanitizeName(name: string): string {
  return name
    .replace(/[<>&"'/\\]/g, '')
    .trim()
    .replace(/\S+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}

export async function generateCertificate(
  userName: string,
): Promise<Uint8Array> {
  const safeName = sanitizeName(userName);
  if (safeName.length < 3) {
    throw new Error('Nome inválido para o certificado.');
  }

  let imageBytes: ArrayBuffer;
  try {
    const res = await fetch(CERTIFICATE_IMAGE_PATH);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    imageBytes = await res.arrayBuffer();
  } catch {
    throw new Error(
      'Não foi possível carregar a imagem do certificado. Verifique se o arquivo CERTIFICADO.jpg existe em public/images/.',
    );
  }

  let fontBytes: ArrayBuffer;
  try {
    const res = await fetch(FONT_PATH);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    fontBytes = await res.arrayBuffer();
  } catch {
    throw new Error('Não foi possível carregar a fonte Ubuntu.');
  }

  const pdfDoc = await PDFDocument.create();
  pdfDoc.registerFontkit(fontkit);

  const image = await pdfDoc.embedJpg(imageBytes);
  const font = await pdfDoc.embedFont(fontBytes);

  const { width, height } = image.scale(1);
  const page = pdfDoc.addPage([width, height]);

  page.drawImage(image, { x: 0, y: 0, width, height });

  const textWidth = font.widthOfTextAtSize(safeName, NAME_POSITION.fontSize);
  const x = (width - textWidth) / 2;
  const y = height * NAME_POSITION.yPercent;

  page.drawText(safeName, {
    x,
    y,
    size: NAME_POSITION.fontSize,
    font,
    color: NAME_POSITION.color,
  });

  return pdfDoc.save();
}

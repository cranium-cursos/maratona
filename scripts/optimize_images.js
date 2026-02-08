import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images');

async function optimizeImages() {
    if (!fs.existsSync(imagesDir)) {
        console.error(`Directory not found: ${imagesDir}`);
        return;
    }

    const files = fs.readdirSync(imagesDir);

    for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
            const inputPath = path.join(imagesDir, file);
            const outputPath = path.join(imagesDir, `${path.parse(file).name}.webp`);

            console.log(`Converting: ${file} -> ${path.basename(outputPath)}`);

            try {
                await sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                // Optional: Remove original if successful? 
                // For safety, let's keep originals for now and just update references.
                // Or better, let's just create them and I will manually update code.
            } catch (error) {
                console.error(`Error converting ${file}:`, error);
            }
        }
    }
}

optimizeImages();

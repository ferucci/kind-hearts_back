import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

export default async function convertFile(file: any, webpFilePath: string): Promise<void> {
  // Получаем расширение файла
  const ext = path.extname(webpFilePath);
  // Проверяем расширение файла и конвертируем в WebP или AVIF
  if (ext === '.webp') {
    const webpBuffer = await sharp(file.filepath).webp({
      quality: 90, // Настройка качества WebP

    }).toBuffer();
    fs.writeFileSync(webpFilePath, webpBuffer);
  } else if (ext === '.avif') {
    const avifBuffer = await sharp(file.filepath).avif({
      quality: 90, // Настройка качества AVIF
    }).toBuffer();
    fs.writeFileSync(webpFilePath, avifBuffer);
  }

}
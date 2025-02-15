import type { Core } from '@strapi/strapi';
import fs from 'fs';
import path from 'path';
import convertFile from './convertFile';

// Определяем типы для ctx и next
interface KoaContext {
  request: {
    body(body: any): unknown;
    files?: {
      files: any; // Уточните тип файлов, если он известен
    };
    method: string
  };
  [key: string]: any; // Другие свойства контекста
}

type NextFunction = () => Promise<void>;

// Определяем тип для конфигурации
interface FileConfig {
  quality: number;
  mimeTypes: string[];
}

export default (config: FileConfig, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx: KoaContext, next: NextFunction) => {
    const { files } = ctx.request;

    // Проверяем, есть ли файлы в запросе
    if (!files || !files.files && ctx.request.method !== 'GET') {
      return next();
    }

    try {
      const publicPath = strapi.dirs.static.public + '/uploads';
      // Обрабатываем файл (даже если он один)
      const file = files.files;

      // Путь для сохранения оригинального файла
      const originalFilePath = path.join(publicPath, file.originalFilename);

      // Путь для сохранения WebP-файла
      const webpFilePath = path.join(publicPath, `${path.parse(file.originalFilename).name}.webp`);
      // Путь для сохранения Avif-файла
      const avifFilePath = path.join(publicPath, `${path.parse(file.originalFilename).name}.avif`);

      // Сохраняем оригинальный файл
      fs.copyFileSync(file.filepath, originalFilePath);

      // Если файл — изображение, конвертируем его в WebP
      if (file.mimetype.startsWith('image/') && !file.mimetype.startsWith('image/svg+xml')) {
        try {
          await convertFile(file, webpFilePath);
          await convertFile(file, avifFilePath);
        } catch (error) {
          strapi.log.error('Error converting image to WebP or Avif:', error);
          return ctx.badRequest('Failed to convert image to WebP or AVIF.');
        }
      }

      // Обновляем информацию о файле в запросе
      ctx.request.files.files = {
        ...file,
        filepath: originalFilePath, // Путь к оригинальному файлу
        webpPath: webpFilePath, // Путь к WebP-файлу (если он был создан)
      };
      // console.log('ctx.request.files.files', ctx.request.files.files._events);
    } catch (error) {
      strapi.log.error('Error processing images:', error);
      return ctx.badRequest('Failed to process images.');

    }

    // Передаём управление следующему middleware или контроллеру
    await next();
  };
};
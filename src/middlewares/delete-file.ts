import * as fs from 'fs/promises';
import * as path from 'path';
import { Core } from '@strapi/strapi';

interface KoaContext {
  params: {
    id: string;
  };
  [key: string]: any;
}

type NextFunction = () => Promise<void>;

export default function (strapi: Core.Strapi) {
  return async (ctx: KoaContext, next: NextFunction) => {
    if (ctx.request.method === 'DELETE') { // НЕ работает
      const { id } = ctx.params; // Не находит id - ошибка

      try {
        // Получаем путь до файла через API Strapi
        const file = await strapi.entityService.findOne('plugin::upload.file', id, {});
        const publicPath = strapi.dirs.static.public + '/uploads';
        const originalFilePath = path.join(publicPath, file.name);

        // Путь для WebP и Avif файлов
        const webpFilePath = path.join(
          publicPath,
          `${path.parse(file.name).name}.webp`
        );
        const avifFilePath = path.join(
          publicPath,
          `${path.parse(file.name).name}.avif`
        );

        // Удаляем оригинальный файл
        await fs.unlink(originalFilePath);

        // Проверяем и удаляем WebP файл, если существует
        try {
          await fs.stat(webpFilePath);
          await fs.unlink(webpFilePath);
        } catch (e) { } // Файл отсутствует, ничего не делаем

        // Проверяем и удаляем Avif файл, если существует
        try {
          await fs.stat(avifFilePath);
          await fs.unlink(avifFilePath);
        } catch (e) { } // Файл отсутствует, ничего не делаем

        // Логируем успешное удаление
        strapi.log.info(
          `Successfully deleted file ${file.name} and its converted versions.`
        );

        // Переходим к следующему middleware или контроллеру
        await next();
      } catch (error) {
        strapi.log.error('Error deleting file:', error);
        return ctx.badRequest('Failed to delete file.');
      }
    } else {
      // Если метод не DELETE, пропускаем дальше
      await next();
    }
  };
}
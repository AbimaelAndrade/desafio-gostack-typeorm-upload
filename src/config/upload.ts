import { resolve } from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tmpFolder = resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(12).toString('HEX');
      const extension = file.originalname.split('.').pop();

      const filename = `${file.fieldname}-${fileHash}.${extension}`;

      return callback(null, filename);
    },
  }),
};

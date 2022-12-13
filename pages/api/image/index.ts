import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";

import createHandler from "../../../lib/mongoose/createHandler";

const { ACCESSKEYID, SECRETACCESSKEY, REGION, BUCKET } = process.env;

const s3 = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: ACCESSKEYID!,
    secretAccessKey: SECRETACCESSKEY!,
  },
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: BUCKET!,
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, `img/${Date.now()}_${file.originalname}`);
    },
  }),
  limits: { fileSize: 1024 * 1024 },
});

const handler = createHandler();

handler.post(upload.single("upload"), (req, res) => {
  res.status(200).json({ url: (req.file as Express.MulterS3.File).location });
});

export default handler;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

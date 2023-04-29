const multer = require("multer");
//const MulterSharpResizer = require("smart-multer-sharp-resizing");
// const uuid = require('uuid/v1');
//const path = require("path");
const fs = require("fs");

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

let dir = "./uploads";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let fileUploadDir = dir;

    let folder = req.body.folder;

    if (folder != "") {
      fileUploadDir = fileUploadDir + "/" + folder;
    }
    const exists = fs.existsSync(fileUploadDir);
    if (!exists) {
      fs.mkdirSync(fileUploadDir, { recursive: true });
    }
    cb(null, fileUploadDir);
  },
  filename: function (req, file, cb) {
    //console.log(req.body);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = MIME_TYPE_MAP[file.mimetype];
    let newFIleName = `${uniqueSuffix}-${
      file.originalname.split(/\.([^.]+)$/)[0]
    }.${ext}`;
    //let newFIleName = uniqueSuffix +"-"+file.originalname;
    //file.fieldname + "-" + uniqueSuffix + '.' + ext
    cb(null, newFIleName);
  },
});

const imageUpload = multer({
  limits: 500000,
  storage: storage,
  fileFilter: (req, file, cb) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isValid
      ? null
      : new Error("Not an image! Please upload only images.!");
    cb(error, isValid);
  },
});

module.exports = imageUpload;

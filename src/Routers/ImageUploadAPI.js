const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const imageUpload = require("../Middlewares/imageUpload");
const imageResizer = require("../Middlewares/imageResizer");

let uploadDir = "/uploads";

// *****  Multer .fields() *****
// const uploadImages = imageUpload.fields([
//   { name: "cover", maxCount: 2 },
//   { name: "gallery", maxCount: 4 },
// ]);

// *****  Multer .array() *****
const uploadImages = imageUpload.any();

// *****  Multer .single() *****
//const uploadImages = imageUpload.single("cover");

const uploadedResults = async (req, res, next) => {
  let folder = req.body.folder;
  const folderUrl = `${req.protocol}://${req.get(
    "host"
  )}/${uploadDir}/${folder}`;

  let filesUploaded = [];

  if (req.files) {
    req.files.map(async (file, i) => {
      filesUploaded.push({
        filename: file.filename,
        fileUrl: `${folderUrl}/${file.filename}`,
        data: file,
      });
    });
  }
  if (req.file) {
    filesUploaded.push({
      filename: req.file.filename,
      fileUrl: `${folderUrl}/${req.file.filename}`,
      data: req.file,
    });
  }

  res.status(200).json({
    status: "Success",
    folderUrl: folderUrl,
    // imgUrl: fileUrl + "/" +req.file.filename,
    data: filesUploaded,
    images: req.body.images,
    //cover: req.body.cover,
    //gallery: req.body.gallery,
  });
};

//router.post("/imguploads", uploadImages, uploadedResults);

router.post("/imguploads", uploadImages, imageResizer, uploadedResults);

module.exports = router;

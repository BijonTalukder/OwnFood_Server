const MulterSharpResizer = require("smart-multer-sharp-resizing");

let uploadDir = "./uploads";

const resizerImages = async (req, res, next) => {
  let folder = req.body.folder;
  // Used by multer .array() or .single
  //const filename = `gallery-${Date.now()}`;
  //const filename = req.file.path;
  // Used by multer .fields and filename must be same object prop
  const filename = {
    // cover: `cover-${Date.now()}`,
    // gallery: `gallery-${Date.now()}`,
  };

  const sizes = [
    {
      path: "large",
      width: 800,
      height: 950,
    },
    {
      path: "medium",
      width: 300,
      height: 450,
    },
    {
      path: "small",
      width: 100,
      height: 100,
    },
  ];

  const uploadPath = `${uploadDir}/${folder}`;

  const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${folder}`;

  // sharp options
  const sharpOptions = {
    fit: "inside",
    background: { r: 255, g: 255, b: 255 },
  };

  // create a new instance of MulterSharpResizer and pass params
  const resizeObj = new MulterSharpResizer(
    req,
    filename,
    sizes,
    uploadPath,
    fileUrl,
    sharpOptions
  );

  // call resize method for resizing files
  await resizeObj.resize();
  const getDataUploaded = resizeObj.getData();

  // Get details of uploaded files: Used by multer fields
  // req.body.cover = getDataUploaded.cover;
  // req.body.gallery = getDataUploaded.gallery;

  // Get details of uploaded files: Used by multer .array() or .single()
  req.body.images = getDataUploaded;
  // req.body.gallery = getDataUploaded;

  next();
};

module.exports = resizerImages;

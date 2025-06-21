const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');
const { fromPath } = require("pdf2pic");


const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());

// Example upload endpoint
app.post('/api/image-to-pdf', upload.array('images'), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No images uploaded' });
    }

console.log('Received files:', req.files);

    const pdfDoc = await PDFDocument.create();

    for (const file of req.files) {
      const imageBytes = fs.readFileSync(file.path);
      let image;
      if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
        image = await pdfDoc.embedJpg(imageBytes);
      } else if (file.mimetype === 'image/png') {
        image = await pdfDoc.embedPng(imageBytes);
      } else {
        continue;
      }
      const page = pdfDoc.addPage([image.width, image.height]);
      page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
      fs.unlinkSync(file.path); // Clean up
    }
    const pdfBytes = await pdfDoc.save();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="converted.pdf"',
    });
    res.send(Buffer.from(pdfBytes));
  } catch (err) {
    res.status(500).json({ error: 'Failed to convert images to PDF' });
  }
});
app.post('/api/pdf-to-image', upload.single('pdf'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No PDF uploaded' });
    }

    const pdfPath = req.file.path;
    const outputImages = [];

    const options = {
      density: 150,
      saveFilename: "page",
      savePath: "./uploads", // Temporary save path
      format: "png",
      width: 1024,
      height: 1448,
    };

    const storeAsImage = fromPath(pdfPath, options);

    // Get number of pages
    const numPages = await storeAsImage.info().then(info => info.numpages);

    for (let i = 1; i <= numPages; i++) {
      const page = await storeAsImage(i);
      const imgBuffer = fs.readFileSync(page.path);
      outputImages.push({
        filename: `page-${i}.png`,
        buffer: imgBuffer.toString('base64'),
      });
      fs.unlinkSync(page.path); // Clean up
    }

    fs.unlinkSync(pdfPath); // Clean up uploaded PDF

    res.json({ images: outputImages });
  } catch (err) {
    res.status(500).json({ error: 'Failed to convert PDF to images' });
  }
});
app.get('/', (req, res) => {
  res.send('FileFlex backend is running!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
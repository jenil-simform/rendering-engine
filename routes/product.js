const express = require('express');
const router = express.Router();
const productController = require('../controllers/product')

const path = require('path')
const multer = require('multer')

//Set Storage
const storage = multer.diskStorage({
    destination: path.join(__dirname,'../public/uploads'),
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// // Init Upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
        console.log(file)
        cb(undefined,true)
    }
});

router.get('/', productController.getAddProductForm)
router.post('/products',upload.single('productImage'), productController.showAllProducts)

module.exports = router;
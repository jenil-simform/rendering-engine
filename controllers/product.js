const multer = require('multer')
const path = require('path')


const getAddProductForm = (req, res) => {
    res.render('forms');
}

const showAllProducts = (req, res) => {
    console.log(req.file)
    // res.set('content-type', 'image/png')
    // res.send(req.file.buffer)
    // upload(req,res,(err,res)=>{
    //     console.log(err,"error ")
    //     console.log(res,"response ")
    // })
    // console.log(req.file)
    // upload(req, res, (err) => {

    //     res.render('product', {
    //         msg: 'File Uploaded!',

    //         file: `uploads/${req.file.filename}`
    //     });


    // })
    res.render('product', {
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productDescription: req.body.productDescription,
        file : `uploads/${req.file.filename}`
    })

}

module.exports = {
    getAddProductForm, showAllProducts
}
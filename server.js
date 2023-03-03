const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs')
app.use(express.static('./public'));

const productRoutes = require("./routes/product")
app.use(productRoutes)


const port = 8000;
const host = 'localhost'
app.listen(port, host, () => {
    console.log(`server is listening on http://${host}:${port}`);
})
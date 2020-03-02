const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('files'));

app.get('/lists', (req, res, next) => {
    //get categories
    //get tools
    //get types
});

app.get('/send', (req, res, next) => {
    // send email
});

app.get('/update', (req, res, next) => {
    // update a category
    // update a tool
    // update a type

});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
const express = require('express');
const path = require('path');

const port = 5173;
const app = express();
const publicPath = path.join(__dirname, 'public'); //public root
app.use(express.static(publicPath));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/about', (req, res) => {
    res.render('about.ejs')
})
app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})
app.get('*', (req, res) => {
    res.render('notfound.ejs')
})

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
})
const express = require('express');
const app = express();
const path =require('path');

app.use(express.static( path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/header.html', (req, res) => {
    res.render('header.ejs')
})

app.get('/paragraph.html', (req, res) => {
    res.render('paragraph.ejs')
})

app.get('/index.html', (req, res) => {
    res.render('index.ejs')
})

app.get('*', (req, res) => {
    res.render('index.ejs')
})

app.listen(process.env.PORT || 5000);

// app.listen(3000, () => {
//     console.log("LISTENING ON PORT 3000!")
// })
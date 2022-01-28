const express = require('express');
const app = express();
const path = require('path');
const lessons = require("./lessons.js")

app.use(express.static( path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/header.html', (req, res) => {
    res.render('lessonTemplate.ejs', lessons.header)
})

app.get('/paragraph.html', (req, res) => {
    res.render('lessonTemplate.ejs', lessons.paragraph)
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

// "name": "project_test",
// "version": "1.0.0",
// "description": "",
// "main": "index.js",
// "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1"
// },
// "keywords": [],
// "author": "",
// "license": "ISC",
// "dependencies": {
//   "codemirror": "^5.65.1",
//   "ejs": "^3.1.6",
//   "express": "^4.17.2"
// }
// }
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static( path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/header.html', (req, res) => {
    res.render('lessonTemplate.ejs', {
        labName: "Headers",
        instructions: "test instructions",
        //criteria is a 2D array. list element id; regex; and written objective
        
        criteria: [['grade1', /<h2>.*<\/h2>/, "Create an h2 tag"], ['grade2', /<h3>.*<\/h3>/, "Create an h3 tag"], ['grade3', /<h6>.*<\/h6>/, "Create an h6 tag"]],
        htmlStarterCode: "<h1>This is an h1 tag</h1>",
        cssStarterCode: ""
    })
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

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})
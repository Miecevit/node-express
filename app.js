const express = require('express');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.listen(3000);

app.use((req,res,next) => {
    console.log(req.method);
    next();
})

app.get('/', (req,res) =>{
    res.render('anasayfa', {baslik: 'Anasayfa'});
});

app.get('/about', (req,res) => {
    res.render('hakkimizda', {baslik: 'Hakkımızda'})
});

app.get('/yapim', (req,res) => {
    res.render('yapim_asamasi', {baslik: 'YaKında'});
});

app.get('/about-en', (req,res) => {
    res.redirect('/yapim');
});
app.get('/en', (req,res) => {
    res.redirect('/yapim');
});

app.use((req,res) =>{
    res.status(404).render('404', {baslik: '404 - Not Found'});
});


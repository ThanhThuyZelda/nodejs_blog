//const express = require('express') //import thu vien
import express from 'express';
import configViewEngine from './configs/viewEngine';



const app = express() //chay duoc tat ca cac tinh nang trong express
const port = 3000

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('test/index.ejs')
})

app.get('/about', (req, res) => {
    res.send('Thanh Thuy');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
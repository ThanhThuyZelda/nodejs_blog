//const express = require('express') //import thu vien
import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
import initAPIRoute from './route/api';
// import connection from './configs/connectDB';


require('dotenv').config()


const app = express() //chay duoc tat ca cac tinh nang trong express
const port = process.env.PORT;


// khai bao nhu middleware
// config de ho tro gui data tu phia client len server
//chung ta co the lay data 1 cach don gian
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup view engine
configViewEngine(app);

//init web route
initWebRoute(app);
//init api route
initAPIRoute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
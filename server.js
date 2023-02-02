const express = require('express') //import thu vien

const app = express() //chay duoc tat ca cac tinh nang trong express
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World! Thanh Thuy')
})

app.get('/about', (req, res) => {
    res.send('Thanh Thuy');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
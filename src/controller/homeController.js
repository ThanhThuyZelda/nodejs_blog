import pool from "../configs/connectDB";

let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users` ');
    return res.render('index.ejs', { dataUser: rows })

}

let getDetailPage = async (req, res) => {
    //truy xuat du lieu id truyen dong
    let userId = req.params.id;
    let [user] = await pool.execute('select * from users where id = ?', [userId]);
    return res.send(JSON.stringify(user[0])); //do cau lenh query tra ve 2 tham so nen kay user[0]
}

let createNewUser = async (req, res) => {
    // console.log('check request', req.body);
    let { firstName, lastName, email, address } = req.body;

    await pool.execute('insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)',
        [firstName, lastName, email, address]);


    return res.redirect('/')
}
let deleteUser = async (req, res) => {
    let userId = req.body.userId;
    await pool.execute('delete from users where id = ?', [userId]);
    return res.redirect('/');
}
let getEditPage = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute('select * from users where id = ?', [id]);
    //console.log(user) la 1 array => lay user[0]
    return res.render('update.ejs', { dataUser: user[0] }); // truyen qua view
}
let postUpdateUser = async (req, res) => {
    console.log('check reques ', req.body);
    let { firstName, lastName, email, address, id } = req.body;

    await pool.execute('update users set firstName = ?, lastName = ?, email = ?, address = ? where id = ? ',
        [firstName, lastName, email, address, id]);
    return res.redirect('/')
}

module.exports = {
    getHomepage, getDetailPage, createNewUser, deleteUser, getEditPage, postUpdateUser
}
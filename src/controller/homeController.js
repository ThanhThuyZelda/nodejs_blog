import pool from "../configs/connectDB";

let getHomepage = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM `users` ');
    return res.render('index.ejs', { dataUser: rows })

}

let getDetailPage = async (req, res) => {

    //truy xuat du lieu id truyen dong
    let userId = req.params.id;
    let [user] = await pool.execute('select * from users where id = ?', [userId]);


    console.log('check req params: ', user) // tra ve object chua thong tin cua 1 user
    return res.send(JSON.stringify(user[0])); //do cau lenh query tra ve 2 tham so nen kay user[0]
}


module.exports = {
    getHomepage, getDetailPage
}
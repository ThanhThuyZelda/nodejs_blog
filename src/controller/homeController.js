import connection from "../configs/connectDB";

let getHomepage = (req, res) => {

    //logic
    // simple query
    let data = [];
    connection.query(
        'SELECT * FROM `users` ',
        function (err, results, fields) {
            console.log('>>> check mysql')
            console.log(results); // results contains rows returned by server
            results.map((row) => {
                data.push({
                    id: row.id,
                    email: row.email,
                    address: row.address,
                    firstName: row.firstName,
                    lastName: row.lastName
                })
            });

            return res.render('test/index.ejs', { dataUser: JSON.stringify(data) })

        }

    );
    //console.log('>>> check data', typeof (data), JSON.stringify(data));
}

module.exports = {
    getHomepage
}
// get the client
//import { resolveShowConfigPath } from '@babel/core/lib/config/files/configuration';
import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
});



export default connection;

const mysql = require('mysql')
const util = require('util')
require('dotenv').config()

const Conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    pass:'',
    db:'crud'
})

Conn.connect((error) => {
    if (error) {
        return console.log(error);
    }
    console.log('Successfully connected to the database.');
});

const query = util.promisify(Conn.query).bind(Conn)
module.exports = query;
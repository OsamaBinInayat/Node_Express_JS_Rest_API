const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: '',
    user: 'root',
    database: 'test',
    host: 'localhost',
    port: '3306'
});

let testdb = {};


// Getting all the Data
testdb.all = () =>{

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM testtable`, (err, results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    });

};


testdb.one = (id) =>{

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM testtable WHERE id = ?`, [id], (err, results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    });

};



module.exports = testdb;
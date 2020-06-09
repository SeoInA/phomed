const express = require('express');
const mysql = require('mysql');

const connection = mysql.createPool({
    host: 'database-1.cnmbise2kblk.ap-northeast-2.rds.amazonaws.com',
    user: 'seongmin',
    password: 'handong1',
    database: 'hospital'
})

const app = express();

app.get('/users', function(req,res){
    connection.getConnection(function (err, connection){
        connection.query('SELECT * FROM users', function (error, results, fields){
            if(error) throw error;

            res.send(results)
        });
    });
});

app.listen(3000, ()=> {
    console.log('testing..............');
});

var mysql = require('mysql');

module.exports = function(){
    return {
        init: function(){
            return mysql.createConnection({
                host: 'database-1.cnmbise2kblk.ap-northeast-2.rds.amazonaws.com',
                port: '3306',
                user: 'seongmin',
                password: 'handong1',
                database: 'hospital'
            })
        },

        test_open: function(con){
            con.connect(function(err){
                if(err){
                    console.error('mysql connection error: '+err);
                }
                else{
                    console.info('mysql is connnected successfully.');
                }
            })
        }
    }
};
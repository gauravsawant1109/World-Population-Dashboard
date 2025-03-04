const mysql = require('mysql')

const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"sawant@802",
    database:"world"
})

db.connect((error)=>{
    if(error){
        console.log("Cannot connect with database", error)
    }else {
        console.log("connect with mysql");
        
    }
})

module.exports=db;
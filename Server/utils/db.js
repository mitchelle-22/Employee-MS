import mysql from 'mysql2';

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"admin",
    database:"employeesms"
})

con.connect(function(err)
{
    if(err){
        console.log("connection error" + err.stack)
    }else{
        console.log("Connected")
    }
})
export default con;
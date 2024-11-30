const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  // host: "srv1102.hstgr.io",
  // user: "u775439782_forum",
  // password: "0911088006@Sa",
  // database: "u775439782_evanadi"
  connectionLimit: 10,
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
  host: 'localhost',
  user: 'Q&A',
  password: '1234',
  database: 'Q&A'
});


module.exports=dbConnection.promise()
const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  host: "srv1102.hstgr.io",
  user: "u775439782_forum",
  password: "0911088006@Sa",
  database: "u775439782_evanadi"
});


module.exports=dbConnection.promise()
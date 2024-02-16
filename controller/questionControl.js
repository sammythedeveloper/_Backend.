// dbconnection
const dbConnection = require("../db/dbConfig");
const { v4: uuidv4 } = require('uuid');
async function askquestion(req, res) {
  req.body.questionid = uuidv4();
  const { userid,questionid,title, description, tag } = req.body;
  console.log(req.body);

 

  //validate with condition
  if (!title || !description) {
    return res.status(400).json({ msg: "Require to fill all the fields" });
  
  } try {
    await dbConnection.query("INSERT INTO questions(questionid,userid,title,description, tag) VALUES (?,?,?,?,?)", [questionid,userid, title, description, tag])
    return res.status(201).json({ msg: "question asked" });
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({msg:"something went wrong,try again later!"})
  
  }
}


async function allquestions(req, res) {
      try {
    const [questionid]= await dbConnection.query(`SELECT questions.*, users.username FROM questions JOIN users ON questions.userid = users.userid`)
    
        return res.status(200).send(questionid);
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({msg:"something went wrong,try again later!"})
  
      }
      
}
async function singlequestion(req, res) {
 const{id}=req.body
    try {
      var[userid]= await dbConnection.query(`SELECT * FROM questions WHERE id = ? `,[id] )
      return res.json({ SingleQuestion:userid}); 
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({msg:"something went wrong,try again later!"})
    
    }
  }
  
  module.exports = { askquestion, allquestions, singlequestion }
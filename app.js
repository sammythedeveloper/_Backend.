require("dotenv").config();
const express = require("express");
const app = express();
const port = 3500;

const cors = require("cors");

app.use(cors());

//db connection
const dbConnection = require("./db/dbConfig");

//user routes middleware file
const userRoutes = require("./routes/userRoute");

//questions routes middleware
const questionsRoutes = require("./routes/questionRoute");

//answer route middleware

const answerRoutes = require("./routes/answerRoute");

//authentication middleware

const authMiddleware = require("./middleware/authMiddleware");

// json middleware to extract jason data
app.use(express.json());

//user routes middleware
app.use("/api/users", userRoutes);

//questions routes middleware??

app.use("/api/questions", questionsRoutes);

//answer routes middleware

app.use("/api/answers",answerRoutes);



async function start() {
  try {
    const result = await dbConnection.execute("select 'test' ");
    app.listen(port);
    console.log("database connection established");
    console.log(`listening on ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();

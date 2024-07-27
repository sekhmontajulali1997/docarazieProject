import express from "express";
import colors from "colors";
import dotenv from "dotenv";

// environment varible

dotenv.config();
const PORT = process.env.PORT || 5755;
// init express
const app = express();

// create route

app.get("/", (req, res) => {
  res.status(200).json(
    [
    { name: "mon", age: 20 },
    { name: "rima", age: 20 },
    { name: "eliza", age: 20 },
    { name: "parul", age: 20 },
  ]
);
});
//listen server
app.listen(PORT, () => {
  console.log(`SERVER IS RUNIN ON ${PORT}`.bgGreen.black);
});

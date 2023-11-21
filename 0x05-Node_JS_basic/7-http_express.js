/* eslint-disable */
const express = require("express");
const countStudents = require("./3-read_file_async");
const app = express();
const PORT = 1245;

app.get("/", (req, res) => res.send("Hello Holberton School!"));
app.get("/students", async (req, res) => {
  const title = "This is the list of our students\n";
  try {
    const data = await countStudents(process.argv[2]);
    res.send(`${title}${data.join("\n")}`);
  } catch (error) {
    res.send(`${title}${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT http://localhost:${PORT}`);
});
module.exports = app;

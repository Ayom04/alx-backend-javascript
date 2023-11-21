/* eslint-disable */
const express = require("express");
import routes from "./routes/index";
const app = express();
const PORT = 1245;

routes(app);
app.listen(PORT, () => {
  console.log(`Server listening on PORT http://localhost:${PORT}`);
});

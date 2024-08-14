const app = require("./app");
const dotenv = require("dotenv");
const config = require("./src/config/config");
app.get("/", function (req, res) {
  res.send("Health root");
});
dotenv.config({ path: "../.env" });

// server listen for requests
var port = config.PORT || 8000;
app.listen(port, function () {
  console.log(`server listening to PORT: ${port}`);
});
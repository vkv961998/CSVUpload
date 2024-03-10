const mongoose = require("mongoose");
const DB =
  "mongodb+srv://keertivardhanvadrevu:vkv961998@cluster0.za2vcna.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection successful!");
  })
  .catch((err) => console.log("No connecttion " + err));
const db = mongoose.connection;
module.exports = db;

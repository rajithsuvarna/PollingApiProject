const mongoose = require("mongoose");

main().catch((err) => console.log(err));

//connecting to mongodb
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Polling_Api_Project");
}

// Code for using the cloud mongodb atlas
const connectParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//to check the mongodb connection
const db = mongoose.connection;
db.once("open", function () {
  console.log("Successfully connected to database");
});
//exportig the db
module.exports = db;

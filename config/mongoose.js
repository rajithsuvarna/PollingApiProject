const mongoose = require("mongoose");

main().catch((err) => console.log(err));

//connecting to mongodb
async function main() {
  await mongoose.connect("mongodb+srv://rajithsuvarna49:rajithsuvarna49@cluster0.akl1rbl.mongodb.net/?retryWrites=true&w=majority");
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

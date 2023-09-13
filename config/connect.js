const { default: mongoose } = require("mongoose");

mongoose.set("strictQuery", true);

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://BTProject:0000@cluster0.2fi05vl.mongodb.net/?retryWrites=true&w=majority");
    console.log("Database connected!!");
  } catch (error) {
    console.log("Database not connected!!");
  }
}

module.exports = { connect };

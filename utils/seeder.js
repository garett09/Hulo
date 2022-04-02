const Villa = require("../models/villaModel");
const dotenv = require("dotenv");
const connectDatabase = require("../config/database");

const villas = require("../data/villas");

dotenv.config({ path: "../.env" });

connectDatabase();

const seedVillas = async () => {
  try {
    await Villa.deleteMany();
    console.log("Products are deleted");

    await Villa.insertMany(villas);
    console.log("All products are added");

    process.exit();
  } catch (error) {
    console.log(error.message); //error.message
    process.exit();
  }
};
seedVillas();

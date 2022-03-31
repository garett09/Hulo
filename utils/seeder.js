const Form = require("../models/formsModel");
const dotenv = require("dotenv");
const connectDatabase = require("../config/database");

const forms = require("../data/forms");

dotenv.config({ path: "../.env" });

connectDatabase();

const seedForms = async () => {
  try {
    await Form.deleteMany();
    console.log("Products are deleted");

    await Form.insertMany(forms);
    console.log("All products are added");

    process.exit();
  } catch (error) {
    console.log(error.message); //error.message
    process.exit();
  }
};
seedForms();

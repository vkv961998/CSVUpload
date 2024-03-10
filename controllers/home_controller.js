const File = require("../models/csv.js");
module.exports.home = async function (req, res) {
  try {
    let file = await File.find({});
    return res.render("home", {
      files: file,
      title: "Home",
    });
  } catch (error) {
    console.log("Error in homeController/home", error);
    return;
  }
};

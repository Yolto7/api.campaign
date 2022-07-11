const jwt = require("jsonwebtoken");
const model = require("../models/campaign")
const helpers = {};

//MAKING THE FUNCTIONS
helpers.verifyToken = async (req, res, next) => {
  try {
    const bearer = req.headers["authorization"];
    if (!bearer) {
      return res.status(403).json({ msg: "No token provided", status: false });
    }

    const token = bearer.split(" ")[1];
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = data.id;

    const user = await model.find({ id: data.id });

    if (!user) return res.status(404).json({ data: null, msg: "No user found" });

    next();
  } 
  catch (err) {
    return res.status(400).json({ msg: err.message, status: false });
  }
};

//EXPORTING THE FUNCTIONS
module.exports = helpers;
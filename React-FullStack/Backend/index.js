var express = require("express");
var user = require("./models/users");
var mdb = require("mongoose");
var cors = require("cors");
const path = require("path");
var bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// qGIhGXDVrEiykw3W
mdb
  .connect("mongodb+srv://ajaym22cse:qGIhGXDVrEiykw3W@cluster0.kgi9n.mongodb.net/")
  .then((response) => {
    if (!response) {
      console.log("response Error");
    }
    console.log("mdb connected successfully");
  })
  .catch((err) => console.log("error in connecting to mongodb"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public\\home.html"));
});

app.post("/signup", (req, res) => {
  var { firstName, lastName, email, password } = req.body;
  console.log(req.body);
  try {
    var newUser = new user({
      firstName,
      lastName,
      email,
      password,
    });
    newUser.save();
    console.log("User Added Successfully");
    res.status(200).send("User Added Successfully");
  } catch (error) {
    console.log("error");
  }
});

app.get("/fetchdata", async (req, res) => {
  try {
    const fectdata = await user.find();
    res.status(200).json(fectdata);
  } catch (error) {
    console.log("error in the code", error);
  }
});

app.post("/addPassword/:id", async (req, res) => {
  const firstName = req.params.id;
  console.log(firstName);
  try {
    await user.findOneAndUpdate(
      { firstName: firstName },
      { $set: { password: "123456" } },
      { upsert: true }
    );
    res.status(200).send("Password field successfully");
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  var { Email, Password } = req.body;
  console.log(Email, Password);
  try {
    var existingUser = await user.findOne({ email: Email });
    if (existingUser) {
      if (existingUser.password !== Password) {
        res.status(404).json({Message : "Invalid Credentials"});
      } else {
        res
          .status(200)
          .json({ Message: "Login Successfully", isLoggedin: true,userName :existingUser.email });
      }
    } else {
      res.status(404).send("Create an Account...");
    }
  } catch (err) {
    console.log(err);
    res.status(404);
  }
});

app.listen(2020, (err) => {
  if (err) {
    console.log("Error in creating a Server");
  }
  console.log("Server is running on the port 5000");
});

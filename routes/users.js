
const router = require("express").Router();
const User = require("../Database2/user");
const CryptoJS = require("crypto-js");
// Import the jsonwebtoken library
const jwt = require("jsonwebtoken");
const verifyTokenAndAuthorization
  = require("./Verifytoken");
  
//REGISTER
router.post("/register", async (req, res) => {
  //if() condition for required username, password, email GPT
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    //password: req.body.password
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    //SAVED TO DB
    const savedUser = await newUser.save();
    //console.log(savedUser);
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });

    // Handle the case where there is no user
    !user && res.status(401).json("Wrong User Name");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    //turned into string
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    const inputPassword = req.body.password;

    // Compare passwords using strict equality
    originalPassword !== inputPassword &&
      res.status(401).json("Wrong Password");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc; //mongodb store information in document format

    //if everything is ok return success
    //res.status(200).json(user);
    //res.status(200).json({ ...others});
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGOUT
router.post("/logout", (req, res) => {
  // Set a very short expiration time for the token to effectively invalidate it
  const expiredToken = jwt.sign(
    { id: null }, // Payload with no meaningful data
    process.env.JWT_SEC,
    { expiresIn: 1 } // Token expires in 1 second
  );

  // Respond with a success message
  res.status(200).json("Logout successful");
});

module.exports = router;




// const router = require("express").Router();
// const { Sign, validate } = require("../Database2/user");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const secretKey = 'AdminKeyOrchyvufbvufbvfvjdfkvjfuvkbvibuvfibvifkvsdovvfnfubvb'; // Use a default value if not set
// router.post("/", async (req, res) => {

//     try {
//         const { error } = validate(req.body);

//         if (error) {
//             return res.status(400).send({ message: error.details[0].message });
//         }

//         const existingUser = await Sign.findOne({ email: req.body.email });

//         if (existingUser) {
//             return res.status(409).send({ message: "User with given email already exists!" });
//         }

//         const salt = await bcrypt.genSalt(Number(process.env.SALT));
//         const hashPassword = await bcrypt.hash(req.body.password, salt);

//         // Create a new user with hashed password
//         const newUser = new Sign({ ...req.body, password: hashPassword });
//         await newUser.save();

//         // Generate a token for the new user
//         const token = jwt.sign({ userId: newUser._id, email: newUser.email }, secretKey, { expiresIn: '7h' });

//         res.status(201).send({ message: "User created successfully", token });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({ message: "Internal Code Server Error" });
//     }

    // try {
    // 	const { error } = validate(req.body);
    // 	if (error)
    // 		return res.status(400).send({ message: error.details[0].message });

    // 	const user = await Sign.findOne({ email: req.body.email });
    // 	if (user)
    // 		return res
    // 			.status(409)
    // 			.send({ message: "User with given email already Exist!" });

    // 	const salt = await bcrypt.genSalt(Number(process.env.SALT));
    // 	const hashPassword = await bcrypt.hash(req.body.password, salt);
    // 	await new Sign({ ...req.body, password: hashPassword }).save();
    // 	res.status(201).send({ message: "User created successfully" });
    //     console.log(token);
    // } catch (error) {
    // 	res.status(500).send({ message: "Internal code Server Error" });
    // }
//});

//module.exports = router;
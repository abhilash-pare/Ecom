const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = 'AdminKeyOrchyvufbvufbvfvjdfkvjfuvkbvibuvfibvifkvsdovvfnfubvb'
const router = express.Router();

// User model and validation function assumed to be available
const { User, validate } = require('../Database2/user');

// Middleware to authenticate the token
// function authenticateToken(req, res, next) {
//   const token = req.header('Authorization');

//   if (!token) {
//     return res.status(401).send({ message: 'Access denied. No token provided.' });
//   }

//   jwt.verify(token, 'AdminKeyOrchyvufbvufbvfvjdfkvjfuvkbvibuvfibvifkvsdovvfnfubvb', (err, user) => {
//     if (err) {
//       return res.status(403).send({ message: 'Invalid token.' });
//     }

//     req.user = user;
//     next();
//   });
// }

// Login route
// 


// router.post("/", async (req, res) => {
// 	try {
// 	  const user = await User.findOne({
// 		email: req.body.email,
// 	  });
// 	  // Handle the case where there is no user
// 	  !user && res.status(401).json("Wrong User Name");
// 	  const hashedPassword = CryptoJS.AES.decrypt(
// 		user.password,
// 		//process.env.PASS_SEC
// 	  );
// 	  //turned into string
// 	  const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
// 	  const inputPassword = req.body.password;
// 	  // Compare passwords using strict equality
// 	  originalPassword !== inputPassword &&
// 		res.status(401).json("Wrong Password");
// 	  const accessToken = jwt.sign(
// 		{
// 		  id: user._id,
// 		  //isAdmin: user.isAdmin,
// 		},
// 		secretKey,
// 		{ expiresIn: "7d" }
// 	  );
// 	  const { password, ...others } = user._doc; //mongodb store information in document format
// 	  //if everything is ok return success
// 	  //res.status(200).json(user);
// 	  //res.status(200).json({ ...others});
// 	  res.status(200).json({ ...others, accessToken });
// 	} catch (err) {
// 	  res.status(500).json(err);
// 	}
//   });


// router.post("/", async (req, res) => {
//     try {
//         const { error } = validate(req.body.email);

//         if (error) {
//             return res.status(400).send({ message: error.details[0].message });
//         }

//         const existingUser = await Sign.findOne({ email: req.body.email });

//         if (!existingUser) {
//             return res.status(401).send({ message: "Invalid Email or Password" });
//         }

//         const validPassword = await bcrypt.compare(req.body.password, existingUser.password);

//         if (!validPassword) {
//             return res.status(401).send({ message: "Invalid Email or Password" });
//         }

//         // If login is successful, generate a token
//         const token = jwt.sign({ userId: existingUser._id, email: existingUser.email }, secretKey, { expiresIn: '7h' });

//         res.setHeader('Content-Type', 'application/json');
//         res.status(200).send({ data: token, message: "Logged in successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({ message: "Internal Code Server Error" });
//     }
// });




router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body.email);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = user.generateAuthToken();
		res.setHeader('Content-Type', 'application/json');
		res.status(200).send({ data: token, message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

// const validate = (data) => {
// 	const schema = Joi.object({
// 		email: Joi.string().email().required().label("Email"),
// 		password: Joi.string().required().label("Password"),
// 	});
// 	return schema.validate(data);
// };


module.exports = router;

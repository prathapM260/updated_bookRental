const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config(); // Load environment variables




// // Function to register a new user
// exports.signUp = async (req, res) => {
//   const { username,name, email, password,phonenumber } = req.body;
//   console.log("checkkkkkkkkkkkkkkk");

//   try {
//     // Check if user with the same email or username already exists
//     let user = await User.findOne({ $or: [{ email }, { username }] });
//     if (user) {
//       return res.status(400).json({ msg: 'User already exists' });
//     }

//     // Create new user instance
//     user = new User({ username, name, email, password, phonenumber });

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(password, salt);

//     // Save user to database
//     await user.save();

//     res.status(201).json({ msg: 'User registered successfully' });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// };




exports.signUp = async (req, res) => {
  const { username, name, email, password, phonenumber,role, designations } = req.body;

  try {
    // Check if user with the same email or username already exists
    let user = await User.findOne({ $or: [{ email }, { username }] });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create new user instance
    user = new User({ username, name, email, password, phonenumber,role, designations });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save user to database
    await user.save();

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
// Function to authenticate user and generate JWT token


exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  console.log("check",email,password);

  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter both email and password' });
  }

  try {
    let user = await User.findOne({ email });
    console.log('User found:', user); // Log the user object

    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(`Password match: ${isMatch}`); // Log the password match result

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = {
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) {
          console.error(err.message);
          return res.status(500).send('Server Error');
        }
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};



// Function to get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Retrieves all fields of each user
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

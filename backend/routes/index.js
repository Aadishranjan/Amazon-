const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userModel = require('./db/user.js')
const productModel = require('./db/product.js')
 

const SECRET_KEY = process.env.JWT_SECRET;


//router
router.get('/getProduct', async (req, res) => {
  const product = await productModel.find();
  res.send({product})
});

router.get('/product/:id', async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
})

function getEmailFromToken(req) {
  const token = req.headers.authorization;

  if (token) {
    try {
      const decoded = jwt.verify(token, SECRET_KEY); 
      const email = decoded.email; 
      return email;
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  }

  return null;
}

router.get('/profile', async (req, res) => {
  const email = getEmailFromToken(req);
  const existingUser = await userModel.findOne({ email: email });
  res.json(existingUser)
})

//post router
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  const existingUser = await userModel.findOne({ email: email });
    if (!existingUser) {
      return res.json('Email not found');
    }

    // Verify password
    const isPasswordValid = await existingUser.comparePassword(password);
    if (!isPasswordValid) {
      return res.json('Invalid password');
    }
    
    const token = jwt.sign({ email: existingUser.email }, SECRET_KEY, { expiresIn: '10d' });
    return res.json({ message:'successful', token});
})

router.post('/signup', async (req, res) => {
  
  const { email, fullname, password } = req.body;
  const existingUser = await userModel.findOne({ email: email });
  
  if (existingUser) {
      return res.json('Email already exists');
    }
  else{
    const newUser = new userModel({ email, fullname, password });
    await newUser.save();
    res.json('success')
  }

});

router.post('/card/add', async (req, res) => {
  const { productId } = req.body;
  const token = req
  
  const email = getEmailFromToken(token);
  const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }


    if (user.card.includes(productId)) {
      return res.json('Product is already in the card');
    }

    user.card.push(productId);
    await user.save();

    return res.json('success');
});

router.get('/card', async (req, res) => {
    const token = req; 
    const email = getEmailFromToken(token);
    const user = await userModel.findOne({ email: email }).populate('card');
    
    const product = user.card
    return res.json({ product });
});



module.exports = router;
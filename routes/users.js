var express = require('express');
var router = express.Router();
const productModel = require("./../models/Product");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/cart", async (req, res, next) =>{

  if(req.session.userCart)
  {
  req.session.userCart.push(req.body);
   } 
   else
   {
    req.session.userCart =[]
    req.session.userCart.push(req.body);
  }
  const cart = req.session.userCart;
  console.log("cart>>>", cart);
  let total = 0;

cart.forEach( (productInfo) => {
  let productPrice = Number(productInfo.price);
  let productQuantity = Number(productInfo.quantity);

const subtotal = productPrice*productQuantity;
productInfo.subtotal = subtotal;
total +=subtotal;
  console.log("cart>>>", cart);

})
  res.render("cart", {cart, total})
});

router.get("/cart", async (req, res, next) => {
  try {
       const cart = req.session.userCart; 
    res.render("cart", {cart});
  } catch (error) {
    next(error)
  }
})

router.get("/cart/delete/:id", async (req, res, next) => {
  try {
   const cart = req.session.userCart; 
   const isProductId = (productInfo) => {
     productInfo.id === req.params.id;
   }
   const productIndex = cart.findIndex(isProductId);
    cart.splice(productIndex,1);
    res.redirect("/user/cart");
  } catch (error) {
    next(error);
  }
});

router.get("/cart/update/:id", async (req,res,next) => {
  try {
  let cart = req.session.userCart; 

   const isProductId = (productInfo) => {
     return productInfo.id === req.params.id;   }
   cart.findIndex(isProductId);
   const productIndex = cart.findIndex(isProductId);

   cart[productIndex].quantity = req.query.quantity;
  console.log("this is the new cart>>>", cart);

  let total = 0;

  cart.forEach( (productInfo) => {
    let productPrice = Number(productInfo.price);
    let productQuantity = Number(productInfo.quantity);
  
  const subtotal = productPrice*productQuantity;
  productInfo.subtotal = subtotal;
  total +=subtotal;
    console.log("cart>>>", cart);
  })

res.render("cart", {cart, total});
  }
  catch (error) {
    next(error);
  }
})

module.exports = router;

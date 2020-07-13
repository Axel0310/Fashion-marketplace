const mongoose = require("mongoose");
const { timeStamp } = require("console");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    description: String,
    quantityAvailable: Number,
    price: Number,
    image: {
        type: String,
        deault: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.maslonline.org%2Fstore%2FListProducts.aspx%3Fcatid%3D64531%26ftr%3D%26view_type%3D0&psig=AOvVaw1F-qZED9TE3s2sSfCNFlXe&ust=1594735295194000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCR_YeyyuoCFQAAAAAdAAAAABAE"
    },
    view: {
        type: Number,
        default: 0
    },
    sellscount: {
        type: Number,
        default: 0
    },
    genre: {
        type: String,
        enum: ["men", "women"]
    },
    category: {
        type: String,
        enum: ["Coats & Jackets", "Dresses", "Sweatshirts","Jeans","Jumpsuits","Shorts","Skirts","Suits","Swimwear","Tops", "Tracksuits","Trousers","Workwear","Lingerie"]
    },
    size : {
        type: String,
        enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL"]
    },
})

const productModel = mongoose.model("Product", productSchema);

module.exports = productSchema;
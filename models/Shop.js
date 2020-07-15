const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    image: {
        type: String,
        default: "/images/default_product.png"
    },
    description: String,
    view: {
        type: Number,
        default: 0
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }],
    totalSales: {
        type: Number,
        default: 0
    },
    creationDate: {
        type : Date,
        default:Date.now,
}
})

const shopModel = mongoose.model("Shop", shopSchema);

module.exports = shopModel;
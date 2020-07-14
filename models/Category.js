const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema ({
    genre: {
        type: [String],
        enum: ["Men", "Women"]
    },
    name: String,
})

const categoryModel = mongoose.model("Category", categorySchema);

module.exports = categoryModel;
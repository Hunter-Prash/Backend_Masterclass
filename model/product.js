const mongoose = require('mongoose');
const { Schema } = mongoose;


// ex Schema is like a configuration for every document in a collection
const productSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String]
  });
  
exports. Product = mongoose.model('Product',productSchema);
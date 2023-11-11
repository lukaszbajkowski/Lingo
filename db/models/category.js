const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  icon: {
    type: String, // lub Enum, jeśli chcesz ograniczyć wybór do konkretnych ikon
    required: true,
  },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

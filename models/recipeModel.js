const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new mongoose.Schema(
  {
    // _id: {       // można usunąć tę część i pozwolić MongoDB na utworzenie _id automatycznie.
    //   type: Schema.Types.ObjectId,
    //   required: true,
    // },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumb: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    favorites: {
      type: [Schema.Types.ObjectId],
      default: [],
    },
    youtube: {
      type: String,
    },
    tags: {
      type: [String],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    ingredients: {
      type: [ingredientSchema],
      required: true,
    },
  },
  { versionKey: false }
);

const Recipe = mongoose.model("Contact", recipeSchema);

module.exports = Recipe;

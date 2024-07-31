const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientSchema = new mongoose.Schema(
  {
    // _id: {       // można usunąć tę część i pozwolić MongoDB na utworzenie _id automatycznie.
    //   type: Schema.Types.ObjectId,
    //   required: true,
    // },
    ttl: {
      type: String,
      required: true, // Zakładam, że tytuł składnika jest wymagany
    },
    desc: {
      type: String,
      required: true, // Zakładam, że opis składnika jest wymagany
    },
    t: {
      type: String,
      default: "", // Domyślnie pusty, jeśli brak wartości
    },
    thb: {
      type: String,
      required: true, // URL do miniaturki jest wymagany
    },
  },
  {
    timestamps: true, // Opcjonalnie, jeśli chcemy automatycznie dodać createdAt i updatedAt
  }
);

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient;

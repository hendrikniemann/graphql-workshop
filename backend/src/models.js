import mongoose from "mongoose";

export const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["DOG", "CAT", "RABBIT"],
    required: true,
  },
  adopted: {
    type: Boolean,
    required: true,
  },
  picture: String,
  breed: String,
  height: Number,
});

export const PetModel = mongoose.model("Pet", PetSchema);

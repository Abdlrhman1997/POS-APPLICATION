import { Schema, model } from "mongoose";

const drinkSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      //   required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const drinkModel = model("drink", drinkSchema);

export default drinkModel;

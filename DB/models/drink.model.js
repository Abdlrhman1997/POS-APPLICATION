import { Schema, model } from "mongoose";

const userSchema = new Schema(
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
  },
  { timestamps: true }
);

const userModel = model("drink", drinkSchema);

export default userModel;

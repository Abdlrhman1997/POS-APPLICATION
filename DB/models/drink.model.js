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
      enum: [
        "الاسموزي",
        "مشروبات ساخنة",
        "العصائر الفريش",
        "الكوكتيلات",
        "الزبادو",
        "مشروبات غازية",
        "ميلك شيك",
        "ايس كوفي",
        "اضافات",
        "الفرابتشينو",
        "Hot Flavor اضافة",
        "Desert",
      ],
    },
  },
  { timestamps: true }
);

const drinkModel = model("drink", drinkSchema);

export default drinkModel;

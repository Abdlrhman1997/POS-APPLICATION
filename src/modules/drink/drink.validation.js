import joi from "joi";

export const updateDrink = {
  body: joi
    .object({
      // name: joi.string().min(3).max(25).required(),
      price: joi.number().integer().min(5).max(120).required(),
      // image: joi.string(),
      // .required(),
    })
    .required(),
};

import mongoose from "mongoose";

const dbConnection = async () => {
  await mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log(`DB connected !`))
    .catch((err) => console.log(`DB failed to connect ${err}`));
};

export default dbConnection;

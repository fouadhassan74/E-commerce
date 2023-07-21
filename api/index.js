const express = require("express");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const orderRoute = require("./routes/order");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors);
// Database Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/ecoomerce")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log(`The error is ${e}`);
  });
// Rouets
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/order", orderRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/checkout", stripeRoute);

app.listen(9900, () => console.log("Backend Server is Working"));

const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      products: [
        {
          productId: {
            type: String,
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
      address: { type: Object, required: true },
      amount: { type: Number, required: true },
      status: { type: String, default: "pendding" },
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", OrderSchema);

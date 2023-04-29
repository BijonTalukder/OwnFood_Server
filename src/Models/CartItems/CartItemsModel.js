const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    customerID: { type: mongoose.Schema.Types.ObjectId },
    cartItem: { type: Array },
    foodTotalPrice: { type: Number },
    status: { type: Boolean },
    createdBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: String },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const CartItemsModel = mongoose.model("cartitems", DataSchema);
module.exports = CartItemsModel;

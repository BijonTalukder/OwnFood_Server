const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    orderDeliveryAddressID: { type: mongoose.Schema.Types.ObjectId }, //!from addressBook
    orderBillingAddressID: { type: mongoose.Schema.Types.ObjectId }, //!from addressbook
    // orderStatusID: { type: mongoose.Schema.Types.ObjectId }, //!orderStatus
    customerID: { type: mongoose.Schema.Types.ObjectId },
    transactionID:{type:String},
    OrderLabel: { type: String }, // INSTANT, PREORDER, WISH, CATERING
    sellerID: { type: mongoose.Schema.Types.ObjectId },
    orderStatus:{type:Boolean},
    orderDeliveryAddress: { type: String },
    orderBillingAddress: { type: String },
    orderNumber: { type: String },
    orderNotes: { type: String },
    orderTotalAmount: { type: Number },
    orderDate: { type: Date, default: Date.now() },

    paymentDate: { type: Date, default: Date.now() },
    orderItems: {type:Array},
    paymentType: { type: String },
  },
  { versionKey: false }
);

const OrdersModel = mongoose.model("orders", DataSchema);
module.exports = OrdersModel;

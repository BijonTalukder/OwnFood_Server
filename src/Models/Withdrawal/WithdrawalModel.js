const mongoose = require("mongoose");

const transactionDetailsSchema = mongoose.Schema({
  bankTransactionID: { type: String },
  fromBankName: { type: String },
  fromAccountNo: { type: String },
  toBankName: { type: String },
  toBankAccountNo: { type: String },
  amount: { type: Number },
  bankTransactionDate: { type: Date },
  currency: { type: String },
});

const DataSchema = mongoose.Schema(
  {
    withdrwalAmount: { type: Number, required: true },
    balanceDuringWithrawal: { type: Number, required: true },
    bankAccountDetails: { type: Array },
    transactionDetails: [transactionDetailsSchema],
    currency: { type: String },
    rejectReasons: { type: Array },
    status: { type: Number, default: 0 },
    completedDate: { type: Date },
    createdBy: { type: mongoose.Schema.Types.ObjectId },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: mongoose.Schema.Types.ObjectId },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const WithdrawalModel = mongoose.model("withdrawal", DataSchema);
module.exports = WithdrawalModel;

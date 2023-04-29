const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    bankName: { type: String, required: true, unique: true },
    bankLogo: { type: String },
    countryID: { type: mongoose.Schema.Types.ObjectId, required: true },
    countryName: { type: String },
    status: { type: Boolean },
    createdBy: { type: mongoose.Schema.Types.ObjectId },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: mongoose.Schema.Types.ObjectId },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const BankListModel = mongoose.model("bankList", DataSchema);
module.exports = BankListModel;

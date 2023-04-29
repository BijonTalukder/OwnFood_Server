const BankListModel = require("../../Models/BankList/BankListModel");
const CreateBankService = require("../../Services/BankList/CreateBankService");
const GetBankListService = require("../../Services/BankList/GetBankListService");
const GetSingleBankService = require("../../Services/BankList/GetSingleBankService");
const DeleteBankService = require("../../Services/BankList/DeleteBankService");
const UpdateBankService = require("../../Services/BankList/UpdateBankService");

//! Create Bank
exports.CreateBank = async (req, res) => {
  let result = await CreateBankService(req, BankListModel);
  res.status(200).json(result);
};

//! Get BankList
exports.GetBankList = async (req, res) => {
  let result = await GetBankListService(req, BankListModel);
  res.status(200).json(result);
};
//! Get single Bank
exports.GetSingleBank = async (req, res) => {
  let result = await GetSingleBankService(req, BankListModel);
  res.status(200).json(result);
};

//! Delete Bank
exports.DeleteBank = async (req, res) => {
  let result = await DeleteBankService(req, BankListModel);
  res.status(200).json(result);
};

//! Update Country
exports.UpdateBank = async (req, res) => {
  let result = await UpdateBankService(req, BankListModel);
  res.status(200).json(result);
};

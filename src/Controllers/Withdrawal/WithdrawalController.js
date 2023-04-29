const WithdrawalModel = require("../../Models/Withdrawal/WithdrawalModel");
const CreateWithdrawalService = require("../../Services/Withdrawal/CreateWithdrawalService");
const GetWithdrawalService = require("../../Services/Withdrawal/GetWithdrawalService");
const GetSingleWithdrawalService = require("../../Services/Withdrawal/GetSingleWithdrawalService");
const DeleteWithdrawalService = require("../../Services/Withdrawal/DeleteWithdrawalService");
const UpdateWithdrawalService = require("../../Services/Withdrawal/UpdateWithdrawalService");

//! Create Withdrawal
exports.CreateWithdrawal = async (req, res) => {
  let result = await CreateWithdrawalService(req, WithdrawalModel);
  res.status(200).json(result);
};

//! Get Withdrawal
exports.GetWithdrawal = async (req, res) => {
  let result = await GetWithdrawalService(req, WithdrawalModel);
  res.status(200).json(result);
};
//! Get single Withdrawal
exports.GetSingleWithdrawal = async (req, res) => {
  let result = await GetSingleWithdrawalService(req, WithdrawalModel);
  res.status(200).json(result);
};

//! Delete Withdrawal
exports.DeleteWithdrawal = async (req, res) => {
  let result = await DeleteWithdrawalService(req, WithdrawalModel);
  res.status(200).json(result);
};

//! Update Country
exports.UpdateWithdrawal = async (req, res) => {
  let result = await UpdateWithdrawalService(req, WithdrawalModel);
  res.status(200).json(result);
};

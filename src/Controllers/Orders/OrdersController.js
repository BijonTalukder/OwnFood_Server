const OrdersModel = require("../../Models/Orders/OrdersModel");
const CreateOrdersService = require("../../Services/Orders/CreateOrdersService");
const DeleteOrdersService = require("../../Services/Orders/DeleteOrdersService");
const GetOrderBySingleBuyerService = require("../../Services/Orders/GetOrderBySingleBuyerService");
const GetOrderBySingleSellerService = require("../../Services/Orders/GetOrderBySingleSellerService");
const GetOrderBySingleSellerWithTypeService = require("../../Services/Orders/GetOrderBySingleSellerWithTypeService");
const GetOrderByTransactionIDService = require("../../Services/Orders/GetOrderByTransactionIDService");
const GetOrderTrackingByOrderService = require("../../Services/Orders/GetOrderTrackingByOrderService");
const GetOrdersService = require("../../Services/Orders/GetOrdersService");
const GetSingleOrdersService = require("../../Services/Orders/GetSingleOrdersService");
const UpdateOrdersService = require("../../Services/Orders/UpdateOrdersService");

//! Create Orders
exports.CreateOrders = async (req, res) => {
  let result = await CreateOrdersService(req, OrdersModel);
  res.status(200).json(result);
};

//! Get Orders
exports.GetOrders = async (req, res) => {
  let result = await GetOrdersService(req, OrdersModel);
  res.status(200).json(result);
};
//! Get single Orders
exports.GetSingleOrders = async (req, res) => {
  let result = await GetSingleOrdersService(req, OrdersModel);
  res.status(200).json(result);
};

//! Update Orders
exports.UpdateOrders = async (req, res) => {
  let result = await UpdateOrdersService(req, OrdersModel);
  res.status(200).json(result);
};

//! Delete Orders
exports.DeleteOrders = async (req, res) => {
  let result = await DeleteOrdersService(req, OrdersModel);
  res.status(200).json(result);
};

//! get order by single seller
exports.GetOrderBySingleSeller = async (req, res) => {
  let result = await GetOrderBySingleSellerService(req, OrdersModel);
  res.status(200).json(result);
};

//!get order by single buyer
exports.GetOrderBySingleBuyer = async (req, res) => {
  let result = await GetOrderBySingleBuyerService(req, OrdersModel);
  res.status(200).json(result);
};

//!get order by single seller with type
exports.GetOrderBySingleSellerWithType = async (req, res) => {
  let result = await GetOrderBySingleSellerWithTypeService(req, OrdersModel);
  res.status(200).json(result);
};
//!get order tracking by orders
exports.GetOrderTrackingByOrder = async (req, res) => {
  let result = await GetOrderTrackingByOrderService(req, OrdersModel);
  res.status(200).json(result);
};

//!get order by transaction id
exports.GetOrderByTransactionID = async (req,res)=>{
  let result = await GetOrderByTransactionIDService(req,OrdersModel);
  res.status(200).json(result);
}

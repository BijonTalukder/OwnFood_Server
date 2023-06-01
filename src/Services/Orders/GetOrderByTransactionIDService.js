const mongoose = require("mongoose");
const GetOrderByTransactionIDService = async (request, Model) => {
  try {
    let id = request.params.id;
    let data = await Model.aggregate([
      {
        $match: { transactionID: id },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetOrderByTransactionIDService;
